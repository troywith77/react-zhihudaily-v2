import React from 'react';
import URI from 'urijs'

import DocumentTitle from '~/containers/DocumentTitle/DocumentTitle';
import NormalStory from '~/components/NormalStory/NormalStory';
import ThemeStory from '~/components/ThemeStory/ThemeStory';
import { convertImageSrc } from '~/services/utils';

import './StoryStyle';

class Story extends React.Component {
  state = {
    data: {}
  };

  componentWillMount () {
    this.setState({
      ...this.props,
      data: {
        ...this.props.data,
        body: processHtml(this.props.data.body)
      }
    })
  }

  componentDidMount () {
    this.intersectionObserver = new IntersectionObserver(function(entries) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio <= 0) return;
        entry.target.setAttribute('src', entry.target.getAttribute('data-src'));
      })
    }, {
      rootMargin: '10%'
    });
    this.images = document.querySelectorAll('.story-content img');
    this.images.forEach((ele) => {
      const clientHeight = document.documentElement.clientHeight;
      if (ele.getBoundingClientRect().top < clientHeight) {
        ele.setAttribute('src', ele.getAttribute('data-src'));
      }
      this.intersectionObserver.observe(ele);
    })
  }

  shouldComponentUpdate () {
    return false
  }

  componentWillUnmount () {
    this.images.forEach((ele) => {
      this.intersectionObserver.unobserve(ele);
    });
  }

  render () {
    const { type, data: { title } } = this.state;
    let element;
    if (type === 'theme') element = <ThemeStory state={this.state} />;
    if (type === 'story') element = <NormalStory state={this.state} />;
    return (
      <DocumentTitle
        title={title}
        render={() => element}
      />
    )
  }
}

export default Story;

const processHtml = (body) => {
  const element = document.createElement('div');
  element.innerHTML = body;
  Array.from(element.querySelectorAll('img')).forEach((img) => {
    img.setAttribute('alt', img.getAttribute('src'));
    img.setAttribute('data-src', convertImageSrc(img.getAttribute('src')));
    img.setAttribute('src', 'https://via.placeholder.com/500x300?text=loading...');
  });
  Array.from(element.querySelectorAll('a')).forEach((link) => {
    const href = link.getAttribute('href');
    const uri = URI(href);
    const segment = uri.segment();
    link.setAttribute('target', '_blank');
    if (href.indexOf('daily.zhihu.com/story') > -1) {
      const id = segment.slice(-1);
      link.setAttribute('href', `/story/${id}`)
    }
  });
  Array.from(element.querySelectorAll('br')).forEach((br) => {
    br.parentNode.removeChild(br);
  });
  return element.innerHTML;
}
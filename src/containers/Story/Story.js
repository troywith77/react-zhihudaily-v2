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

  shouldComponentUpdate () {
    return false
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
    img.setAttribute('src', convertImageSrc(img.getAttribute('src')));
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
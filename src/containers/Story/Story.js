import React from 'react';
import { getStory, getStoryLongComments, getStoryShortComments } from '~/services/api';
import { convertImageSrc } from '~/services/utils';
import './StoryStyle';

class Story extends React.Component {
  state = {
    fetching: true,
    data: {},
    shortComments: [],
    longComments: []
  }

  processHtml = (body) => {
    const element = document.createElement('div');
    element.innerHTML = body;
    Array.from(element.querySelectorAll('img')).forEach((img) => {
      img.setAttribute('alt', img.getAttribute('src'));
      img.setAttribute('src', convertImageSrc(img.getAttribute('src')));
    });
    Array.from(element.querySelectorAll('a')).forEach((link) => {
      link.setAttribute('target', '_blank');
    });
    Array.from(element.querySelectorAll('br')).forEach((br) => {
      br.parentNode.removeChild(br);
    });
    return element.innerHTML;
  }

  getStory = () => {
    getStory(this.props.id).then((res) => {
      const body = this.processHtml(res.data.body);
      const data = {
        ...res.data,
        body
      };
      this.setState({
        data,
        fetching: false,
        type: data.theme ? 'theme' : 'story'
      });
    });
  }

  getStoryLongComments = () => {
    getStoryLongComments(this.props.id).then((res) => {
      this.setState({ longComments: res.data.comments });
    })
  }

  getStoryShortComments = () => {
    getStoryShortComments(this.props.id).then((res) => {
      this.setState({ shortComments: res.data.comments });
    })
  }

  componentDidMount () {
    this.getStory();
    this.getStoryLongComments();
    this.getStoryShortComments();
  }

  render () {
    return this.props.render(this.state);
  }
}

export default Story;
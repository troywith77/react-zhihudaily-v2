import React from 'react';
import { getNews } from '~/services/api';
import './StoryStyle';

class Story extends React.Component {
  state = {
    data: {}
  }

  processHtml = (body) => {
    const element = document.createElement('div')
    element.innerHTML = body
    Array.from(element.querySelectorAll('img')).forEach((img) => {
      img.setAttribute('alt', img.getAttribute('src'))
      img.setAttribute('src', `/image?url=${img.getAttribute('src')}`)
    })
    Array.from(element.querySelectorAll('a')).forEach((link) => {
      link.setAttribute('target', '_blank')
    })
    Array.from(element.querySelectorAll('br')).forEach((br) => {
      br.parentNode.removeChild(br);
    })
    return element.innerHTML
  }

  componentDidMount () {
    getNews(this.props.id).then((res) => {
      const body = this.processHtml(res.data.body)
      const data = {
        ...res.data,
        body
      }
      this.setState({
        data,
        type: data.theme ? 'theme' : 'story'
      })
    })
  }

  render () {
    return this.props.render(this.state);
  }
}

export default Story;
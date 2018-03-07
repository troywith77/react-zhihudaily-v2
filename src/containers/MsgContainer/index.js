import React, { Component } from 'react';
import axios from 'axios';
import './style.scss';

class MsgContainer extends Component {
  state = {
    data: {
      body: ''
    }
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
    return element.innerHTML
  }
  
  componentDidMount () {
    axios.get(`/api/4/news/${this.props.match.params.id}`).then((res) => {
      console.log(res.data)
      const body = this.processHtml(res.data.body)
      const data = {
        ...res.data,
        body
      }
      this.setState({
        data
      })
    })
  }
  
  render () {
    const { data } = this.state
    return (
      <div className="msg-container">
        <h1>{data.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: data.body }}></article>
      </div>
    )
  }
}

export default MsgContainer
import React, { Component } from 'react';
import { getNews } from '../../services/api';
import './style.scss';

class MsgContainer extends Component {
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
    return element.innerHTML
  }

  componentDidMount () {
    getNews(this.props.match.params.id).then((res) => {
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
        {
          data.image && (
            <figure className="background">
              <img src={`/image?url=${data.image}`} alt={data.title} />
              <p>来源：{data.image_source}</p>
            </figure>
          )
        }
        <h1>{data.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: data.body }}></article>
      </div>
    )
  }
}

export default MsgContainer
import React, { Component } from 'react';
import axios from 'axios';
import MsgList from '../components/MsgList';

export default class HomeMsgContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stories: [],
      topStories: []
    }
  }
  componentDidMount() {
    axios.get('/api/4/news/latest').then((res) => {
      console.log(res.data.stories);
      this.setState({
        stories: res.data.stories,
        topStories: res.data.top_stories
      })
    })
  }
  render() {
    return (
      <div>
        <MsgList stories={this.state.stories} />
      </div>
    )
  }
}
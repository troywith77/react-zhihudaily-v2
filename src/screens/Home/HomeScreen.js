import React, { Component } from 'react';
import { getLatestStories } from '../../services/api';
import StoryList from '../../components/StoryList/StoryList';

export default class HomeMsgContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stories: [],
      topStories: []
    }
  }
  componentDidMount() {
    getLatestStories().then((res) => {
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
        <StoryList stories={this.state.stories} />
      </div>
    )
  }
}
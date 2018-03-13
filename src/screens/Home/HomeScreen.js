import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoryList from '../../components/StoryList/StoryList';
import { fetchLatestStories } from '~/actions';

class HomeMsgContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stories: [],
      topStories: []
    }
  }
  componentDidMount() {
    this.props.dispatch(fetchLatestStories())
  }
  render() {
    return (
      <div>
        <StoryList stories={this.props.stories} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  stories: state.stories.stories
})

export default connect(mapStateToProps)(HomeMsgContainer);
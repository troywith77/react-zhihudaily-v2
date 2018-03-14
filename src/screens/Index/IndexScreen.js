import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoryList from '../../components/StoryList/StoryList';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import { fetchLatestStories, fetchStoriesBefore } from '~/actions';

class HomeMsgContainer extends Component {
  handleLoadStoriesBefore = () => {
    const { dispatch, date } = this.props;
    dispatch(fetchStoriesBefore(date));
  }

  componentDidMount() {
    this.props.dispatch(fetchLatestStories());
  }

  render() {
    const { latestStories, storiesBefore, fetching } = this.props;
    return (
      <div>
        <StoryList stories={latestStories} header="今天" />
        {
          storiesBefore.map((stories) => (
            <StoryList stories={stories.stories} header={stories.date} key={stories.date} />
          ))
        }
        {
          latestStories.length ? (
            <LoadMoreButton fetching={fetching} onClick={this.handleLoadStoriesBefore} />
          ) : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  latestStories: state.stories.latestStories,
  storiesBefore: state.stories.storiesBefore,
  date: state.stories.date,
  fetching: state.stories.fetching
})

export default connect(mapStateToProps)(HomeMsgContainer);
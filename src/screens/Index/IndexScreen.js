import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopStories from '../../components/TopStories/TopStories';
import StoryList from '../../components/StoryList/StoryList';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import Loading from '../../components/Loading/Loading';
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
    const { topStories, latestStories, storiesBefore, fetching } = this.props;
    return (
      <div>
        <TopStories stories={topStories} />
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
        {
          fetching ? <Loading /> : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  topStories: state.stories.topStories,
  latestStories: state.stories.latestStories,
  storiesBefore: state.stories.storiesBefore,
  date: state.stories.date,
  fetching: state.stories.fetching
})

export default connect(mapStateToProps)(HomeMsgContainer);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TopStories from '../../components/TopStories/TopStories';
import StoryList from '../../components/StoryList/StoryList';
import LoadMore from '../../components/LoadMore/LoadMore';
import Loading from '../../components/Loading/Loading';
import * as ActionsCreators from '~/actions';

class HomeMsgContainer extends Component {
  handleLoadStoriesBefore = () => {
    const { actions, date } = this.props;
    actions.fetchStoriesBefore(date);
  }

  componentDidMount() {
    this.props.actions.fetchLatestStories();
  }

  render() {
    const { topStories, latestStories, storiesBefore, fetching } = this.props;
    return (
      <div>
        <TopStories stories={topStories} />
        {
          latestStories.length ? <StoryList stories={latestStories} header="今天" /> : null 
        }
        {
          storiesBefore.map((stories) => (
            <StoryList stories={stories.stories} header={stories.date} key={stories.date} />
          ))
        }
        <LoadMore fetching={fetching} onClick={this.handleLoadStoriesBefore} />
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionsCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeMsgContainer);
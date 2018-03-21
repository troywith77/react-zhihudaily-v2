import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DocumentTitle from '~/containers/DocumentTitle/DocumentTitle';
import TopStories from '~/components/TopStories/TopStories';
import StoryList from '~/components/StoryList/StoryList';
import LoadMore from '~/components/LoadMore/LoadMore';
import Loading from '~/components/Loading/Loading';
import * as ActionsCreators from '~/actions';

import './IndexScreenStyle';

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
    const storiesBeforeList = storiesBefore.map((stories) => (
      <StoryList stories={stories.stories} header={stories.date} key={stories.date} />
    ))
    return (
      <DocumentTitle
        title='Just Story'
        render={() => (
          <div>
            <TopStories stories={topStories} />
            <StoryList stories={latestStories} header="今天" />
            {storiesBeforeList}
            <div style={{ margin: '15px 0' }}>
              <LoadMore fetching={fetching} onClick={this.handleLoadStoriesBefore} />
              <Loading loading={fetching} />
            </div>
          </div>
        )}
      />
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
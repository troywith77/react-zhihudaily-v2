import React from 'react';
import List, { ListSubheader } from 'material-ui/List';
import { withRouter } from 'react-router-dom';
import StoryListItem from '../StoryListItem/StoryListItem';

import './StoryListStyle';

class StoryList extends React.Component {
  handleRouteChange = (id) => {
    // 等待 material list 点击效果结果再跳转，看起来比较舒服
    setTimeout(() => {
      this.props.history.push(`/story/${id}`)
    }, 300)
  }

  render () {
    const { stories, header } = this.props;
    if (!stories.length) return null;
    return (
      <div className="story-list">
        <List subheader={<ListSubheader component="div" className="list-subheader">{header}</ListSubheader>}>
          {
            stories.map((story) => <StoryListItem key={story.id} story={story} onClick={this.handleRouteChange} />)
          }
        </List>
      </div>
    )
  }
}

export default withRouter(StoryList);

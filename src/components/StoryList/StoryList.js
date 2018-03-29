import React from 'react';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { withRouter } from 'react-router-dom';

import { convertImageSrc } from '~/services/utils';
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
            stories.map((story) => {
              const path = (story.images && story.images[0]) || story.image
              let imgSrc
              if (path) imgSrc = convertImageSrc(path);
              return (
                <ListItem key={story.id} button onClick={() => this.handleRouteChange(story.id)}>
                  {
                    imgSrc && (
                    <ListItemAvatar>
                      <Avatar alt={story.title} src={imgSrc} />
                    </ListItemAvatar>
                    )
                  }
                  <ListItemText
                    primary={story.title}
                  />
                </ListItem>
              )
            })
          }
        </List>
      </div>
    )
  }
}

export default withRouter(StoryList);

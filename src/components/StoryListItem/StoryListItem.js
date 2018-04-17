import React from 'react';
import { connect } from 'react-redux';
import {
  ListItem,
  ListItemAvatar,
  ListItemText
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { convertStoryImageSrc } from '~/services/utils';
import { fetchStoryExtra } from '~/actions';

class StoryListItem extends React.Component {
  state = {
    extra: null
  }

  componentDidMount () {
    const { dispatch, story } = this.props;
    dispatch(
      fetchStoryExtra(story.id)
    );
  }

  render () {
    const { story, onClick } = this.props;
    const { id, title, extra } = story;
    let imgSrc = convertStoryImageSrc(story);
    return (
      <ListItem key={id} button onClick={() => onClick(id)}>
        {
          imgSrc && (
          <ListItemAvatar>
            <Avatar alt={title} src={imgSrc} />
          </ListItemAvatar>
          )
        }
        <ListItemText
          primary={title}
          secondary={extra && `评论：${extra.comments} | 热度：${extra.popularity}`}
        />
      </ListItem>
    )
  }
};

export default connect()(StoryListItem);

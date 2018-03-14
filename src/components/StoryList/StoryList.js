import React from 'react';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { Link } from 'react-router-dom';

import './StoryListStyle';

export default function StoryList ({
  stories,
  header
}) {
  return (
    <div className="story-list">
      <List
        dense={false}
        subheader={<ListSubheader component="div" className="list-subheader">{header}</ListSubheader>}
      >
        {
          stories.map((story) => {
            const path = story.images && story.images[0]
            let imgSrc
            if (path) imgSrc = `/image?url=${path}`
            return (
              <ListItem key={story.id}>
                {
                  imgSrc && (
                  <ListItemAvatar>
                    <Avatar alt={story.title} src={imgSrc} />
                  </ListItemAvatar>
                  )
                }
                <ListItemText
                  primary={<Link to={`/story/${story.id}`}>{story.title}</Link>}
                />
              </ListItem>
            )
          })
        }
      </List>
    </div>
  )
}

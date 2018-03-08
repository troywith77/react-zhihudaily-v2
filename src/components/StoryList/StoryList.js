import React from 'react';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { Link } from 'react-router-dom';

import './style.scss';

export default function MsgList ({ stories }) {
  return (
    <div className="msg-list">
      <List dense={false}>
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

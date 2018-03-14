import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Link } from 'react-router-dom';
import { convertImageSrc } from '~/services/utils';

import './TopStoriesStyle';

function TopStories({
  stories
}) {
  return (
    <SwipeableViews enableMouseEvents>
      {
        stories.map((story) => {
          const bg = convertImageSrc(story.image)
          const style = {
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover'
          }
          return (
            <div
              key={story.id}
              style={style}
              className="topStory-slide"
            >
              <Link to={`/story/${story.id}`} className="topStory-slide-link">
                <p className="topStory-slide-title">{story.title}</p>
              </Link>
            </div>
          )
        })
      }
    </SwipeableViews>
  );
}

export default TopStories;

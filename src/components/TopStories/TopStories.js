import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Link } from 'react-router-dom';
import { convertImageSrc } from '~/services/utils';

import './TopStoriesStyle';

function TopStories({
  stories
}) {
  if (!stories.length) return null;
  return (
    <SwipeableViews enableMouseEvents className="topStory-slide-container">
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
              <p className="topStory-slide-title">
                <Link to={`/story/${story.id}`} className="topStory-slide-link">
                  {story.title}
                </Link>
              </p>
            </div>
          )
        })
      }
    </SwipeableViews>
  );
}

export default TopStories;

import React from 'react';
import { Link } from 'react-router-dom';
import { convertImageSrc } from '~/services/utils';

import './TopStoriesStyle';

function TopStories({
  stories
}) {
  return (
    <div className="top-stories">
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
              className="top-story"
            >
              <p className="top-story-title">
                <Link to={`/story/${story.id}`} className="top-story-link">
                  {story.title}
                </Link>
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default TopStories;

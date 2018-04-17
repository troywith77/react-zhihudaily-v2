import React from 'react';
import { Link } from 'react-router-dom';
import { convertStoryImageSrc } from '~/services/utils';

import './TopStoriesStyle';

function TopStories({
  stories
}) {
  return (
    <div className="top-stories">
      {
        stories.map((story) => {
          const bg = convertStoryImageSrc(story)
          const style = {
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }
          return (
            <div
              key={story.id}
              className="top-story"
            >
              <Link to={`/story/${story.id}`} className="top-story-link">
                <div className="top-story-image" style={style}></div>              
                <p>{story.title}</p>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default TopStories;

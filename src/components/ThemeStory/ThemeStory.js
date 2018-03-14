import React from 'react';
import { convertImageSrc } from '~/services/utils';

import './ThemeStoryStyle';

const ThemeStoryScreen = ({
  data
}) => {
  return (
    <div className="story-container theme-story-container">
      {
        data.image && (
          <figure className="background">
            <img src={convertImageSrc(data.image)} alt={data.title} />
            <p>来源：{data.image_source}</p>
          </figure>
        )
      }
      <article dangerouslySetInnerHTML={{ __html: data.body }}></article>
    </div>
  )
}

export default ThemeStoryScreen;
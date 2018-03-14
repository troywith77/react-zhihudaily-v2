import React from 'react';
import { convertImageSrc } from '~/services/utils';

const StoryScreen = ({
  data
}) => {
  return (
    <div className="story-container">
      {
        data.image && (
          <figure className="background">
            <img src={convertImageSrc(data.image)} alt={data.title} />
            <p>来源：{data.image_source}</p>
          </figure>
        )
      }
      <h1>{data.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: data.body }}></article>
    </div>
  )
}

export default StoryScreen;
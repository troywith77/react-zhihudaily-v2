import React from 'react';
import { convertImageSrc } from '~/services/utils';

const StoryBackground = ({
  data
}) => {
  return (
    data.image ? (
      <figure className="background">
        <img src={convertImageSrc(data.image)} alt={data.title} />
        <p>来源：{data.image_source}</p>
      </figure>
    ) : null
  )
}

export default StoryBackground;
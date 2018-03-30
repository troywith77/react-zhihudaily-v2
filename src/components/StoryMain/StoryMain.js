import React from 'react';
import StoryComment from '~/components/StoryComment/StoryComment';

const StoryMain = (props) => {
  return (
    <div>
      <article className="story-content" dangerouslySetInnerHTML={{ __html: props.data.body }}></article>
      <StoryComment {...props} />
    </div>
  )
}

export default StoryMain;
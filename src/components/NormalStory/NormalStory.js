import React from 'react';
import StoryMain from '~/components/StoryMain/StoryMain';
import StoryBackground from '~/components/StoryBackground/StoryBackground';

const StoryScreen = ({
  state
}) => {
  const { data } = state;
  return (
    <div className="story-container">
      <StoryBackground {...state} />
      <h1>{data.title}</h1>
      <StoryMain {...state} />
    </div>
  )
}

export default StoryScreen;
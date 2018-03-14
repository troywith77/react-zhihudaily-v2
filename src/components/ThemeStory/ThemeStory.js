import React from 'react';
import StoryMain from '~/components/StoryMain/StoryMain';
import StoryBackground from '~/components/StoryBackground/StoryBackground';

import './ThemeStoryStyle';

const ThemeStoryScreen = ({
  state
}) => {
  return (
    <div className="story-container theme-story-container">
      <StoryBackground {...state} />
      <StoryMain {...state} />
    </div>
  )
}

export default ThemeStoryScreen;
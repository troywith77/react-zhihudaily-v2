import React from 'react';
import Story from '~/containers/Story/Story';
import NormalStory from '~/components/NormalStory/NormalStory';
import ThemeStory from '~/components/ThemeStory/ThemeStory';

const StoryScreen = ({
  match: {
    params: {
      id
    }
  }
}) => {
  return (
    <Story
      id={id}
      render={(state) => {
        const { type } = state;
        if (!type) return null;
        if (type === 'theme') return <ThemeStory state={state} />;
        if (type === 'story') return <NormalStory state={state} />;
      }}
    />
  )
}

export default StoryScreen;
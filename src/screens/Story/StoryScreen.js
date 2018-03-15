import React from 'react';
import Story from '~/containers/Story/Story';
import NormalStory from '~/components/NormalStory/NormalStory';
import ThemeStory from '~/components/ThemeStory/ThemeStory';
import Loading from '~/components/Loading/Loading';

import './StoryScreenStyle';

class StoryScreen extends React.Component {
  componentWillMount () {
    window.scrollTo(0, 0);
  }

  render () {
    const {
      match: {
        params: {
          id
        }
      }
    } = this.props;

    return (
      <Story
        id={id}
        render={(state) => {
          const { type } = state;
          const loading = !type;
          if (loading) {
            return (
              <div className="story-loading">
                <Loading loading={loading} />
              </div>
            );
          }
          if (type === 'theme') return <ThemeStory state={state} />;
          if (type === 'story') return <NormalStory state={state} />;
        }}
      />
    )
  }
}

export default StoryScreen;
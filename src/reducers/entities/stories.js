const initialState = {
  byId: {},
  // errors: {},
  // fetchStatus: {}
}

const handler = {
  'RECEIVED_ENTITIES_LATEST_STORIES': (state, action) => {
    return {
      ...state,
      byId: {
        ...state.byId,
        ...action.payload.entities.stories,
        ...action.payload.entities.topStories
      }
    };
  },
  'RECEIVED_ENTITIES_HISTORY_STORIES': (state, action) => {
    return {
      ...state,
      byId: {
        ...state.byId,
        ...action.payload.entities.stories
      }
    };
  }
}

const stories = (state = initialState, action) => {
  if (handler[action.type]) return handler[action.type](state, action);
  return state;
}

export default stories;

export const getTopStories = (state) => {
  return state.timeline.home.entries.top.map(i => state.entities.stories.byId[i]);
}

export const getLatestStories = (state) => {
  return state.timeline.home.entries.latest.map(i => state.entities.stories.byId[i]);
}

export const getHistoryStories = (state) => {
  const storiesById = state.entities.stories.byId;
  const historyTimeline = state.timeline.home.entries.history;
  return historyTimeline.map(i => ({
    date: i.date,
    stories: i.entries.map(j => storiesById[j])
  }));
}
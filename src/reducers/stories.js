/* eslint-disable no-unreachable */

const initialState = {
  fetching: false,
  storiesBefore: [],
  latestStories: [],
  topStories: [],
  date: ''
}

const stories = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_STORIES': {
      return {
        ...state,
        fetching: true
      };
    }
    case 'FETCHED_LATEST_STORIES': {
      const { payload } = action;
      const { payload: { stories, date } } = action;
      // 随手试了一下居然真的可以这样写解构。。。
      return {
        ...state,
        date: (state.date && state.date !== date) ? state.date : date,
        fetching: false,
        latestStories: stories,
        topStories: payload.top_stories
      };
    }
    case 'FETCHED_STORIES_BEFORE': {
      const { payload } = action;
      const { date } = payload;
      return {
        ...state,
        date,
        fetching: false,
        storiesBefore: [...state.storiesBefore, payload]
      };
    }
    default: {
      return state;
    }
  };
};

export default stories;
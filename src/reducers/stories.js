/* eslint-disable no-unreachable */

const initialState = {
  fetching: false,
  stories: [],
  topStories: [],
  date: ''
}

const stories = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_LATEST_STORIES':
      return {
        ...state,
        fetching: true
      };
    case 'FETCHED_LATEST_STORIES':
      const { payload } = action;
      const { date, stories } = payload;
      return {
        ...state,
        date,
        stories,
        topStories: payload.top_stories
      }
    default:
      return state
  };
};

export default stories;
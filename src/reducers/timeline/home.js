const initialState = {
  date: '',
  isFetching: false,
  fetchStatus: {},
  entries: {
    latest: [],
    top: [],
    history: []
  }
}

const handler = {
  'RECEIVING_STORIES': (state, action) => {
    return {
      ...state,
      isFetching: true
    }
  },
  'RECEIVED_ENTITIES_LATEST_STORIES': (state, action) => {
    const { date, stories, top_stories } = action.payload.result;
    return {
      ...state,
      date,
      isFetching: false,
      entries: {
        ...state.entries,
        latest: stories,
        top: top_stories
      }
    };
  },
  'RECEIVED_ENTITIES_HISTORY_STORIES': (state, action) => {
    const { date, stories } = action.payload.result;
    return {
      ...state,
      date,
      isFetching: false,
      entries: {
        ...state.entries,
        history: [...state.entries.history, {
          date,
          entries: stories
        }]
      }
    };
  }
}

const homeTimeline = (state = initialState, action) => {
  if (handler[action.type]) return handler[action.type](state, action);
  return state;
}

export default homeTimeline;

const initialState = {
  home: {
    date: '',
    isFetching: false,
    fetchStatus: {},
    entries: {
      latest: [],
      top: [],
      history: []
    }
  }
}

const handler = {
  'FETCHING_STORIES': (state, action) => {
    return {
      ...state,
      home: {
        ...state.home,
        isFetching: true
      }
    }
  },
  'RECEIVED_ENTITIES_LATEST_STORIES': (state, action) => {
    const { date, stories, top_stories } = action.payload.result;
    return {
      ...state,
      home: {
        date,
        isFetching: false,
        entries: {
          ...state.home.entries,
          latest: stories,
          top: top_stories
        }
      }
    };
  },
  'RECEIVED_ENTITIES_HISTORY_STORIES': (state, action) => {
    const { date, stories } = action.payload.result;
    return {
      ...state,
      home: {
        date,
        isFetching: false,
        entries: {
          ...state.home.entries,
          history: [...state.home.entries.history, {
            date,
            entries: stories
          }]
        }
      }
    };
  }
}

const stories = (state = initialState, action) => {
  if (handler[action.type]) return handler[action.type](state, action);
  return state;
}

export default stories;

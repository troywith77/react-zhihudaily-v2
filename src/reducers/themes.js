const initialState = {
  fetching: false,
  themes: {}
};

const themes = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_THEME': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCHED_THEME': {
      const { payload } = action;
      return {
        ...state,
        fetching: false,
        themes: {
          ...state.themes,
          [payload.id]: payload
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default themes;
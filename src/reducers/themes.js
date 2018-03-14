let initialState = {
  fetching: false,
  themes: {}
};

try {
  initialState.themes = JSON.parse(localStorage.themes || '{}');
} catch (err) {
  console.log(err);
}

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
      const themes = {
        ...state.themes,
        [payload.id]: payload
      };
      localStorage.themes = JSON.stringify(themes);
      return {
        ...state,
        fetching: false,
        themes
      };
    }
    default: {
      return state;
    }
  }
};

export default themes;
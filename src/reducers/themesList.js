const initialState = {
  fetching: false,
  themes: []
}

const themesList = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_THEMES_LIST': {
      return {
        ...state,
        fetching: true
      };
    }
    case 'FETCHED_THEMES_LIST': {
      return {
        ...state,
        fetching: false,
        themes: action.payload.themes
      }
    }
    default: {
      return state;
    }
  }
}

export default themesList;

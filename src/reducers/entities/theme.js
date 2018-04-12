const initialState = {
  byId: {}
};

const handlers = {
  'RECEIVED_THEME': (state, action) => {
    return {
      ...state,
      byId: {
        ...state.byId,
        [action.payload.id]: action.payload.result
      }
    }
  },
  'RECEIVED_THEMES': (state, action) => {
    return {
      ...state,
      byId: {
        ...state.byId,
        ...action.payload.data.entities.themes
      }
    }
  }
};

export default function themes(state = initialState, action) {
  if (!handlers[action.type]) return state;
  return handlers[action.type](state, action);
};

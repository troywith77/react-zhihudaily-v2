const initialState = {
  byId: {}
};

const handlers = {
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

export const getThemes = (state) => {
  return state.timeline.themes.map(id => {
    return state.entities.themes.byId[id];
  })
};

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
  }
};

export default function themes(state = initialState, action) {
  if (!handlers[action.type]) return state;
  return handlers[action.type](state, action);
};

export const getThemeMsgs = (state) => {
  // return state.timeline.themes.map(id => {
  //   return state.entities.themes.byId[id];
  // })
};

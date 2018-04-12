const handlers = {
  'RECEIVED_THEMES': (state, action) => {
    return action.payload.data.result.others;
  }
}

export default function themesTimeline (state = [], action) {
  if (!handlers[action.type]) return state;
  return handlers[action.type](state, action);
}
const handlers = {
  'RECEIVED_THEME': (state, action) => {
    return {
      ...state,
      [action.payload.id]: action.payload.result.stories
    };
  }
}

export default function themesTimeline (state = {}, action) {
  if (!handlers[action.type]) return state;
  return handlers[action.type](state, action);
}

export function getSelectedTheme(state, id) {
  return state.entities.theme.byId[id] || {};
}

export function getSelectedThemeStories(state, id) {
  if (!state.timeline.theme[id]) return [];
  return state.timeline.theme[id].map((id) => {
    return state.entities.stories.byId[id];
  });
}

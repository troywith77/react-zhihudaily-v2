import { persistState } from '~/services/localStorage';

const LS = ({ getState }) => (next) => (action) => {
  // console.log('beforeState', action, getState());
  const returnValue = next(action);
  // console.log('nextState', action, getState());
  const nextState = getState();
  const { themeMsgs } = nextState;
  persistState({
    themeMsgs,
    timeline: {
      themes: nextState.timeline.themes
    },
    entities: {
      theme: {
        byId: nextState.entities.theme.byId
      }
    }
  });
  return returnValue;
}

export default LS;
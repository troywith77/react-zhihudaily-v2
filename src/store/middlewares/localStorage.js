import { persistState } from '~/services/localStorage';

const LS = ({ getState }) => (next) => (action) => {
  // console.log('beforeState', action, getState());
  const returnValue = next(action);
  // console.log('nextState', action, getState());
  const nextState = getState();
  const { themeMsgs, themesList } = nextState;
  persistState({
    themeMsgs,
    themesList
  });
  return returnValue;
}

export default LS;
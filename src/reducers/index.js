import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import themeMsgs from './themeMsgs';
import document from './document';
import entities from './entities';
import timeline from './timeline';

const rootReducer = combineReducers({
  themeMsgs,
  document,
  entities,
  timeline,
  router: routerReducer
});

export default rootReducer;
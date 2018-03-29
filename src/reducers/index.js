import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import themeMsgs from './themeMsgs';
import themesList from './themesList';
import document from './document';
import entities from './entities';
import timeline from './timeline';

const rootReducer = combineReducers({
  themeMsgs,
  themesList,
  document,
  entities,
  timeline,
  router: routerReducer
});

export default rootReducer;
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import stories from './stories';
import themeMsgs from './themeMsgs';
import themesList from './themesList';
import document from './document';

const rootReducer = combineReducers({
  stories,
  themeMsgs,
  themesList,
  document,
  router: routerReducer
});

export default rootReducer;
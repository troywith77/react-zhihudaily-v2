import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import stories from './stories';
import themes from './themes';
import themesList from './themesList';
import document from './document';

const rootReducer = combineReducers({
  stories,
  themes,
  themesList,
  document,
  router: routerReducer
});

export default rootReducer;
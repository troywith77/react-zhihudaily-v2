import { combineReducers } from 'redux';

import stories from './stories';
import themes from './themes';
import themesList from './themesList';

const rootReducer = combineReducers({
  stories,
  themes,
  themesList
});

export default rootReducer;
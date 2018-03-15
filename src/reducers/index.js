import { combineReducers } from 'redux';

import stories from './stories';
import themes from './themes';

const rootReducer = combineReducers({
  stories,
  themes
});

export default rootReducer;
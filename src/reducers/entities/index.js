import { combineReducers } from 'redux';

import stories from './stories';
import themes from './themes';

const entities = combineReducers({
  stories,
  themes
});

export default entities;
import { combineReducers } from 'redux';

import stories from './stories';
import theme from './theme';
import themes from './themes';

const entities = combineReducers({
  stories,
  theme,
  themes
});

export default entities;
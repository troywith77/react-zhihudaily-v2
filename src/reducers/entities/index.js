import { combineReducers } from 'redux';

import stories from './stories';
import theme from './theme';

const entities = combineReducers({
  stories,
  theme
});

export default entities;
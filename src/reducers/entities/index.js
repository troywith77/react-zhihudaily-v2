import { combineReducers } from 'redux';

import stories from './stories';

const entities = combineReducers({
  stories
});

export default entities;
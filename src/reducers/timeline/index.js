import { combineReducers } from 'redux';
import home from './home';
import themes from './themes';

const timeline = combineReducers({
  home,
  themes
})

export default timeline;

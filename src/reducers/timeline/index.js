import { combineReducers } from 'redux';
import home from './home';
import theme from './theme';
import themes from './themes';

const timeline = combineReducers({
  home,
  theme,
  themes
})

export default timeline;

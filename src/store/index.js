import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import stories from '~/reducers/stories';

const rootReducer = combineReducers({
  stories
});

export default () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
  return store
}

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import stories from '~/reducers/stories';

const rootReducer = combineReducers({
  stories
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk
  )
);

export default () => {
  const store = createStore(
    rootReducer,
    enhancer
  )
  return store
}

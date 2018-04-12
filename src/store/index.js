import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import rootReducer from '~/reducers';
import { getPersistedState } from '~/services/localStorage';
import LS from './middlewares/localStorage';

export default () => {
  const history = createHistory();

  // redux devtools set up
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      }) : compose;

  // middlewares
  let middlewares = [routerMiddleware(history), thunk, LS];
  if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, logger];
  }
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  // get data persisted in localStorage
  const persistedState = getPersistedState();

  const store = createStore(
    rootReducer,
    // persistedState,
    enhancer
  )

  // hot reload redux
  if (module.hot) {
    module.hot.accept('~/reducers', () => {
      const nextRootReducer = require('~/reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return {
    store,
    history
  }
}

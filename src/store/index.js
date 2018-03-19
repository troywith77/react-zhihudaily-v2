import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import rootReducer from '~/reducers';
import { getPersistedState } from '~/services/localStorage';
import LS from './middlewares/localStorage';

export default () => {
  const history = createHistory();

  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      LS
      // logger
    )
  );

  const persistedState = getPersistedState();

  const store = createStore(
    rootReducer,
    persistedState,
    enhancer
  )
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

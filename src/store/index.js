import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '~/reducers';

export default () => {
  const history = createHistory();

  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  );

  const store = createStore(
    rootReducer,
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

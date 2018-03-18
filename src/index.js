import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import './styles/global.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store';
import { logRelatedRepo } from './services/utils';

const { store, history } = createStore();

const rootEl = document.getElementById('root');

logRelatedRepo();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootEl
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <NextApp />
        </ConnectedRouter>
      </Provider>,
      rootEl
    );
  })
}

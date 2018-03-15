import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store';
import { logRelatedRepo } from './services/utils';

const store = createStore();

const rootEl = document.getElementById('root');

logRelatedRepo();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootEl
    );
  })
}

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store';
import { logRelatedRepo } from './services/utils';

const store = createStore();

logRelatedRepo();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

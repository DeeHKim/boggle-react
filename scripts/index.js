import './styles/main.scss';

import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {render} from 'react-dom';

import reducers from '../reducers'

import ReduxPromise from 'redux-promise'

import App from './App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <App />
  </Provider>,
  document.getElementById('root')
);

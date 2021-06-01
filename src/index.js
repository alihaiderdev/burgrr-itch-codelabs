import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';

const TOKEN = localStorage.getItem('auth-token')
  ? JSON.parse(localStorage.getItem('auth-token'))
  : '';

axios.defaults.baseURL = 'http://ordering.api.codelabs.inc';
axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

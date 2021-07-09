import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scss/style.scss'
import App from './pages/App';
// react-redux
import { Provider } from 'react-redux'
import store from './store'

const Root = (
  <Provider store = { store }>
    <App />
  </Provider>
)

ReactDOM.render(
  Root,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

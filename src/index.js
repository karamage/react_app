import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// ステートの値
let state_value = {
  counter: 0,
  message: "COUNTER"
}

// レデューサー
function counter(state = state_value, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
        message: "INCREMENT"
      };
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
        message: "DECREMENT"
      };
    default:
      return state;
  }
}

// ストアを作成
let store = createStore(counter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

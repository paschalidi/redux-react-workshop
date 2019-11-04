import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore,combineReducers } from "redux";
import countReducer from "./reducer";

const store = createStore(combineReducers({countReducer}))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

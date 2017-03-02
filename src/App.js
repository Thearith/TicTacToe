import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/index';
import TicTacToeApp from './components/TicTacToeApp';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <TicTacToeApp />
  </Provider>
);

export default App;

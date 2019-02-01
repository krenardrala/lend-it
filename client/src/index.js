import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

import { Provider } from 'react-redux';
import store from './store'

const routing = (
  <Provider store={store}>
    <Header/>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));


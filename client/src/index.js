import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import jwt from 'jsonwebtoken';

import { Provider } from 'react-redux';
import store from './store'
import setAuthorizationToken from "./setAuthorizationToken";

if(localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch({type: "LOGIN_SUCCESS", payload: jwt.decode(localStorage.jwtToken)})
}

const routing = (
  <Provider store={store}>
    <Header/>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));


import { combineReducers } from 'redux';

import books from './bookReducer';
import users from './userReducer';
import auth from './authReducer';

export default combineReducers({
  books,
  users,
  auth
})
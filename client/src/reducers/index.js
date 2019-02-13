import { combineReducers } from 'redux';

import books from './bookReducer';
import user from './userReducer';
import auth from './authReducer';

export default combineReducers({
  books,
  user,
  auth
})
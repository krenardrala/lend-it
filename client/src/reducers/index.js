import { combineReducers } from 'redux';

import books from './bookReducer';
import users from './userReducer';

export default combineReducers({
  books,
  users
})
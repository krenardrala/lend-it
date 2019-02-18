import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchBooksAction from '../../actions/fetchBooksAction';
import addBookAction from '../../actions/addBookAction';
import deleteBookAction from '../../actions/deleteBookAction';
import updateBookAction from '../../actions/updateBookAction';

import App from './ListBooksContainer';

const mapState = state => ({
  books: state.books,
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth
});

const mapActions = dispatch => ({
  fetchBooksAction: bindActionCreators(fetchBooksAction, dispatch),
  addBookAction: bindActionCreators(addBookAction, dispatch),
  deleteBookAction: bindActionCreators(deleteBookAction, dispatch),
  updateBookAction: bindActionCreators(updateBookAction, dispatch)
});

export default connect(mapState, mapActions)(App);

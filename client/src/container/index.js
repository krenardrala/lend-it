import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchBooksAction from '../actions/bookActions';
import addBookAction from '../actions/addBookAction';
import deleteBookAction from '../actions/deleteBookAction';

import App from './App';

const mapState = state => ({
  books: state.books,
});

const mapActions = dispatch => ({
  fetchBooksAction: bindActionCreators(fetchBooksAction, dispatch),
  addBookAction: bindActionCreators(addBookAction, dispatch),
  deleteBookAction: bindActionCreators(deleteBookAction, dispatch)
});

export default connect(mapState, mapActions)(App);

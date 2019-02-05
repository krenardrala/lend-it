import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchBooksAction from '../../actions/fetchBooksAction';
import addBookAction from '../../actions/addBookAction';
import deleteBookAction from '../../actions/deleteBookAction';

import LoginContainer from './LoginContainer';

const mapState = state => ({
  books: state.books,
});

const mapActions = dispatch => ({
  fetchBooksAction: bindActionCreators(fetchBooksAction, dispatch),
  addBookAction: bindActionCreators(addBookAction, dispatch),
  deleteBookAction: bindActionCreators(deleteBookAction, dispatch)
});

export default connect(mapState, mapActions)(LoginContainer);

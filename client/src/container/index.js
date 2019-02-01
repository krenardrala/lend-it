import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  fetchBooksAction from '../actions/bookActions';
import App from './App';

const mapState = state => ({
  books: state.books,
});

const mapActions = dispatch => ({
  fetchBooksAction: bindActionCreators(fetchBooksAction, dispatch)
});

export default connect(mapState, mapActions)(App);

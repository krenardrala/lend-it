import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import createUserAction from '../../actions/createUserAction';

import SignUpContainer from './SignUpContainer';

const mapState = state => ({
  user: state.users,
});

const mapActions = dispatch => ({
  createUserAction: bindActionCreators(createUserAction, dispatch),
});

export default connect(mapState, mapActions)(SignUpContainer);

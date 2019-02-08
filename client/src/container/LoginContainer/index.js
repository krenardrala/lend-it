import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginAction from '../../actions/loginAction';

import LoginContainer from './LoginContainer';

const mapState = state => ({
  auth: state.auth,
});

const mapActions = dispatch => ({
  loginAction: bindActionCreators(loginAction, dispatch),
});

export default connect(mapState, mapActions)(LoginContainer);

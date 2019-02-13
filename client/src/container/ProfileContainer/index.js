import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchUserDataAction from '../../actions/fetchUserDataAction';

import ProfileContainer from './ProfileContainer';

const mapState = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.user
});

const mapActions = dispatch => ({
  fetchUserDataAction: bindActionCreators(fetchUserDataAction, dispatch)
});

export default connect(mapState, mapActions)(ProfileContainer);

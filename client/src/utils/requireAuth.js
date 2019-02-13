import React from 'react';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class Authenticate extends React.Component {

    componentDidUpdate() {
      if(!this.props.isAuthenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }
  
  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    }
  }

  return connect(mapStateToProps, null, null, {
    pure: false})(Authenticate);
}
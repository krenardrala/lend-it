import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Jumbotron,
 } from 'reactstrap';

class LoginContainer extends Component {

  static contextTypes = {
    router: PropTypes.object,
  }

  handleLogIn = (data) => {
    this.props.loginAction(data);
  };

  componentWillReceiveProps(props) {
    const {isAuthenticated} = props.auth;
    if(isAuthenticated) {
      this.context.router.history.push('/home');
    }
  }

  render() {
    return (
      <Container fluid className="centered">
        <Row>
          <Col>
            <Jumbotron style={{background:"transparent"}}>
              <h1 className="display-3">Log In</h1>
              <p className="lead">Don't have an account ? Sign up here.</p>
            </Jumbotron>
            <LoginForm handleLogin={this.handleLogIn}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginContainer;

import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';

import {
  Container,
  Row,
  Col,
  Jumbotron,
 } from 'reactstrap';

class LoginContainer extends Component {

  state = {

  };

  handleLogIn = () => {
    this.props.addBookAction({name: this.state.name, book: this.state.book});
    this.props.fetchBooksAction();
    this.setState({name: '', book: ''});
  };

  componentDidMount () {

  }


  render() {
    return (
      <Container fluid className="centered">
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Log In</h1>
              <p className="lead">Don't have an account ? Sign up here.</p>
            </Jumbotron>
            <LoginForm login={this.handleLogIn}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginContainer;

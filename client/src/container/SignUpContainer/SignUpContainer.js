import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm';

import {
  Container,
  Row,
  Col,
  Jumbotron,
 } from 'reactstrap';

class SignUpContainer extends Component {

  handleSignUp = (data) => {
    if(data) {
      this.props.createUserAction(data);
    }
  };

  render() {
    return (
      <Container fluid className="centered">
        <Row>
          <Col>
            <Jumbotron style={{background:"transparent"}}>
              <h1 className="display-3">Join Our App</h1>
              <p className="lead">We are happy to welcome you.</p>
            </Jumbotron>
            <SignUpForm handleSignUp={this.handleSignUp}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUpContainer;

import React, { Component } from 'react';

import {
  Container,
  Row,
  Col,
  Input,
  Button,
} from 'reactstrap';

class SignUpForm extends Component {

  state = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    loading: false
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  };

  handleSignUp = () => {
    let userData = { ...this.state };
    this.props.handleSignUp(userData);
  };

  render() {
    return (
      <Container fluid className="centered">
        <Row>
          <Col>
            <Row>
              <Col md={{size: 2, offset: 4}}>
                <Input
                  placeholder="First Name"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  autoComplete="new-password"
                />
              </Col>
              <Col md={{size: 2, offset: 0}}>
                <Input
                  placeholder="Last Name"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.onChange}
                  autoComplete="new-password"
                />
              </Col>
            </Row>
            <br/>
            <Row>
              <Col md={{size: 4, offset: 4}}>
                <Input
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  autoComplete="new-password"
                />
              </Col>
            </Row>
            <br/>
            <Row>
              <Col md={{size: 4, offset: 4}}>
                <Input
                  placeholder="E-mail"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  autoComplete="new-password"
                />
              </Col>
            </Row>
              <br/>
              <Row>
                <Col md={{size: 4, offset: 4}}>
                  <Input
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    autoComplete="new-password"
                  />
                </Col>
              <Col style={{marginTop: "15px"}} md={{size: 12}}>
                <Button color="primary" onClick={this.handleSignUp}>Sign Up</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUpForm;

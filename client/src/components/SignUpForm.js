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
              <Col md={{size: 4, offset: 4}}>
                <Input
                  placeholder="Username"
                  name="username"
                  value={this.state.book}
                  onChange={this.onChange}
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
                  value={this.state.name}
                  onChange={this.onChange}
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
                    value={this.state.name}
                    onChange={this.onChange}
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

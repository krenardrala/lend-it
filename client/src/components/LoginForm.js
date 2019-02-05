import React, { Component } from 'react';

import {
  Container,
  Row,
  Col,
  Input,
  Button,
  } from 'reactstrap';

class LoginForm extends Component {

  state = {
    username: '',
    password: '',
    loading: false
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
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
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </Col>
              <Col style={{marginTop: "15px"}} md={{size: 12}}>
                <Button color="primary" onClick={this.handleAddBook}>Log In</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginForm;

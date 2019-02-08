import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';

import {
  Container,
  Row,
  Col,
  Jumbotron,
 } from 'reactstrap';

import Sky from 'react-sky';

import book1 from '../../assets/book1.png';
import book2 from '../../assets/book2.jpg';
import book3 from '../../assets/book3.png';
import book4 from '../../assets/book4.jpg';
import book5 from '../../assets/book5.png';

class LoginContainer extends Component {

  state = {

  };

  handleLogIn = (data) => {
    this.props.loginAction(data);
    //this.props.fetchBooksAction();
    //this.setState({name: '', book: ''});
  };

  componentDidMount () {

  }


  render() {
    return (
      <Container fluid className="centered">
        <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: book1,  /* You can pass as many images as you want */
            1: book2,
            2: book3,
            3: book4,
            4: book5
          }}
          how={120} /* Pass the number of images Sky will render chosing randomly */
          time={60} /* time of animation */
          size={'30px'} /* size of the rendered images */
          background={'white'} /* color of background */
        />
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

import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm';

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

class SignUpContainer extends Component {

  state = {

  };

  handleSignUp = (data) => {
    this.props.createUserAction(data);
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

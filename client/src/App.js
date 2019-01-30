import React, { Component } from 'react';

import {
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Col,
  Jumbotron,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from 'reactstrap';

//import Weather from './Weather';

class App extends Component {

  state = {
    lend: null,
    lendList: [],
    name: '',
    book: ''
  };

  getBooksList = () => {
    fetch('/api/books').then(res => res.json()).then(res => {
      let lendList = res.map(r => r.book);
      this.setState({lendList})
    })
  };

  handleAddBook = () => {
    fetch('/api/books', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name: this.state.name, book: this.state.book})
    }).then(res => res.json()).then(res => {
      this.getBooksList();
      this.setState({name: '', book: ''});
    })
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  };

  componentDidMount () {
    this.getBooksList();
  }

  render() {
    return (
      <Container fluid className="centered">
        <Navbar dark color="dark">
          <NavbarBrand href="/">
            Lend IT
          </NavbarBrand>
        </Navbar>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Lend it</h1>
              <p className="lead">Lend something to someone...</p>
              <InputGroup>
                <Input
                  placeholder="Book Title"
                  name="book"
                  value={this.state.book}
                  onChange={this.onChange}
                />
                <Input
                  placeholder="Lent to..."
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <InputGroupAddon addonType="append">
                  <Button color="primary" onClick={this.handleAddBook}>Lend It</Button>
                </InputGroupAddon>
              </InputGroup>
            </Jumbotron>
          </Col>
        </Row>
        {/*<Weather data={this.state.weather}/>*/}
      </Container>
    );
  }
}

export default App;

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
  Button,
  Spinner
} from 'reactstrap';

import Book from '../Book';

class App extends Component {

  state = {
    lend: null,
    lendList: [],
    name: '',
    book: '',
    loading: false
  };

  handleAddBook = () => {
    fetch('/api/books', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name: this.state.name, book: this.state.book})
    }).then(res => res.json()).then(res => {
      this.props.fetchBooksAction();
      this.setState({name: '', book: ''});
    })
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  };

  deleteRecord = (id) => {
    this.setState({loading: true});
    fetch('/api/books', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id: id})
    }).then(res => res.json()).then(res => {
      this.setState({loading: false});
      this.props.fetchBooksAction();
    })
  };

  componentDidMount () {
    this.setState({loading: true});
    this.props.fetchBooksAction();
  }

  componentWillReceiveProps(props) {
    const { books } = props;
    this.setState({lendList: books.books, loading: false});
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
        {this.state.loading ? (<div><Spinner type="grow" color="info" /></div>)
          : (<Book data={this.state.lendList} deleteRecord={this.deleteRecord}/>)}
      </Container>
    );
  }
}

export default App;

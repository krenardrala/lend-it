import React, { Component } from 'react';
import Book from '../../components/ListBooksTable';

import {
  Container,
  Row,
  Col,
  Jumbotron,
  Input,
  Button,
  Spinner
} from 'reactstrap';

class App extends Component {

  state = {
    lend: null,
    lendList: [],
    name: '',
    book: '',
    loading: false
  };

  handleAddBook = () => {
    this.props.addBookAction({name: this.state.name, book: this.state.book});
    this.props.fetchBooksAction();
    this.setState({name: '', book: ''});
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  };

  deleteRecord = (id) => {
    this.setState({loading: true});
    this.props.deleteBookAction(id);
    this.setState({loading: false});
    this.props.fetchBooksAction();
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
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Lend it</h1>
              <p className="lead">Lend something to someone...</p>
              <Row form>
                <Col md={{size: 4, offset: 2}}>
                    <Input
                      placeholder="Book Title"
                      name="book"
                      value={this.state.book}
                      onChange={this.onChange}
                    />
                </Col>
                <Col md={4}>
                    <Input
                      placeholder="Lent to..."
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                </Col>
                <Col style={{marginTop: "15px"}} md={{size: 12}}>
                  <Button color="primary" onClick={this.handleAddBook}>Lend It</Button>
                </Col>
              </Row>
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

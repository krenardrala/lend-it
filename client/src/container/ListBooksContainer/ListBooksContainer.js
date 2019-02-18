import React, { Component } from 'react';
import Book from '../../components/ListBooksTable';
import PropTypes from 'prop-types';
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

  static contextTypes = {
    router: PropTypes.object,
  }


  handleAddBook = () => {
    const { auth } = this.props;
    this.props.addBookAction({name: this.state.name, book: this.state.book, userId: auth.user.id});
    this.setState({name: '', book: ''});
    this.props.fetchBooksAction(auth.user.id);
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  };

  deleteRecord = (id) => {
    const { auth } = this.props;
    this.setState({loading: true});
    this.props.deleteBookAction(id);
    this.setState({loading: false});
    this.props.fetchBooksAction(auth.user.id);
  };

  updateRecord = (data, oldData) => {
    const { auth } = this.props;
    this.setState({loading: true});
    let updatedData = {...data};
    for (let key in data) {
      if (data[key] === "") {
        updatedData[key] = oldData[key];
      }
    }

    this.props.updateBookAction(updatedData);
    this.setState({loading: false});
    this.props.fetchBooksAction(auth.user.id);
  };

  componentWillReceiveProps(props) {
    const { books, isAuthenticated } = props;
    if(!isAuthenticated) {
      this.context.router.history.push('/');
    }else {
      this.setState({lendList: books.books, loading: false});
    }
  }

  componentDidMount () {
    const { isAuthenticated, auth } = this.props;
    if (!isAuthenticated) {
      this.context.router.history.push('/');
    } else {
      this.props.fetchBooksAction(auth.user.id);
      this.setState({loading: true});
    }
  }

  render() {
    return (
      <div>
        <Jumbotron fluid style={{background: '', width: '100%'}}>
          <Container fluid className="centered">
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
          </Container>
          </Jumbotron>
        <Container fluid className="centered">
          {this.state.loading ? (<div><Spinner type="grow" color="info" /></div>)
            : (<Book data={this.state.lendList} deleteRecord={this.deleteRecord} updateRecord={this.updateRecord}/>)}
        </Container>
      </div>
    );
  }
}

export default App;

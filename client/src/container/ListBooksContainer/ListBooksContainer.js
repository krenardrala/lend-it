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

import Sky from 'react-sky';

import book1 from '../../assets/book1.png';
import book2 from '../../assets/book2.jpg';
import book3 from '../../assets/book3.png';
import book4 from '../../assets/book4.jpg';
import book5 from '../../assets/book5.png';

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
    this.props.addBookAction({name: this.state.name, book: this.state.book});
    this.setState({name: '', book: ''});
    this.props.fetchBooksAction();
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

  updateRecord = (data, oldData) => {
    this.setState({loading: true});
    let updatedData = {...data};
    for (let key in data) {
      if (data[key] === "") {
        updatedData[key] = oldData[key];
      }
    }

    this.props.updateBookAction(updatedData);
    this.setState({loading: false});
    this.props.fetchBooksAction();
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
    const { isAuthenticated } = this.props;
    if (!isAuthenticated) {
      this.context.router.history.push('/');
    } else {
      this.props.fetchBooksAction();
      this.setState({loading: true});
    }
  }

  render() {
    return (
      <Container fluid className="centered">
        <Row>
          <Col>
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
            <Jumbotron style={{background: 'transparent'}}>
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
          : (<Book data={this.state.lendList} deleteRecord={this.deleteRecord} updateRecord={this.updateRecord}/>)}
      </Container>
    );
  }
}

export default App;

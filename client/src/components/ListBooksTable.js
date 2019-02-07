import React from 'react'
import {Row, Col, Table, Button} from 'reactstrap';
import moment from 'moment';
import { Input } from 'reactstrap';

class Book extends React.Component {

  state = {
    updatedBook: '',
    updatedName: '',
    oldBook: '',
    oldName: '',
    updating: null
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value });
  };

  handleUpdate = () => {
    let data = {
      updatedBook: this.state.updatedBook,
      updatedName: this.state.updatedName,
      updating: this.state.updating
    };
    let oldData = {
      updatedBook: this.state.oldBook,
      updatedName: this.state.oldName
    };
    this.props.updateRecord(data, oldData);
    this.setState({updating: null})
  };

  render() {
    const {data} = this.props;
    if(data.length === 0)
      return <div/>;
    return (
      <Row className="books">
        <Col sm="12" md={{size: 6, offset: 3}}>
          <Table bordered hover responsive>
            <thead>
            <tr>
              <th>Book Title</th>
              <th>Lent to</th>
              <th>Date of lent</th>
              <th colSpan="2">Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.map((lend) => {
              return <tr key={lend.id}>
                <td>
                  { this.state.updating === lend.id ? (<Input
                    placeholder={lend.book}
                    name="updatedBook"
                    value={this.state.updatedBook}
                    onChange={this.onChange}
                  />) : lend.book }
                </td>
                <td>
                  { this.state.updating === lend.id ? (<Input
                    placeholder={lend.name}
                    name="updatedName"
                    value={this.state.updatedName}
                    onChange={this.onChange}
                  />) : lend.name }
                </td>
                <td>{moment(lend.date).format('LLL')}</td>
                <td>
                  { this.state.updating === lend.id ? (<Button color="success" size="sm" onClick={this.handleUpdate} >Save</Button>)
                  : (<Button color="info" size="sm" onClick={() => {this.setState({updating: lend.id, oldBook: lend.book, oldName: lend.name})}} >Edit</Button>) }
                </td>
                <td><Button color="danger" size="sm" onClick={() => {this.props.deleteRecord({id: lend.id})} }>Delete</Button></td>
              </tr>
            })}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

export default Book;
import React from 'react'
import {Row, Col, Table, Button} from 'reactstrap';
import moment from 'moment';

class Book extends React.Component {

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
                <td>{lend.book}</td>
                <td>{lend.name}</td>
                <td>{moment(lend.date).format('LLL')}</td>
                <td><Button color="info" size="sm">Edit</Button></td>
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
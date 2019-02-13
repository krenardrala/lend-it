import React from 'react'
import {Row, Col, Table, Button} from 'reactstrap';
import moment from 'moment';

class UserDetails extends React.Component {

  state = {
    updating: null
  }

  render() {
    const {data} = this.props;
    if(data.length === 0)
      return <div/>;
    return (
      <Row className="user-data">
        <Col sm="12" md={{size: 6, offset: 3}}>
          <Table bordered hover responsive>
            <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>E-mail</th>
              <th>Joined on</th>
              <th colSpan="2">Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.map((user) => {
              return <tr key={user.id}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{moment(user.created_on).format('LLL')}</td>
                <td>
                  { this.state.updating === user.id ? (<Button color="success" size="sm" onClick={this.handleUpdate} >Save</Button>)
                    : (<Button color="info" size="sm" onClick={() => {this.setState({updating: user.id, oldBook: user.book, oldName: user.name})}} >Edit</Button>) }
                </td>
                <td><Button color="danger" size="sm" onClick={() => {this.props.deleteRecord({id: user.id})} }>Delete</Button></td>
              </tr>
            })}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}
export default UserDetails
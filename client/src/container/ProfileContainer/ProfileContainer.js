import React, { Component } from 'react';
import User from '../../components/UserDetails';
import {
  Container,
  Jumbotron,
  Spinner
} from 'reactstrap';

class ProfileContainer extends Component {

  state = {
    userData: [],
    name: ''
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
    const { user, isAuthenticated } = props;
    if(!isAuthenticated) {
      this.context.router.history.push('/');
    }else {
      this.setState({
        userData: user.userData,
        loading: false,
        name: user['userData']['0']['firstname']
      });
    }
  }

  componentDidMount () {
    const { isAuthenticated, auth } = this.props;
    if (!isAuthenticated) {
      this.context.router.history.push('/');
    } else {
      this.props.fetchUserDataAction(auth.user.id);
      this.setState({loading: true});
    }
  }

  render() {
    return (
      <div>
        <Jumbotron fluid style={{background: '', width: '100%'}}>
          <Container fluid className="centered">
            <h1 className="display-3">Hello {this.state.name}</h1>
            <p className="lead">How can we help you?</p>
          </Container>
          </Jumbotron>
        <Container fluid className="centered">
          {this.state.loading ? (<div><Spinner type="grow" color="info" /></div>)
            : (<User data={this.state.userData} deleteRecord={this.deleteRecord} updateRecord={this.updateRecord}/>)}
        </Container>
      </div>
    );
  }
}

export default ProfileContainer;

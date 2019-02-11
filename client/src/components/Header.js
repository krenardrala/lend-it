import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../screen/Home';
import Login from '../screen/Login';
import Users from './Users';
import SignUp from '../screen/SignUp';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button,
  ButtonGroup,
} from 'reactstrap';
import { FiUser } from "react-icons/fi";
import { GoHome } from "react-icons/go";
// eslint-disable-next-line
import style from '../style/component/HeaderStyle.css';
import logoutAction from "../actions/logoutAction";
import { bindActionCreators } from 'redux';

class Header extends React.Component {

  handleLogOut = () => {
    this.props.logoutAction();
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ButtonGroup>
        <Button>
          <Link className="link" to="/home"><GoHome style={{marginBottom: "2px"}}/> Home</Link>
        </Button>
        <Button>
          <Link className="link" to="/users">Users</Link>
        </Button>
        <Button onClick={this.handleLogOut}>
          <Link className="link" to="/"><FiUser/></Link>
        </Button>
      </ButtonGroup>
    );

    const guestLinks = (
      <ButtonGroup>
        <Button>
          <Link className="link" to="/signUp">Sign Up</Link>
        </Button>
      </ButtonGroup>
    );

    return (
      <Router>
        <div>
          <Navbar dark color="dark" expand="lg">
            <NavbarBrand href="/">
              Lend IT
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              { isAuthenticated ? userLinks : guestLinks}
            </Nav>
          </Navbar>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/signUp" component={SignUp} />
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  console.log("Map state: ", state);
  return {
    auth: state.auth
  }
}

const mapActions = dispatch => ({
  logoutAction: bindActionCreators(logoutAction, dispatch),
});

export default connect(mapStateToProps, mapActions) (Header)
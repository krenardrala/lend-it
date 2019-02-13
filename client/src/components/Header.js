import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../screen/Home';
import Login from '../screen/Login';
import Profile from '../screen/Profile';
import SignUp from '../screen/SignUp';
// eslint-disable-next-line
import requireAuth from '../utils/requireAuth';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button,
  ButtonGroup,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { FiLogOut } from "react-icons/fi";
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
    const { isAuthenticated, user } = this.props.auth;

    const userLinks = (
      <ButtonGroup>
        <Button>
          <Link className="link" to="/home"><GoHome style={{marginBottom: "2px"}}/> Home</Link>
        </Button>
        <UncontrolledDropdown nav inNavbar style={{background: '#6c757d'}}>
          <DropdownToggle caret>
            Hi, {user.username}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <Link className="sub-menu-link" to="/profile">Profile</Link>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={this.handleLogOut}>
              <Link to="/" className="sub-menu-link"><FiLogOut/> Sign Out</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
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
          <Route path="/profile" component={Profile} />
          <Route path="/signUp" component={SignUp} />
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

const mapActions = dispatch => ({
  logoutAction: bindActionCreators(logoutAction, dispatch),
});

export default connect(mapStateToProps, mapActions) (Header)
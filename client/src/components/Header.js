import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
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

class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar dark color="dark" expand="lg">
            <NavbarBrand href="/">
              Lend IT
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <ButtonGroup>
                <Button>
                  <Link className="link" to="/home"><GoHome style={{marginBottom: "2px"}}/> Home</Link>
                </Button>
                <Button>
                  <Link className="link" to="/users">Users</Link>
                </Button>
                <Button>
                  <Link className="link" to="/"><FiUser/></Link>
                </Button>
                <Button>
                  <Link className="link" to="/signUp">Sign Up</Link>
                </Button>
              </ButtonGroup>
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
export default Header
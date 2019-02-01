import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import IntroScreen from '../screen/IntroScreen';
import Users from './Users';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button,
  ButtonGroup,
} from 'reactstrap';
import { FiUser } from "react-icons/fi";

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
                  <Link to="/">Home</Link>
                </Button>
                <Button>
                  <Link to="/users">Users</Link>
                </Button>
                <Button>
                  <Link to="/"><FiUser/></Link>
                </Button>
              </ButtonGroup>
            </Nav>
          </Navbar>
          <Route exact path="/" component={IntroScreen} />
          <Route path="/users" component={Users} />
        </div>
      </Router>
    )
  }
}
export default Header
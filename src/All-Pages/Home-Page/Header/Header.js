import React from 'react';
import { Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
const Header = () => {
    const{user}=useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as= {Link} to='/'>Home</Nav.Link>
      <Nav.Link as= {Link} to='/services'>Services</Nav.Link>
      <Nav.Link as= {Link} to='/services'>About us</Nav.Link>
      <Nav.Link as= {Link} to='/addcar'>Add Car</Nav.Link>
      <Nav.Link as= {Link} to='/services'>Manage-Orders</Nav.Link>
      <Nav.Link as= {Link} to='/services'>Make Admin</Nav.Link>
      <Nav.Link as= {Link} to='/services'>My-Orders</Nav.Link>
      <Nav.Link as= {Link} to='/give-review'>Review</Nav.Link>
      <Nav.Link as= {Link} to='/services'>Payment</Nav.Link>
     {user?.email? <Nav.Link as= {Link} to='/'>Logout</Nav.Link>
      :<Nav.Link as= {Link} to='/login'>Login</Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;
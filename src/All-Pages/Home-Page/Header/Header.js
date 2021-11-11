import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
const Header = () => {
    const{user,logOut}=useAuth()
    console.log(user)
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
      <Nav.Link as= {Link} to='/manage-orders'>Manage-Orders</Nav.Link>
      <Nav.Link as= {Link} to='/services'>Make Admin</Nav.Link>
      <Nav.Link as= {Link} to='/myorders'>My-Orders</Nav.Link>
      <Nav.Link as= {Link} to='/give-review'>Review</Nav.Link>
      <Nav.Link as= {Link} to='/services'>Payment</Nav.Link>
       <Nav.Link>{user.displayName}</Nav.Link>
     {user?.email? <Button onClick={logOut}>Logout</Button>
      :<Nav.Link as= {Link} to='/login'>Login</Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;
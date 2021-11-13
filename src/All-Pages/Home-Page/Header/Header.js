import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
const Header = () => {
    const{user,logOut,admin}=useAuth()
    console.log(admin)

    return (
      <>
     
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">CAR POINT</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as= {Link} to='/'>Home</Nav.Link>
      <Nav.Link as= {Link} to='/about'>About Us</Nav.Link>
      <Nav.Link as= {Link} to='/explore'>Explore</Nav.Link>
    {user.email&&<Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>}
      {user?.displayName&&<Nav.Link>{user.displayName}</Nav.Link>}
     {user?.email? <Button onClick={logOut}>Logout</Button>
      :<Nav.Link as= {Link} to='/login'>Login</Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    );
};

export default Header;
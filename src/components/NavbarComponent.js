import React from 'react';
import {Navbar,
        Container,
        Offcanvas,
        Nav,
        NavDropdown,
        Form,
        FormControl,
        Button} 
from 'react-bootstrap';

function NavbarComponent() {
   return(
            <Navbar 
                    className  ="navbar-style"
                    collapseOnSelect 
                    expand="sm" 
                    bg="dark"
                    sticky="top" 
                    variant="dark">

                <Navbar.Brand href="#home">Rahul Goel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Music 🎵</Nav.Link>
      <Nav.Link href="#pricing">Software 👨🏽‍💻</Nav.Link>
      <Nav.Link href='#pictures'>Pictures 👀</Nav.Link>
      <Nav.Link href="#blog">Blog 💭</Nav.Link>
    </Nav>
  </Navbar.Collapse>

</Navbar>


); 


};

export default NavbarComponent; 

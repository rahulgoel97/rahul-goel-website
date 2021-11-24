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

                <Navbar.Brand href="/">Rahul Goel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="music">Music 🎵</Nav.Link>
      <Nav.Link href="projects">Software 👨🏽‍💻</Nav.Link>
      <Nav.Link href='pics'>Pictures 👀</Nav.Link>
      <Nav.Link href="https://mirror.xyz/0x1426FAF5B6F335313ddEce3D5d4aAdD39525e44d/wzsIaOk8uOe6CFIAxthNCt9q43H_mbXJ9MsSaigIhcQ">Blog 💭</Nav.Link>
    </Nav>
  </Navbar.Collapse>

</Navbar>


); 


};

export default NavbarComponent; 

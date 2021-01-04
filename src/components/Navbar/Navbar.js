import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';

export default function MainNav() {
    return (
      //   <Navbar id="navbar" variant="dark" fixed="top" expand='lg'>
      //   <Container>
      //     <Nav id="navLinks" className="mr-auto">
      //       <Nav.Link className='link' href="#home">HOME</Nav.Link>
      //       <Nav.Link className='link' href="#about">ABOUT</Nav.Link>
      //       <Nav.Link className='link' href="#room">ROOMS</Nav.Link>
      //       <Nav.Link className='link' href="#services">SERVICES</Nav.Link>
      //       <Nav.Link className='link' href="#gallery">GALLERY</Nav.Link>
      //       <Nav.Link className='link' href="#see&do">SEE & DO</Nav.Link>
      //       <Nav.Link className='link' href="#contact">CONTACT</Nav.Link>
      //     </Nav>
      //     <Button id='btn' variant="outline-light">Book A Room</Button>
      // </Container>
      //   </Navbar>
      <Navbar id="navbar" variant="dark" fixed="top" expand="lg">
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav id="navLinks" className="mr-auto">
          <Nav.Link className='link' href="#home">HOME</Nav.Link>
          <Nav.Link className='link' href="#about">ABOUT</Nav.Link>
          <Nav.Link className='link' href="#room">ROOMS</Nav.Link>
          <Nav.Link className='link' href="#services">SERVICES</Nav.Link>
          <Nav.Link className='link' href="#gallery">GALLERY</Nav.Link>
          <Nav.Link className='link' href="#see&do">SEE & DO</Nav.Link>
          <Nav.Link className='link' href="#contact">CONTACT</Nav.Link>
        </Nav>
        <Button id='btn' variant="outline-light">Book A Room</Button>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

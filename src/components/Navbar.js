import React from 'react'
import { Navbar, Button, Container, Form, FormControl, Nav, NavbarBrand, NavDropdown } from 'react-bootstrap'
import logoImg from '.././assests/images/logo.png';
import "./style/Navbar.css"
const MainNavbar = () => {
  return (
    <div >
      <Navbar expand="lg" fixed="top" className='navbarcontainer'>
        <Container className='NavbarMain'  >
          <Navbar.Brand href="#home" className='logoImg'>
            <img src={logoImg} alt="logoimg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{textAlign:"center"}}>
              <Nav.Link href="#home">Why CAPABARA </Nav.Link>
              <Nav.Link href="#link">Features </Nav.Link>
              <Nav.Link href="#link">Templates </Nav.Link>
              <Nav.Link href="#link">Pricing </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <button type="button" className="btn btn-outline-secondary">Contact Us</button>
              <button type="button" className="btn btn-outline-secondary signUpBtn">Sign Up for Free</button>
              <button type="button" className="btn btn-link signinbtn">Sign in</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MainNavbar
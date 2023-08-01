import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <Navbar variant="light" expand="lg" sticky="top" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Smart Speakers</Nav.Link>
            <Nav.Link href="#link">Smart Lighting</Nav.Link>
            <Nav.Link href="#link">Smart Appliances</Nav.Link>
            <Nav.Link href="#link">Home Security</Nav.Link>
            <Nav.Link href="#link">Home Automation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

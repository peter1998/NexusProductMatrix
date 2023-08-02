import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <Navbar variant="light" expand="lg" sticky="top" className="navbar">
      <Container>
        <Link to="/">
          {" "}
          {/* Replace Navbar.Brand with Link */}
          <img src={logo} alt="Logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Link className="nav-link" to="/smart-speakers">
                Smart Speakers
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/smart-lighting">
                Smart Lighting
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/smart-appliances">
                Smart Appliances
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/home-security">
                Home Security
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/home-automation">
                Home Automation
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

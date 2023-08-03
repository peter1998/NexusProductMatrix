import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/cartContext";
import logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  const [cart] = useContext(CartContext);

  return (
    <Navbar variant="light" expand="lg" sticky="top" className="navbar">
      <Container fluid>
        <Link to="/" className="navbar-brand" title="Go to homepage">
          <span className="home-text">Home</span>
          <FaArrowRight className="home-arrow" />
          <img src={logo} alt="Logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
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
            <Nav.Item>
              <Link className="nav-link" to="/cart">
                <FaShoppingCart />
                <span>({cart.length})</span>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

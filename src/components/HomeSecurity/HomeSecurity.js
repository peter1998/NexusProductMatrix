import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import homeSecurityImage from "../../assets/home_security_layout.jpg";
import "./homeSecurity.css";

function HomeSecurity() {
  return (
    <Container className="home-security content">
      <Row
        className="justify-content-center text-center row-effect"
        style={{ "--row-index": "0" }}
      >
        <Col>
          <h2 className="title">Home Security</h2>
          <Image src={homeSecurityImage} alt="Home Security" fluid />
        </Col>
      </Row>

      <Row className="mt-5 row-effect" style={{ "--row-index": "1" }}>
        <Col md={6}>
          <h3>About Home Security</h3>
          <p>
            Home security includes both the security hardware placed on a
            property and individuals' personal security practices. It involves
            implementing measures to ensure the safety of persons and property.
          </p>
        </Col>
        <Col md={6}>
          <h3>Benefits of Home Security</h3>
          <p>
            - Protection against intruders
            <br />
            - Remote monitoring of your home
            <br />
            - Fire and gas leak detection
            <br />- Lower insurance premiums
          </p>
        </Col>
      </Row>

      <Row className="mt-5 row-effect" style={{ "--row-index": "2" }}>
        <Col>
          <h3>Why Choose Home Security?</h3>
          <p>
            Home security systems provide families with peace of mind knowing
            that their homes are protected. These systems can detect intrusion,
            fire, gas leaks, and more, providing immediate alerts and even
            automatic emergency services connection when necessary.
          </p>
        </Col>
      </Row>

      <Row
        className="mt-5 justify-content-center text-center row-effect"
        style={{ "--row-index": "3" }}
      >
        <Col xs={12} md={6}>
          <Link to="/">
            <Button variant="primary" size="lg">
              Shop Home Security Products
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeSecurity;

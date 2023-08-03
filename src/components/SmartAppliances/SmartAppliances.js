import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import smartAppliancesImage from "../../assets/smart_appliances_layout.jpg";
import "./smartAppliances.css";

function SmartAppliances() {
  return (
    <Container className="smart-appliances content">
      <Row
        className="justify-content-center text-center row-effect"
        style={{ "--row-index": "0" }}
      >
        <Col>
          <h2 className="title">Smart Appliances</h2>
          <Image src={smartAppliancesImage} alt="Smart Appliances" fluid />
        </Col>
      </Row>

      <Row className="mt-5 row-effect" style={{ "--row-index": "1" }}>
        <Col md={6}>
          <h3>About Smart Appliances</h3>
          <p>
            Smart appliances are the next generation in home appliances that
            promise to make your home more comfortable and user-friendly. They
            come equipped with advanced features such as Wi-Fi connectivity,
            voice control, and home automation capabilities.
          </p>
        </Col>
        <Col md={6}>
          <h3>Benefits of Smart Appliances</h3>
          <p>
            - Control your appliances from anywhere
            <br />
            - Save energy and reduce bills
            <br />
            - Enhance home convenience
            <br />- Create personalized automation routines
          </p>
        </Col>
      </Row>

      <Row className="mt-5 row-effect" style={{ "--row-index": "2" }}>
        <Col>
          <h3>Why Choose Smart Appliances?</h3>
          <p>
            Smart appliances not only offer the promise of more convenience and
            control in our daily lives, but they can also make your home more
            efficient, saving you time and money. From refrigerators and washers
            to televisions and music systems, smart appliances can offer a host
            of benefits.
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
              Shop Smart Appliances
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default SmartAppliances;

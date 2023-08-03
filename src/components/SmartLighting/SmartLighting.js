import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import smartLightingImage from "../../assets/smart_lighting_layout.jpg";
import "./smartLighting.css";

function SmartLighting() {
  return (
    <Container className="smart-lighting content">
      <Row
        className="justify-content-center text-center row-effect"
        style={{ "--row-index": "0" }}
      >
        <Col>
          <h2 className="title">Smart Lighting</h2>
          <Image src={smartLightingImage} alt="Smart Lighting" fluid />
        </Col>
      </Row>

      <Row className="mt-5 row-effect" style={{ "--row-index": "1" }}>
        <Col md={6}>
          <h3>About Smart Lighting</h3>
          <p>
            Smart lighting is a lighting technology designed for energy
            efficiency. This may include high-efficiency fixtures and automated
            controls that make adjustments based on conditions such as occupancy
            or daylight availability.
          </p>
        </Col>
        <Col md={6}>
          <h3>Benefits of Smart Lighting</h3>
          <p>
            - Control your lights from anywhere
            <br />
            - Save energy and reduce bills
            <br />
            - Enhance home security
            <br />- Create personalized lighting routines
          </p>
        </Col>
      </Row>

      <Row className="mt-5 row-effect" style={{ "--row-index": "2" }}>
        <Col>
          <h3>Why Choose Smart Lighting?</h3>
          <p>
            Smart lighting allows you to control nearly every aspect of your
            lighting system through the Internet of Things (IoT). From simple
            tasks such as controlling your lights with your phone, to more
            complex tasks such as voice recognition systems or comprehensive
            security systems, smart lighting can make your life simpler, more
            enjoyable, and even safer.
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
              Shop Smart Lighting Products
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default SmartLighting;

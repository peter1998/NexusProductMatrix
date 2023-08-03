import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import smartSpeakersImage from "../../assets/smart_speakers_layout.jpg";
import "./smartSpeakers.css";

function SmartSpeakers() {
  return (
    <Container className="smart-speakers content">
      <Row
        className="justify-content-center text-center row-effect"
        style={{ "--row-index": "0" }}
      >
        <Col>
          <h2 className="title">Smart Speakers</h2>
          <Image src={smartSpeakersImage} alt="Smart Speakers" fluid />
        </Col>
      </Row>

      <Row className="mt-5 row-effect" style={{ "--row-index": "1" }}>
        <Col md={6}>
          <h3>About Smart Speakers</h3>
          <p>
            Smart speakers are a type of wireless speaker and voice command
            device with an integrated virtual assistant that offers interactive
            actions and handsfree activation.
          </p>
        </Col>
        <Col md={6}>
          <h3>Benefits of Smart Speakers</h3>
          <p>
            - Control your smart home with your voice
            <br />
            - Play music, set alarms and much more
            <br />
            - Enhance daily routines
            <br />- Access to online information
          </p>
        </Col>
      </Row>

      <Row className="mt-5 row-effect" style={{ "--row-index": "2" }}>
        <Col>
          <h3>Why Choose Smart Speakers?</h3>
          <p>
            Smart speakers allow you to control your home, play music, get
            information and more, all through voice commands. With the help of
            AI technology, smart speakers are becoming an integral part of our
            daily routines, making our lives simpler and more enjoyable.
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
              Shop Smart Speakers Products
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default SmartSpeakers;

import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import homeAutomationImage from "../../assets/home_automation_layout.jpg";
import "./homeAutomation.css";

function HomeAutomation() {
  return (
    <Container className="home-automation content">
      <Row
        className="justify-content-center text-center row-effect"
        style={{ "--row-index": "0" }}
      >
        <Col>
          <h2 className="title">Home Automation</h2>
          <Image src={homeAutomationImage} alt="Home Automation" fluid />
        </Col>
      </Row>

      <Row className="mt-5 row-effect" style={{ "--row-index": "1" }}>
        <Col md={6}>
          <h3>About Home Automation</h3>
          <p>
            Home automation is part of the "Internet of Things," also known as
            IoT. The way devices and appliances can be networked together to
            provide us with seamless control over all aspects of your home and
            more. Home automation enables the automatic control of commonly used
            elements such as lighting, security, temperature, music and other
            home devices in a manner that is personalized to the needs of each
            family.
          </p>
        </Col>
        <Col md={6}>
          <h3>Benefits of Home Automation</h3>
          <p>
            - Control your home from anywhere
            <br />
            - Save energy and reduce bills
            <br />
            - Enhance home security
            <br />
            - Create personalized automation routines
            <br />
            - Home automation systems can also provide security, lighting,
            heating and cooling systems that can be remotely controlled from
            anywhere.
            <br />- They can also include features like automatic pet feeding,
            automatic plant watering, automatic scenes for dinners and parties,
            and a whole lot more.
          </p>
        </Col>
      </Row>

      <Row className="mt-5 row-effect" style={{ "--row-index": "2" }}>
        <Col>
          <h3>Why Choose Home Automation?</h3>
          <p>
            Home automation allows you to control nearly every aspect of your
            home through the Internet of Things (IoT). From simple tasks such as
            controlling your lights with your phone, to more complex tasks such
            as voice recognition systems or comprehensive security systems, home
            automation can make your life simpler, more enjoyable, and even
            safer. In addition, home automation can also provide a significant
            return on investment by saving you money on energy costs.
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
              Shop Home Automation Products
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeAutomation;

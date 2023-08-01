import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h5>About Us</h5>
          <a href="#about">Company Info</a>
          <a href="#careers">Careers</a>
        </div>
        <div className="footer-section">
          <h5>Customer Service</h5>
          <a href="#contact">Contact Us</a>
          <a href="#faq">FAQs</a>
        </div>
        <div className="footer-section">
          <h5>Policies</h5>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>
        <div className="footer-section">
          <h5>Follow Us</h5>
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} NexusProductMatrix. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;

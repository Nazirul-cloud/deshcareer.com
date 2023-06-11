import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../images/short-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <div className="text-center social-box my-3">
          <a href="www.facebook.com">
            <i class="fa-brands fa-facebook" />
          </a>
          <a href="www.youtube.com">
            <i class="fa-brands fa-youtube" />
          </a>
          <a href="www.linkedin.com">
            <i class="fa-brands fa-linkedin-in" />
          </a>
        </div>
        <Row>
          <Col xs={12} md={4}>
            <img width={200} src={logo} alt="brand logo" />
            <p className="text-color pt-2">
              Desh Career is Career based newsletter in Bengali language. This
              newsletter has published weekly. This is published in every
              Saturday at 12.00 PM.{" "}
            </p>
          </Col>
          <Col xs={12} md={4} className="link-wrapper text-center">
            <h4>Privacy And Terms</h4>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms Condition</a>
            <a href="/faq">FAQ</a>
          </Col>
          <Col xs={12} md={4} className="link-wrapper text-lg-end text-center">
            <h4>Support</h4>
            <a href="/affiliate">Affiliate Link</a>
            <a href="/contact">Contact us</a>
            <a href="/advertise">Advertise with us</a>
          </Col>
          <hr className="divider" />

          <div className="footer-end">
            <div>© 2023 Newsletter E-mail Service: All Copy right reserved</div>
            <div className="ending-link">
              <a href="#">Terms</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

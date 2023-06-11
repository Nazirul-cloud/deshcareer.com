import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col className="my-5 contact-info">
          <h1>Contract Us</h1>
          <p>
            If you want to contact us: you can send an email to{" "}
            <a href="mailto:contact.deshcareer@gmail.com">
              contact.deshcareer@gmail.com
            </a>
          </p>
          <p>
            If you want to meet with us, you can come to our office based on an
            appointment.
          </p>
          <p>Our Office address:</p>
          <p>House: 13/3,</p>
          <p>Road: 2,</p>
          <p>Shyamoly, Dhaka-1207</p>
          <p>+8801880811047</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <Container className="main">
      <Row>
        <Col sm={12} md={8} lg={8} xl={8}>
          <h1 className="custom-header">Get Smarter about your career </h1>
          <p>
            Get the <strong>5-minute newsletter </strong> keeping about smart
            career
          </p>
          <div className="input-box">
            <i class="fa-regular fa-envelope custom-icon"></i>
            <input
              className="custom-input"
              type="email"
              name="email"
              placeholder="Your E-mail address"
            />
            <Button className="btn btn-danger custom-btn">Join Free</Button>
          </div>

          <p className="pt-4 custom-details">
            We're committed to your privacy. DashCareer uses the information you
            provide to contact you about our relevant content and services. You
            may unsubscribe from these communications at any time. For more
            information, check out our Privacy Policy.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

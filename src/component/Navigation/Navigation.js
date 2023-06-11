import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/short-logo.png";
import { Button } from "react-bootstrap";
import "./Navigation.css";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="custom-container bg-white">
      <Container>
        <Navbar.Brand href="#home">
          <img width={200} src={logo} alt="brand logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center custom-nav">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Privacy Policy</Nav.Link>
            <Nav.Link href="#link">Terms Condition</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="/contact/us">Contact Us</Nav.Link>
            <Nav.Link href="#link">Advertise</Nav.Link>
            <div className="px-2">
              <Button className="btn btn-danger">Join Now</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

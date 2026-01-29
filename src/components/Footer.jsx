import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3  border-top">
      <Container>
        <Row className="mb-4 ">

          <Col md={3}>
            <h4 className="fw-bold text-warning">Coursera</h4>
            <p className="text-secondary">
              Learn from the world’s best universities and companies.
              </p>
            <i className="bi bi-facebook footer-icon"></i>
            <i className="bi bi-twitter footer-icon"></i>
            <i className="bi bi-linkedin footer-icon"></i>
            <i className="bi bi-youtube footer-icon"></i>
            
          </Col>

          <Col md={3}>
            <h6 className="text-uppercase fw-bold mb-3">Explore</h6>
            <ul className="list-unstyled footer-links">
              <li>Courses</li>
              <li>Professional Certificates</li>
              <li>Degrees</li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="text-uppercase fw-bold mb-3">Company</h6>
            <ul className="list-unstyled footer-links">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="text-uppercase fw-bold mb-3">Support</h6>
            <ul className="list-unstyled footer-links">
              <li>Help Center</li>
              <li>Terms</li>
              <li>Accessibility</li>
            </ul>
          </Col>
        </Row>

        <Row className=" align-items-center">
          <Col md={12}>
            <p className="mb-0 text-secondary mx-auto text-center">
              © {new Date().getFullYear()} CourseWala's. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

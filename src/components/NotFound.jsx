import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../index.css"; 

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6610f2, #0dcaf0)",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1
              className="display-1 fw-bold text-white"
              style={{ fontSize: "8rem", letterSpacing: "5px" }}
            >
              404
            </h1>
            <h2 className="text-white fw-bold mb-3">
              Oops! Page Not Found
            </h2>
            <p className="text-light mb-4 fs-5">
              The page you are looking for does not exist or has been moved.
            </p>
            <Button
              variant="light"
              size="lg"
              className="fw-bold"
              onClick={() => navigate("/")}
            >
              Go Back Home
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;


import React from "react";
import { Card, Container, Row, Col, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashbord = () => {
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName");


  if (!userName ) {
    return <p className="text-center mt-5">User not logged in</p>;
  }

  return (
    <Container fluid className="pt-5 bg-dark" style={{ marginTop: "70px" }}>
      {/* Welcome Section */}
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <Card
            className="border-0 shadow-lg text-white"
            style={{
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              borderRadius: "20px",
            }}
          >
            <Card.Body className="p-4 text-center">
              <h2 className="fw-bold">Welcome back, {userName} 👋</h2>
              <p className="mb-0">Keep learning, you’re doing great</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Stats Section */}
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <Row className="g-3">
            <Col md={4}>
              <Card className="shadow-sm text-center h-100">
                <Card.Body>
                  <h5 className="fw-bold">My Courses</h5>
                  <h2 className="text-primary">5</h2>
                  <Badge bg="success">Enrolled</Badge>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm text-center h-100">
                <Card.Body>
                  <h5 className="fw-bold">My Progress</h5>
                  <h2 className="text-warning">68%</h2>
                  <Badge bg="warning">In Progress</Badge>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm text-center h-100">
                <Card.Body>
                  <h5 className="fw-bold">My Certificates</h5>
                  <h2 className="text-success">2</h2>
                  <Badge bg="primary">Completed</Badge>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Profile Section */}
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="fw-bold mb-3">👤 Profile Information</h5>
              <p className="mb-1">
                <strong>Name:</strong> {userName}
              </p>
              <p className="mb-0">
                <strong>Role:</strong> User
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Quick Actions */}
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm mb-4">
            <Card.Body className="text-center">
              <h5 className="fw-bold mb-3"> Quick Actions</h5>
              <Button
                variant="primary"
                className="me-2 rounded-pill"
                onClick={() => navigate("/courses")}
              >
                My Courses
              </Button>

              <Button
                variant="outline-primary"
                className="me-2 rounded-pill"
                onClick={() => navigate("/coursevideo")}
              >
                Continue Learning
              </Button>

              <Button
                variant="danger"
                className="rounded-pill"
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                Logout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashbord;

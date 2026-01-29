import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Admin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:3000/admins");
      const admin = res.data.find(
        (user) =>
          user.email === formData.email &&
          user.password === formData.password
      );

      if (admin) {
        alert("Admin Login Successful ");
        navigate("/adminpanel");
      } else {
        alert("Invalid Email or Password ");
      }
    } catch (err) {
      alert("Server Error ");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #1d2671, #c33764)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="shadow-lg border-0 rounded-4">
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <h2 className="fw-bold text-primary">Admin Login</h2>
                  <p className="text-muted">
                    Access the admin dashboard
                  </p>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="admin@example.com"
                      className="rounded-pill px-3"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      className="rounded-pill px-3"
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100 rounded-pill fw-bold py-2"
                    variant="primary"
                  >
                    Login as Admin
                  </Button>
                </Form>

                <div className="text-center mt-4 text-muted small">
                  © 2026 CourseWala's Admin Panel
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Admin;

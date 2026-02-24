import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

const Admin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Static Admin Credentials
  const ADMIN_EMAIL = "admin@gmail.com";
  const ADMIN_PASSWORD = "2098";

  // AOS Initialize + Auto Redirect
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin === "true") {
      navigate("/adminpanel");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  Check Static Admin
    if (
      formData.email === ADMIN_EMAIL &&
      formData.password === ADMIN_PASSWORD
    ) {
      localStorage.setItem("isAdmin", "true");
      toast.success("Admin Login Successful 🎉");
      navigate("/adminpanel");
    } else {
      toast.error("Invalid Admin Credentials ❌");
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(-45deg, #1d2671, #c33764, #6a11cb, #2575fc)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 12s ease infinite",
        marginTop: "70px",
      }}
    >
      <Container fluid>
        <Row className="min-vh-100">

          {/* LEFT SIDE IMAGE */}
          <Col
            lg={6}
            data-aos="fade-right"
            className="d-none d-lg-flex align-items-center justify-content-center text-white"
          >
            <div className="text-center px-4 mt-4">
              <img
                src="https://thumbs.dreamstime.com/b/admin-message-working-office-table-background-93379017.jpg"
                alt="Admin"
                className="img-fluid rounded-4 shadow-lg mb-4"
                style={{ maxHeight: "350px", objectFit: "cover" }}
              />
            </div>
          </Col>

          {/* LOGIN FORM */}
          <Col
            lg={6}
            data-aos="fade-left"
            className="d-flex align-items-center  justify-content-center"
          >
            <Card
              className="shadow-lg border-0"
              style={{
                width: "100%",
                maxWidth: "450px",
                borderRadius: "25px",
                backdropFilter: "blur(15px)",
                background: "rgba(255,255,255,0.15)",
                color: "white",
              }}
            >
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <h2 className="fw-bold">Admin Login</h2>
                  <p className="opacity-75">
                    Secure access to admin dashboard
                  </p>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="admin@gmail.com"
                      className="rounded-pill px-3 py-2"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      className="rounded-pill px-3 py-2"
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100 rounded-pill fw-bold py-2"
                  >
                    Login as Admin
                  </Button>
                </Form>

                <div className="text-center mt-4 small opacity-75">
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
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

const Admin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // ✅ AOS Initialize
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    // ✅ Auto Redirect if already logged in
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin) {
      navigate("/adminpanel");
    }
  }, [navigate]);

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
        localStorage.setItem("isAdmin", "true"); // ✅ Store Admin Session
        toast.success("Admin Login Successful 🎉");
        navigate("/adminpanel");
      } else {
        toast.error("Invalid Email or Password");
      }
    } catch (err) {
      toast.error("Server Error");
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

          {/* 🔹 LEFT SIDE IMAGE */}
          <Col
            lg={6}
            data-aos="fade-right"
            className="d-none d-lg-flex align-items-center justify-content-center text-white"
          >
            <div className="text-center px-4">
              <img
                src="https://thumbs.dreamstime.com/b/admin-message-working-office-table-background-93379017.jpg"
                alt="Admin"
                className="img-fluid rounded-4 shadow-lg mb-4"
                style={{ maxHeight: "420px", objectFit: "cover" }}
              />
              <h4 className="fw-bold">Admin Dashboard Access</h4>
              <p className="opacity-75">
                Manage courses, users, enrollments and analytics efficiently.
              </p>
            </div>
          </Col>

          {/* 🔹 RIGHT SIDE LOGIN FORM */}
          <Col
            lg={6}
            data-aos="fade-left"
            className="d-flex align-items-center justify-content-center"
          >
            <Card
              className="shadow-lg border-0 glass-card"
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
                  <Form.Group className="mb-3" data-aos="fade-up" data-aos-delay="100">
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="admin@example.com"
                      className="rounded-pill px-3 py-2"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" data-aos="fade-up" data-aos-delay="200">
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
                    className="w-100 rounded-pill fw-bold py-2 login-btn"
                    data-aos="zoom-in"
                    data-aos-delay="300"
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
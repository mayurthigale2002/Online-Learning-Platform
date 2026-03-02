import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const StudentEnrollment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    level: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "https://698c204a21a248a273608bc4.mockapi.io/users",
      formData
    );

    console.log("Saved Data:", response.data);

    toast.success("Enrollment Successful 🎉");

    // Clear form after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      level: "",
    });

    navigate("/coursevideo");

  } catch (error) {
    console.error("Error:", error);
    toast.error("Server error");
  }
};

  return (
  <Container
    fluid
    className="min-vh-100"
    style={{ marginTop: "70px" }}
  >
    <Row className="min-vh-100">

      {/* 🔹 LEFT SIDE IMAGE */}
      <Col
        lg={6}
        className="d-none d-lg-flex align-items-center justify-content-center"
        style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
        }}
      >
        <div className="text-center text-white px-4">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt="Learning"
            className="img-fluid rounded-4 shadow-lg mb-4"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <h2 className="fw-bold">Start Your Learning Journey 🚀</h2>
          <p className="opacity-75">
            Upgrade your skills with our structured courses and expert
            instructors.
          </p>
        </div>
      </Col>

      {/* 🔹 RIGHT SIDE FORM */}
      <Col
        lg={6}
        className="d-flex align-items-center justify-content-center"
        style={{ background: "#f8f9fa" }}
      >
        <Card
          className="border-0 shadow-lg w-100"
          style={{
            maxWidth: "500px",
            borderRadius: "20px",
            background: "white",
          }}
        >
          <Card.Body className="p-5">
            <div className="text-center mb-4">
              <h2 className="fw-bold text-primary">Enroll Now</h2>
              <p className="text-muted mb-0">
                Join your learning journey
              </p>
            </div>

            <Form onSubmit={handleSubmit}>
              <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label>Full Name</label>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label>Email Address</label>
              </Form.Floating>

              <Form.Floating className="mb-4">
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label>Mobile Number</label>
              </Form.Floating>

              {/* Level */}
              <div className="mb-4">
                <p className="fw-semibold mb-2 text-muted text-center">
                  Select Skill Level
                </p>
                <Row className="g-2">
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                    <Col xs={4} key={level}>
                      <Form.Check
                        type="radio"
                        name="level"
                        value={level}
                        label={level}
                        checked={formData.level === level}
                        onChange={handleChange}
                        className="border rounded-3 py-2 text-center shadow-sm"
                      />
                    </Col>
                  ))}
                </Row>
              </div>

              <Button
                type="submit"
                className="w-100 py-2 fw-bold rounded-pill"
                style={{
                  background:
                    "linear-gradient(90deg, #667eea, #764ba2)",
                  border: "none",
                }}
              >
                Enroll & Start Learning
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
};

export default StudentEnrollment;

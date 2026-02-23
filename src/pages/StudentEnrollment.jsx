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
      await axios.post("http://localhost:3000/enrollments", formData);
      toast.success("Enrollment Successful 🎉");
      navigate("/coursevideo");
    } catch {
      toast.error("Server error");
    }
  };

  return (
    <Container
      fluid
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        marginTop: "70px",
      }}
    >
      <Row className="w-100 justify-content-center">
        <Col lg={5} md={7}>
          <Card
            className="border-0 shadow-lg"
            style={{
              borderRadius: "20px",
              background: "rgba(255,255,255,0.95)",
            }}
          >
            <Card.Body className="p-5">
              {/* Title */}
              <div className="text-center mb-4">
                <h2 className="fw-bold text-primary">Enroll Now</h2>
                <p className="text-warning mb-0">
                  Join your learning journey 
                </p>
              </div>

              <Form onSubmit={handleSubmit}>
                {/* Name */}
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

                {/* Email */}
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

                {/* Phone */}
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

                {/* Button */}
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

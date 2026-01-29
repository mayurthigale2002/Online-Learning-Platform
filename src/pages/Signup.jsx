import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "../index.css"; 

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/posts", formData);
      setFormData({ name: "", email: "", mobile: "", password: "" });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup-page" style={{marginTop:'70px'}}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="signup-card">
              <Card.Body>
                <h2 className="text-center fw-bold mb-4 text-primary">
                  Create Your Account
                </h2>

                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleData}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleData}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Mobile No.</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter mobile number"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleData}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Create password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleData}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 fw-semibold py-2 rounded-3"
                  >
                    Sign Up
                  </Button>

                  <p className="text-center mt-3 text-muted">
                    Already have an account?{" "}
                    <NavLink to="/login" className="fw-semibold">
                      Login
                    </NavLink>
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;

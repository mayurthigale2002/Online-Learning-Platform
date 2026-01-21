import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) =>
        u.email === formData.email && u.password === formData.password
    );

    if (user) {
      localStorage.setItem("isAuth", "true");
      alert("Login Successful 🎉");
      navigate("/");
    } else {
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <Container fluid className="login-bg min-vh-100 d-flex align-items-center">
      <Row className="w-100 justify-content-center">
        <Col lg={9}>
          <Card className="border-0 shadow-lg overflow-hidden rounded-4">
            <Row className="g-0">
              <Col
                md={6}
                className="d-none d-md-flex flex-column justify-content-center align-items-center text-white login-left"
                data-aos="fade-right"
              >
                <h1 className="fw-bold mb-3">Welcome Back 👋</h1>
                <p className="text-center px-4">
                  Login to continue learning, explore new courses, and grow
                  your career with us.
                </p>
              </Col>

              <Col md={6} data-aos="fade-left">
                <Card.Body className="p-5">
                  <h2 className="fw-bold text-center mb-4 gradient-text">
                    Login Account
                  </h2>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-3"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="rounded-3"
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      className="w-100 py-2 fw-bold rounded-3 login-btn"
                    >
                      Login
                    </Button>

                    <p className="text-center mt-4 text-muted">
                      Don’t have an account?{" "}
                      <NavLink
                        to="/signup"
                        className="fw-semibold text-decoration-none text-primary"
                      >
                        Sign Up
                      </NavLink>
                    </p>
                  </Form>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

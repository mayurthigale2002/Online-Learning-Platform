import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  // 🔥 Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/posts", formData);
      setFormData({ name: "", email: "", mobile: "", password: "" });
      toast.success("Signup Successfully..! 🎉");
      navigate("/login");
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Container fluid className="min-vh-100" style={{ marginTop: "70px" }}>
      <Row className="min-vh-100">

        {/* 🔹 LEFT SIDE IMAGE */}
        <Col
          lg={6}
          data-aos="fade-right"
          className="d-none d-lg-flex align-items-center justify-content-center"
          style={{
            background: "linear-gradient(135deg, #667eea, #764ba2)",
          }}
        >
          <div className="text-center text-white px-4">
            <img
              src="https://img.freepik.com/free-photo/woman-working-computer-cafe_1303-30205.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Signup"
              className="img-fluid rounded-4 shadow-lg mb-4"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
            <h2 className="fw-bold">Join Our Learning Platform 🚀</h2>
            <p className="opacity-75">
              Create an account and start your journey toward success.
            </p>
          </div>
        </Col>

        {/* 🔹 RIGHT SIDE FORM */}
        <Col
          lg={6}
          data-aos="fade-left"
          className="d-flex align-items-center justify-content-center"
          style={{ background: "#f8f9fa" }}
        >
          <Card
            className="border-0 shadow-lg w-100"
            style={{
              maxWidth: "500px",
              borderRadius: "20px",
            }}
          >
            <Card.Body className="p-5">
              <h2 className="text-center fw-bold mb-4 text-primary">
                Create Your Account
              </h2>

              <Form onSubmit={submitHandler}>
                <Form.Group
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
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

                <Form.Group
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
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

                <Form.Group
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
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

                <Form.Group
                  className="mb-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
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
                  type="submit"
                  className="w-100 fw-semibold py-2 rounded-pill"
                  style={{
                    background:
                      "linear-gradient(90deg, #667eea, #764ba2)",
                    border: "none",
                  }}
                  data-aos="zoom-in"
                  data-aos-delay="500"
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
  );
};

export default Signup;
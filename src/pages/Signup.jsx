import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Signup = () => {
  const navigate = useNavigate();

  const BASE_URL = "https://698c204a21a248a273608bc4.mockapi.io/users";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

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
      // 1️⃣ Get all users
      const res = await axios.get(
        "https://698c204a21a248a273608bc4.mockapi.io/users",
      );

      // 2️⃣ Check duplicate email manually
      const existingUser = res.data.find(
        (user) => user.email === formData.email,
      );

      if (existingUser) {
        toast.error("Email already registered ❌");
        return;
      }

      // 3️⃣ Create new user
      await axios.post(
        "https://698c204a21a248a273608bc4.mockapi.io/users",
        formData,
      );

      toast.success("Account created successfully 🎉");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        password: "",
      });

      navigate("/login");
    } catch (error) {
      console.log("Signup Error:", error);
      toast.error("Something went wrong ❌");
    }
  };

return (
  <Container
    fluid
    className="min-vh-100 d-flex align-items-center"
    style={{
      marginTop: "70px",
      background: "linear-gradient(120deg, #667eea, #764ba2)",
    }}
  >
    <Row className="w-100">

      {/* 🔹 LEFT SIDE */}
      <Col
        lg={6}
        data-aos="fade-right"
        className="d-none d-lg-flex align-items-center justify-content-center"
      >
        <div className="text-center text-white px-5">
          <img
            src="https://img.freepik.com/free-photo/woman-working-computer-cafe_1303-30205.jpg"
            alt="Signup"
            className="img-fluid rounded-4 shadow-lg mb-4"
            style={{ maxHeight: "420px", objectFit: "cover" }}
          />
          <h1 className="fw-bold display-6">
            Welcome to <span className="text-warning">CourseWala's</span>
          </h1>
          <p className="lead opacity-75">
            Build your future with industry-ready courses and expert mentors.
          </p>
        </div>
      </Col>

      {/* 🔹 RIGHT SIDE */}
      <Col
        lg={6}
        data-aos="zoom-in"
        className="d-flex align-items-center justify-content-center"
      >
        <Card
          className="border-0 shadow-lg p-4"
          style={{
            maxWidth: "480px",
            width: "100%",
            borderRadius: "20px",
            backdropFilter: "blur(15px)",
            background: "rgba(255,255,255,0.95)",
          }}
        >
          <Card.Body>
            <h2 className="text-center fw-bold mb-4 text-primary">
              Create Account
            </h2>

            <Form onSubmit={submitHandler}>

              {/* Name */}
              <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleData}
                />
                <label>Full Name</label>
              </Form.Floating>

              {/* Email */}
              <Form.Floating className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleData}
                />
                <label>Email Address</label>
              </Form.Floating>

              {/* Mobile */}
              <Form.Floating className="mb-3">
                <Form.Control
                  type="tel"
                  placeholder="Mobile"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleData}
                />
                <label>Mobile Number</label>
              </Form.Floating>

              {/* Password */}
              <Form.Floating className="mb-4">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleData}
                />
                <label>Password</label>
              </Form.Floating>

              {/* Button */}
              <Button
                type="submit"
                className="w-100 fw-bold py-2 rounded-pill shadow"
                style={{
                  background:
                    "linear-gradient(90deg, #667eea, #764ba2)",
                  border: "none",
                  transition: "0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.opacity = "0.9")
                }
                onMouseOut={(e) =>
                  (e.target.style.opacity = "1")
                }
              >
                Sign Up
              </Button>

              <p className="text-center mt-4 mb-0">
                Already have an account?{" "}
                <NavLink
                  to="/login"
                  className="fw-semibold text-decoration-none text-primary"
                >
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

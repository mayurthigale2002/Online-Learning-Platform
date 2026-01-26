import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BigCourse from "./BegCourse";


const StudentEnrollment = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    level: "",
  });



  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/enrollments", {
        ...formData
      });

      alert("Enrollment Successful 🎉");

      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        level: "",
      });
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center">
        <Col md={7}>
          <Card className="shadow-lg">
            <Card.Body>
              <h3 className="text-center mb-4 text-primary fw-bold">
                Student Enrollment Form
              </h3>

              <Form onSubmit={handleSubmit}>
                <Form.Control
                  className="mb-3"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  className="mb-3"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  className="mb-3"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />


                <Row className="mb-3">
                  <Col md={4}>
                    <Form.Check
                      type="radio"
                      label="Beginner"
                      name="level"
                      value="Beginner"
                      onChange={handleChange}
                      checked={formData.level === "Beginner"}
                    />
                  </Col>

                  <Col md={4}>
                    <Form.Check
                      type="radio"
                      label="Intermediate"
                      name="level"
                      value="Intermediate"
                      onChange={handleChange}
                      checked={formData.level === "Intermediate"}
                    />
                  </Col>

                  <Col md={4}>
                    <Form.Check
                      type="radio"
                      label="Advanced"
                      name="level"
                      value="Advanced"
                      onChange={handleChange}
                      checked={formData.level === "Advanced"}
                    />
                  </Col>
                </Row>
                {/* <Form.Select
                  className="mb-3"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Course</option>
                  <option>Beg:- HTML</option>
                  <option>Beg:- CSS</option>
                  <option>Beg:- Javascript</option>
                  <option>Beg:- Bootstrap</option>
                  <option>Beg:- Talwind</option>
                  <option>Int:- React</option>
                  <option>Int:- Node.js</option>
                  <option>Int:- Java</option>
                  <option>Int:- Python</option>
                  <option>Adv:- Full Stack</option>
                  <option>Adv:- System Design</option>
                  <option>Adv:- Microservices</option>
                  <option>Adv:- Advanced Java</option>
                </Form.Select> */}

                <Button type="submit" className="w-100 rounded-pill" onClick={() => navigate("/coursevideo")}>
                  Enroll Now
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


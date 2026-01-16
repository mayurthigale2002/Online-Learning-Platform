import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import studentCourses from "../../data/stdCourses";
import { useNavigate } from "react-router-dom";

const BegLearning = () => {

  const navigate = useNavigate();
  return (
    <>
      <h1
        className="text-center text-success mb-5"
        style={{ marginTop: "100px" }}
      >
        Welcome To Beginner Learning Courses..
      </h1>
      <Container className="cont text-center">
        <Row className="mb-4">
          {studentCourses.map((course) => (
            <Col md={4} key={course.id}>
              <Card className="certification-card mb-4 shadow-sm bg-dark text-white">
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <small className="text-warning">
                  {course.duration} 
                </small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <button
      className="btn btn-outline-success text-primary fw-bold mb-3 p-4 border-2"
      onClick={() => navigate("/studentenrollment")}
    >
      Enroll Your Course Now..
    </button>
    </Container>

    <style>
        {`
          .certification-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .certification-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.6);
          }
        `}
      </style>
    </>
  );
};

export default BegLearning;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const instructors = [
  {
    name: "Dr. Johny Smith",
    role: "Professor, Computer Science",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwt-ug0Y3qqEpvxisGGWAp7Q-6dNHjyPSTA&s",
  },
  {
    name: "Sarah Johnson",
    role: "Senior Software Engineer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyGkGZG7euxctAfi5VJNgoyoIrJZhWb-w1FA&s",
  },
  {
    name: "Michael Lee",
    role: "AI & ML Specialist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cjMUQ0kqajdy4E_jMPZwNA2-ULNH6_8xCA&s",
  },
  {
    name: "Emma Brown",
    role: "Cloud Architect",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8KELmujM3zNrOZXiv0IhTXfplJUSzTc5Kw&s",
  },
];

const Instructor = () => {
  return (
    <div className="container-fluid bg-dark pt-5 pb-5">
      <h1 className="text-center fw-bold mb-2 mt-5 text-warning fw-bold">
        Top Instructors
      </h1>
      <p className="text-center text-white mt-5 mb-4">
        “Learn directly from world-class instructors who bring real-world
        expertise and academic excellence into every lesson.”
      </p>

      <Row>
        {instructors.map((instructor, index) => (
          <Col md={6} sm={6} xs={12} key={index} className="mb-4">
            <Card className="h-100 shadow-lg border-3 text-center mt-4">
              <Card.Img
                variant="top"
                src={instructor.image}
                className="rounded-4 mx-auto mt-5"
                style={{ width: "420px", height: "220px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="text-success fw-bold mt-3">
                  {instructor.name}
                </Card.Title>
                <Card.Text className="text-danger  mb-4 mt-3">
                  {instructor.role}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Instructor;

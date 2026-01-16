import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import certificationsData from "../data/certificationsData";

const Certifications = () => {
  return (
    <>
      <h1
        className="text-center text-warning fw-bold mb-5"
        style={{ marginTop: "100px" }}
      >
        Our Certifications
      </h1>

      <h3 className="text-center text-secondary mb-5">
        Get verified certificates to boost your career. Explore
        industry-recognized certifications.
      </h3>

      <Container>
        <Row className="g-4">
          {certificationsData.map((cert) => (
            <Col md={4} key={cert.id}>
              <Card className="certification-card h-100 shadow-sm border-2 bg-dark text-white ">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{cert.title}</Card.Title>

                  <Card.Subtitle className="mb-2 text-warning">
                    {cert.provider}
                  </Card.Subtitle>

                  <Card.Text className="text-white-50">
                    {cert.description}
                  </Card.Text>

                  <p className="small mb-1">
                    ⏱ Duration: <strong>{cert.duration}</strong>
                  </p>

                  <p className="small mb-2">
                    🎯 Level: <strong>{cert.level}</strong>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
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

export default Certifications;

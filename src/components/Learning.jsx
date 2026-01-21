import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AOS from "aos";

const Learning = () => {
  const navigate = useNavigate();
      AOS.init()
  return (
    <>

      <div
        className="py-5 text-white text-center"
        style={{marginTop: "70px", background: "black"}}
       
      >
        <Container >
          <h6 className="section-subtitle" >
            <span></span> LEARNING WITH US <span></span>
          </h6>
           <p className="text-white fs-5 mt-5">Learn seamlessly on mobile, tablet, or desktop without losing progress.</p>
          <h1 className="fw-bold display-5 mt-5 text-warning" data-aos="zoom-in">Learn Anywhere</h1>
          <p className="lead mt-3" data-aos="fade-up">
            Access courses online anytime, from any device.
          </p>
          <Button
          data-aos="fade-up"
            variant="success"
            size="lg"
            className="mt-3 fw-semibold"
            onClick={() => navigate("/courses")}
          >
            Explore Courses
          </Button>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold">Why Learn Anywhere?</h2>
            <p className="text-muted">
              Flexible learning designed to fit your lifestyle
            </p>
          </Col>
        </Row>

        <Row className="g-4" >
          <Col md={4} data-aos="fade-up">
            <Card className="h-100 shadow-sm border-0 text-center p-3 bg-dark text-white">
              <Card.Body>
                <i className="bi bi-phone display-4 text-primary"></i>
                <Card.Title className="mt-3 fw-semibold">
                  Multi-Device Access
                </Card.Title>
                <Card.Text className="text-white-50">
                  Learn seamlessly on mobile, tablet, or desktop without losing
                  progress.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="fade-up">
            <Card className="h-100 shadow-sm border-0 text-center p-3 bg-dark text-white">
              <Card.Body>
                <i className="bi bi-clock-history display-4 text-success"></i>
                <Card.Title className="mt-3 fw-semibold">
                  Learn at Your Pace
                </Card.Title>
                <Card.Text className="text-white-50">
                  Study anytime with self-paced courses that fit your schedule.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="fade-up">
            <Card className="h-100 shadow-sm border-0 text-center p-3 bg-dark text-white">
              <Card.Body>
                <i className="bi bi-cloud-check display-4 text-warning"></i>
                <Card.Title className="mt-3 fw-semibold">
                  Cloud Based Learning
                </Card.Title>
                <Card.Text className="text-white-50">
                  Your progress is securely saved and synced across all devices.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="py-5 text-center text-white"  style={{marginTop: "70px", background: "black"}} >
        <Container >
          <h3 className="fw-bold" >Start Learning Without Limits</h3>
          <p className="mt-2">
            Join thousands of learners and upgrade your skills from anywhere.
          </p>
        </Container>
        </div>


    </>
  );
};

export default Learning;

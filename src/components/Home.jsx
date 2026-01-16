import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";
import "../index.css";
import AOS from "aos";

const Home = () => {
  const navigate = useNavigate();
 
      AOS.init()

  return (
    <div className="mb-0"  style={{marginTop: "70px", background: "black"}} >
      <Carousel fade interval={2000} controls indicators data-aos="fade-zoom-in-up">
        <Carousel.Item>
          <div className="hero-container">
            <img src="/images/c-3.jpg" alt="Slide 1" className="hero-img" />
            <div className="hero-overlay"></div>

            <div className="hero-content text-warning">
              <h6>BEST ONLINE COURSES</h6>
              <h1>
                The Best Online <br /> Learning Platform
              </h1>
              <p>
                Learn from top universities and global instructors anytime,
                anywhere.
              </p>
              <button
                className="btn btn-info fw-bold"
                onClick={() => navigate("/signup")}
              >
                Join Now
              </button>
            </div>
          </div>
        </Carousel.Item>

        {/* SLIDE 2 */}
        <Carousel.Item>
          <div className="hero-container" >
            <img src="/images/c-4.jpg" alt="Slide 2" className="hero-img" />
            <div className="hero-overlay"></div>

            <div className="hero-content text-dark">
              <h6>UPSKILL YOURSELF</h6>
              <h1>
                Learn From <br /> Industry Experts
              </h1>
              <p>
                Build job-ready skills in Web Development, AI, Cloud, and more.
              </p>
              <button
                className="btn btn-info me-3 fw-bold"
                onClick={() => navigate("/Courses")}
              >
                Explore Courses
              </button>
            </div>
          </div>
        </Carousel.Item>

        {/* SLIDE 3 */}
        <Carousel.Item>
          <div className="hero-container">
            <img src="/images/c-5.jpg" alt="Slide 3" className="hero-img" />
            <div className="hero-overlay"></div>

            <div className="hero-content">
              <h6>CERTIFIED LEARNING</h6>
              <h1>
                Grow Your Career <br /> With Certification
              </h1>
              <p>
                Earn globally recognized certificates and boost your resume.
              </p>
              <button
                className="btn btn-info fw-bold"
                onClick={() => navigate("/Certification")}
              >
                View Certifications
              </button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="container"  data-aos="fade-up">
        <div className="row mt-5 text-center mb-5 mx-auto">
          <div className="col-md-4">
            <button
              className="btn btn-secondary border border-danger p-4 mb-2 fw-bold"
              onClick={() => navigate("/StdLearning")}
            >
              STUDENTS
            </button>
          </div>

          <div className="col-md-4"  data-aos="fade-up">
            <button
              className="btn btn-warning border border-danger p-4 mb-2 fw-bold"
              onClick={() => navigate("/ProfLearning")}
            >
              PROFESSIONALS
            </button>
          </div>

          <div className="col-md-4"  data-aos="fade-up">
            <button
              className="btn btn-success border border-danger p-4 fw-bold"
              onClick={() => navigate("/BegLearning")}
            >
              BEGINNERS
            </button>
          </div>
        </div>
      </div>

      <section className="py-5"  data-aos="fade-up">
        <Container>
          <Row className="text-center text-white mb-4">
            <h2 className="fw-bold">Why Learn With Us?</h2>
            <p className="text-warning">
              Flexible, hands-on, and career-focused courses
            </p>
          </Row>

          <Row className="g-4">
            <Col md={4} data-aos="fade-right">
              <Card className="h-100 shadow-sm text-center border-0">
                <Card.Body>
                  <i className="bi bi-laptop display-4 text-primary"></i>
                  <Card.Title className="mt-3">Learn Anywhere</Card.Title>
                  <Card.Text>
                    Access courses online anytime, from any device.
                  </Card.Text>
                  <Button className="btn btn-outline-secondary">
                    <NavLink
                      to="/learning"
                      className="text-white text-decoration-none"
                    >
                      Visit Now..
                    </NavLink>
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} data-aos="fade-up">
              <Card className="h-100 shadow-sm text-center border-0">
                <Card.Body>
                  <i className="bi bi-people display-4 text-primary"></i>
                  <Card.Title className="mt-3">Top Instructors</Card.Title>
                  <Card.Text>
                    Learn from industry experts and university professors.
                  </Card.Text>
                  <Button className="btb btn-outline-secondary">
                    <NavLink
                      to="/instructor"
                      className="text-white text-decoration-none"
                    >
                      View Instructors..
                    </NavLink>
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} data-aos="fade-left">
              <Card className="h-100 shadow-sm text-center border-0">
                <Card.Body>
                  <i className="bi bi-award display-4 text-primary"></i>
                  <Card.Title className="mt-3">Certifications</Card.Title>
                  <Card.Text>
                    Get verified certificates to the boost your career.
                  </Card.Text>
                  <Button className="btb btn-outline-secondary">
                    <NavLink
                      to="/certification"
                      className="text-white text-decoration-none"
                    >
                      Visit Certificates..
                    </NavLink>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>

  );
};

export default Home;

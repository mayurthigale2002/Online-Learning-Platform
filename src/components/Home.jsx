import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div style={{ marginTop: "70px", background: "#000" }}>
      <Carousel fade interval={3000} data-aos="zoom-in">
        {[
          {
            img: "/images/c-3.jpg",
            title: "The Best Online Learning Platform",
            subtitle: "BEST ONLINE COURSES",
            btn: "Join Now",
            path: "/signup",
          },
          {
            img: "/images/c-4.jpg",
            title: "Learn From Industry Experts",
            subtitle: "UPSKILL YOURSELF",
            btn: "Explore Courses",
            path: "/Courses",
          },
          {
            img: "/images/c-5.jpg",
            title: "Grow Your Career With Certification",
            subtitle: "CERTIFIED LEARNING",
            btn: "View Certifications",
            path: "/Certification",
          },
        ].map((slide, i) => (
          <Carousel.Item key={i}>
            <div className="hero-container">
              <img src={slide.img} className="hero-img" alt="hero" />
              <div className="hero-overlay"></div>
              <div className="hero-content glass text-warning p-4">
                <h6>{slide.subtitle}</h6>
                <h1>{slide.title}</h1>
                <Button
                  variant="info"
                  size="lg"
                  onClick={() => navigate(slide.path)}
                >
                  {slide.btn}
                </Button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="py-5">
        <Row className="g-4 text-center">
          {[
            ["STUDENTS", "/StdLearning", "secondary"],
            ["PROFESSIONALS", "/ProfLearning", "warning"],
            ["BEGINNERS", "/BegLearning", "success"],
          ].map(([text, path, variant], i) => (
            <Col md={4} key={i} data-aos="fade-up">
              <Button
                className="w-100 p-4 fw-bold shadow-lg"
                variant={variant}
                onClick={() => navigate(path)}
              >
                {text}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>

      <section className="py-5 text-white">
        <Container>
          <Row className="text-center mb-5">
            <h2 className="fw-bold gradient-text">Why Learn With Courseraa?</h2>
            <p className="text-warning">
              Career-focused, flexible & practical learning
            </p>
          </Row>

          <Row className="g-4">
            {[
              ["bi-laptop", "Learn Anywhere", "24/7 access on any device"],
              ["bi-people", "Expert Mentors", "Industry professionals"],
              ["bi-award", "Certification", "Globally accepted"],
            ].map(([icon, title, desc], i) => (
              <Col md={4} key={i} data-aos="zoom-in">
                <Card className="glass-card h-100 text-center">
                  <Card.Body>
                    <i className={`bi ${icon} display-4 text-info`}></i>
                    <Card.Title className="mt-3">{title}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-dark">
        <Container>
          <Row className="text-center text-white mb-5">
            <h2 className="fw-bold">Featured Courses</h2>
            <p className="text-warning">Trending skills for 2026</p>
          </Row>

          <Row className="g-4">
  {[
    {
      title: "Full Stack Development",
      img: "/images/full.jpg",
    },
    {
      title: "AI & Machine Learning",
      img: "/images/ai.jpg",
    },
    {
      title: "Cloud & DevOps",
      img: "/images/cloud.jpg",
    },
  ].map((course, i) => (
    <Col md={4} key={i} data-aos="flip-left">
      <Card className="course-card h-100">
        <Card.Img src={course.img} alt={course.title} />
        <Card.Body className="text-center">
          <Card.Title>{course.title}</Card.Title>
          <Button
            variant="outline-info"
            onClick={() => navigate("/Courses")}
          >
            Explore
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

        </Container>
      </section>

      <section className="py-5 text-white">
        <Container>
          <Row className="text-center mb-5">
            <h2 className="fw-bold gradient-text">How It Works</h2>
          </Row>

          <Row className="g-4 text-center">
            {[
              ["1", "Sign Up", "Create your free account"],
              ["2", "Choose Course", "Pick what you love"],
              ["3", "Get Certified", "Grow your career"],
            ].map(([step, title, desc], i) => (
              <Col md={4} key={i} data-aos="fade-up">
                <div className="step-circle">{step}</div>
                <h5 className="mt-3">{title}</h5>
                <p>{desc}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-gradient">
        <Container>
          <Row className="text-center text-white mb-5">
            <h2 className="fw-bold">What Our Students Say</h2>
          </Row>

          <Row className="g-4">
            {["Amazing platform!", "Got my first job!", "Best mentors"].map(
              (text, i) => (
                <Col md={4} key={i} data-aos="zoom-in">
                  <Card className="glass-card text-center">
                    <Card.Body>
                      <p>“{text}”</p>
                      <h6 className="text-info">★★★★★</h6>
                    </Card.Body>
                  </Card>
                </Col>
              )
            )}
          </Row>
        </Container>
      </section>

      <section className="py-5 text-center bg-secondary">
        <Container>
          <h2 className="fw-bold">Ready to Start Your Journey? 🚀</h2>
          <p>Learn. Build. Get Certified.</p>
          <Button
            size="lg"
            variant="dark"
            onClick={() => navigate("/signup")}
          >
            Get Started Free
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Home;

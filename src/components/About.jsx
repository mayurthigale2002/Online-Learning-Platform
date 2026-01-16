import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";

const About = () => {
  
    AOS.init();



  return (
    <div className="text-light py-5"   style={{marginTop: "70px", background: "black"}}>
      <Container>
        <div className="text-center mb-5">
          <h6 className="section-subtitle">
            <span></span> ABOUT US <span></span>
          </h6>
        </div>
        <Row className="mb-5 text-center">
          <Col>
            
            <p className="text-white fs-5">
              Learn from the world’s best universities and companies
            </p>
          </Col>
        </Row>

              
        <Row className="align-items-center mb-5"  data-aos="fade-up">
          <Col md={6}>
            <h1 className="fw-bold mb-3 text-secondary">Our Mission</h1>
            <p className="text-white">
              Coursera’s mission is to provide universal access to the world’s
              best education. We partner with leading universities and
              organizations to offer online courses, certifications, and degree
              programs that help learners grow personally and professionally.
            </p>
            <p className="text-white">
              Whether you want to advance your career, learn new skills, or
              explore your passion, Coursera makes learning accessible,
              flexible, and affordable.
            </p>
          </Col>

          <Col md={6}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
              alt="Online Learning"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        <Row className="text-center mb-5" >
          <Col md={3} data-aos="fade-right">
            <Card className="bg-secondary text-light shadow border-0">
              <Card.Body>
                <h3 className="fw-bold text-warning">100M+</h3>
                <p>Learners</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} data-aos="fade-right">
            <Card className="bg-secondary text-light shadow border-0">
              <Card.Body>
                <h3 className="fw-bold text-warning">300+</h3>
                <p>Universities</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}data-aos="fade-left">
            <Card className="bg-secondary text-light shadow border-0">
              <Card.Body>
                <h3 className="fw-bold text-warning">10,000+</h3>
                <p>Courses</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}data-aos="fade-left">
            <Card className="bg-secondary text-light shadow border-0">
              <Card.Body>
                <h3 className="fw-bold text-warning">Professional</h3>
                <p>Certificates</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5" data-aos="fade-up">
          <Col>
            <h2 className="fw-bold text-center mb-4">Our Partners</h2>
            <p className="text-center text-secondary mb-4">
              Learn from top universities and leading global companies
            </p>

            <Row className="text-center">
              <Col>Google</Col>
              <Col>Meta</Col>
              <Col>IBM</Col>
              <Col>Microsoft</Col>
              <Col>Amazon</Col>
            </Row>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <h1 className="fw-bold mb-3 mt-4 text-success fw-bold">Our Vision</h1>
            <p className="text-white-50 text-center mx-auto mt-4 fs-5" style={{width:"70%"}}>
              We believe learning is the source of human progress. Our goal is
              to empower learners around the world to achieve their dreams
              through high-quality online education.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="text-light py-5"
      style={{ marginTop: "70px", background: "black" }}
    >
      <Container>

        <div className="text-center mb-5">
          <h6 className="section-subtitle">
            <span></span> ABOUT US <span></span>
          </h6>
          <p className="text-white fs-5 mt-3">
            Learn from the world’s best universities and companies
          </p>
        </div>

        <Row className="align-items-center mb-5" data-aos="fade-up">
          <Col md={6}>
            <h1 className="fw-bold mb-3 text-secondary">Our Mission</h1>
            <p className="text-white">
              CourseWala's’s mission is to provide universal access to world-class
              education through industry-aligned courses and certifications.
            </p>
            <p className="text-white">
              We help learners gain real-world skills and confidence to succeed
              in today’s fast-changing job market.
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
        <Row className="text-center mb-5">
          {[
            ["100M+", "Learners"],
            ["300+", "Universities"],
            ["10,000+", "Courses"],
            ["Professional", "Certificates"],
          ].map(([title, label], i) => (
            <Col md={3} key={i} data-aos={i < 2 ? "fade-right" : "fade-left"}>
              <Card className="bg-secondary text-light shadow border-0 h-100">
                <Card.Body>
                  <h3 className="fw-bold text-warning">{title}</h3>
                  <p>{label}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mb-5" data-aos="fade-up">
          <Col>
            <h2 className="fw-bold text-center mb-3">Meet Our Mentors</h2>
            <p className="text-center text-secondary mb-5">
              Learn directly from experienced professionals & industry leaders
            </p>

            <Row className="g-4">
              {[
                {
                  name: "Rahul Sharma",
                  role: "Senior Full Stack Developer",
                  skill: "React • Node • AWS",
                  img: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  name: "Anita Desai",
                  role: "AI & Data Science Expert",
                  skill: "Python • ML • AI",
                  img: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  name: "Michael Brown",
                  role: "Cloud & DevOps Architect",
                  skill: "Azure • Docker • Kubernetes",
                  img: "https://randomuser.me/api/portraits/men/65.jpg",
                },
                {
                  name: "Sneha Patil",
                  role: "UI/UX Designer",
                  skill: "Figma • UX Research • Prototyping",
                  img: "https://randomuser.me/api/portraits/women/68.jpg",
                },
                {
                  name: "Arjun Mehta",
                  role: "Cybersecurity Specialist",
                  skill: "Ethical Hacking • Network Security",
                  img: "https://randomuser.me/api/portraits/men/75.jpg",
                },
                {
                  name: "Emily Watson",
                  role: "Product Manager",
                  skill: "Agile • Scrum • Roadmapping",
                  img: "https://randomuser.me/api/portraits/women/52.jpg",
                },
              ].map((mentor, i) => (
                <Col md={4} key={i} data-aos="zoom-in">
                  <Card className="mentor-card h-100 text-center border-0 shadow">
                    <Card.Body>
                      <img
                        src={mentor.img}
                        alt={mentor.name}
                        className="rounded-circle mb-3 mentor-img"
                      />
                      <h5 className="fw-bold">{mentor.name}</h5>
                      <p className="text-warning mb-1">{mentor.role}</p>
                      <p className="text-white-50">{mentor.skill}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <h1 className="fw-bold mb-3 mt-4 text-success">Our Vision</h1>
            <p
              className="text-white-50 mx-auto mt-4 fs-5"
              style={{ width: "70%" }}
            >
              To create a global learning ecosystem where anyone can gain
              skills, transform careers, and unlock new opportunities.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

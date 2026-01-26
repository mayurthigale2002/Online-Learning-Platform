import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../index.css";
import AOS from "aos";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert("Your message has been submitted successfully!"); 
    e.target.reset();
  };

  return (
    <section
      className="contact-section py-5 text-white"
      style={{ marginTop: "70px", background: "black" }}
    >
      <Container>
        <div className="text-center mb-5">
          <h6 className="section-subtitle">
            <span></span> CONTACT US <span></span>
          </h6>
          <p className="text-white fs-5 mt-5">
            Get In Touch and Contact For Any Query to companies.
          </p>
        </div>

        <Row className="g-4 mb-4 text-center">
          <Col md={4} data-aos="fade-right">
            <i className="bi bi-geo-alt-fill info-icon"></i>
            <div className="item d-flex align-items-center justify-content-center">
              <div>
                <h3 className="text-warning">Office</h3>
                <p className="text-primary">JM Road, Pune, Maharashtra.</p>
              </div>
            </div>
          </Col>

          <Col md={4} data-aos="fade-up">
            <i className="bi bi-telephone-fill info-icon"></i>
            <div className="item d-flex align-items-center justify-content-center">
              <div>
                <h3 className="text-warning">Mobile</h3>
                <p className="text-primary">+91 8600832098</p>
              </div>
            </div>
          </Col>

          <Col md={4} data-aos="fade-left">
            <i className="bi bi-envelope-fill info-icon"></i>
            <div className="item d-flex align-items-center justify-content-center">
              <div>
                <h3 className="text-warning">Email </h3>
                <p className="text-primary">mayur@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5" data-aos="fade-up">
          <Col lg={8}>
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Control type="text" placeholder="Your Name" required />
                </Col>
                <Col md={6}>
                  <Form.Control type="email" placeholder="Your Email" required />
                </Col>
                <Col md={12}>
                  <Form.Control type="text" placeholder="Subject" required />
                </Col>
                <Col md={12}>
                  <Form.Control as="textarea" rows={6} placeholder="Message" required />
                </Col>
                <Col md={12}>
                  <Button type="submit" className="send-btn w-100">
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        <Row className="mb-4 mt-5" data-aos="fade-up">
          <Col lg={12}>
            <div className="map-container mx-auto text-center">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906370252!2d73.69814927513374!3d18.524870615022547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1768239724293!5m2!1sen!2sin"
                width="90%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

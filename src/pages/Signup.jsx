import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: ""
  });

  const handleData = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
   console.log(formData); 
  }

  const submitHandler =async (e) => {
    try{
      e.preventDefault(); 
      await axios.post("http://localhost:3000/posts",formData);
      

      setFormData({
         name: "",
    email: "",
    mobile: "",
    password: ""
      })

        navigate("/login");

    }catch(err){
      console.log(err);
    }
    console.log(formData);
  }


   useEffect(()=>{
      submitHandler();
    },[] )




  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100 mt-5">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">
              <h2 className="text-center fw-bold mb-4 text-primary">
                Create Your Account
              </h2>

              <Form onSubmit={(e)=>submitHandler(e)}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e)=>handleData(e)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e)=>handleData(e)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mobile No.</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter mobile number"
                    id="mobile"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={(e)=>handleData(e)}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Create password"
                    id="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={(e)=>handleData(e)}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 fw-semibold py-2 rounded-3"> 
                  Sign Up
                </Button>

                <p className="text-center mt-3 text-muted">
                  Already have an account?{" "}
                  <span className="text-primary fw-semibold cursor-pointer">
                    <NavLink to="/login">Login</NavLink>
                  </span>
                </p>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;

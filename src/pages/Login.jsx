import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {

  const navigate = useNavigate();


  const [fetchData, setFetchData] = useState([]);

  const getData =async () => {
    try{
      const result = await axios.get("http://localhost:3000/posts")
        setFetchData(result.data)

        console.log(result.data);

    }catch(err){
      console.log(err);
    }
  };
  const SunmitHand = (e) => {
    e.preventDefault();

    const user = fetchData.find((item=> item.email === formData.email && item.password === formData.password)

    );
   if (user) {
  alert("Login Successful");

  // store login status
  localStorage.setItem("isAuth", "true");

  navigate("/");
} else {
  alert("Invalid Credentials");
}

  };

   useEffect(()=>{
      getData();
   },[] )






// -------------------------------------------------------------------------------------------------------------------
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handlerData = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
    console.log(formData);
    
  }



  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100 ">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">
              <h2 className="text-center fw-bold mb-4 text-primary">
                Welcome Back
              </h2>

              <Form onSubmit={(e)=>SunmitHand(e)}>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e)=>handlerData(e)}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={(e)=>handlerData(e)}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 fw-semibold py-2 rounded-3"
                  onSubmit={(e)=>SubmitHand(e)}
                >
                  Login
                </Button>

                <p className="text-center mt-3 text-muted">
                  Don’t have an account?{" "}
                  <span className="text-primary fw-semibold cursor-pointer">
                    <NavLink to="/signup">Sign up</NavLink>
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

export default Login;

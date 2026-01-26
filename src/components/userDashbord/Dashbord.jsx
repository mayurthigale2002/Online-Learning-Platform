
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import axios from "axios";

const Dashbord = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your API
    axios.get("http://localhost:3000/posts")
      .then((response) => {
        // Assuming the API returns a single user object, adjust if it's an array
        setUserInfo(response.data[0]); // If response.data is an array of users
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  if (!userInfo) {
    return <p className="text-center mt-5">No user data found.</p>;
  }

  return (
    <Container style={{ marginTop: "100px" }}>
      {/* Profile Header */}
      <Card className="mb-4 p-4 shadow-sm">
        <Row className="align-items-center">
          <Col xs={12} md={3} className="text-center">
            <img
              src={"https://via.placeholder.com/120"}
              alt="Profile"
              className="rounded-circle border border-primary"
            />
          </Col>
          <Col xs={12} md={9}>
            <h2>{userInfo.name}</h2>
            <p className="text-muted">{userInfo.bio}</p>
          </Col>
        </Row>
      </Card>

      {/* Info Table */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h5>User Information</h5>
          <Table striped bordered hover responsive>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{userInfo.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{userInfo.email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{userInfo.mobile}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Stats Section */}
      <Row>
        <Col md={4} className="mb-3">
          <Card className="text-center shadow-sm p-3">
            <h5>Courses</h5>
            <p className="h4">{userInfo.courses}</p>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="text-center shadow-sm p-3">
            <h5>Completed</h5>
            <p className="h4">{userInfo.completed}</p>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="text-center shadow-sm p-3">
            <h5>Progress</h5>
            <p className="h4">{userInfo.progress}</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashbord;

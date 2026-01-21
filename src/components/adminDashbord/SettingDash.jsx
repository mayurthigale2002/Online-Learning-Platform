import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from "axios";


const SettingDash = () => {
  const [formData, setFormData] = useState({
    siteName: "",
    adminEmail: "",
    themeColor: ""
  });

  const [savedData, setSavedData] = useState(" ");


  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get("http://localhost:3000/settings");
        if (res.data.length > 0) {
          setSavedData(res.data[0]);
          setFormData(res.data[0]);
        }
      } catch (err) {
        console.log("Error fetching settings:", err);
      }
    };
    fetchSettings();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (savedData && savedData.id) {

        await axios.put(`http://localhost:3000/settings/${savedData.id}`, formData);
        alert("Settings updated successfully!");
      } else {

        const res = await axios.post("http://localhost:3000/settings", formData);
        setSavedData(res.data);
        alert("Settings saved successfully!");
      }
    } catch (err) {
      console.log(err);
      alert("Failed to save settings.");
    }
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="mb-4">Settings Dashboard</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Site Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="siteName"
                    value={formData.siteName}
                    onChange={handleChange}
                    placeholder="Enter site name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Admin Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="adminEmail"
                    value={formData.adminEmail}
                    onChange={handleChange}
                    placeholder="Enter admin email"
                    required
                  />
                </Form.Group>

                <Button type="submit" className="w-100">
                  {savedData ? "Update Settings" : "Save Settings"}
                </Button>
              </Form>

            </Card.Body>
          </Card>
        </Col>
        <div className="col-md-5">
          <div className="card border border-2 rounded-4 shadow-sm p-4">
            <h5 className="fw-bold mb-3">
              <i className="fa-solid fa-circle-info me-2"></i>
              Information
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">✔ Update platform details</li>
              <li className="mb-2">✔ Change admin preferences</li>
              <li className="mb-2">✔ Enable maintenance mode</li>
              <li className="mb-2">✔ Manage dashboard appearance</li>
            </ul>
           </div>
         </div>
      </Row>
    </Container>
     
  );
};

export default SettingDash;

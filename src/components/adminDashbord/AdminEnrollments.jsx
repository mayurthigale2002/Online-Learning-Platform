import React, { useEffect, useState } from "react";
import { Container, Table, Badge } from "react-bootstrap";
import axios from "axios";

const AdminEnrollments = () => {
  const [students, setStudents] = useState([]);

  const getEnrollments = async () => {
    const res = await axios.get("http://localhost:3000/enrollments");
    setStudents(res.data);
  };

  useEffect(() => {
    getEnrollments();
  }, []);

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4">📋 Enrolled Students</h2>

      <Table striped bordered hover responsive className="shadow">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Level</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Badge bg="success">{item.course}</Badge>
              </td>
              <td>{item.level}</td>
              <td>{new Date(item.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminEnrollments;

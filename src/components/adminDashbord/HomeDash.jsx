import axios from "axios";
import React, { useEffect, useState } from "react";

const HomeDash = () => {


  const [totalUsers, setTotalUsers] = useState(0);
  const [totalEnrollments, setTotalEnrollments] = useState(0);


  useEffect(() => {
      axios.get("http://localhost:3000/posts")
      
      .then((res) => setTotalUsers(res.data.length))
      .catch((err) => console.error(err));
  }, []);

  useEffect(()=>{
      axios.get("http://localhost:3000/enrollments")
      .then((res) => setTotalEnrollments(res.data.length))
      .catch((err) => console.error(err))
  },[]);

  



  return (
    <div className="p-4">
      {/* Heading */}
      <h2 className="mb-4 fw-bold">
        <i className="fa-solid fa-house me-2"></i>
        Dashboard Overview
      </h2>

      {/* Stats Cards */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border border-2 rounded-4 shadow-sm text-center p-3">
            <i className="fa-solid fa-users fs-1 text-primary mb-2"></i>
            <h5>Total Users :</h5>
            <h3>{totalUsers}</h3>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border border-2 rounded-4 shadow-sm text-center p-3">
            <i className="fa-solid fa-users fs-1 text-primary mb-2"></i>
            <h5>Total Enrollments :</h5>
            <h3>{totalEnrollments}</h3>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border border-2 rounded-4 shadow-sm text-center p-3">
            <i className="fa-solid fa-book fs-1 text-success mb-2"></i>
            <h5>Total Courses</h5>
            <h3 className="fw-bold">25</h3>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border border-2 rounded-4 shadow-sm text-center p-3">
            <i className="fa-solid fa-chart-line fs-1 text-warning mb-2"></i>
            <h5>Visitors</h5>
            <h3 className="fw-bold">320</h3>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border border-2 rounded-4 shadow-sm text-center p-3">
            <i className="fa-solid fa-certificate fs-1 text-danger mb-2"></i>
            <h5>Certificates</h5>
            <h3 className="fw-bold">21</h3>
          </div>
        </div>
    </div>
    </div>
  );
};

export default HomeDash;

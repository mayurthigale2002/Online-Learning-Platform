import React, { useEffect, useState } from "react";
import axios from "axios";

const AnalyticsDash = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
  const [activeCourses, setActiveCourses] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        // TOTAL USERS
        const usersRes = await axios.get("http://localhost:3000/posts");
        setTotalUsers(usersRes.data.length);

        // COURSES DATA
        const coursesRes = await axios.get("http://localhost:3000/courses");
        setTotalCourses(coursesRes.data.length);

        // ACTIVE COURSES
        const active = coursesRes.data.filter(
          (course) => course.active !== false
        ).length;
        setActiveCourses(active);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) return <div className="p-4">Loading analytics...</div>;

  return (
    <div className="p-4">
      <h2 className="fw-bold mb-4">
        <i className="fa-solid fa-chart-line me-2"></i>
        Analytics & Reports
      </h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card border border-2 rounded-4 text-center p-3 shadow-sm">
            <i className="fa-solid fa-users fs-1 text-primary"></i>
            <h6 className="mt-2">Total Users</h6>
            <h3 className="fw-bold">{totalUsers}</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border border-2 rounded-4 text-center p-3 shadow-sm">
            <i className="fa-solid fa-book fs-1 text-success"></i>
            <h6 className="mt-2">Total Courses</h6>
            <h3 className="fw-bold">{totalCourses}</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border border-2 rounded-4 text-center p-3 shadow-sm">
            <i className="fa-solid fa-circle-check fs-1 text-success"></i>
            <h6 className="mt-2">Active Courses</h6>
            <h3 className="fw-bold">{activeCourses}</h3>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="fw-semibold mb-3">
          <i className="fa-solid fa-file-lines me-2"></i>
          Reports Summary
        </h4>

        <ul className="list-group rounded-4">
          <li className="list-group-item">
            📈 User registrations increased this month
          </li>
          <li className="list-group-item">
            📚 Web Development courses are most popular
          </li>
          <li className="list-group-item">
            🏆 React & AI courses show highest engagement
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AnalyticsDash;

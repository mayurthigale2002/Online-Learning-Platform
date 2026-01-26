import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCards = ({ course }) => {
  const navigate = useNavigate();

  const handleVisit = () => {
    const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    if (enrolledCourses.includes(course.id)) {
      // User is enrolled → go to course video
      navigate(`/courses/${course.id}`);
    } else {
      // Not enrolled → go to enroll page
      navigate(`/studentEnrollment/${course.id}`);
    }
  };

  return (
    <div className="col-md-12">
      <div className="card h-100">
        <img src={course.image} className="card-img-top" alt={course.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.provider}</p>
          <button className="btn btn-info fw-bold mt-auto" onClick={handleVisit}>
            {JSON.parse(localStorage.getItem("enrolledCourses") || "[]").includes(course.id) ? "Visit" : "Enroll Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCards;

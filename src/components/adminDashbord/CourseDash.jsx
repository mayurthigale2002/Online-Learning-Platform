


import React, { useEffect, useState } from "react";
import axios from "axios";

const CourseDash = () => {
  const [courses, setCourses] = useState([]);
  const [totalCourses, setTotalCourses] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:3000/courses");
        setCourses(res.data);
        setTotalCourses(res.data.length);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load courses");
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;

    try {
      await axios.delete(`http://localhost:3000/courses/${id}`);
      setCourses(courses.filter(course => course.id !== id));
      setTotalCourses(prev => prev - 1);
      alert("Course deleted successfully");
    } catch (error) {
      alert("Delete failed");
    }
  };

  if (loading) return <div className="p-4">Loading courses...</div>;
  if (error) return <div className="p-4 text-danger">{error}</div>;

  return (
    <div className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">
          <i className="fa-solid fa-book me-2"></i>
          All Courses ({totalCourses})
        </h2>
      </div>

      {/* Courses Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover rounded-4">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Course Title</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td className="fw-semibold">{course.title}</td>
                <td className="bg-light">
                  Active
                  <i className="fa-solid fa-circle-check text-success ms-2"></i>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(course.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default CourseDash;

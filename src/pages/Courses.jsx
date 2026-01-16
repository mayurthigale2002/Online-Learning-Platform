import { useState } from "react";
import coursesData from "../data/courses";
import CourseCard from "../pages/CourseCard";
import { Navigate, useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [provider, setProvider] = useState("All");

  const filteredCourses = coursesData.filter(course => {
    return (
      course.title.toLowerCase().includes(search.toLowerCase()) &&
      (provider === "All" || course.provider === provider)
    );
  });

  return (
    <div className="container-fluid bg-dark p-4 text-white mb-0" style={{marginTop:"70px"}}>
      <h1 className="mb-5 text-center mx-auto text-warning fw-bold my-5">
        All Courses
      </h1>


      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search courses..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            onChange={(e) => setProvider(e.target.value)}
          >
            <option>All</option>
            <option>Meta</option>
            <option>Google</option>
            <option>IBM</option>
            <option>Coursera</option>
            <option>Microsoft</option>
            <option>Amazon</option>
          </select>
        </div>
     


      <div className="col-md-2">
      <button
                className="btn btn-info fw-bold"
                onClick={() => navigate("/studentEnrollment")}
              >
                Enroll Now..
              </button>
              </div>
       </div>        


      <div className="row g-4">
        {filteredCourses.map(course => (
          <CourseCard
            key={course.id}
            title={course.title}
            provider={course.provider}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;

import { useParams, useLocation, useNavigate } from "react-router-dom";
import coursesData from "../data/courses";
import { Button } from "react-bootstrap";

const BigCourse = () => {
  const { courseName } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  // Convert URL slug back to readable format
  const formattedName = courseName.replace(/-/g, " ").toLowerCase();

  // Find matching course
  const course = coursesData.find(c =>
    c.title.toLowerCase().includes(formattedName)
  );

  if (!course) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h3>Course not found ❌</h3>
        <Button onClick={() => navigate("/courses")}>
          Back to Courses
        </Button>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="fw-bold text-primary">{course.title}</h1>
        <p className="text-muted">
          Provided by <b>{course.provider}</b>
        </p>
      </div>

      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        className="img-fluid rounded shadow mb-4 d-block mx-auto"
        style={{ maxHeight: "350px" }}
      />

      {/* Description */}
      <h4>📘 Course Description</h4>
      <p>{course.description}</p>

      {/* Syllabus */}
      <h4 className="mt-4">📚 Syllabus</h4>
      <ul>
        {course.syllabus.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>

      {/* Videos */}
      <h4 className="mt-4">🎥 Course Videos</h4>
      <div className="row">
        {course.videos.map((video, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <iframe
              width="100%"
              height="250"
              src={video}
              title="Course Video"
              allowFullScreen
              className="rounded"
            ></iframe>
          </div>
        ))}
      </div>

      {/* Enrolled Student Info */}
      {state?.student && (
        <div className="alert alert-success mt-4">
          👋 Welcome <b>{state.student.name}</b>!  
          You are enrolled in this course.
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-4">
        <Button
          variant="warning"
          size="lg"
          className="rounded-pill fw-bold"
          onClick={() => navigate("/courses")}
        >
          Explore More Courses
        </Button>
      </div>
    </div>
  );
};

export default BigCourse;

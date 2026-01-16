import { useParams } from "react-router-dom";
import courses from "../data/courses";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) return <h3 className="text-center mt-5">Course Not Found</h3>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={course.image} className="img-fluid rounded" alt={course.title} />
        </div>
        <div className="col-md-6">
          <h2>{course.title}</h2>
          <p className="text-muted">By {course.provider}</p>
          <p>
            Learn industry-ready skills with hands-on projects and real-world assignments.
            Gain a certificate to boost your career opportunities.
          </p>
          <button className="btn btn-primary">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

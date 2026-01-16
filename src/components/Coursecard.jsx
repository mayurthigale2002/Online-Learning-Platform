import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={course.image} className="card-img-top text-warning" alt={course.title} />
        <div className="card-body text-center">
          <h5>{course.title}</h5>
          <p className="text-muted">{course.provider}</p>
          <Link to={`/course/${course.id}`} className="btn btn-outline-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

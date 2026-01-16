const CourseCard = ({ title, provider, image }) => {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-lg border-1">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "180px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="text-muted">{provider}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

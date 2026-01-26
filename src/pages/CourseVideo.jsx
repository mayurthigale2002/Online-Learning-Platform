import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
const CourseVideo = () => {
  const courses = [
    { id: "1", title: "React for Beginners", description: "Learn React from scratch!", youtubeLink: "https://www.youtube.com/embed/3LRZRSIh_KE", image: "https://framerusercontent.com/images/N0xefN2fE6CCF4G2YhAg5exTHX8.png" },
    { id: "2", title: "JavaScript Basics", description: "Get started with JS fundamentals.", youtubeLink: "https://www.youtube.com/embed/W6NZfCO5SIk", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { id: "3", title: "CSS Flexbox", description: "Master layout using Flexbox.", youtubeLink: "https://www.youtube.com/embed/JJSoEo8JSnc", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { id: "4", title: "HTML5 Basics", description: "Learn the building blocks of the web.", youtubeLink: "https://www.youtube.com/embed/pQN-pnXPaVg", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { id: "5", title: "Node.js Crash Course", description: "Backend development with Node.js", youtubeLink: "https://www.youtube.com/embed/fBNz5xF-Kx4", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { id: "6", title: "Express.js Fundamentals", description: "Learn Express framework for Node.js", youtubeLink: "https://www.youtube.com/embed/L72fhGm1tfE", image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
    { id: "7", title: "MongoDB Basics", description: "Introduction to NoSQL database", youtubeLink: "https://www.youtube.com/embed/-56x56UppqQ", image: "https://webimages.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg" },
    { id: "8", title: "Python for Beginners", description: "Learn Python programming", youtubeLink: "https://www.youtube.com/embed/_uQrJ0TkZlc", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { id: "9", title: "Django Crash Course", description: "Web development with Django", youtubeLink: "https://www.youtube.com/embed/F5mRW0jo-U4", image: "https://static.djangoproject.com/img/logos/django-logo-positive.svg" },
    { id: "10", title: "TypeScript Basics", description: "Typed JavaScript with TypeScript", youtubeLink: "https://www.youtube.com/embed/BwuLxPH8IDs", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { id: "11", title: "Bootstrap 5 Crash Course", description: "Build responsive websites with Bootstrap", youtubeLink: "https://www.youtube.com/embed/4sosXZsdy-s", image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
    { id: "12", title: "Git & GitHub Basics", description: "Version control and collaboration", youtubeLink: "https://www.youtube.com/embed/RGOj5yH7evk", image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
    { id: "13", title: "React Router v6", description: "Routing in React applications", youtubeLink: "https://www.youtube.com/embed/Law7wfdg_ls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdvlaBmZ6PV-YCazHNcGokDDiwhtX8yHBL5g&s" },
    { id: "14", title: "Redux Crash Course", description: "State management with Redux", youtubeLink: "https://www.youtube.com/embed/poQXNp9ItL4", image: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" },
    { id: "15", title: "Next.js Basics", description: "React framework for server-side rendering", youtubeLink: "https://www.youtube.com/embed/mTz0GXj8NN0", image: "https://cdn.cosmicjs.com/52a5e170-b0fe-11f0-a077-bd105f10469e-nextjs-16.png" },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container-fluid bg-dark" style={{marginTop:'70px'}}>
      <h1 className="text-center mb-5 text-warning display-4 fw-bold">All Course Videos</h1>
      <div className="row g-4">
        {courses.map((course, index) => (
          <div className="col-md-4" key={course.id} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden hover-shadow">
              <img
                src={course.image}
                className="card-img-top"
                alt={course.title}
                style={{ height: "200px", objectFit: "cover", transition: "transform 0.3s" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{course.title}</h5>
                <p className="card-text text-muted">{course.description}</p>
                <div className="ratio ratio-16x9 mt-auto rounded-3 overflow-hidden shadow-sm">
                  <iframe
                    src={course.youtubeLink}
                    title={course.title}
                    allowFullScreen
                    className="rounded-3"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      
      <style>{`
        .hover-shadow:hover img {
          transform: scale(1.05);
        }
        .hover-shadow:hover {
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.3);
          transition: box-shadow 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default CourseVideo;

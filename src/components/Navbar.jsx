import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import logoo from "../assets/logoo.webp";
import "../index.css";
import cw from "../assets/cw.png";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuth");

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
    alert("Logout successful!");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <div className="logo-wrapper d-flex align-items-center p-1 rounded-circle shadow-sm">
            <img
              src={cw}
              alt="Logo"
              width="35"
              height="35"
              className="logo-img"
            />
          </div>
          <div className="ms-2">
            <h3 className="nav-text mb-0 text-secondary fw-bold">CourseWala's</h3>
          </div>
        </NavLink>

        <div className="navbar-collapse collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center mx-auto gap-3 ">
            <li className="nav-item">
              <NavLink to="/" className="nav-link nav-animate">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link nav-animate">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link nav-animate">
                Contact
              </NavLink>
            </li>
          </ul>

          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              className="icon-dropdown bg-dark border-2 rounded-pill "
            >
              Menu <i className="fa-solid fa-bars ms-2"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {!isAuth && (
                <Dropdown.Item as={NavLink} to="/login">
                  <button className="btn btn-secondary btn-sm px-3 w-100">
                    User Login
                  </button>
                </Dropdown.Item>
              )}

              {isAuth && (
                <Dropdown.Item as={NavLink} to="/dashbord">
                  <button className="btn btn-secondary btn-sm px-3 w-100">
                    User Dashboard
                  </button>
                </Dropdown.Item>
              )}

              <Dropdown.Item as={NavLink} to="/studentEnrollment">
                <button className="btn btn-secondary btn-sm px-3 w-100">
                  Enrollment Form
                </button>
              </Dropdown.Item>

              <Dropdown.Item as={NavLink} to="/admin">
                <button className="btn btn-secondary btn-sm px-3 w-100">
                  Admin Login
                </button>
              </Dropdown.Item>

              {isAuth && (
                <Dropdown.Item>
                  <button
                    className="btn btn-secondary btn-sm px-3 w-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




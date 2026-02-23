import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../index.css";
import elogo from "../assets/elogo.webp";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();

  const isAuth = localStorage.getItem("isAuth");
  const isAdmin = localStorage.getItem("isAdmin");

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("isAdmin");
    navigate("/login");
    toast.success("Logout successful!");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <div className="logo-wrapper">
            <img src={elogo} alt="Logo" className="logo-img" />
          </div>
          <div className="ms-2 brand-text">
            <h3 className="mb-0 brand-title">CourseWala’s</h3>
          </div>
        </NavLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="navbar-collapse collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center mx-auto gap-3">
            <li className="nav-item">
              <NavLink to="/" className="nav-link nav-animate">
                <i className="fa-solid fa-house me-2"></i>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link nav-animate">
                <i className="fa-solid fa-user-circle me-2"></i>
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link nav-animate">
                <i className="fa-solid fa-phone me-2"></i>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Dropdown Menu */}
          <div className="d-flex justify-content-center mt-3 mt-lg-0">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className="icon-dropdown bg-dark border-2 rounded-pill"
              >
                Menu <i className="fa-solid fa-bars ms-2"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>

                {/* USER LOGIN */}
                {!isAuth && !isAdmin && (
                  <Dropdown.Item as={NavLink} to="/login">
                    <button className="btn btn-secondary btn-sm w-100">
                      User Login
                    </button>
                  </Dropdown.Item>
                )}

                {/* USER DASHBOARD */}
                {isAuth && (
                  <>
                    <Dropdown.Item as={NavLink} to="/dashbord">
                      <button className="btn btn-secondary btn-sm w-100">
                        User Dashboard
                      </button>
                    </Dropdown.Item>

                    <Dropdown.Item as={NavLink} to="/studentEnrollment">
                      <button className="btn btn-secondary btn-sm w-100">
                        Enrollment Form
                      </button>
                    </Dropdown.Item>
                  </>
                )}

                {/* ADMIN LOGIN / PANEL */}
                {!isAdmin && (
                  <Dropdown.Item as={NavLink} to="/admin">
                    <button className="btn btn-secondary btn-sm w-100">
                      Admin Login
                    </button>
                  </Dropdown.Item>
                )}

                {isAdmin && (
                  <Dropdown.Item as={NavLink} to="/adminpanel">
                    <button className="btn btn-secondary btn-sm w-100">
                      Admin Panel
                    </button>
                  </Dropdown.Item>
                )}

                {/* LOGOUT */}
                {(isAuth || isAdmin) && (
                  <Dropdown.Item>
                    <button
                      className="btn btn-danger btn-sm w-100"
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
      </div>
    </nav>
  );
};

export default Navbar;
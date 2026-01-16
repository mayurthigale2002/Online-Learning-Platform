import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import logoo from "../assets/logoo.webp";
import "../index.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
    alert("logout successfully");
  };


  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logoo}
            alt="Logo"
            width="42"
            height="42"
            className="me-2 logo-img"
          />
          <h3 className="nav-text text-warning mb-0">Courseraa</h3>
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center mx-auto gap-3">
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

            <li className="nav-item">
              <NavLink to="/learning" className="nav-link nav-animate me-3">
                Learning
              </NavLink>
            </li>
          </ul>

          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              className="icon-dropdown bg-dark border-2"
            >
              Menu
              <i className="fa-solid fa-bars ms-2"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/login">
                <button className="btn btn-primary btn-sm px-3 w-100">
                  User Login
                </button>
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/studentEnrollment">
                <button className="btn btn-success btn-sm px-3 w-100">
                  Enrollment Form
                </button>
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/admin">
                <button className="btn btn-warning btn-sm px-3 w-100">
                  Admin Login
                </button>
              </Dropdown.Item>
              <Dropdown.Item>
                <button
                  className="btn btn-danger btn-sm px-3 w-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

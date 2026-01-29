
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const isAuth = localStorage.getItem("isAuth") === "true";

  if (!isAuth) {
    return (
      <div
        className="container d-flex flex-column justify-content-center align-items-center"
        style={{ marginTop: "150px" }}
      >
        <div className="alert alert-warning text-center">
          Please login to view your profile.
        </div>

        <Button variant="primary" onClick={() => navigate("/login")}>
          Go to Login
        </Button>
      </div>
    );
  }

  // If logged in (nothing else shown)
  return null;
};

export default Profile;

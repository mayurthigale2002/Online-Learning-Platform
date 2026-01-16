import { useState } from "react";
import HomeDash from "./HomeDash";
import UserDash from "./UserDash";
import CourseDash from "./CourseDash";
import AnalyticsDash from "./AnalyticsDash";
import SettingDash from "./SettingDash";
import AdminEnrollments from "./AdminEnrollments";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
    <h1
        className="Head text-center bg-dark mx-auto text-white p-3"
        style={{ marginTop: "70px" }}
      >
        Admin Panel
      </h1>

    <div className="row m-5" >

      <div className="col-md-3 bg-secondary text-white p-3 border border-1 rounded-2">
        <ul className="list-unstyled">

          <li className="mb-4 ">
            <button
              className={`btn w-100 text-start ${
                activeTab === "home"
                  ? "btn-light text-dark fw-bold"
                  : "btn-outline-light"
              }`}
              onClick={() => setActiveTab("home")}
            >
              <i className="fa-solid fa-house me-2 ms-3"></i>
              HOME
            </button>
          </li>

          <li className="mb-4">
            <button
              className={`btn w-100 text-start ${
                activeTab === "users"
                  ? "btn-light text-dark fw-bold"
                  : "btn-outline-light"
              }`}
              onClick={() => setActiveTab("users")}
            >
               <i className="fa-solid fa-users me-2 ms-3"></i>
              USERS
            </button>
          </li>

          <li className="mb-4">
            <button
              className={`btn w-100 text-start ${
                activeTab === "courses"
                  ? "btn-light text-dark fw-bold"
                  : "btn-outline-light"
              }`}
              onClick={() => setActiveTab("courses")}
            >
              <i className="fa-solid fa-book-open me-2 ms-3"></i>
              COURSES
            </button>
          </li>

          <li className="mb-4">
            <button
              className={`btn w-100 text-start ${
                activeTab === "enrollments"
                  ? "btn-light text-dark fw-bold"
                  : "btn-outline-light"
              }`}
              onClick={() => setActiveTab("enrollments")}
            >
               <i className="fa-solid fa-users me-2 ms-3"></i>
              USER ENROLLMENTS
            </button>
          </li>

          <li className="mb-4">
            <button
              className={`btn w-100 text-start ${
                activeTab === "analytics"
                  ? "btn-light text-dark fw-bold"
                  : "btn-outline-light"
              }`}
              onClick={() => setActiveTab("analytics")}
            >
              <i className="fa-solid fa-chart-pie me-2 ms-3"></i>
              ANALYTICS & REPORTS
            </button>
          </li>

          <li className="mb-4">
            <button
              className={`btn w-100 text-start ${
                activeTab === "settings"
                  ? "btn-light text-dark fw-bold"
                  : "btn-outline-light"
              }`}
              onClick={() => setActiveTab("settings")}
            >
              <i className="fa-solid fa-gear me-2 ms-3"></i>
              SETTINGS
            </button>
          </li>

        </ul>
      </div>

      {/* Content Area */}
      <div className="col-md-9 bg-warning p-4 border border-1 rounded-2">
        {activeTab === "home" && <HomeDash/>}
        {activeTab === "users" && <UserDash/>}
        {activeTab === "courses" && <CourseDash/>}
        {activeTab === "analytics" && <AnalyticsDash/>}
        {activeTab === "settings" && <SettingDash/>}
        {activeTab == "enrollments" && <AdminEnrollments/>}
      </div>

    </div>
    </>
  );
};

export default AdminPanel;


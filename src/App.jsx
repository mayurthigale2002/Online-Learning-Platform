import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-bootstrap";
import ProtectedRoute from "./components/ProtectedRoute";

// components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Learning from "./components/Learning";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Instructor from "./pages/Instructor";
import Certification from "./pages/Certification";
import StudentEnrollment from "./pages/StudentEnrollment";

// learning pages
import BegLearning from "./components/Learning/BegLearning";
import StdLearning from "./components/Learning/StdLearning";
import ProfLearning from "./components/Learning/ProfLearning";

// admin panel
import AdminPanel from "./components/adminDashbord/AdminPanel";
import Admin from "./components/adminDashbord/Admin";
import HomeDash from "./components/adminDashbord/HomeDash";
import UserDash from "./components/adminDashbord/UserDash";
import SettingDash from "./components/adminDashbord/SettingDash";
import AnalyticsDash from "./components/adminDashbord/AnalyticsDash";
import CourseDash from "./components/adminDashbord/CourseDash";
import AdminEnrollments from "./components/adminDashbord/AdminEnrollments";

const App = () => {
  return (
    <>
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* Public */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/studentEnrollment" element={<StudentEnrollment />} />

          {/* Dashboard */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/homedash" element={<HomeDash />} />
          <Route path="/userdash" element={<UserDash />} />
          <Route path="/settingdash" element={<SettingDash />} />
          <Route path="/analyticsdash" element={<AnalyticsDash />} />
          <Route path="/coursedash" element={<CourseDash />} />
          <Route path="/adminenrollments" element={<AdminEnrollments />} />

          {/* Protected  */}
          <Route
            path="/courses"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />

          <Route
            path="/instructor"
            element={
              <ProtectedRoute>
                <Instructor />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Certification"
            element={
              <ProtectedRoute>
                <Certification />
              </ProtectedRoute>
            }
          />

          <Route
            path="/BegLearning"
            element={
              <ProtectedRoute>
                <BegLearning />
              </ProtectedRoute>
            }
          />

          <Route
            path="/StdLearning"
            element={
              <ProtectedRoute>
                <StdLearning />
              </ProtectedRoute>
            }
          />

          <Route
            path="/ProfLearning"
            element={
              <ProtectedRoute>
                <ProfLearning />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

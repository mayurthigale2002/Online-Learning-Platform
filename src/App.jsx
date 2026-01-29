import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import BigCourse from "./pages/BegCourse";

// user dash
import Dashbord from "./components/userDashbord/Dashbord";
import Profile from "./components/userDashbord/Profile";
import CourseCards from "./pages/CourseCards";
import CourseVideo from "./pages/CourseVideo";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="/coursevideo" element={<CourseVideo />} />

          {/* Dashboard */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/homedash" element={<HomeDash />} />
          <Route path="/userdash" element={<UserDash />} />
          <Route path="/settingdash" element={<SettingDash />} />
          <Route path="/analyticsdash" element={<AnalyticsDash />} />
          <Route path="/coursedash" element={<CourseDash />} />
          <Route path="/adminenrollments" element={<AdminEnrollments />} />
          <Route path="/bigcourse" element={<BigCourse />} />

          {/* user dash */}
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/profile" element={<Profile />} />

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
            path="/coursecards"
            element={
              <ProtectedRoute>
                <CourseCards />
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

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

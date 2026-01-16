// import React from "react";
// import { Card, Button, Badge } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const navigate = useNavigate();

//   const isAuth = localStorage.getItem("isAuth") === "true";
//   const user = JSON.parse(localStorage.getItem("user"));

//   // If not logged in
//   if (!isAuth || !user) {
//     return (
//       <div className="container mt-5" style={{marginTop:"100px"}}>
//         <div className="alert alert-warning" style={{marginTop:"100px"}}>
//           Please login to view your profile.
//         </div>
//       </div>
//     );
//   }

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <div className="container mt-5" style={{marginTop:"100px"}}>
//       <Card className="shadow rounded-4">
//         <Card.Body>
//           {/* Header */}
//           <div className="d-flex align-items-center mb-4">
//             <div
//               className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center me-3"
//               style={{ width: "70px", height: "70px", fontSize: "28px" }}
//             >
//               {user.name?.charAt(0).toUpperCase()}
//             </div>

//             <div>
//               <h4 className="mb-0">{user.name}</h4>
//               <small className="text-muted">{user.email}</small>
//             </div>

//             <Badge
//               bg={user.role === "admin" ? "danger" : "primary"}
//               className="ms-auto"
//             >
//               {user.role}
//             </Badge>
//           </div>

//           <hr />

//           {/* ADMIN UI */}
//           {user.role === "admin" && (
//             <div className="mb-3">
//               <h5 className="text-danger">Admin Controls</h5>
//               <ul>
//                 <li>Manage Users</li>
//                 <li>Manage Courses</li>
//                 <li>View Reports</li>
//               </ul>
//             </div>
//           )}

//           {/* USER UI */}
//           {user.role === "user" && (
//             <div className="mb-3">
//               <h5 className="text-primary">User Dashboard</h5>
//               <ul>
//                 <li>My Courses</li>
//                 <li>Progress Tracking</li>
//                 <li>Certificates</li>
//               </ul>
//             </div>
//           )}

//           <Button variant="danger" onClick={handleLogout}>
//             Logout
//           </Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default Profile;






















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

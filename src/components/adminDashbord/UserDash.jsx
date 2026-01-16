import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDash = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setUsers(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch users.");
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      alert("User deleted successfully");
    } catch (error) {
      alert("Delete failed");
    }
  };

  return (
    <div className="p-4 users-section">
      <h2 className="mb-4">
        <i className="fa-solid fa-users me-2"></i>
        Users Data
      </h2>

      {error && <p className="text-danger">{error}</p>}

      <div className="table-responsive">
        <table className="table table-striped table-bordered rounded-4">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Mobile No.</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.mobile}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default UserDash;

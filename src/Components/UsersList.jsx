import React, { useState, useEffect } from "react";
import axios from "axios";
import backendApi from "../BackendServerApi";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users when the component mounts
    async function fetchUsers() {
      try {
        const response = await axios.get(`${backendApi}/usersList`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`${backendApi}/deleteUser/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Active</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{new Date(user.dateOfBirth).toLocaleDateString()}</td>
              <td>{user.active ? "Active" : "Inactive"}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <button
                  onClick={() => handleRemove(user._id)}
                  style={{ backgroundColor: "red" }}
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;

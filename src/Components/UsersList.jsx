import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users when the component mounts
    async function fetchUsers() {
      try {
        const response = await axios.get("http://localhost:4000/usersList");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  const handleEdit = async (id) => {
    try {
      // Fetch the user details by ID
      const response = await axios.get(`http://localhost:4000/user/${id}`);
      const userToUpdate = response.data;

      // Example: Assume we have a form to edit user details
      // After editing, update the user object with the edited data
      const updatedUser = { ...userToUpdate, firstName: "Updated Name" };

      // Send a PUT request to update the user
      await axios.put(`http://localhost:4000/editUser/${id}`, updatedUser);

      // Update the user list in the state
      setUsers(users.map((user) => (user._id === id ? updatedUser : user)));
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/deleteUser/${id}`);
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

// Register.jsx
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import backendApi from "../BackendServerApi";

const Register = ({ onSwitchAuthStep }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    dateOfBirth: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validation
    let valid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      dateOfBirth: "",
    };

    if (!firstName.trim()) {
      valid = false;
      newErrors.firstName = "First Name is required";
    }

    if (!lastName.trim()) {
      valid = false;
      newErrors.lastName = "Last Name is required";
    }

    if (!email.trim()) {
      valid = false;
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      valid = false;
      newErrors.password = "Password is required";
    }

    if (!phoneNumber.trim()) {
      valid = false;
      newErrors.phoneNumber = "Phone Number is required";
    }

    if (!dateOfBirth.trim()) {
      valid = false;
      newErrors.dateOfBirth = "Date of Birth is required";
    }

    setErrors(newErrors);

    if (!valid) {
      return;
    }

    try {
      // Make API request to register
      const response = await axios.post(`${backendApi}/register`, {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        dateOfBirth,
      });

      // Handle success with toast notification
      toast.success("Registration successful", { position: "top-right" });
      navigate("/login");
    } catch (error) {
      // Handle error with toast notification
      toast.error("Error registering. Please try again.", {
        position: "top-right",
      });
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="container mt-4">
      <form className="auth-form">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            className={`form-control ${errors.firstName && "is-invalid"}`}
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && (
            <div className="invalid-feedback">{errors.firstName}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className={`form-control ${errors.lastName && "is-invalid"}`}
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && (
            <div className="invalid-feedback">{errors.lastName}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className={`form-control ${errors.email && "is-invalid"}`}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className={`form-control ${errors.password && "is-invalid"}`}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number:
          </label>
          <input
            type="text"
            className={`form-control ${errors.phoneNumber && "is-invalid"}`}
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && (
            <div className="invalid-feedback">{errors.phoneNumber}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">
            Date of Birth:
          </label>
          <input
            type="date"
            className={`form-control ${errors.dateOfBirth && "is-invalid"}`}
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          {errors.dateOfBirth && (
            <div className="invalid-feedback">{errors.dateOfBirth}</div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleRegister}
        >
          Register
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/login">
            <span onClick={() => onSwitchAuthStep("login")}>Login</span>
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;

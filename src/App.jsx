import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Forms/Register";
import Login from "./Forms/Login";
import ForgotPassword from "./Forms/ForgotPassword";
import ResetPassword from "./Forms/ResetPassword";
import DashBoard from "./Components/DashBoard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (token) => {
    // Logic to set token in localStorage or context
    // For example:
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/dashBoard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;

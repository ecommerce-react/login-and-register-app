import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Delete token from localstorage
    localStorage.removeItem("accessToken");

    navigate("/login");
  };
  return (
    <div className="homepage">
      <h1>Hello Homepage</h1>
      <div className="button" onClick={() => handleLogout({})}>
        Logout
      </div>
    </div>
  );
};

export default Homepage;

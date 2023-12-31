import React from "react";
import { useAuth } from "../../auths/authProvider/authProvider.auth";
import "./dashboard.page.css";

const DashboardPage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user ? user.username : "Guest"}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default DashboardPage;

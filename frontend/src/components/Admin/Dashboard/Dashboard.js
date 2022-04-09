import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Sidebar Section  */}
        <div className="col-4">
          <Sidebar />
        </div>

        {/* Dashboard Section  */}
        <div className="col-8">
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

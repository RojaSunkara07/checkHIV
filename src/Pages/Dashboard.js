import React from "react";
import Sidebar from "../Components/Sidebar";
import DashboardHero from "../Components/DashboardHero";
import "../Styles/dashboard.css";
import Dashboardbody from "../Components/DashboardBody";


function Dashboard() {
    return (
    <div className="dashboard">
    <Sidebar/>
       <Dashboardbody/>
       
    </div>
    );

}

export default Dashboard;

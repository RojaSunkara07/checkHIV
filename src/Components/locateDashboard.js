import React from "react";
import Sidebar from "./Sidebar";
import DashboardHero from "./DashboardHero";
import Locate from "./locate";



function Dashboard() {
    return (
    <div className="dashboard">
    <Sidebar/>
   
    <Locate/>
       
    </div>
    );

}

export default Dashboard;

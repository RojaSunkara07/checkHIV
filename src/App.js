import React,{Component} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";

import Appointment from "./Pages/Appointment";
import Redirect from "./Pages/redirect";
import Dashboardredirect from "./Pages/Dashbordredirect";
import History from "./Components/History";
import PersonalInfoForm from "./Components/Personalinfo";
import DashboardLocate from "./Components/locateDashboard";
import AdminLogin from "./Components/Adminlogin";
import DashboardAdmin from "./Components/AdminDashboard";
import AnonymousTable from "./Components/AdminAnonymous";
import AnonymousUpload from "./Components/UploadResult";


  

function App() {
  return (
    <div className="App">
      <Router basename="/checkhiv">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/redirect" element={<Redirect />} />
          <Route path="/dashboard" element={<Dashboardredirect />} />
          <Route path="/history" element={<History/>}/>
          <Route path="/personalinfo" element={<PersonalInfoForm/>}/>
          <Route path="/locate" element={<DashboardLocate/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/admindashboard" element={<DashboardAdmin/>}/>
          <Route path="/anonymous" element={<AnonymousTable/>}/>
          <Route path="/anonymousupload" element={<AnonymousUpload/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

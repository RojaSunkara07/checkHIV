import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import {
  faUser,
  faSignOutAlt,
  faUsers,
  faQuestionCircle,
  faReceipt,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
// Import the necessary FontAwesome icons
import Sidebar from './Sidebar'; // Import the Sidebar component
import '../Styles/AdminDashboard.css';

function AdminDashboard() {
    const navigate = useNavigate();
  
    const logout = () => {
        navigate("/");
      };
  const users = [
    {
      id: 1,
      hivStatus: 'Negative',
      date: '23/04/2023',
      gender: 'unkown',
      suburb: 'suburb1'
    },
    {
      id: 2,
      hivStatus: 'Positive',
      date: '19/10/2022',
      gender: 'male',
      suburb:'unkown'
      
    },
  
   
  ];
  const userFields = Array.from(
    new Set(users.flatMap((user) => Object.keys(user)))
  );

  // Define state for filter, search, and selected field
  const [filter, setFilter] = useState(''); // Initialize with an empty filter
  const [search, setSearch] = useState(''); // Initialize with an empty search query
  const [selectedField, setSelectedField] = useState('All'); // Initialize with 'All'

  // Filtered users based on the selected filter, search query, and field
  const filteredUsers = users
    .filter((user) => {
      // Filter by the selected field (default is 'All')
      if (selectedField === 'All') return true;
      return user[selectedField];
    })
  

  return (
    <div className="admin-dashboard">
      <div className="admin-navbar">
        <h1 className="admin-navbar-title">
          <Link to="/admindashboard">
            Check<span className="admin-navbar-sign">HIV</span>
          </Link>
        </h1>

        {/* User Profile and Logout Icons */}
        <div className="admin-navbar-icons">
          <div className="profile-picture">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </div>

          <div className="logout">
            
          
            <FontAwesomeIcon icon={faSignOutAlt} size="lg" onClick={logout}/>
         
          </div>
          
        </div>
        
      </div>
      <div className='anonymous-title'>
      <a className='anonymous-back' href="/checkhiv/admindashboard">
      <span className='anonymous-back-icon'><FontAwesomeIcon icon={faArrowLeft} size="lg" /></span>
        <span className='anonymous-back-title'> Back</span> 
        </a>
      <h2>Anonymous Users</h2>
     
      </div>
      <div className="filter-and-search">
      
     
      <div className="filter-dropdown">
        <label>HIV Status</label>
        <select onChange={(e) => setSelectedField(e.target.value)}>
            <option value="All">All</option> 
              <option value="positive">Positive</option>
              <option value="negative">Nagative</option>
          </select>  

          <label>Gender:</label>
          <select onChange={(e) => setSelectedField(e.target.value)}>
            <option value="All">All</option> 
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
          </select>

          <label>Suburb:</label>
          <select onChange={(e) => setSelectedField(e.target.value)}>
            <option value="All">All</option> 
              <option value="suburb1">Suburb 1</option>
              <option value="suburb2">Suburb 2</option>
              <option value="suburb3">Suburb 3</option>
          </select>        
      </div>
      
      

    
    </div>


    {/* User List Table */}
    <div className="users-list">
     
      <table>
        <thead>
          <tr>
            <th>Kit ID</th>
            <th>HIV Status</th>
            <th>Gender</th>
            <th>Suburb</th>
            <th>Reported Date</th>

            
         
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
                <td>{user.id}</td>
              <td>{user.hivStatus}</td>
              <td>{user.gender}</td>
              <td>{user.suburb}</td>
              <td>{user.date}</td>
          
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
    </div>
  );
}

export default AdminDashboard;

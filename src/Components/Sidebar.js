import React from 'react';
import '../Styles/sidebar.css'; 
import { Link } from "react-router-dom";
import icon1 from '../Assets/Icons/dashboard.png';
import icon2 from '../Assets/Icons/profile.png';
import icon3 from '../Assets/Icons/reports.png';
import icon4 from '../Assets/Icons/locate.png';
import icon5 from '../Assets/Icons/selfassess.png';
import icon6 from '../Assets/Icons/purchasekit.png';
import icon7 from '../Assets/Icons/logout.png';

const Sidebar = () => {
  const sidebarItems = [
    { text: 'Dashboard', link: '/checkhiv/dashboard', icon: icon1 },
    { text: 'Profile', link: '/checkhiv/profile', icon: icon2 },
    { text: 'Reports', link: '/checkhiv/history', icon: icon3 },
    { text: 'Locate', link: '/checkhiv/locate', icon: icon4 },
    { text: 'Self Assessment', link: '/checkhiv/redirect', icon: icon5 },
    { text: 'Purchase Kit', link: '/purchase', icon: icon6 }
  ];

  return (
    <div className="sidebar">
        <h1 className="sidebar-title">
        <Link to="/">
          Check<span className="navbar-sign">HIV</span>
        </Link>
      </h1>
      <ul>
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <img src={item.icon} alt={`${item.text} Icon`} /> {/* Add the icon */}
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
        {/* Add space between list items and "Logout" */}
        <li className="logout-item">
          <img src={icon7} alt="Logout Icon" /> {/* Add the logout icon */}
          <a href="/checkhiv">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

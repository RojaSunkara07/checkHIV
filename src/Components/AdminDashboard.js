import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faSignOutAlt,
  faUsers,
  faQuestionCircle,
  faReceipt,
  faPoll,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../Styles/AdminDashboard.css';

function AdminDashboard() {
    const navigate = useNavigate();
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user data from your server's API endpoint
        axios.get('http://localhost:8080/api/users') // Replace 'http://your-server-url/api/users' with your server's actual URL
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    const anonymoususers = () => {
        navigate("/anonymous");
    };

    const logout = () => {
        navigate("/");
    };

    return (
        <div className="admin-dashboard">
            <div className="admin-navbar">
                <h1 className="admin-navbar-title">
                    <Link to="/">
                        Check<span className="admin-navbar-sign">HIV</span>
                    </Link>
                </h1>

                <div className="admin-navbar-icons">
                    <div className="profile-picture">
                        <FontAwesomeIcon icon={faUser} size="lg" />
                    </div>

                    <div className="logout">
                        <FontAwesomeIcon onClick={logout} icon={faSignOutAlt} size="lg" />
                    </div>
                </div>
            </div>

            <div className="box-container">
                <div className="box">
                    <FontAwesomeIcon icon={faUsers} className="box-icon" />
                    <h2>Total Users</h2>
                    <p>{user.length}</p> {/* Display the number of users */}
                </div>
                <div className="box">
                    <FontAwesomeIcon icon={faReceipt} className="box-icon" />
                    <h2>Tests Reported</h2>
                    <p>50</p> {/* Replace with actual test report count */}
                </div>
                <div className="box">
                    <FontAwesomeIcon icon={faQuestionCircle} className="box-icon" />
                    <h2>Anonymous Users</h2>
                    <p>50</p> {/* Replace with actual anonymous user count */}
                </div>
                <button className='anonymous-user' onClick={anonymoususers}>View All</button>
            </div>
            <h2 className='user-list-title'>User List</h2>
            <div className="filter-and-search">
                {/* Add your filter and search components here */}
            </div>
            <div className="users-list">
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>HIV Status</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Suburb</th>
                            <th>Gender</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.firstname}</td>
                                <td>{user.hivStatus}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.suburb}</td>
                                <td>{user.gender}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminDashboard;

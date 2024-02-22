import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/customer">Home</Link></li>
        <li><Link to="/logout">Logout</Link></li>
        <li><Link to="/AppointmenForm">Add Appoinment</Link></li>
      </ul>
    </nav>
  );
};  

export default UserNavbar;

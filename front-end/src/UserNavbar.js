import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/user-home">User Home</Link></li>
        <li><Link to="/logout">Logout</Link></li> 
      </ul>
    </nav>
  );
};

export default UserNavbar;

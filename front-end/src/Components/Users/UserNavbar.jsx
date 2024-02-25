import React from 'react';
import { Link } from 'react-router-dom';
import './UserNavbar.css';

const UserNavbar = () => {
  return (
    <nav className="navbar">
      <Link to="/customer" className="nav-link">Home</Link>
      <Link to="/appointmentForm" className="nav-link">Appointment</Link>
      <Link to="/viewSchedule" className="nav-link">Schedule</Link>
      <Link to="/logout" className="nav-link">Logout</Link>
    </nav>
  );
};

export default UserNavbar;

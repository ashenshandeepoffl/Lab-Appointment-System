import React from 'react';
import { Link } from 'react-router-dom';
import './LabNavbar.css';

const LabNavbar = () => {
  return (
    <nav className="navbar">
      <Link to="/lab" className="nav-link">Labs</Link>
      <Link to="/addNewLab" className="nav-link">Add Labs</Link>
      <Link to="/addNewSchedule" className="nav-link">Add Schedule</Link>
      <Link to="/viewAllUsers" className="nav-link">View Users</Link>
      <Link to="/viewAppointment" className="nav-link">View Appointment</Link>
      <Link to="/sendEmail" className="nav-link">Send Email</Link>
      <Link to="/updateSchedule" className="nav-link">Update Schedule</Link>
      <Link to="/pdf" className="nav-link">Pdf Report</Link>
      <Link to="/logout" className="nav-link">Logout</Link>
    </nav>
  );
};

export default LabNavbar;

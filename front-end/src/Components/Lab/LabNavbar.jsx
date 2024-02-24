import React from 'react';
import { Link } from 'react-router-dom';

const LabNavbar = () => {
  const navStyles = {
    background: '#333',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#fff',
  };

  const linkStyles = {
    textDecoration: 'none',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background 0.3s',
  };

  return (
    <nav style={navStyles}>
        <Link to="/lab" style={linkStyles}>Labs</Link>
        <Link to="/addNewLab" style={linkStyles}>Add Labs</Link>
        <Link to="/addNewSchedule" style={linkStyles}>Add Schedule</Link>
        <Link to="/viewAllUsers" style={linkStyles}>View Users</Link>
        <Link to="/viewAppointment" style={linkStyles}>View Appointment</Link>
        <Link to="/sendEmail" style={linkStyles}>Send Email</Link>
        <Link to="/updateSchedule" style={linkStyles}>Update Schedule</Link>
        <Link to="/pdf" style={linkStyles}>Pdf Report</Link>
        <Link to="/logout" style={linkStyles}>Logout</Link>
    </nav>
  );
};  

export default LabNavbar;
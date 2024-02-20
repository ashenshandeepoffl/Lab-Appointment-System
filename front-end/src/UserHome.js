import React from 'react';
import { useLocation } from 'react-router-dom';

const UserHome = () => {
  const location = useLocation();
  const userEmail = location.state?.email || "User"; 

  return (
    <div> 
      <h2>Welcome, {userEmail}!</h2>
    </div>
  );
};

export default UserHome;

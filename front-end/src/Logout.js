import React from 'react';

const Logout = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    // Clear the authentication token from localStorage
    localStorage.removeItem('token');

    // Optionally, perform additional logout logic here (e.g., clearing user data)

    // Update the login status to false
    setIsLoggedIn(false);

    // Redirect to the login page or any other desired location
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>Logout Page</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;

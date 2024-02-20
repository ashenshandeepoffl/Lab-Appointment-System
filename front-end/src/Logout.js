import React from 'react';

const Logout = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    // Implement any necessary logout logic, such as clearing tokens, etc.
    // For now, let's just update the login status to false.
    setIsLoggedIn(false);
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

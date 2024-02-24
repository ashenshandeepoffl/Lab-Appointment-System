import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Lab = () => {
  const location = useLocation();
  const userEmail = location.state?.email || "CONSULTANT";

  // Disable browser back navigation
  const disableBackNavigation = () => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function () {
      window.history.pushState(null, document.title, window.location.href);
    });
  };

  useEffect(() => {
    disableBackNavigation();
  }, []);

  return (
    <div>
      <h2>Lab, {userEmail}!</h2>
    </div>
  );
};

export default Lab;

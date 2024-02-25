// Lab.jsx

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Lab.css'; // Import external stylesheet

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
    <div className="lab-container">
      <header>
        <h1>Welcome to the Lab</h1>
      </header>
      <section>
        <h2>Hello, {userEmail}!</h2>
        <p>
          Explore the latest technologies and innovations in our state-of-the-art laboratory. Our team of experts is dedicated to providing high-quality services and solutions.
        </p>
        {/* You can add more content or links here */}
      </section>
    </div>
  );
};

export default Lab;

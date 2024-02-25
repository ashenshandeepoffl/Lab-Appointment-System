import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Customer.css';
import Image1 from '../../Images/7.jpg';
import Image2 from '../../Images/6.jpg';

const Customer = () => {
  const location = useLocation();
  const userEmail = location.state?.email || "User";

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
    <div className="admin-container">
      <header>
        <h1>ABC Laboratory System</h1>
      </header>
      <section>
        <div className="welcome-section">
          <h2>Welcome, {userEmail}!</h2>
          <p>
            You have successfully logged in to the hospital laboratory system.
            Explore the latest technologies and innovations in our state-of-the-art laboratory. Our team of experts is dedicated to providing high-quality services and solutions.
          </p>
        </div>
        <div className="image-section">
          <img src={Image1} alt="Lab Equipment" />
          <img src={Image2} alt="Lab Staff" />
        </div>
      </section>
    </div>
  );
};

export default Customer;

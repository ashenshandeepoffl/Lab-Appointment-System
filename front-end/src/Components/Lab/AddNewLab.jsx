import React, { useState } from 'react';
import './ConsultantsForm.css'; // Import external stylesheet

const ConsultantsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    function validateName(name) {
      return name.trim() !== '';
    }

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Function to validate password match
    function validatePasswordMatch() {
      const { password, confirmPassword } = formData;

      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
      }
      return true;
    }

    // Get values from form fields
    const { name, email, password } = formData;

    if (!validateName(name)) {
      alert('Please Enter Your Name.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid E-mail Address.');
      return;
    }

    if (!validatePasswordMatch()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/v1/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('User registered successfully.');
      } else {
        alert('Error registering user.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <section className="consultants-form-container">
      <header>Add New Consultants</header>
      <form id="registrationForm2" className="consultants-form" onSubmit={handleSubmit}>
        <div className="input-box">
          <label htmlFor="name">Consultant Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Consultant Name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-box">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Consultant E-mail"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            required
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-box">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <input type="hidden" id="role" value="CONSULTANT" />
        <button type="submit">Submit</button>
        <button id="backButton" onClick={handleBackButtonClick}>
          Back
        </button>
      </form>
    </section>
  );
};

export default ConsultantsForm;

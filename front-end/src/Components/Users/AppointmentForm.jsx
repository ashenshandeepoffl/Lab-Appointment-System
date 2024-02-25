// AppointmentForm.jsx

import React, { useState } from 'react';
import './AppointmentForm.css'; // Import external stylesheet

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    address: '',
    age: '',
    dob: '',
    gender: '',
    category: '',
    country: '',
    date: '',
    time: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation (you might want to use a more robust validation library)
    const requiredFields = ['fName', 'lName', 'address', 'age', 'dob', 'gender', 'category', 'country', 'date', 'time', 'email', 'phone'];
    if (requiredFields.some(field => formData[field].trim() === '')) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/v1/CreateAppointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Appointment added successfully.');
      } else {
        alert('Error scheduling appointment.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <section className="appointment-form-container">
      <header>Add Appointment</header>
      <form id="AppointmentForm" className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fName">First Name</label>
          <input type="text" id="fName" placeholder="Enter your first name" onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="lName">Last Name</label>
          <input type="text" id="lName" placeholder="Enter your last name" onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="Enter your address" onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" placeholder="Enter your age" min="0" onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Birthdate</label>
          <input type="date" id="dob" onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" onChange={handleInputChange}>
            <option hidden>Select</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="category">Job Type</label>
          <select id="category" onChange={handleInputChange}>
            <option hidden>Select the Job Type</option>
            <option>Finance</option>
            <option>Health Care</option>
            <option>Management</option>
            <option>IT</option>
            <option>Human Resources</option>
            <option>Sales</option>
            <option>Teacher</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select id="country" onChange={handleInputChange}>
            <option hidden>Select the Country</option>
            <option>USA</option>
            <option>Japan</option>
            <option>Oman</option>
            <option>United States</option>
            <option>Korea</option>
            <option>Malaysia</option>
            <option>Pakistan</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Appointment Date</label>
          <input type="date" id="date" onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="time">Appointment Time</label>
          <input type="time" id="time" onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" placeholder="Enter your phone number" onChange={handleInputChange} />
        </div>

        <div className="button-container">
          <button type="submit">Submit</button>
          <button id="backButton" onClick={handleBackButtonClick}>Back</button>
        </div>
      </form>
    </section>
  );
};

export default AppointmentForm;

import React, { useState } from 'react';

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

    // Validation
    if (
      formData.fName.trim() === '' ||
      formData.lName.trim() === '' ||
      formData.address.trim() === '' ||
      formData.age.trim() === '' ||
      formData.dob.trim() === '' ||
      formData.gender === 'hidden' ||
      formData.category === 'hidden' ||
      formData.country === 'hidden' ||
      formData.date.trim() === '' ||
      formData.time.trim() === '' ||
      formData.email.trim() === '' ||
      formData.phone.trim() === ''
    ) {
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
    <section className="container">
      <header>Add Appointment Form</header>
      <form id="AppointmentForm" className="form" onSubmit={handleSubmit}>
        <div className="input-box">
          <label>First Name</label>
          <input type="text" id="fName" placeholder="Enter your name" onChange={handleInputChange} />
        </div>

        <div className="input-box">
          <label>Last Name</label>
          <input type="text" id="lName" placeholder="Enter your name" onChange={handleInputChange} />
        </div>

        <div className="input-box">
          <label>Address</label>
          <input type="text" id="address" placeholder="Enter your address" onChange={handleInputChange} />
        </div>

        <div className="column">
          <div className="input-box">
            <label>Age</label>
            <input type="number" id="age" placeholder="Enter your age" min="0" onChange={handleInputChange} />
          </div>
          <div className="input-box">
            <label>Birthdate</label>
            <input type="date" id="dob" placeholder="Enter the time" onChange={handleInputChange} />
          </div>
          <div className="input-box">
            <label>Sex</label>
            <div className="select-box">
              <select id="gender" onChange={handleInputChange}>
                <option hidden>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
        </div>

        <div className="input-box">
          <label>Your Job Type</label>
          <div className="select-box">
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
        </div>

        <div className="input-box">
          <label>Your Country</label>
          <div className="select-box">
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
        </div>

        <div className="column">
          <div className="input-box">
            <label>Select Appointment Date</label>
            <input type="date" id="date" placeholder="Enter the time" onChange={handleInputChange} />
          </div>
          <div className="input-box">
            <label>Select Appointment Time</label>
            <input type="time" id="time" placeholder="Enter birth date" onChange={handleInputChange} />
          </div>
        </div>

        <div className="input-box">
          <label>Your E-mail</label>
          <input type="email" id="email" placeholder="Enter your name" onChange={handleInputChange} />
        </div>

        <div className="input-box">
          <label>Your Phone Number</label>
          <input type="text" id="phone" placeholder="Enter your name" onChange={handleInputChange} />
        </div>

        <button type="submit">Submit</button>
        <button id="backButton" onClick={handleBackButtonClick}>Back</button>
      </form>
    </section>
  );
};

export default AppointmentForm;

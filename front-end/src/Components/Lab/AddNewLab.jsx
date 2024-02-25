// ConsultantsForm.jsx

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './ConsultantsForm.css';

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

    // Validation (you might want to use a more robust validation library)
    const requiredFields = ['name', 'email', 'password', 'confirmPassword'];
    if (requiredFields.some(field => formData[field].trim() === '')) {
      alert('Please fill out all fields.');
      return;
    }

    // Validation for password match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      // Your API request code...
      alert('User registered successfully.');
    } catch (error) {
      console.error('Error:', error);
      alert('Error registering user.');
    }
  };

  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <Box className="consultants-form-container">
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        Add New Consultant
      </Typography>
      <form id="registrationForm2" className="consultants-form" onSubmit={handleSubmit}>
        <div className="input-box">
          <TextField
            label="Consultant Name"
            variant="outlined"
            fullWidth
            required
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-box">
          <TextField
            label="E-mail"
            variant="outlined"
            fullWidth
            required
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-box">
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            required
            type="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-box">
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            required
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <input type="hidden" id="role" value="CONSULTANT" />
        <div className="button-container">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button id="backButton" onClick={handleBackButtonClick} variant="outlined">
            Back
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default ConsultantsForm;

// SignUp.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
`;

const PasswordMatchError = styled.p`
  color: red;
`;

const SignUp = () => {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    mobileNumber: '',
    address: '',
    nicNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordMatchError, setPasswordMatchError] = useState('');

  const validateField = (value, fieldName) => {
    if (fieldName === 'fName' || fieldName === 'lName' || fieldName === 'mobileNumber' || fieldName === 'nicNumber' || fieldName === 'address') {
      return value.trim() !== '';
    } else if (fieldName === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (fieldName === 'password') {
      return value.trim() !== '';
    }
    return true;
  };

  const validatePassword = () => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError('Passwords do not match');
      return false;
    } else {
      setPasswordMatchError('');
      return true;
    }
  };

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validate form fields
    const fieldsToValidate = ['fName', 'lName', 'email', 'mobileNumber', 'address', 'nicNumber', 'password'];
    for (const fieldName of fieldsToValidate) {
      const value = formData[fieldName];
      if (!validateField(value, fieldName)) {
        alert(`Please enter a valid ${fieldName}`);
        return;
      }
    }

    // Validate password match
    if (!validatePassword()) {
      alert('Password validation failed');
      return;
    }

    // Submit registration logic
    try {
      const response = await fetch('http://localhost:8080/api/v1/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fName: formData.fName,
          lName: formData.lName,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          address: formData.address,
          nicNumber: formData.nicNumber,
          password: formData.password,
          role: 'ADMIN', // Hardcoded role for now, you can modify this as needed
        }),
      });

      if (response.ok) {
        alert('User registered successfully.');

        // Clear form fields
        setFormData({
          fName: '',
          lName: '',
          email: '',
          mobileNumber: '',
          address: '',
          nicNumber: '',
          password: '',
          confirmPassword: '',
        });

        // Redirect to login page or perform any necessary navigation logic
        // Assuming you are using React Router, you can replace the following line with your actual navigation logic
        window.location.href = '/login'; // Update with your login page route
      } else {
        alert('Error registering user.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering user.');
    }
  };

  return (
    <Container>
      <SignUpForm onSubmit={handleSignUp}>
        <Input
          type="text"
          id="fName"
          placeholder="First Name"
          value={formData.fName}
          onChange={(e) => handleInputChange('fName', e.target.value)}
        />
        <Input
          type="text"
          id="lName"
          placeholder="Last Name"
          value={formData.lName}
          onChange={(e) => handleInputChange('lName', e.target.value)}
        />
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
        <Input
          type="text"
          id="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
        />
        <Input
          type="text"
          id="address"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
        />
        <Input
          type="text"
          id="nicNumber"
          placeholder="NIC Number"
          value={formData.nicNumber}
          onChange={(e) => handleInputChange('nicNumber', e.target.value)}
        />
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
        />
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
        />
        <PasswordMatchError>{passwordMatchError}</PasswordMatchError>
        <Button type="submit">Register</Button>
      </SignUpForm>
    </Container>
  );
};

export default SignUp;

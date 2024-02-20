import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import the Link component

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
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

const SignUpLink = styled(Link)`
  margin-top: 10px;
  color: #4CAF50;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter both Email and Password.');
      return;
    }

    const credentials = {
      email: email,
      password: password
    };

    // Sending a POST request to the Spring Boot API
    fetch('http://localhost:8080/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setIsLoggedIn(true); 
        
          // Redirect the user based on their role
          if (data.role === 'USER') {
            alert('Login successful User ' + data.name);
            navigate('/user');
          } else if (data.role === 'ADMIN') {
            alert('Login successful Admin ' + data.name);
            navigate('/admin', { state: { email: data.email } }); 
          } else if (data.role === 'CONSULTANT') {
            alert('Login successful Counselor ' + data.name);
            navigate('/consultant');
          }
        } else {
          alert('Login failed. Please check your credentials.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during login.');
      });
  };

  return (
    <Container>
      <LoginForm onSubmit={handleLogin}>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </LoginForm>
      <SignUpLink to="/signup">Not registered? Sign up here</SignUpLink>
    </Container>
  );
};

export default Login;

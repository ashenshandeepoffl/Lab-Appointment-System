import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsLoggedIn, setIsLabUser }) => {
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

          if (data.role === 'USER') {
            setIsLabUser(false);
            alert('Login successful User ' + data.name);
            navigate('/user');
          } else if (data.role === 'ADMIN') {
            setIsLabUser(false);
            alert('Login successful Admin ' + data.name);
            navigate('/customer', { state: { email: data.email } });
          } else if (data.role === 'CONSULTANT') {
            setIsLabUser(true);
            alert('Login successful Lab ' + data.name);
            navigate('/lab');
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
    <div className="container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login Form</h1>
        <input
          className="input"
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" type="submit">Login</button>
      </form>
      <a className="sign-up-link" href="/signup">Not registered? Sign up here</a>
    </div>
  );
};

export default Login;
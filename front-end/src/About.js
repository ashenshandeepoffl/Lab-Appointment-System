// Home.js
import React from 'react';

const About = () => {
  const homeStyles = {
    textAlign: 'center',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={homeStyles}>
      <h2>Welcome to the About US!</h2>
      <p>This is a simple React application.</p>
    </div>
  );
}

export default About;
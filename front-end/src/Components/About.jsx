import React from 'react';
import Image1 from '../Images/2.jpg';
import Image2 from '../Images/3.jpg';
import Footer from './Footer';

const About = () => {
  const aboutStyles = {
    textAlign: 'center',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const imageStyles = {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '15px',
  };

  return (
    <div style={aboutStyles}>
      <h2>Welcome to the About Us Page!</h2>
      <p>This is a modern and visually appealing About Us page for our React application.</p>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ flex: '1', marginRight: '10px' }}>
          <img src={Image1} alt="About Us Image 1" style={imageStyles} />
          <p>Our Mission: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div style={{ flex: '1' }}>
          <img src={Image2} alt="About Us Image 2" style={imageStyles} />
          <p>Our Vision: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;

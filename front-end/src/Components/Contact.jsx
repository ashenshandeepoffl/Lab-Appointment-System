import React from 'react';
import ContactImage from '../Images/4.jpg';
import Footer from './Footer';

const Contact = () => {
  const contactStyles = {
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
    <div style={contactStyles}>
      <h2>Welcome to the Contact Us Page!</h2>
      <p>Feel free to reach out to us. We're here to help!</p>

      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <div style={{ flex: '1', marginRight: '20px' }}>
          <img src={ContactImage} alt="Contact Us Image" style={imageStyles} />
        </div>

        <div style={{ flex: '1', textAlign: 'left' }}>
          <h3>Contact Information</h3>
          <p>
            <strong>Phone:</strong> +1 123 456 7890
          </p>
          <p>
            <strong>Email:</strong> info@example.com
          </p>
          <p>
            <strong>Locations:</strong>
          </p>
          <ul>
            <li>Main Office - 123 Street, City</li>
            <li>Branch 1 - 456 Avenue, Town</li>
            <li>Branch 2 - 789 Road, Village</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;

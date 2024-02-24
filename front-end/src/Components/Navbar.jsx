import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyles = {
    background: '#333',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#fff',
  };

  const linkStyles = {
    textDecoration: 'none',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background 0.3s',
  };

  return (
    <nav style={navStyles}>
      <Link to="/" style={linkStyles}>Home</Link>
      <Link to="/about" style={linkStyles}>About</Link>
      <Link to="/contact" style={linkStyles}>Contact</Link>
      <Link to="/login" style={linkStyles}>Login</Link>
    </nav>
  );
}

export default Navbar;

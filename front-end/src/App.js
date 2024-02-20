// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importing Routes instead of Switch
import Navbar from './Navbar';
import Home from './Home'; // Import your Home component
import About from './About'; // Import your About component
import Contact from './Contact'; // Import your Contact component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Change from Switch to Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> {/* Change from Switch to Routes */}
    </Router>
  );
}

export default App;

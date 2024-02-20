import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Navbar from './Navbar';
import Home from './Home';
import About from './About'; 
import Contact from './Contact';
import Login from './Login';
import Admin from './Admin';
import SignUp from './SignUp';
import UserHome from './UserHome';  
import UserNavbar from './UserNavbar';
import Logout from './Logout';  

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {isLoggedIn ? <UserNavbar /> : <Navbar />}
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;

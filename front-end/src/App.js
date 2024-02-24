import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About'; 
import Contact from './Components/Contact';
import Login from './Components/Login';
import Customer from './Components/Users/Customer';
import SignUp from './Components/SignUp';  
import UserNavbar from './Components/Users/UserNavbar';
import Logout from './Components/Logout';
import AppointmentForm from './Components/Users/AppointmentForm';
import ViewSchedule from './Components/Users/ViewSchedule';
import Lab from './Components/Lab/Lab'; 
import LabNavbar from './Components/Lab/LabNavbar'; 
import AddNewLab from './Components/Lab/AddNewLab';
import AddNewSchedule from './Components/Lab/AddNewSchedule';
import ViewAllUsers from './Components/Lab/ViewAllUsers';
import ViewAppointment from './Components/Lab/ViewAppointments';
import SendEmail from './Components/Lab/SendEmail';
// import ViewEmails from './Components/Lab/ViewEmails';
import UpdateSchedule from './Components/Lab/UpdateSchedule';
import PdfReportPage from './Components/Lab/Pdf';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLabUser, setIsLabUser] = useState(false);

  return (
    <Router>
      {isLoggedIn ? (
        isLabUser ? <LabNavbar /> : <UserNavbar />
      ) : (
        <Navbar />
      )}
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} setIsLabUser={setIsLabUser} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/customer" element={<Customer />} />
        <Route
          path="/logout"
          element={<Logout setIsLoggedIn={setIsLoggedIn} setIsLabUser={setIsLabUser} />}
        />
        <Route path="/appointmentForm" element={<AppointmentForm />} />        
        <Route path="/viewSchedule" element={<ViewSchedule />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/addNewLab" element={<AddNewLab />} />
        <Route path="/addNewSchedule" element={<AddNewSchedule />} />
        <Route path="/viewAllUsers" element={<ViewAllUsers />} />
        <Route path="/viewAppointment" element={<ViewAppointment />} />
        <Route path="/sendEmail" element={<SendEmail />} />
        <Route path="/updateSchedule" element={<UpdateSchedule />} />
        <Route path="/pdf" element={<PdfReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;

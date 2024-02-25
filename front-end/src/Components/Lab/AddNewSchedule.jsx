// ScheduleForm.jsx

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import './ScheduleForm.css';

const ScheduleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    day: '',
    ftime: '',
    ttime: '',
    category: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation code...
    try {
      // API request code...
      alert('Schedule added successfully.');
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding schedule.');
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <section className="container">
      <header>Add Schedule</header>
      <form id="ScheduleForm" className="form" onSubmit={handleSubmit}>
        <div className="input-box">
          <TextField
            label="Petient Name"
            variant="outlined"
            fullWidth
            required
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-box">
          <TextField
            label="Date"
            variant="outlined"
            fullWidth
            required
            type="date"
            id="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>

        <div className="select-box">
          <FormControl fullWidth variant="outlined">
            <InputLabel>Day</InputLabel>
            <Select
              label="Day"
              required
              id="day"
              value={formData.day}
              onChange={handleInputChange}
            >
              <MenuItem value="" disabled>
                Select the day
              </MenuItem>
              <MenuItem value="Monday">Monday</MenuItem>
              <MenuItem value="Tuesday">Tuesday</MenuItem>
              <MenuItem value="Wednesday">Wednesday</MenuItem>
              <MenuItem value="Thursday">Thursday</MenuItem>
              <MenuItem value="Friday">Friday</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="column">
          <div className="input-box">
            <TextField
              label="Start Time"
              variant="outlined"
              type="time"
              fullWidth
              required
              id="ftime"
              value={formData.ftime}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-box">
            <TextField
              label="End Time"
              variant="outlined"
              type="time"
              fullWidth
              required
              id="ttime"
              value={formData.ttime}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="select-box">
          <FormControl fullWidth variant="outlined">
            <InputLabel>Category</InputLabel>
            <Select
              label="Category"
              required
              id="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <MenuItem value="" disabled>
                Select the category
              </MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
              <MenuItem value="Health Care">Health Care</MenuItem>
              <MenuItem value="Management">Management</MenuItem>
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="Human Resources">Human Resources</MenuItem>
              <MenuItem value="Sales">Sales</MenuItem>
              <MenuItem value="Teacher">Teacher</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="button-container">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
          <Button
            type="button"
            onClick={handleBackClick}
            variant="outlined"
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ScheduleForm;

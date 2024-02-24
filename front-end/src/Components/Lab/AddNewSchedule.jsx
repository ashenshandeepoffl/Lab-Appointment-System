import React from 'react';

const ScheduleForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const day = document.getElementById('day').value;
    const ftime = document.getElementById('ftime').value;
    const ttime = document.getElementById('ttime').value;
    const category = document.getElementById('category').value;

    // Validation
    if (name.trim() === '') {
      alert('Please enter your name.');
      return;
    }

    if (date.trim() === '') {
      alert('Please select a date.');
      return;
    }

    if (day === 'hidden') {
      alert('Please select a day.');
      return;
    }

    if (ftime.trim() === '' || ttime.trim() === '') {
      alert('Please enter both start and end times.');
      return;
    }

    if (category === 'hidden') {
      alert('Please select a category.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/v1/saveSchedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          date,
          day,
          ftime,
          ttime,
          category,
        }),
      });

      if (response.ok) {
        alert('Schedule added successfully.');
      } else {
        alert('Error adding schedule.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleBackClick = () => {
    window.history.back(); // This will go back to the previous page in the browser's history.
  };

  return (
    <section className="container">
      <header>Add Schedule Form</header>
      <form id="ScheduleForm" className="form" onSubmit={handleSubmit}>
        <div className="input-box">
          <label>Consultant Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>

        <div className="input-box">
          <label>Your Date</label>
          <input type="date" id="date" required />
        </div>

        <div className="select-box">
          <label>Select the day</label>
          <select id="day">
            <option hidden>Select the day</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
          </select>
        </div>

        <div className="column">
          <div className="input-box">
            <label>Select your time</label>
            <br />
            <label>From</label>
            <input type="time" id="ftime" placeholder="Enter the time" />
          </div>
          <div className="input-box">
            <br />
            <label>To</label>
            <input type="time" id="ttime" placeholder="Enter birth date" />
          </div>
        </div>

        <div className="select-box">
          <label>Select the category</label>
          <select id="category">
            <option hidden>Select the category</option>
            <option>Finance</option>
            <option>Health Care</option>
            <option>Management</option>
            <option>IT</option>
            <option>Human Resources</option>
            <option>Sales</option>
            <option>Teacher</option>
          </select>
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={handleBackClick} id="backButton">
          Back
        </button>
      </form>
    </section>
  );
};

export default ScheduleForm;

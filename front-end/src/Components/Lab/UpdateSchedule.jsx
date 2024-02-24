import React, { useState } from 'react';

const UpdateScheduleForm = () => {
  const [searchInput, setSearchInput] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');
  const [ftime, setFtime] = useState('');
  const [ttime, setTtime] = useState('');
  const [category, setCategory] = useState('');

  const searchFormSubmit = (event) => {
    event.preventDefault();

    // Fetch data and update state accordingly
    fetch(`http://localhost:8080/api/v1/searchSchedulet/${searchInput}`)
      .then(response => response.json())
      .then(data => {
        if (data.code === "00" && data.message === "Success") {
          const employee = data.content;
          setId(employee.id);
          setName(employee.name);
          setDate(employee.date);
          setDay(employee.day);
          setFtime(employee.ftime);
          setTtime(employee.ttime);
          setCategory(employee.category);
        } else {
          // Handle error or display a message
        }
      })
      .catch(error => {
        console.error('Error searching for employee:', error);
      });
  };

  const updateFormSubmit = (event) => {
    event.preventDefault();

    // Construct the update data object
    const updateData = {
      id,
      name,
      date,
      day,
      ftime,
      ttime,
      category,
    };

    // Send a PUT request to update the details
    fetch('http://localhost:8080/api/v1/updateSchedulet', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.code === "00" && data.message === "Success") {
          alert('Update successfully');
          // Clear form fields after successful update
          setSearchInput('');
          setId('');
          setName('');
          setDate('');
          setDay('');
          setFtime('');
          setTtime('');
          setCategory('');
        } else {
          // Handle error or display a message
        }
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };

  const handleBackButton = () => {
    window.history.back(); // This will go back to the previous page in the browser's history.
  };

  return (
    <div className="container">
      <header>Update Schedule Form</header>
      <form id="searchForm" onSubmit={searchFormSubmit}>
        <div className="search">
          <input
            className="srch"
            type="search"
            id="searchInput"
            placeholder="Enter Employee ID"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="btn" type="submit">Search</button>
        </div>
      </form>
      <form id="updateForm" className="form" onSubmit={updateFormSubmit}>
        <div className="input-box">
          <label>Consultant Name</label>
          <input type="text" id="id" placeholder="Enter your name" value={id} readOnly />
        </div>
        <div className="input-box">
          <label>Consultant Name</label>
          <input type="text" id="name" placeholder="Enter your name" value={name} readOnly />
        </div>
        <div className="input-box">
          <label>Your Date</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="select-box">
          <select id="day" value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="" hidden>Select the day</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
          </select>
        </div>
        <div className="column">
          <div className="input-box">
            <label>Select your time</label><br />
            <label>From</label>
            <input type="time" id="ftime" placeholder="Enter the time" value={ftime} onChange={(e) => setFtime(e.target.value)} />
          </div>
          <div className="input-box">
            <br /><label>To</label>
            <input type="time" id="ttime" placeholder="Enter the time" value={ttime} onChange={(e) => setTtime(e.target.value)} />
          </div>
        </div>
        <div className="select-box">
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="" hidden>Select category</option>
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
        <button type="button" onClick={handleBackButton}>Back</button>
      </form>
      <div id="searchResult"></div>
    </div>
  );
};

export default UpdateScheduleForm;

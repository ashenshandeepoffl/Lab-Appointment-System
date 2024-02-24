import React, { useEffect } from 'react';

const ViewAppointment = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/getAllAppointment');
        const data = await response.json();
        const tableBody = document.getElementById('data');

        data.content.forEach(event => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${event.id}</td>
            <td>${event.fName}</td>
            <td>${event.address}</td>
            <td>${event.age}</td>
            <td>${event.dob}</td>
            <td>${event.sex}</td>
            <td>${event.category}</td>
            <td>${event.country}</td>
            <td>${event.date}</td>
            <td>${event.time}</td>
            <td>${event.email}</td>
            <td>${event.phone}</td>
            <td>
              <span class="action_btn">
                <a href="#" class="delete-button">Remove</a>
              </span>
            </td>
          `;
          tableBody.appendChild(row);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    const searchId = document.getElementById('searchInput').value;
    if (!searchId) {
      alert('Please enter an ID to search.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/v1/searchAppointment/${searchId}`);
      const data = await response.json();
      const tableBody = document.getElementById('data');
      tableBody.innerHTML = ''; // Clear previous search results

      if (data.content) {
        const event = data.content;
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${event.id}</td>
          <td>${event.fName}</td>
          <td>${event.address}</td>
          <td>${event.age}</td>
          <td>${event.dob}</td>
          <td>${event.sex}</td>
          <td>${event.category}</td>
          <td>${event.country}</td>
          <td>${event.date}</td>
          <td>${event.time}</td>
          <td>${event.email}</td>
          <td>${event.phone}</td>
          <td>
            <span class="action_btn">
              <a href="#" class="delete-button">Remove</a>
            </span>
          </td>
        `;
        tableBody.appendChild(row);
      } else {
        alert('No matching record found.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>View Appointment</h1>
      <div className="search">
        <input className="srch" type="search" id="searchInput" placeholder="Type To text" />
        <button onClick={handleSearch} className="btn">Search</button>
      </div>

      <div className="table_responsive">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Full Name</th>
              <th>Address</th>
              <th>Age</th>
              <th>Birthday</th>
              <th>Gender</th>
              <th>Job Type</th>
              <th>Country</th>
              <th>Appointment Date</th>
              <th>Appointment Time</th>
              <th>E-mail</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody id="data">
            {/* Table rows will be generated here */}
          </tbody>
        </table>
      </div>
      <button className="backButton" onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default ViewAppointment;

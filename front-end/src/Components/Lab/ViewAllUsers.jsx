import React, { useEffect } from 'react';

const AllUserDetails = () => {
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/all')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          const tableBody = document.getElementById('data');

          data.forEach(event => {
            if (event && event.id && event.email && event.name) {
              const row = document.createElement('tr');
              row.innerHTML = `
                <td>${event.id}</td>
                <td>${event.email}</td>
                <td>${event.name}</td>
              `;
              tableBody.appendChild(row);
            } else {
              console.error('Unexpected JSON structure for an event:', event);
            }
          });
        } else {
          console.error('Unexpected JSON structure:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <div>
      <h1>All User Details</h1>
      <div className="table_responsive">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Emails</th>
              <th>User Names</th>
            </tr>
          </thead>

          <tbody id="data">
            {/* Table rows will be generated here */}
          </tbody>
        </table>
      </div>
      <button className="backButton" onClick={handleBackButtonClick}>
        Back
      </button>
    </div>
  );
};

export default AllUserDetails;

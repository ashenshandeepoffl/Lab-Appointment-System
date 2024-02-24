import React, { useState, useEffect } from 'react';

const ViewSchedule = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/AllSchedulet');
      const result = await response.json();
      setData(result.content);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = async () => {
    if (!searchInput) {
      alert('Please enter an ID to search.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/v1/searchSchedulet/${searchInput}`);
      const result = await response.json();

      if (result.content) {
        setData([result.content]);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>View Schedule</h1>
      <div className="search">
        <input
          className="srch"
          type="search"
          id="searchInput"
          placeholder="Type To text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="table_responsive">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Consultant Name</th>
              <th>Available Date</th>
              <th>Available Day</th>
              <th>Time (From)</th>
              <th>Time (To)</th>
              <th>Job Type</th>
            </tr>
          </thead>

          <tbody id="data">
            {data.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.day}</td>
                <td>{event.ftime}</td>
                <td>{event.ttime}</td>
                <td>{event.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="backButton" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
};

export default ViewSchedule;

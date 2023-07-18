import React, { useEffect, useState } from 'react';
import './MedalsTable.css'; // Import the CSS file

const MedalsTable = () => {
  const [medalData, setMedalData] = useState([]);

  useEffect(() => {
    fetch('/Data/dummyData.json') // Replace with the actual path to your JSON file if it's not in the public folder.
      .then((response) => response.json())
      .then((data) => setMedalData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="medals-table-container">
      <h2>Medals Table</h2>
      <table className="medals-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Year</th>
            <th>Medals</th>
          </tr>
        </thead>
        <tbody>
          {medalData.map((item) => (
            <tr key={item.Id}>
              <td>{item.Id}</td>
              <td>{item.Year}</td>
              <td>{item.Medals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedalsTable;

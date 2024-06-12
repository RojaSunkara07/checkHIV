import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar component
import '../Styles/History.css';

function History() {
  // Sample data for the table
  const sampleReports = [
    { id: 1, date: '2023-01-15', symptoms: 'Fever, Headache', hivStatus: 'Negative' },
    { id: 2, date: '2023-02-10', symptoms: 'Cough, Fatigue', hivStatus: 'Positive' },
    { id: 3, date: '2023-03-20', symptoms: 'Sore throat', hivStatus: 'Negative' },
    { id: 4, date: '2023-04-05', symptoms: 'None', hivStatus: 'Negative' },
    { id: 5, date: '2023-05-12', symptoms: 'Fever', hivStatus: 'Positive' },
  ];

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredReports, setFilteredReports] = useState(sampleReports);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    filterReports(e.target.value, endDate);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    filterReports(startDate, e.target.value);
  };

  const filterReports = (start, end) => {
    // Filter reports based on the selected start and end dates
    const filtered = sampleReports.filter((report) => {
      const reportDate = new Date(report.date);
      return (
        (!start || reportDate >= new Date(start)) &&
        (!end || reportDate <= new Date(end))
      );
    });
    setFilteredReports(filtered);
  };

  return (
    <div className="history">
      <Sidebar /> {/* Include the Sidebar component */}
      <div className="history-content">
        <h2>Report History</h2>

        <div className="date-filters">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={handleStartDateChange}
          />
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>

        <table className="report-table">
          <thead>
            <tr>
              <th>Report Date</th>
              <th>Symptoms</th>
              <th>HIV Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr key={report.id}>
                <td>{report.date}</td>
                <td>{report.symptoms}</td>
                <td>{report.hivStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;

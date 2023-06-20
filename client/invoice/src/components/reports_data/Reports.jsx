import React from 'react';
import './reports.css';

const Reports = () => {
  const clientsData = [
    { number: 1, clientReference: 'REF-001', date: '2023-05-01', dueDate: '2023-06-01', age: 30, total: 5000, paid: 2000, credited: 3000, due: 2000 },
    { number: 2, clientReference: 'REF-002', date: '2023-05-02', dueDate: '2023-06-02', age: 29, total: 7000, paid: 3000, credited: 2000, due: 2000 },
  ];

  return (
    <section className="reports-page">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 reports">
            <div className="reports">
              <h2>Reports</h2>
              <div className="date-filter">
                <label htmlFor="from-date">From:</label>
                <input type="date" id="from-date" />

                <label htmlFor="to-date">To:</label>
                <input type="date" id="to-date" />

                <label htmlFor="as-at-date">As At:</label>
                <input type="date" id="as-at-date" />

                <button className="filter-button">Filter</button>
              </div>

              <div className="action-buttons">
                <button className="print-button">Print</button>
                <div className="export-dropdown">
                  <button className="export-button">Export</button>
                  <div className="export-options">
                    <button>Excel</button>
                    <button>Google Sheets</button>
                    <button>PDF</button>
                  </div>
                </div>
                <button className="email-button">Email</button>
              </div>

              <div className="clients-table">
                <table>
                  <thead>
                    <tr>
                      <th>Number</th>
                      <th>Client Reference</th>
                      <th>Date</th>
                      <th>Due Date</th>
                      <th>Age</th>
                      <th>Total</th>
                      <th>Paid</th>
                      <th>Credited</th>
                      <th>Due</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientsData.map((client) => (
                      <tr key={client.number}>
                        <td>{client.number}</td>
                        <td>{client.clientReference}</td>
                        <td>{client.date}</td>
                        <td>{client.dueDate}</td>
                        <td>{client.age}</td>
                        <td>{client.total}</td>
                        <td>{client.paid}</td>
                        <td>{client.credited}</td>
                        <td>{client.due}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;

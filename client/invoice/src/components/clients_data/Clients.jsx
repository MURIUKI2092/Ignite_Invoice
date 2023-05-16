import React from 'react';
import './clients.css';

const Clients = () => {
  const clientsData = [
    { client: 'Client 1', name: 'John Doe', outstanding: 10000, overdue: 5000 },
    { client: 'Client 2', name: 'Jane Smith', outstanding: 15000, overdue: 3000 },
    { client: 'Client 3', name: 'David Johnson', outstanding: 8000, overdue: 2000 },
    { client: 'Client 4', name: 'Emily Davis', outstanding: 12000, overdue: 4000 },
    { client: 'Client 5', name: 'Michael Brown', outstanding: 20000, overdue: 7000 },
    { client: 'Client 6', name: 'Olivia Wilson', outstanding: 9000, overdue: 1500 },
    { client: 'Client 7', name: 'William Taylor', outstanding: 18000, overdue: 6000 },
    { client: 'Client 8', name: 'Sophia Anderson', outstanding: 11000, overdue: 3500 },
    { client: 'Client 9', name: 'James Martinez', outstanding: 13000, overdue: 2500 },
    { client: 'Client 10', name: 'Ava Thomas', outstanding: 17000, overdue: 4500 },
    { client: 'Client 11', name: 'Benjamin Hernandez', outstanding: 14000, overdue: 3800 },
    { client: 'Client 12', name: 'Mia Moore', outstanding: 16000, overdue: 4200 },
    { client: 'Client 13', name: 'Daniel Clark', outstanding: 22000, overdue: 8000 },
    { client: 'Client 14', name: 'Sofia Lewis', outstanding: 10000, overdue: 3000 },
    { client: 'Client 15', name: 'Henry Lee', outstanding: 19000, overdue: 5500 },
  ];

  return (
    <section className="clients-data">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 clients">
            <div className="header">
              <h1>Clients</h1>
            </div>
            <div className="clients-table">
              <table>
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Name</th>
                    <th>Outstanding</th>
                    <th>Overdue</th>
                  </tr>
                </thead>
                <tbody>
                  {clientsData.map((client, index) => (
                    <tr key={index}>
                      <td>{client.client}</td>
                      <td>{client.name}</td>
                      <td>{client.outstanding}</td>
                      <td>{client.overdue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

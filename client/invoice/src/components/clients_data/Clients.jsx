import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './clients.css';

const Clients = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/all/clients')
      .then(response => {
        // Handle the response data
          console.log(response.data,">>>>>>>>>>this is the response");
        setData(response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  }, []);
  return (
    <section className="clients-data">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 clients" style={{zIndex:100}}>
            <div className="header" >
              <h1 style={{ fontFamily: 'sans-serif' }}>Clients </h1>
            </div>
            <div className="clients-table" style={{maxHeight:"82vh",overflowY:"auto"}}>
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
                  {data.map((client, index) => (
                    <tr key={index}>
                      <td>{client._id}</td>
                      <td>{client.client}</td>
                      <td>{client.grandTotal}</td>
                      <td>{client.balanceAmount}</td>
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

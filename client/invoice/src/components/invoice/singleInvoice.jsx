import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEye } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';


import './invoice.css';

const SingleInvoice = () => {
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
                      </div >
                      <div style={{ display: "flex" }}>
                          <div style={{ flex: "1" }}>
                              <p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "16px",marginBottom:"20px" }}>BILLED TO</p>
                              
                              <p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "14px" }}>brooke hse</p>
                              <p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "14px",color:"grey" }}>brooke hse</p>
                              <p style ={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"14px",color:"grey" }}>brooke hse</p>
                              <p style ={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"14px",color:"grey" }}>brooke hse</p>
                              
                          
                      </div>
                          <div style={{ display: "flex", justifyContent: "space-between",marginRight:"20px",minWidth:"300px" }}>
                            <div style={{ display: "flex", flexDirection: "column",flex:"3" }}>
                                  <div style={{  marginBottom: "10px", marginRight: "150px" }}><p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "14px" }}>
                                      InvoiceNumber
                                  </p></div>
                                <div style={{  marginBottom: "10px",marginRight:"150px" }}><p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "14px" }}>
                                      Issued
                                  </p></div>
                                <div style={{marginBottom: "10px",marginRight:"150px" }}><p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "14px" }}>
                                      Due
                                  </p></div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column",flex:"2" }}>
                                <div style={{  marginBottom: "10px" }}><p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "14px",color:"gray" }}>
                                      Due
                                  </p></div>
                                <div style={{  marginBottom: "10px" }}><p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "14px",color:"gray" }}>
                                      Due
                                  </p></div>
                                <div style={{ marginBottom: "10px" }}><p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "14px",color:"gray" }}>
                                      Due,
                                  </p></div>
                            </div>
                            
                            </div>

                          
                      </div>

                      <section style={{ display: "flex", justifyContent: "flex-end",marginTop:"40px",marginBottom:"40px" }}>
                          <button style={{ borderRadius: '5px',border:'none',marginRight:"10px",width:"130px"}}><p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "16px",paddingTop:"5px" }}><FaEye/>  Preview
</p></button>
                          <button style={{ borderRadius: '5px',border:'none',marginRight:"30px",width:"100px",backgroundColor:"black",color:"white"}}><p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "16px",paddingTop:"5px" }}>Email</p></button>
                          <button style={{ borderRadius: '5px',border:'none',marginRight:"30px",width:"100px",backgroundColor:"black",color:"white"}}><p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "16px" ,paddingTop:"5px"}}>Print PDF</p></button>
                          <button style={{ borderRadius: '5px',border:'none',marginRight:"30px",width:"100px",backgroundColor:"black",color:"white"}}><p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "16px" ,paddingTop:"5px"}}><MdDescription style={{ fontSize: '2rem' }} />
 1</p></button>
                          <select style={{minWidth:"90px",marginRight:"10px"}}>
                                    <option value="all" selected>All</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                  </select>
                      </section>
                      
            <div className="clients-table" style={{maxHeight:"35vh",overflowY:"auto"}}>
              <table>
                <thead>
                  <tr style={{borderTop:"2px solid grey",marginTop:"15px"}}>
                    <th style={{ fontFamily: 'sans-serif',fontWeight:"bold",fontSize:"20px" }}>SL NO</th>
                    <th style={{ fontFamily: 'sans-serif',fontWeight:"bold",fontSize:"20px" }}>Date </th>
                    <th style={{ fontFamily: 'sans-serif',fontWeight:"bold",fontSize:"20px" }}>Candidate</th>
                    <th style={{ fontFamily: 'sans-serif',fontWeight:"bold",fontSize:"20px" }}>Unit</th>
                    <th style={{ fontFamily: 'sans-serif',fontWeight:"bold",fontSize:"20px" }}>Rate</th>
                    <th style={{ fontFamily: 'sans-serif',fontWeight:"bold",fontSize:"20px" }}>Amount</th>
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
                      <div className="mycontainer">
                        <div className="row">
                            <div className="pair">
                            <div className="item"><p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "16px" }}>Shift</p></div>
                            <div className="myitem"><p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "16px" }}>Item 2</p></div>
                            </div>
                            <div className="pair">
                            <div className="item"><p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "16px" }}>Mileage</p></div>
                            <div className="myitem"><p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "16px" }}>Item 4</p></div>
                            </div>
                            <div className="mypair">
                            <div className="item"><p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "16px" }}>Grand Total</p></div>
                            <div className="myitem"><p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "20px" }}>Item 6</p></div>
                            </div>
                        </div>
                        </div>
                      
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleInvoice;

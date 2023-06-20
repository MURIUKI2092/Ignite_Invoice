import React,{useState,useEffect} from 'react';
import './invoice.css';
import { FaCog } from 'react-icons/fa';
import axios from 'axios';
const Invoices = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [data, setData] = useState([]);
    const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

    useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/invoice/client/invoices')
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
          <div className="col-xl-12 clients" style ={{zIndex:1000}}>
                      <div className="header" style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <div>
                              <h1 style={{ fontFamily: 'sans-serif' }}>Invoices</h1>
                          </div>
                          <div style ={{marginRight:"30px"}}>
                              <button style={{ borderRadius: '5px',border:'none',height:"45px",marginRight:"30px"}}><p style={{marginLeft:"15px",marginTop:"10px"}}>Invoice Settings <FaCog style={{ marginLeft: "5px",marginRight:"10px" }} /></p ></button>
                          </div>
              
                      </div>
                      <section style ={{marginTop:"15px",marginBottom:"15px",backgroundColor:"gray",height:"80px"}}>
                          <div style={{ display: 'flex', justifyContent: 'space-between',marginTop:"0px" }}>
                              <div style={{marginTop:"10px"}}>
                                  <div><h6 style={{ fontWeight: "bold"}}>From:</h6></div>
                                  <input type="date" id="from-date" />
                              </div>
                              <div style={{marginTop:"10px"}}>
                                  <div><h6 style={{ fontWeight: "bold"}}>To:</h6></div>
                                  <input type="date" id="from-date" />
                              </div>
                              <div style={{marginTop:"10px"}}>
                                  <div><h6 style={{ fontWeight: "bold"}}>Client:</h6></div>
                                  <div>
                                      <select style={{minWidth:"100px"}}>
                                    <option value="all" selected>All</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                  </select>
                                  </div>
                              </div>
                              <div style={{ marginTop: "10px" }}>
                                  
                                  <div><h6 style={{ fontWeight: "bold"}}>Last Sent Email:</h6></div>
                                  <div>
                                      <select style={{minWidth:"150px"}}>
                                    <option value="all" selected>All</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                  </select>
                                  </div>
                              </div>
                              <div style={{marginTop:"20px"}}>
                                  <p>Overdue by <input style={{width:"60px"}}></input> days</p>
                              </div>
                              <div style={{marginTop:"20px"}}>
                                  <p>Due in <input style={{width:"60px"}}></input> days</p>
                              </div>
                              <div style={{marginTop:"10px"}}>
                                  <button style ={{color:"white",backgroundColor:"black",height:"40px",marginRight:"10px",padding:"5px"}}>Update Search Filter</button>
                              </div>
                          </div>
                      </section>
                      <div className="tab-container">
                        <div className="tab">
                            <button
                            className={`tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
                            onClick={() => handleTabClick('tab1')}
                            >
                            All
                            </button>
                            <button
                            className={`tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
                            onClick={() => handleTabClick('tab2')}
                            >
                            To Be Sent (0)
                            </button>
                            <button
                            className={`tab-button ${activeTab === 'tab3' ? 'active' : ''}`}
                            onClick={() => handleTabClick('tab3')}
                            >
                            Outstanding(6)
                              </button>
                              <button
                            className={`tab-button ${activeTab === 'tab4' ? 'active' : ''}`}
                            onClick={() => handleTabClick('tab4')}
                            >
                            Overdue(6)
                              </button>
                              <button
                            className={`tab-button ${activeTab === 'tab5' ? 'active' : ''}`}
                            onClick={() => handleTabClick('tab5')}
                            >
                            Paid
                              </button>
                              <button
                            className={`tab-button ${activeTab === 'tab6' ? 'active' : ''}`}
                            onClick={() => handleTabClick('tab6')}
                            >
                            Awaiting P.O (0)
                              </button>
                              <button style={{ marginLeft: "20%", color: "white", backgroundColor: "black", height: "40px", marginRight: "10px" ,padding:"5px"}}>Send Statements</button>
                                      <select style={{minWidth:"100px",marginLeft:"20px"}}>
                                    <option value="Export" selected>Export</option>
                                    <option value="excel">Excel</option>
                                    <option value="PDF">PDF</option>
                                    <option value="Google Sheets">Google Sheets</option>
                                  </select>
                          </div>
                          

                          </div>
            <div className="clients-table" style={{maxHeight:"60vh",overflowY:"auto"}}>
              <table>
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Client</th>
                    <th>Date</th>
                    <th>Due Date</th>
                    <th>Paid</th>
                    <th>Due</th>
                    <th>Status</th>
                    <th>Email Sent</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((client, index) => (
                    <tr key={index}>
                      <td>{client._id}</td>
                      <td><td><td>{`${client["Employee First Name"]} ${client["Employee Last Name"]}`}</td>
</td>
</td>
                      <td>{client.Invoice_date}</td>
                        <td>{client.due_date}</td>
                        <td> </td>
                          <td>{ client["Total Charge"]}</td>
                      <td>{client.status}</td>
                      <td>{client.Invoice_date}</td>
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

export default Invoices;
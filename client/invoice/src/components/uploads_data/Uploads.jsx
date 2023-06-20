import React, { useState } from 'react';
import './uploads.css';
import axios from "axios";


const Uploads = () => {
    const [invoices, setInvoices] = useState([]);
    const [successMessage, setSuccessMessage] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null);
    const [invoiceMessage, setInvoicemessage]= useState(null)

    const handleUpload = async () => {
        if (invoices.length > 0) {
            console.log("In invoice stage: ", process.env.REACT_APP_API_URL);
            const currentDate = new Date().toLocaleDateString();
            const uploadedFiles = [];
            const axiosInstance = axios.create({
                baseURL: process.env.REACT_APP_API_URL,
            });
            try {
                for (let i = 0; i < invoices.length; i++) {
                    const invoice = invoices[i];
                    if (invoice.size <= 15 * 1024 * 1024 && invoice.type === 'text/csv') {
                        const data = new FormData();
                        data.append("files", invoice);
                        await axiosInstance.post("/file/uploads", data);
                        uploadedFiles.push(invoice.name);
                    }
                }
                if (uploadedFiles.length > 0) {
                    setSuccessMessage(`Invoices ${uploadedFiles.join(', ')} were uploaded successfully on ${currentDate}`);
                } else {
                    setSuccessMessage('');
                    alert('No valid files found for upload.');
                }
            } catch (error) {
                setSuccessMessage('');
                console.log(error);
            }
        } else {
            setSuccessMessage('');
            alert('Please select at least one file to upload.');
        }
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        const fileArray = Array.from(files);
        setInvoices(fileArray);
    };
     const buttonStyle = {
    borderRadius: '5px',
  };

    

  const handleGenerateInvoices = () => {
    setInvoicemessage("Generating invoices...");

    axios
      .post("http://127.0.0.1:5000/api/invoice/generate/invoices")
      .then((response) => {
        setInvoicemessage(response.data);
        setTimeout(() => {
          setInvoicemessage(null);
        }, 4000);
      })
      .catch((error) => {
        console.error("Error generating invoices:", error);
        setInvoicemessage("Error generating invoices");
        setTimeout(() => {
          setInvoicemessage(null);
        }, 4000);
      });
  };
    return (
        <section className="uploads-data">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 uploads">
                        <h2>Upload</h2>
                        <div className='main-area'>
                            <div className="left">
                                <h4>Invoice</h4>
                                <hr />
                                {invoiceMessage && <p style={{ color: 'green', fontSize: '12px' }}>{ invoiceMessage }</p>}
                                <p>Please select a file and click the "Upload" button to continue</p>
                                <label htmlFor="fileUpload">CSV Files:</label>
                                <input
                                    id="fileUpload"
                                    type="file"
                                    accept=".csv"
                                    multiple="multiple"
                                    onChange={handleFileChange}
                                />
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <button onClick={handleUpload} style={buttonStyle}>Upload</button>
                                </div>
                                <div>
                                    <button onClick={handleGenerateInvoices} style={{ ...buttonStyle, backgroundColor: 'blue', color: 'white' }} >Generate Invoices</button>
                                </div>
                                </div>
                                

                               
                            </div>
                            <div className="right">
                                {successMessage && <p>{successMessage}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Uploads;

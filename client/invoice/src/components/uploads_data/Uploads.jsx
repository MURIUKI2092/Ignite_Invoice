import React, { useState } from 'react';
import './uploads.css';
import axios from "axios";


const Uploads = () => {
    const [invoices, setInvoices] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

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
                                <p>Please select a file and click the "Upload" button to continue</p>
                                <label htmlFor="fileUpload">CSV Files:</label>
                                <input
                                    id="fileUpload"
                                    type="file"
                                    accept=".csv"
                                    multiple="multiple"
                                    onChange={handleFileChange}
                                />
                                <button onClick={handleUpload}>Upload</button>
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

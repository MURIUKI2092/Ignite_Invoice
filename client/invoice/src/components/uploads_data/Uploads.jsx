import React, { useState } from 'react';
import './uploads.css';
import axios from "axios";


const Uploads = () => {
    const [invoice, setInvoice] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleUpload = async () => {
        if (invoice && invoice.size <= 15 * 1024 * 1024 && invoice.type === 'text/csv') {
            console.log("In invoice stage: ", process.env.REACT_APP_API_URL)
            const currentDate = new Date().toLocaleDateString();
            setSuccessMessage(`Invoices ${invoice.name} were uploaded successfully on ${currentDate}`);
            const axiosInstance = axios.create({
                baseURL: process.env.REACT_APP_API_URL,
            });
            const data = new FormData();
            data.append("files", invoice);

            try {
                await axiosInstance.post("/uploads", data)
            } catch (error) {
                setSuccessMessage('');
                console.log(error);
            }
        } else {
            setSuccessMessage('');
            // Display an error message if the file is invalid
            if (!invoice) {
                alert('Please select a file to upload.');
            } else if (invoice.size > 15 * 1024 * 1024) {
                alert('File size exceeds the maximum limit of 15MB.');
            } else if (invoice.type !== 'text/csv') {
                alert('Invalid file format. Only CSV files are allowed.');
            }
        }
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
                                    onChange={(e) => setInvoice(e.target.files[0])}
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

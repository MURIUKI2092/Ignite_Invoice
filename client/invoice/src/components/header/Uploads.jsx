import React, { useState } from 'react';
import './uploads.css';


const Uploads = () => {
  const [invoice, setInvoice] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setInvoice(file);
  };

  const handleUpload = () => {
    if (invoice && invoice.size <= 15 * 1024 * 1024 && invoice.type === 'text/csv') {
      const currentDate = new Date().toLocaleDateString();
      setSuccessMessage(`Invoices ${invoice.name} were uploaded successfully on ${currentDate}`);
      // Perform the actual upload process here
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
    <div>
      <h2>Uploads</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Uploads;

const router = require("express").Router();
const multer = require('multer');
const csvtojson = require('csvtojson');
const BusinessUnit = require("../models/BusinessUnit");
const Candidate = require("../models/Candidate");
const ClientInvoice = require("../models/ClientInvoice");
const PayrollReport = require("../models/Payroll");

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        const date = new Date().toISOString().slice(0, 10);
        const originalname = file.originalname;
        const filename = `${date}-${originalname}`;
        cb(null, filename);
    },
});
const upload = multer({ storage: storage });

// Upload csv files
router.post('/uploads', upload.array('files'), function (req, res, next) {
    const files = req.files;

    const promises = files.map((file) => {
        const filePath = file.path;

        return csvtojson()
            .fromFile(filePath)
            .then((jsonArray) => {
                if (file.originalname === 'candidate.csv') {
                    // Map CSV data to Candidate model fields
                    const candidates = jsonArray.map((data) => ({
                        firstName: data['First Name'],
                        lastName: data['Last Name'],
                        email: data['Email'],
                        mobileNumber: data['Mobile Number'],
                        employmentType: data['Employment Type'],
                        jobs: data['Jobs'],
                        dateOfBirth: data['Date of Birth'],
                        nationality: data['Nationality'],
                        addressLine1: data['Address Line 1'],
                        addressLine2: data['Address Line 2'],
                        postalCode: data['Postal Code'],
                        city: data['City'],
                        gender: data['Gender'],
                        maritalStatus: data['Marital Status'],
                        nino: data['NINO'],
                        startDate: data['Start Date'],
                        endDate: data['End Date'],
                        // Map other fields accordingly
                    }));

                    // Save Candidate data to MongoDB
                    return Candidate.create(candidates)
                        .then(() => candidates.length)
                        .catch((err) => {
                            console.error('Error saving Candidate data:', err);
                            throw err;
                        });
                } else if (file.originalname === 'businessunits.csv') {
                    // Map CSV data to BusinessUnit model fields
                    const businessUnits = jsonArray.map((data) => ({
                        refCode: data['Ref.Code'],
                        businessUnit: data['Business unit'],
                        clientName: data['Client Name'],
                        email: data['Email'],
                        addressLine: data['Address Line'],
                        splitRate: data['Split Rate'],
                        bookingEmail: data['Booking Email'],
                        invoicingEmail: data['Invoicing Email'],
                        invoiceAddress: data['Invoice Address'],
                        contact: data['Contact'],
                    }));

                    // Save BusinessUnit data to MongoDB
                    return BusinessUnit.create(businessUnits)
                        .then(() => businessUnits.length)
                        .catch((err) => {
                            console.error('Error saving BusinessUnit data:', err);
                            throw err;
                        });
                } else if (file.originalname === 'ClientsInvoice.csv') {
                    // Map CSV data to ClientInvoice model fields
                    const clientInvoices = jsonArray.map((data) => ({
                        slNo: data['Sl No'],
                        client: data['Client'],
                        businessUnitRefCode: data['Business Unit Ref Code'],
                        businessUnit: data['Business Unit'],
                        nominalCode: data['Nominal Code'],
                        from: new Date(data['From']),
                        to: new Date(data['To']),
                        createdOn: new Date(data['Created on']),
                        invoiceNumber: data['Invoice Number'],
                        dueDate: new Date(data['Due Date']),
                        totalAmount: data['Total amount'],
                        expensesAmount: data['Expenses Amount'],
                        vatAmount: data['Vat Amount'],
                        grandTotal: data['Grand Total'],
                        paidAmount: data['Paid Amount'],
                        balanceAmount: data['Balance Amount'],
                        status: data['Status'],
                        generatedBy: data['Generated By'],
                        // Map other fields accordingly
                    }));

                    // Save ClientInvoice data to MongoDB
                    return ClientInvoice.create(clientInvoices)
                        .then(() => clientInvoices.length)
                        .catch((err) => {
                            console.error('Error saving ClientInvoice data:', err);
                            throw err;
                        });
                } else if (file.originalname === 'payroll.csv') {
                    // Map CSV data to Payroll model fields
                    const payrolls = jsonArray.map((data) => ({
                        type: data['Type'],
                        employeeCode: data['Employee Code'],
                        employeeFirstName: data['Employee First Name'],
                        employeeLastName: data['Employee Last Name'],
                        position: data['Position'],
                        client: data['Client'],
                        businessUnit: data['Business Unit'],
                        shiftDate: data['Shift Date'],
                        approvedDate: data['Approved Date'],
                        paymentRef: data['Payment Ref'],
                        payrollId: data['Payroll Id'],
                        timeFrom: data['Time From'],
                        timeTo: data['Time To'],
                        hours: data['Hours'],
                        payRate: data['Pay Rate'],
                        totalPay: data['Total Pay'],
                        totalHours: data['Total Hours'],
                        chargeRate: data['Charge Rate'],
                        totalCharge: data['Total Charge'],
                        status: data['Status'],
                        // Map other fields accordingly
                    }));

                    // Save Payroll data to MongoDB
                    return PayrollReport.create(payrolls)
                        .then(() => payrolls.length)
                        .catch((err) => {
                            console.error('Error saving Payroll data:', err);
                            throw err;
                        });
                }
            })
            .catch((error) => {
                console.error(error);
                throw new Error(`Error converting CSV to JSON for file ${file.originalname}`);
            });
    });

    Promise.all(promises)
        .then((insertedCounts) => {
            const totalInserted = insertedCounts.reduce((acc, count) => acc + count, 0);
            console.log(`Total data inserted: ${totalInserted}`);
            res.status(200).json({ message: `Data inserted successfully. Total inserted: ${totalInserted}` });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Error inserting data' });
        });
});

module.exports = router
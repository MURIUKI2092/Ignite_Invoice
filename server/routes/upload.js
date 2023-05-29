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
                    return Candidate.insertMany(jsonArray);
                } else if (file.originalname === 'businessunits.csv') {
                    return BusinessUnit.insertMany(jsonArray);
                } else if (file.originalname === 'ClientsInvoice.csv') {
                    return ClientInvoice.insertMany(jsonArray);
                } else if (file.originalname === 'payroll.csv') {
                    return PayrollReport.insertMany(jsonArray);
                }
            })
            .catch((error) => {
                console.error(error);
                throw new Error(`Error converting CSV to JSON for file ${file.originalname}`);
            });
    });

    Promise.all(promises)
        .then(() => {
            console.log('Data inserted successfully');
            res.status(200).json({ message: 'Data inserted successfully' });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Error inserting data' });
        });
});

module.exports = router
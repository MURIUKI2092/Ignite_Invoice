const mongoose = require("mongoose")

const BusinessUnitSchema = new mongoose.Schema({
    refCode: String,
    businessUnit: String,
    clientName: {
        type: String,
    },
    email: {
        type: String,
    },
    addressLine: String,
    splitRate: String,
    bookingEmail: String,
    invoicingEmail: String,
    invoiceAddress: String,
    contact: String,
},
    { timestamps: true }
);

module.exports = mongoose.model("BusinessUnit", BusinessUnitSchema)
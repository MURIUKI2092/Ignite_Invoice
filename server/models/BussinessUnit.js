const mongoose = require("mongoose")

const BusinessUnitSchema = new mongoose.Schema({
    refCode: String,
    businessUnit: String,
    clientName: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    addressLine: String,
    splitRate: String,
    bookingEmail: String,
    invoicingEmail: String,
    invoiceAddress: String,
    contact: String,
},
{timestamps: true}
);

module.exports = mongoose.model("BusinessUnit",BusinessUnitSchema)
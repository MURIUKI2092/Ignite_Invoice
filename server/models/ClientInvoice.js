const mongoose = require("mongoose")

const ClientInvoiceSchema = new mongoose.Schema({
    slNo: {
        type: Number,
        required: true,
        unique: true
    },
    client: {
        type: String,
        required: true,
        unique: false
    },
    businessUnitRefCode: {
        type: String,
        required: true,
        unique: true
    },
    businessUnit: {
        type: String,
        required: true,
        unique: false
    },
    nominalCode: {
        type: Number,
        required: true,
        unique: false
    },
    from: {
        type: Date,
        required: true,
        unique: false
    },
    to: {
        type: Date,
        required: true,
        unique: false
    },
    createdOn: {
        type: Date,
        required: true,
        unique: false
    },
    invoiceNumber: String,
    dueDate: {
        type: Date,
        required: true,
        unique: false
    },
    totalAmount: {
        type: Number,
        required: true,
        unique: false
    },
    expensesAmount: {
        type: Number,
        required: true,
        unique: false
    },
    vatAmount: {
        type: Number,
        required: true,
        unique: false
    },
    grandTotal: {
        type: Number,
        required: true,
        unique: false
    },
    paidAmount: {
        type: Number,
        required: true,
        unique: false
    },
    balanceAmount: {
        type: Number,
        required: true,
        unique: false
    },
    status: String,
    generatedBy: String,
},
    { timestamps: true }
);

module.exports = mongoose.model("ClientInvoice",ClientInvoiceSchema)
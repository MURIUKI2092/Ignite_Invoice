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
    },
    from: {
        type: Date,
    },
    to: {
        type: Date,
    },
    createdOn: {
        type: Date,
    },
    invoiceNumber: String,
    dueDate: {
        type: Date,
    },
    totalAmount: {
        type: Number,
    },
    expensesAmount: {
        type: Number,
    },
    vatAmount: {
        type: Number,
    },
    grandTotal: {
        type: Number,
    },
    paidAmount: {
        type: Number,
    },
    balanceAmount: {
        type: Number,
    },
    status: String,
    generatedBy: String,
},
    { timestamps: true }
);

module.exports = mongoose.model("ClientInvoice", ClientInvoiceSchema)
const mongoose = require("mongoose")

const ClientInvoiceSchema = new mongoose.Schema({
    slNo: {
        type: Number,
        required: false,
        unique: true
    },
    client: {
        type: String,
        },
    businessUnitRefCode: {
        type: String,
        },
    businessUnit: {
        type: String,
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
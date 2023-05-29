const mongoose = require("mongoose")

const PayrollSchema = new mongoose.Schema({
    type: String,
    employeeCode: String,
    employeeFirstName: String,
    employeeLastName: String,
    position: String,
    client: String,
    businessUnit: String,
    shiftDate: Date,
    approvedDate: Date,
    paymentRef: String,
    payrollId: String,
    timeFrom: Date,
    timeTo: Date,
    hours: Number,
    payRate: String,
    totalPay: Number,
    totalHours: Number,
    chargeRate: String,
    totalCharge: Number,
    status: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payroll",PayrollSchema)
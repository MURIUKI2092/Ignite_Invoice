const mongoose = require("mongoose")

const PayrollSchema = new mongoose.Schema({
    type: String,
    employeeCode: String,
    employeeFirstName: String,
    employeeLastName: String,
    position: String,
    client: String,
    businessUnit: String,
    shiftDate: String,
    approvedDate: String,
    paymentRef: String,
    payrollId: String,
    timeFrom: String,
    timeTo: String,
    hours: Number,
    payRate: String,
    totalPay: String,
    totalHours: Number,
    chargeRate: String,
    totalCharge: String,
    status: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payroll",PayrollSchema)
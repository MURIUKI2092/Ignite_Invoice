const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
  {
    StartingPoint: String,
    EndingPoint: String,
    DistanceTraveled: String,
    TotalCost: String,
    BusinessUnit: String,
    ShiftDate: String,
    EmployeeFirstName: String,
    EmployeeLastName: String,
    Hours: String,
    ChargeRate: String,
    TotalCharge: String,
    Invoice_date: String,
    due_date: String,
    status: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("invoices", InvoiceSchema);

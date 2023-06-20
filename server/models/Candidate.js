const mongoose = require("mongoose")

const CandidateSchema = new mongoose.Schema({
    firstName: {
      type: String,
      },
    lastName: {
      type: String,
      },
    email: {
      type: String,
      },
    mobileNumber: String,
    employmentType: String,
    jobs: String,
    dob: String,
    placeOfBirth: String,
    addressLine1: String,
    addressLine2: String,
    postCode: String,
    place: String,
    gender: String,
    passportNo: String,
    nationality: String,
    niNumber: String,
    dbsPvgNo: String,
    dbsPvgIssueDate: String,
    dbsPvgExpireDate: String,
    dbsState: String,
    nextCheckDate: String,
    taxCode: String,
    payrollId: String,
    p45Received: String,
    weeklyHours: String,
    nmcNurseType: String,
    nmcPin: String,
    payrollJobStatus: String,
    driver: String,
  },
  {timestamps: true}
  );
  
  module.exports = mongoose.model("Candidate",CandidateSchema)
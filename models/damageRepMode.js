const mongoose = require('mongoose');

const damageReportSchema = new mongoose.Schema({
  ReportId: {
    type: String,
    required: true,
    unique: true, // Ensures each ReportId is unique
  },
  VehicleId: {
    type: mongoose.Schema.Types.ObjectId, // Assuming VehicleId refers to a Vehicle document
    ref: 'Vehicle',
    required: true,
  },
  CustomerId: {
    type: mongoose.Schema.Types.ObjectId, // Assuming CustomerId refers to a Customer document
    ref: 'Customer',
    required: true,
  },
  ReportDate: {
    type: Date,
    required: true,
    default: Date.now, // Automatically sets the date to the current date if not provided
  },
  DamageDescription: {
    type: String,
    required: true,
  },
  RepairStatus: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'], // Status options
    default: 'Pending', // Default status is 'Pending'
  },
});

const DamageReport = mongoose.model('DamageReport', damageReportSchema);

module.exports = DamageReport;

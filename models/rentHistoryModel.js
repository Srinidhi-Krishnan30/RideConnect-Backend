const mongoose = require('mongoose');

const rentalHistorySchema = new mongoose.Schema({
  HistoryId: {
    type: String,
    required: true,
    unique: true, // Ensures each HistoryId is unique
  },
  CustomerId: {
    type: mongoose.Schema.Types.ObjectId, // Assuming CustomerId refers to a Customer document
    ref: 'Customer',
    required: true,
  },
  VehicleId: {
    type: mongoose.Schema.Types.ObjectId, // Assuming VehicleId refers to a Vehicle document
    ref: 'Vehicle',
    required: true,
  },
  RentalDuration: {
    type: Number, // Duration in days or hours
    required: true,
  },
  TotalSpent: {
    type: Number,
    required: true,
    min: 0, // Ensures that TotalSpent is not negative
  },
  Date: {
    type: Date,
    required: true,
    default: Date.now, // Automatically sets the date to the current date if not provided
  },
});

const RentalHistory = mongoose.model('RentalHistory', rentalHistorySchema);

module.exports = RentalHistory;

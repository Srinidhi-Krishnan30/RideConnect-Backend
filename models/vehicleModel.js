const mongoose = require('mongoose');

// Vechicles collection schema
const vehicleSchema = new mongoose.Schema({
  VehicleId: {
    type: String, 
    required: true,
    unique: true,
  },
  Model: {
    type: String,
    required: true,
    trim: true,
  },
  Make: {
    type: String,
    required: true,
    trim: true,
  },
  Year: {
    type: Number,
    required: true,
    min: 1886, 
  },
  PricePerDay: {
    type: Number,
    required: true,
    min: 0,
  },
  AvailabilityStatus: {
    type: String,
    required: true,
    enum: ['Available', 'Unavailable', 'In Maintenance'], 
    default: 'Available',
  },
  Specifications: {
    type: Map,
    of: String,
  },
  ImageUrl: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(http|https):\/\/[^ "]+$/.test(v); 
      },
      message: 'Invalid URL format',
    },
  },
}, { timestamps: true }); 
module.exports = mongoose.model('Vehicle', vehicleSchema);

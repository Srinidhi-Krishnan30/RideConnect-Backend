const mongoose = require('mongoose');

const AvailabilitySchema = new mongoose.Schema({
  AvailabilityId: { type: mongoose.Schema.Types.ObjectId, required: true },
  VehicleId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Vehicles' },
  AvailableDateRange: [
    {
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: true }
    }
  ],
  LastUpdated: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('Availability', AvailabilitySchema);

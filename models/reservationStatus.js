const mongoose = require('mongoose');

const ReservationStatusSchema = new mongoose.Schema({
  StatusId: { type: mongoose.Schema.Types.ObjectId, required: true },
  BookingId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Bookings' },
  StatusType: {
    type: String,
    required: true,
    enum: ['Active', 'Overdue', 'Completed']
  },
  LastUpdated: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('ReservationStatus', ReservationStatusSchema);

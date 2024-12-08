const mongoose = require('mongoose');

const CancellationsSchema = new mongoose.Schema({
  CancellationId: { type: mongoose.Schema.Types.ObjectId, required: true },
  BookingId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Bookings' },
  CancellationDate: { type: Date, required: true },
  RefundAmount: { type: Number, required: true, min: 0 },
  Reason: { type: String, required: true }
});

module.exports = mongoose.model('Cancellations', CancellationsSchema);

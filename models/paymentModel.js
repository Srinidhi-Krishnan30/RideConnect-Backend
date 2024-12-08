const mongoose = require('mongoose');

const PaymentsSchema = new mongoose.Schema({
  PaymentId: { type: mongoose.Schema.Types.ObjectId, required: true },
  BookingId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Bookings' },
  PaymentMethod: {
    type: String,
    required: true,
    enum: ['Credit Card', 'Debit Card', 'Cash', 'Online']
  },
  Amount: { type: Number, required: true, min: 0 },
  PaymentDate: { type: Date, required: true },
  Status: {
    type: String,
    required: true,
    enum: ['Pending', 'Completed', 'Failed']
  }
});

module.exports = mongoose.model('Payments', PaymentsSchema);

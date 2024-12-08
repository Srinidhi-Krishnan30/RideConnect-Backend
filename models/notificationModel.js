const mongoose = require('mongoose');

const NotificationsSchema = new mongoose.Schema({
  NotificationId: { type: mongoose.Schema.Types.ObjectId, required: true },
  UserId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Users' },
  Type: {
    type: String,
    required: true,
    enum: ['Booking', 'Reminder', 'Cancellation']
  },
  Message: { type: String, required: true },
  Timestamp: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('Notifications', NotificationsSchema);

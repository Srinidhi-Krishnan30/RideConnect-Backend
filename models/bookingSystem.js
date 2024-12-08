const mongoose = require('mongoose');

const BookingsSchema = new mongoose.Schema({  
  CustomerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  VehicleId: { type: mongoose.Schema.Types.ObjectId,  ref: 'Vehicles' },
  VehicleName: {type: String,required : true},
  PickupDate: { type: Date, required: true },
  ReturnDate: { type: Date, required: true },
  TotalPrice: { type: Number, min: 0 },
  Status: {
    type: String,
    required: true,
    enum: ['Active', 'Overdue', 'Completed']
  }
});

module.exports = mongoose.model('Bookings', BookingsSchema);

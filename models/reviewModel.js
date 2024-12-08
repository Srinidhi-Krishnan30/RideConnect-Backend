const mongoose = require('mongoose');

const ReviewsSchema = new mongoose.Schema({
  ReviewId: { type: String, required: true },
  modelNumber : {type: String,required:true},
  make : {type: String,required: true},
  VehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicles' },
  CustomerId: { type: mongoose.Schema.Types.ObjectId,  ref: 'Users' },
  Rating: { type: Number,  min: 1, max: 5 },
  Comments: { type: String, required: true},
  Timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reviews', ReviewsSchema);

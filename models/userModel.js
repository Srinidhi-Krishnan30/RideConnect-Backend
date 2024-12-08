const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the user schema
const userSchema = new Schema({
  userId: {
    type: String,  
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,  
    trim: true,   
  },
  passwordHash: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user'],  // List roles as an example
  },
  email: {
    type: String,
    unique: true,  // Ensure email is unique
    lowercase: true,  // Convert email to lowercase
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],  // Regex to validate email format
  },
  isActive: {
    type: Boolean,
    default: true,  
  },
}, {
  timestamps: true,  
});

// Create and export the model
module.exports = mongoose.model('User', userSchema);


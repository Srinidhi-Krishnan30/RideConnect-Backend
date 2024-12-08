const mongoose = require('mongoose');

const supportTicketSchema = new mongoose.Schema({
  TicketId: {
    type: String,
    required: true,
    unique: true, // Ensures each TicketId is unique
  },
  CustomerId: {
    type: mongoose.Schema.Types.ObjectId, // Assuming CustomerId refers to a Customer document
    ref: 'Customer',
    required: true,
  },
  IssueType: {
    type: String,
    required: true,
    enum: ['Technical', 'Billing', 'General Inquiry', 'Other'], // Example issue types
  },
  Description: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    enum: ['Open', 'In Progress', 'Resolved', 'Closed'], // Status options
    default: 'Open', // Default status is 'Open'
  },
  ResolutionDate: {
    type: Date,
    default: null, // Resolution date is null initially and gets populated when resolved
  },
});

const SupportTicket = mongoose.model('SupportTicket', supportTicketSchema);

module.exports = SupportTicket;

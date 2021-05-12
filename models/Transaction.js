const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  category: {
    type: String,
    trim: true,
    required: [true, 'Category field cannot be blank']
  },
  text: {
    type: String,
    trim: true,
    required: [true, 'Text field cannot be blank']
  },
  amount: {
    type: Number,
    required: [true, 'Must be a positive or negative number']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },

  userName: {
    type: String,
    trim: true
  },

  password: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('Admin', adminSchema);

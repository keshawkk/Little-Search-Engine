const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },

  email: {
    type: String,
    trim: true
  },

  password: {
    type: String,
    trim: true
  },

  isLoggedIn:{
    type: Boolean
  }
});

module.exports = mongoose.model('Admin', adminSchema);

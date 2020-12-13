const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true
  },

  activeJWT: {
    type: String
  },

  isLoggedIn: {
    type: Boolean
  },

  userType: {
    type: String
  }
});

module.exports = mongoose.model('Admin', adminSchema);

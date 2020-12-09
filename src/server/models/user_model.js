const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const aSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

});

module.exports = mongoose.model('A', aSchema);

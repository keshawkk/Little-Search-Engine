const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({

  fileId: {
    type: String
  },

  fileData: {
    type: String,
    //required: true,
  },

});

module.exports = mongoose.model('File', fileSchema);

const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({

  
  fileData: {
    type: String,
    //required: true,
  },

});

module.exports = mongoose.model('File', fileSchema);

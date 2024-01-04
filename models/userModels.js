const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  title: {
    type: String,
    required: true

  },
  description: {
    type: String,
    required: true
  },
  images: {
    type: String,
    required: true
  }
});



module.exports = mongoose.model('User', userSchema);
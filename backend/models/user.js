// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  email: String,
  mobile: Number,
  experience: Number,
  department: String,
  location: String,
  file: String, // Use String type for file path or metadata
  // Add other fields as needed
});



const User = mongoose.model('User', userSchema);


module.exports = { User };

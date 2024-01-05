// models/User.js
const mongoose = require('mongoose');



const textSchema = new mongoose.Schema({
  firstName: String,
  email: String,
  text: String,
});


const Text = mongoose.model('Text', textSchema);

module.exports = {  Text };

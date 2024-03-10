// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String, // 'admin' or 'student'
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// models/Batch.js
const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  // Other batch fields...
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }] // Array of references to registered students
});

const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch;

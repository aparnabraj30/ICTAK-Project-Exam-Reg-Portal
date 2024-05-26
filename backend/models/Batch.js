// models/Batch.js
const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }] 
});

const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch;

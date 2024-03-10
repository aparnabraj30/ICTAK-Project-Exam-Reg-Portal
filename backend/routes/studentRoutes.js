// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Endpoint to get students by batch
router.get('/:batchName', studentController.getStudentsByBatch);

// Endpoint to register a student
router.post('/register', studentController.registerStudent);

module.exports = router;

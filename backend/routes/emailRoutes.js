// routes/emailRoutes.js
const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.post('/send-result', async (req, res) => {
    const { receiverEmail, fileContent } = req.body; // Make sure the file content is included in the request
  
    try {
      const result = await emailController.sendResultEmail(receiverEmail, fileContent);
      res.json(result);
    } catch (error) {
      console.error('Error sending result email:', error);
      res.status(500).json({ error: 'Error sending result email', details: error.message });
    }
  });
  

module.exports = router;

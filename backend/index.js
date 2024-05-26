const express = require('express');
const morgan = require('morgan');
const server = express();
const cors = require('cors');
const batches = require("./data/batches");
const connectDB = require('./config/db');
const multer = require('multer');
const nodemailer = require('nodemailer');

require('dotenv').config();

const PORT = 8000;

//middleware
server.use(morgan('combined'));
server.use(cors());
server.use(express.json({ limit: '50mb' }));

const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  server.post('/api/url/submit', async (req, res) => {
    try {
      const { url } = req.body;
  
      if (!url) {
        return res.status(400).json({ error: 'URL is required' });
      }
  
      // Process the URL as needed, e.g., make an HTTP request, store it, etc.
      // Here, we are making a simple GET request to the provided URL
      const response = await axios.get(url);
  
      // Handle the response as needed
      console.log('URL Submission Response:', response.data);
  
      res.json({ success: true, message: 'URL submitted successfully' });
    } catch (error) {
      console.error('Error submitting URL:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  


server.listen(PORT, () => {
    console.log('Server is listening on PORT 8000...');
});

connectDB();

server.get("/",(req,res) => {
    res.send("API is running...");
});

server.get("/api/batches", (req,res) => {
    res.json(batches);
});

server.get("/api/batches/:id", (req,res) => {
    console.log("Accessed /api/batches/:id");

    const { id } = req.params;
    
    const batch = batches.find((n) => n.id === id.toString());
    console.log("Batch:", batch);
    res.send(batch);
});


const studentRoutes = require('./routes/studentRoutes');
server.use('/api/students', studentRoutes);

const emailRoutes = require('./routes/emailRoutes');
server.use('/api/email', emailRoutes);
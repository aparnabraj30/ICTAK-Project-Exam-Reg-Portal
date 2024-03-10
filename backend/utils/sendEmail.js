// utils/sendEmail.js
const nodemailer = require('nodemailer');

const sendEmail = async (mailOptions) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Add support for attachments
    mailOptions.attachments = mailOptions.attachments || [];

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email: ' + error.message);
  }
};

module.exports = sendEmail;

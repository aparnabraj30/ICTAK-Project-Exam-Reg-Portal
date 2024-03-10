// controllers/emailController.js
const sendEmail = require('../utils/sendEmail');

const sendResultEmail = async (receiverEmail, fileContent) => {
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: receiverEmail,
        subject: 'Result',
        text: 'Result of the batch',
        attachments: [
          {
            filename: 'result.pdf',
            content: fileContent,
            encoding: 'base64', // Ensure correct encoding
          },
        ],
      };
  
      await sendEmail(mailOptions);
      return { success: 'Result sent successfully!' };
    } catch (error) {
      console.error('Error sending result email:', error);
      throw new Error('Error sending result email: ' + error.message);
    }
  };
  

module.exports = {
  sendResultEmail,
};

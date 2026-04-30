const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up Nodemailer transporter with your email details
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or use any email service you prefer (like SendGrid, etc.)
  auth: {
    user: 'your_email@gmail.com', // Replace with your email
    pass: 'your_email_password' // Replace with your email password (or use environment variables for security)
  }
});

// POST route to handle the contact form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'your_email@gmail.com',  // Replace with the email where you want to receive the messages
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Message sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
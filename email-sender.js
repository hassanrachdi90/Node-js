const nodemailer = require('nodemailer');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hassanrachdi.90@gmail.com',
    pass: 'xxxxxx',
  },
});

// Define email options
const mailOptions = {
  from: 'hassanrachdi.90@gmail.com',
  to: 'hassanrachdi.90@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js using nodemailer!',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

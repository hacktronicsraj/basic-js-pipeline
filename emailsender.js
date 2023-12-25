const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const mailOptions = {
  from: process.env.GMAIL_USER,
  to: process.env.TO_EMAIL,
  subject: 'New Commit on Repository',
  text: 'There has been a new commit on the repository.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error:', error.message);
  }
  console.log('Email sent:', info.response);
});

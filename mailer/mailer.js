const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,         // Your email
    pass: process.env.EMAIL_PASSWORD // App password or real password (not recommended)
  }
});

async function sendAlertEmail(to, subject, message) {
  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    text: message
  };

  await transporter.sendMail(mailOptions);
}

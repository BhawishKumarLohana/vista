
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,         
    pass: process.env.EMAIL_PASSWORD 
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

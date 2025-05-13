const nodemailer = require('nodemailer');
require('dotenv').config(); // Load env variables

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendAlertEmail(to, subject, text) {
  const mailOptions = {
    from: `"Vista Crypto Alerts" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${to}`);
  } catch (error) {
    console.error(`❌ Failed to send email to ${to}:`, error);
  }
}

module.exports = sendAlertEmail;

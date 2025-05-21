
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "vista5628@gmail.com",
    pass: "ioya plqa pzzk ahdz"
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
    console.log(` Email sent to ${to}`);
    return true;
  } catch (error) {
    console.error(` Failed to send email to ${to}:`, error);
    return false;
  }
}


module.exports = sendAlertEmail;

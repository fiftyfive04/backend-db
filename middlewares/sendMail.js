const nodemailer = require("nodemailer")
require("dotenv").config()

// Function to send a regular email
exports.sendMail = async (email, mailSubject, content) => {
  try {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "bringbills@gmail.com",
          pass: "xnbt pdbf busc ctne",
        },
      });

    const mailOptions = {
      from: `${process.env.SMTP_FRM}`,
      to: email,
      subject: mailSubject,
      html: content,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

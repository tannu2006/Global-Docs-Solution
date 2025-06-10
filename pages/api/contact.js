import nodemailer from 'nodemailer';
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send("Method not allowed");
  }

  if (req.method !== 'POST') {
    return res.status(405).send("Method not allowed");
  }

  const { name, email, number, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // your Gmail address
      pass: process.env.GMAIL_PASS, // your Gmail app password
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'ns189934@gmail.com', // change to your recipient email
    subject: `Contact Form: ${subject}`,
    html: `
      <b>From:</b> ${name} <br />
      <b>Email:</b> ${email} <br />
      <b>Number:</b> ${number} <br />
      <b>Message:</b><br /> ${text}
      <b>From:</b> ${name} <br />
      <b>Email:</b> ${email} <br />
      <b>Number:</b> ${number} <br />
      <b>Message:</b><br /> ${text}
    `,
  };


  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).send("Error sending email");
  }
};
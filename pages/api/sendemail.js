import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method not allowed
  }

  const { name, email, subject, message } = req.body;

  // Configure SMTP transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kr281535@gmail.com',         // ✅ Your Gmail address
      pass: 'kr281535@gmail',            // ✅ Gmail app password
    },
  });

  const mailOptions = {
    from: email,
    to: 'kr281535@gmail.com',             // ✅ Where you want to receive emails
    subject: subject,
    html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ success: false, message: 'Email failed to send' });
  }
}

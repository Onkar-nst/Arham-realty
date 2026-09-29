import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Change this if using a different provider (e.g. smtp.office365.com)
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, mobile, interest, config, message } = req.body;

  if (!name || !email || !mobile) {
    return res.status(400).json({ error: 'Name, email and mobile are required' });
  }

  try {
    // 1. Email to YOU
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New form submission from ${name}`,
      text: `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\nProject of Interest: ${interest || 'N/A'}\nConfiguration: ${config || 'N/A'}\nMessage: ${message || 'N/A'}`,
    });

    // 2. Thank-you email to the PERSON who filled the form
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for reaching out to Arham Realty!',
      html: `<p>Hi ${name},</p><p>Thanks for getting in touch - we've received your enquiry and our team will get back to you soon.</p><p>Best regards,<br/>Arham Realty</p>`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Nodemailer Error:', err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Base Route
app.get('/', (req, res) => {
  res.send('Portfolio Contact Backend is running.');
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide name, email, and message.' 
    });
  }

  // Check that email is configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('SMTP credentials are not configured in the environment.');
    return res.status(500).json({
      success: false,
      message: 'Mail server credentials are not configured. Please check the backend .env configuration.'
    });
  }

  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT, 10) || 587,
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for 587/25
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Verify SMTP connection config
    await transporter.verify();

    // Mail Options
    const mailOptions = {
      from: `"${name} (Portfolio Inquiry)" <${process.env.EMAIL_USER}>`, // standard SMTP practice
      to: process.env.EMAIL_TO || 'mitesh13500@gmail.com',
      replyTo: email, // so you can click reply directly
      subject: `New Portfolio Inquiry from ${name}`,
      text: `You have received a new inquiry from your portfolio website.\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 25px; line-height: 1.6; max-width: 600px; color: #1e293b; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin: 0 auto;">
          <h2 style="color: #4f46e5; margin-block-start: 0; margin-block-end: 20px; font-weight: 700; border-bottom: 2px solid #e2e8f0; padding-block-end: 10px;">New Portfolio Inquiry</h2>
          <p style="margin-block-end: 10px;"><strong>Sender Name:</strong> ${name}</p>
          <p style="margin-block-end: 15px;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></p>
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #4f46e5; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-top: 20px;">
            <p style="margin: 0; font-weight: 600; color: #475569; margin-block-end: 8px;">Message:</p>
            <p style="margin: 0; font-style: italic; white-space: pre-wrap; color: #0f172a;">${message}</p>
          </div>
          <footer style="margin-block-start: 25px; font-size: 0.8rem; color: var(--color-text-muted, #64748b); text-align: center;">
            This email was sent dynamically from your portfolio contact form backend.
          </footer>
        </div>
      `
    };

    // Send Mail
    await transporter.sendMail(mailOptions);
    console.log(`Mail successfully sent from ${email} to ${process.env.EMAIL_TO || 'mitesh13500@gmail.com'}`);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Inquiry sent successfully!' 
    });

  } catch (error) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send mail: ' + error.message 
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});

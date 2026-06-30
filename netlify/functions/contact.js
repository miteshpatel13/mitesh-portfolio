const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ success: false, message: 'Method Not Allowed' })
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ success: false, message: 'Please provide name, email, and message.' })
      };
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('SMTP credentials are not configured in Netlify environment variables.');
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          success: false,
          message: 'Mail server credentials are not configured in Netlify.'
        })
      };
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT, 10) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Verify SMTP connection config
    await transporter.verify();

    // Mail Options
    const mailOptions = {
      from: `"${name} (Portfolio Inquiry)" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || 'mitesh13500@gmail.com',
      replyTo: email,
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
          <footer style="margin-block-start: 25px; font-size: 0.8rem; color: #64748b; text-align: center;">
            This email was sent dynamically from your portfolio contact form backend.
          </footer>
        </div>
      `
    };

    // Send Mail
    await transporter.sendMail(mailOptions);
    console.log(`Mail successfully sent from ${email} to ${process.env.EMAIL_TO || 'mitesh13500@gmail.com'}`);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ success: true, message: 'Inquiry sent successfully!' })
    };

  } catch (error) {
    console.error('Nodemailer Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ success: false, message: 'Failed to send mail: ' + error.message })
    };
  }
};

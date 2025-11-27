import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration from environment variables
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.zoho.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465');
const SMTP_USER = process.env.SMTP_USER || 'info@marketlinkconsulting.com';
const SMTP_PASS = process.env.SMTP_PASS || '';

// Determine secure connection based on port (465 is usually secure/SSL, 587 is TLS)
const SMTP_SECURE = process.env.SMTP_SECURE === 'true' || SMTP_PORT === 465;

const SMTP_CONFIG = {
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  // Add debug options for better logging
  logger: true,
  debug: true,
};

const CONTACT_TO = process.env.CONTACT_TO || 'info@marketlinkconsulting.com';
const CONTACT_FROM = process.env.CONTACT_FROM || 'info@marketlinkconsulting.com';

// Request body interface
interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// Email validation helper
function isValidEmail(email: string): boolean {
  return email.includes('@') && email.length > 3;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport(SMTP_CONFIG);

    // Verify connection configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP connection verification failed:', verifyError);
      // We continue to try sending, but this log is crucial for debugging
    }

    // Prepare email subject
    const emailSubject = subject || 'New message from MarketLink website';

    // Email to company
    const companyEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #003366; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #003366; }
            .value { margin-top: 5px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 0.9em; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">From:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${emailSubject}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="footer">
                <p>This message was sent from the MarketLink Consulting website contact form.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const companyEmailText = `
New Contact Form Submission

From: ${name}
Email: ${email}
Subject: ${emailSubject}

Message:
${message}

---
This message was sent from the MarketLink Consulting website contact form.
    `;

    // Send email to company
    try {
      await transporter.sendMail({
        from: `"MarketLink Website" <${CONTACT_FROM}>`,
        to: CONTACT_TO,
        replyTo: email,
        subject: emailSubject,
        text: companyEmailText,
        html: companyEmailHtml,
      });
      console.log('Email sent to company successfully');
    } catch (error) {
      console.error('Failed to send email to company:', error);
      // Return specific error message if possible
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return NextResponse.json(
        { error: `Failed to send message: ${errorMessage}` },
        { status: 500 }
      );
    }

    // Send auto-reply to user
    const autoReplyHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #003366; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 0.9em; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">Thank You for Contacting MarketLink Consulting</h2>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for contacting MarketLink Consulting.</p>
              <p>We have received your message and our team will get back to you as soon as possible.</p>
              <p><strong>Please do not reply to this email, this is an automated mailbox.</strong></p>
              <div class="footer">
                <p>Best regards,<br>
                <strong>MarketLink Consulting Ltd</strong></p>
                <p>Plot 90, Kanjokya House, 4th Floor<br>
                Kanjokya Street, Kamwokya<br>
                Kampala, Uganda</p>
                <p>Email: <a href="mailto:info@marketlinkconsulting.com">info@marketlinkconsulting.com</a><br>
                Phone: +256 709 938 589</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const autoReplyText = `
Dear ${name},

Thank you for contacting MarketLink Consulting.

We have received your message and our team will get back to you as soon as possible.

Please do not reply to this email, this is an automated mailbox.

Best regards,
MarketLink Consulting Ltd

Plot 90, Kanjokya House, 4th Floor
Kanjokya Street, Kamwokya
Kampala, Uganda

Email: info@marketlinkconsulting.com
Phone: +256 709 938 589
    `;

    // Send auto-reply (don't fail the request if this fails)
    try {
      await transporter.sendMail({
        from: `"MarketLink Consulting" <${CONTACT_FROM}>`,
        to: email,
        subject: 'Thanks for contacting MarketLink Consulting',
        text: autoReplyText,
        html: autoReplyHtml,
      });
      console.log('Auto-reply sent successfully');
    } catch (error) {
      console.error('Failed to send auto-reply email:', error);
      // Continue - don't fail the request if auto-reply fails
    }

    // Return success
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

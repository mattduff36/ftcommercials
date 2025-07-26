import { Resend } from 'resend';
import nodemailer from 'nodemailer';

interface EmailData {
  to: string;
  subject: string;
  text: string;
  html: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceType?: string;
  vehicleDetails?: string;
}

// Initialize Resend client only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Create SMTP transporter as a fallback (only if SMTP credentials are available)
const smtpTransporter =
  process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
    ? nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })
    : null;

// Helper function to create HTML email content
function createEmailHtml(data: ContactFormData, isServiceRequest = false): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">${isServiceRequest ? 'Service Request' : 'Contact Form'} Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      ${
        isServiceRequest && data.serviceType
          ? `<p><strong>Service Type:</strong> ${data.serviceType}</p>`
          : ''
      }
      ${
        isServiceRequest && data.vehicleDetails
          ? `<p><strong>Vehicle Details:</strong> ${data.vehicleDetails}</p>`
          : ''
      }
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${data.message}</p>
    </div>
  `;
}

// Helper function to create plain text email content
function createEmailText(data: ContactFormData, isServiceRequest = false): string {
  return `
${isServiceRequest ? 'Service Request' : 'Contact Form'} Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${isServiceRequest && data.serviceType ? `Service Type: ${data.serviceType}\n` : ''}${
    isServiceRequest && data.vehicleDetails ? `Vehicle Details: ${data.vehicleDetails}\n` : ''
  }
Message:
${data.message}
  `.trim();
}

// Send email using Resend with SMTP fallback
export async function sendEmail(emailData: EmailData): Promise<boolean> {
  try {
    // Try sending with Resend first
    if (resend) {
      await resend.emails.send({
        from: 'F.T. Commercials <noreply@ftcommercialslimited.com>',
        ...emailData,
      });
      return true;
    } else {
      console.warn('Resend client not initialized, falling back to SMTP.');
      // Fallback to SMTP if Resend fails
      if (smtpTransporter) {
        await smtpTransporter.sendMail({
          from: process.env.NOTIFICATION_EMAIL,
          ...emailData,
        });
        return true;
      } else {
        console.error('SMTP transporter not initialized, cannot send email.');
        return false;
      }
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

// Handle contact form submission
export async function handleContactForm(data: ContactFormData): Promise<boolean> {
  const html = createEmailHtml(data);
  const text = createEmailText(data);

  const emailData: EmailData = {
    to: process.env.NOTIFICATION_EMAIL || '',
    subject: 'New Contact Form Submission - F.T. Commercials',
    html,
    text,
  };

  // Send notification to business
  const notificationSent = await sendEmail(emailData);

  // Send confirmation to customer
  if (notificationSent) {
    const confirmationData: EmailData = {
      to: data.email,
      subject: 'Thank You for Contacting F.T. Commercials',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Contacting Us</h2>
          <p>Dear ${data.name},</p>
          <p>Thank you for getting in touch with F.T. Commercials. We have received your message and will respond as soon as possible.</p>
          <p>For urgent matters, please call us directly:</p>
          <ul>
            <li>Office: 01777 871493</li>
            <li>Mobile: 07967 176567</li>
          </ul>
          <p>Best regards,<br>F.T. Commercials Team</p>
        </div>
      `,
      text: `
Thank You for Contacting Us

Dear ${data.name},

Thank you for getting in touch with F.T. Commercials. We have received your message and will respond as soon as possible.

For urgent matters, please call us directly:
- Office: 01777 871493
- Mobile: 07967 176567

Best regards,
F.T. Commercials Team
      `.trim(),
    };

    await sendEmail(confirmationData);
  }

  return notificationSent;
}

// Handle service request form submission
export async function handleServiceRequest(data: ContactFormData): Promise<boolean> {
  const html = createEmailHtml(data, true);
  const text = createEmailText(data, true);

  const emailData: EmailData = {
    to: process.env.NOTIFICATION_EMAIL || '',
    subject: 'New Service Request - F.T. Commercials',
    html,
    text,
  };

  // Send notification to business
  const notificationSent = await sendEmail(emailData);

  // Send confirmation to customer
  if (notificationSent) {
    const confirmationData: EmailData = {
      to: data.email,
      subject: 'Service Request Received - F.T. Commercials',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Service Request Received</h2>
          <p>Dear ${data.name},</p>
          <p>Thank you for submitting a service request with F.T. Commercials. We have received your request and will contact you shortly to discuss your requirements.</p>
          <p>For urgent matters, please call us directly:</p>
          <ul>
            <li>Office: 01777 871493</li>
            <li>Mobile: 07967 176567</li>
          </ul>
          <p>Best regards,<br>F.T. Commercials Team</p>
        </div>
      `,
      text: `
Service Request Received

Dear ${data.name},

Thank you for submitting a service request with F.T. Commercials. We have received your request and will contact you shortly to discuss your requirements.

For urgent matters, please call us directly:
- Office: 01777 871493
- Mobile: 07967 176567

Best regards,
F.T. Commercials Team
      `.trim(),
    };

    await sendEmail(confirmationData);
  }

  return notificationSent;
}

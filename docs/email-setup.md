# Email Setup for F.T. Commercials Website

## Environment Variables Setup

To get the contact form working with Google SMTP, you need to create a `.env.local` file in the root directory with the following variables:

```env
# Gmail SMTP settings
SMTP_USER=matt.mpdee@gmail.com
SMTP_PASS=your_app_password_here
# Contact form recipient (where you want to receive emails)
CONTACT_EMAIL=ftcommercials@gmail.com
```

## Important Notes:

1. **SMTP_PASS**: This should be an App Password, not your regular Gmail password. To generate an App Password:
   - Go to your Google Account settings
   - Navigate to Security
   - Enable 2-Step Verification if not already enabled
   - Go to App passwords
   - Generate a new app password for "Mail"
   - Use this generated password in the SMTP_PASS variable

2. **Security**: The `.env.local` file is automatically ignored by Git for security reasons.

3. **Testing**: After setting up the environment variables, restart your development server for the changes to take effect.

## Email Template Features:

- **Professional HTML Template**: The emails are sent with a branded HTML template matching the F.T. Commercials website design
- **Fallback Text Version**: Plain text version is included for email clients that don't support HTML
- **Reply-To**: Emails are configured with a reply-to address so you can reply directly to the customer
- **Form Validation**: Server-side validation ensures all required fields are present
- **Error Handling**: Comprehensive error handling with user-friendly messages

## API Endpoint:

The contact form submits to `/api/contact` which:
- Validates the form data
- Sends the email via Google SMTP
- Returns appropriate success/error responses
- Logs errors for debugging

## Testing the Contact Form:

1. Fill out the contact form on the website
2. Submit the form
3. Check the recipient email (ftcommercials@gmail.com) for the new message
4. The email will include all form data in a professional format 
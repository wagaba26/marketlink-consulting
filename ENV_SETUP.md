# Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# SMTP Configuration for Zoho Mail
SMTP_HOST=smtp.zoho.com
SMTP_PORT=465
SMTP_USER=info@marketlinkconsulting.com
SMTP_PASS=your_zoho_app_password_here

# Contact Form Configuration
CONTACT_TO=info@marketlinkconsulting.com
CONTACT_FROM=info@marketlinkconsulting.com
```

## Troubleshooting Zoho Mail Issues

If emails are not sending, check these common issues:

### 1. Paid vs Free Account
- **Free/Personal (@zohomail.com)**: Use `smtp.zoho.com`
- **Paid/Domain (@marketlinkconsulting.com)**: You might need to use `smtppro.zoho.com`
  - Try changing `SMTP_HOST=smtppro.zoho.com` in your `.env.local` file.

### 2. Two-Factor Authentication (2FA)
If you have 2FA enabled on your Zoho account, your regular password **will not work**.
- You must generate an **Application Specific Password**.
- Go to [Zoho Accounts](https://accounts.zoho.com) -> Security -> App Passwords -> Generate New Password.
- Use this generated password in `SMTP_PASS`.

### 3. Port Settings
- **SSL (Recommended)**: Port `465` (Secure: true)
- **TLS**: Port `587` (Secure: false)


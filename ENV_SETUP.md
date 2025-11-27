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

## Important Notes

1. Replace `your_zoho_app_password_here` with your actual Zoho app password
2. The `.env.local` file is already in `.gitignore` and will not be committed
3. For Vercel deployment, add these environment variables in the Vercel dashboard under Settings → Environment Variables

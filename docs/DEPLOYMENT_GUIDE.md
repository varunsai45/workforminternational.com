# Workform International — Deployment and Domain Guide

This guide explains how to run the site, connect the enquiry database, deploy it and point your domain to the live website.

## 1. What you need

- The ZIP file from this project.
- A Windows, macOS or Linux computer.
- Node.js 20 LTS or newer.
- Visual Studio Code (recommended).
- Access to the domain registrar where your domain was purchased.
- A hosting account such as Vercel or Netlify.
- A WhatsApp account for the Workform business number +91 99007 16198.

You do not need Lovable or another AI website builder.

## 2. Install Node.js

1. Visit https://nodejs.org/
2. Download the current LTS version.
3. Install it using the default options.
4. Restart VS Code if it was open.
5. Open Command Prompt or VS Code Terminal and run:

   ```bash
   node -v
   npm -v
   ```

Both commands should print version numbers.

## 3. Extract and run the website

1. Right-click the ZIP file.
2. Select Extract All.
3. Open the extracted `Workform-International-Website` folder in VS Code.
4. Select Terminal > New Terminal.
5. Run:

   ```bash
   npm install
   npm run dev
   ```

6. Open the local URL shown in the terminal, usually:

   `http://localhost:5173`

The local URL is visible only on your computer. It is not your public website.

## 4. Enquiry form and WhatsApp

The quote and contact forms prepare a formatted WhatsApp message addressed to Workform at +91 99007 16198. The message includes the customer details entered in the form, such as name, company, email, phone, industry, project type, location, area, budget, expected start date and requirements (where those fields are present).

The visitor must review the prefilled message and press **Send** in WhatsApp. A website cannot silently send a WhatsApp message from a visitor's account. If a browser blocks the new tab, the form also displays an **Open WhatsApp & Send** link.

Before launch, verify that +91 99007 16198 is the correct Workform WhatsApp Business number and test the form on desktop and mobile.

## 5. Test the production build

Run:

```bash
npm run build
npm run preview
```

Check the terminal for errors. Open the preview URL and test:
- All navigation links.
- All page routes.
- Mobile menu.
- Quote form and WhatsApp prefilled message.
- Privacy Policy, FAQ, Blogs and Terms & Conditions pages.
- Phone and email links.
- WhatsApp button.
- Map links.
- Images and responsive layout.

The generated production website is in the `dist` folder.

## 6. Deploy to Vercel (recommended)

1. Create an account at https://vercel.com/
2. Create a GitHub account at https://github.com/ if you do not already have one.
3. Create a new GitHub repository named `workform-international-website`.
4. Upload the contents of the extracted website folder to the repository. Do not upload `node_modules` or `.env`.
5. In Vercel, select Add New > Project.
6. Import the GitHub repository.
7. Use these settings:

   Framework Preset: Vite  
   Build Command: `npm run build`  
   Output Directory: `dist`  
   Install Command: `npm install`

8. Add the same environment variables from your local `.env` under Vercel Project > Settings > Environment Variables.
9. Deploy.
10. Wait for the deployment to finish.
11. Open the Vercel preview domain and test the website.

The Vercel project can redeploy automatically when you push future changes to the connected GitHub branch.

## 7. Connect your own domain

First, decide which domain should be primary:
- `workforminternational.com`
- `www.workforminternational.com`

Use the exact domain you own. Do not purchase another domain if you already own the correct one.

In Vercel:

1. Open your project.
2. Go to Settings > Domains.
3. Add your domain, for example `workforminternational.com`.
4. Add `www.workforminternational.com` too if you want both versions.
5. Vercel will display the DNS records required for your domain.

At your domain registrar:

1. Sign in to the account where the domain was purchased.
2. Open DNS Management / DNS Records.
3. Add the exact records shown by Vercel.
4. Commonly, the apex/root domain uses an A record and `www` uses a CNAME, but use the exact values Vercel displays for your project.
5. Remove conflicting records only after checking that they are not used by email or other services.
6. Save the records.
7. Return to Vercel and wait for domain verification and SSL certificate provisioning.

DNS changes may take from a few minutes to 24–48 hours to propagate.

Do not change MX records if you use company email. MX records control email delivery.

## 8. Update the domain inside the project

Set `VITE_SITE_URL` to your final public domain in both your local `.env` and hosting environment variables. If the final domain is not `www.workforminternational.com`, also update:

- `public/sitemap.xml`
- `src/App.tsx` canonical URL in the SEO component
- `index.html` metadata if needed
- Open Graph URL/image settings if added later

Commit and push the changes, then let Vercel redeploy.

## 9. Google indexing and SEO

After the domain is live:

1. Visit https://search.google.com/search-console/
2. Add the domain property.
3. Verify ownership using the DNS TXT record Google provides.
4. Submit:

   `https://YOUR-DOMAIN/sitemap.xml`

5. Inspect the homepage and important service pages.
6. Request indexing where appropriate.
7. Add Google Analytics after creating the property.
8. Test the site on mobile.

SEO rankings are not immediate and cannot be guaranteed.

## 10. Final launch checklist

- [ ] Domain opens with HTTPS.
- [ ] Both root and www domain behave as intended.
- [ ] Company phone number is correct.
- [ ] Company email is correct.
- [ ] Office address is correct.
- [ ] Factory address is correct.
- [ ] WhatsApp link opens the correct number.
- [ ] Quote form submits and stores a test enquiry.
- [ ] Enquiry forms open WhatsApp with the submitted details and the customer can press Send.
- [ ] Actual factory photographs replace illustrative visuals.
- [ ] Project examples are verified and approved.
- [ ] Sitemap is accessible.
- [ ] Google Search Console is verified.
- [ ] Mobile and desktop layouts are checked.
- [ ] Company has access to the hosting, domain and database accounts.

## 11. What is not included automatically

This package is the website source code and setup foundation. It does not itself purchase a domain, create hosting accounts, configure your registrar, create a Supabase project, send email notifications or publish the site. Those steps require access to your own accounts and your explicit actions.

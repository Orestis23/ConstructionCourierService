CONSTRUCTION COURIER SERVICE — VERCEL EXPORT

DEPLOYMENT
1. Unzip this package.
2. In Vercel, create a new project and upload/import the unzipped folder.
3. Leave the Framework Preset set to "Other".
4. No build command or output directory is required.
5. Deploy, then connect courierconstructionservice.com in the Vercel project settings.

SITE STRUCTURE
- index.html is the primary Landing Page.
- mishawaka/, south-bend/, elkhart/, and niles/ contain localized SEO pages.
- styles.css and script.js are shared by every page.
- assets/ contains the high-resolution truck, logo, and service-area map images.
- sitemap.xml, robots.txt, llms.txt, and vercel.json are at the site root.

FORM / APP EMBED
The iframe URL is set near the top of script.js as DELIVERY_REQUEST_URL.
It currently points to https://constructioncourierservice.com.
Change only that value when the final form application URL is ready.

CONTACT FORM
The HTML contact form currently opens the visitor's email client.
Replace its action after the Google Sheets / Apps Script endpoint is ready.

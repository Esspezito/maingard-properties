# Deployment Instructions for Michael Maingard Properties

## Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Create a new repository with these settings:
   - Repository name: `maingard-properties`
   - Description: "Michael Maingard Properties - Luxury Real Estate on Cape Town's Atlantic Seaboard"
   - Public repository
   - Do NOT initialize with README, .gitignore, or license

## Step 2: Push Code to GitHub

Run these commands in your terminal (replace YOUR_GITHUB_USERNAME):

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/maingard-properties.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

1. Go to: https://vercel.com/new
2. Click "Import Git Repository"
3. Select the `maingard-properties` repository
4. Configure the project:
   - Framework Preset: Next.js (should auto-detect)
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: Leave default
   - Install Command: `npm install`
5. Click "Deploy"

## Step 4: Configure Custom Domain

After deployment completes:

1. Go to your Vercel project settings
2. Navigate to "Domains" section
3. Add domain: `michaelmaingardproperties.com`
4. Add domain: `www.michaelmaingardproperties.com`

### DNS Configuration

Add these DNS records to your domain provider:

**For the root domain (michaelmaingardproperties.com):**
- Type: A
- Name: @
- Value: 76.76.21.21

**For www subdomain:**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

## Step 5: Environment Variables (if needed)

No environment variables are required for the current setup as we're using mock data.

## Project Features

- ✅ Responsive design with Tailwind CSS
- ✅ Property listings from Property24 API
- ✅ Modern animations with Framer Motion
- ✅ Mike Maingard profile and branding
- ✅ Atlantic Seaboard property specialization
- ✅ Luxury color scheme with gold accents
- ✅ Google Fonts (Poppins, Montserrat, Raleway)

## Support

If you encounter any issues during deployment:
1. Check that all files are committed to Git
2. Verify the build runs locally with `npm run build`
3. Check Vercel deployment logs for any errors

## Live URL

Once deployed, your website will be available at:
- https://michaelmaingardproperties.com
- https://www.michaelmaingardproperties.com

The Vercel preview URL will be something like:
- https://maingard-properties.vercel.app
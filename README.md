# Personal Career Website

A modern, responsive personal career website built with vanilla HTML, CSS, and JavaScript.

## Setup Instructions

### 1. Add Your Resume

1. Download your resume PDF from Google Drive: https://drive.google.com/file/d/17NjwmMGM7GS_x1aG__OPSN-eBOPsF-sU/view?usp=sharing
2. Rename it to `resume.pdf`
3. Place it in the `assets` folder: `assets/resume.pdf`

### 2. Customize Your Content

Edit `index.html` to add your personal information:

- **Name**: Replace "Your Name" throughout the file
- **Title/Subtitle**: Update hero section job title
- **About Section**: Add your bio and background
- **Experience**: Update with your work history
- **Skills**: Add your technical skills
- **Projects**: Showcase your best projects with links
- **Contact**: Add your email, LinkedIn, and GitHub links

### 3. Preview Locally

Simply open `index.html` in your web browser:

```bash
open index.html
```

Or use a local development server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if you have npx installed)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

1. Create a new repository on GitHub (e.g., `username.github.io`)
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal career website"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. Enable GitHub Pages in repository Settings > Pages
4. Your site will be live at `https://yourusername.github.io`

### Option 2: Netlify (Free)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your project folder to Netlify
3. Your site will be live instantly with a custom URL
4. Optional: Add custom domain in site settings

### Option 3: Vercel (Free)

1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in your project directory
4. Follow prompts to deploy

### Option 4: Cloudflare Pages (Free)

1. Create account at [cloudflare.com](https://cloudflare.com)
2. Go to Pages and create new project
3. Connect your GitHub repo or upload files directly
4. Your site will be deployed globally on Cloudflare's CDN

## File Structure

```
career-site/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript for interactivity
├── assets/             # Folder for your resume and images
│   └── resume.pdf      # Your resume (ADD THIS)
└── README.md           # This file
```

## Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Smooth Scrolling**: Navigation smoothly scrolls to sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Animated Elements**: Scroll-triggered animations
- **Resume Viewer**: Embedded PDF viewer with download option
- **Modern UI**: Clean, professional design with gradient hero section
- **SEO Ready**: Proper meta tags and semantic HTML

## Customization Tips

### Change Color Scheme

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;  /* Change to your brand color */
    --primary-dark: #1e40af;
    /* ... other colors */
}
```

### Add Profile Photo

1. Add your photo to the `assets` folder
2. Insert in the About section of `index.html`:

```html
<div class="about-content">
    <img src="assets/profile.jpg" alt="Your Name" style="width: 200px; border-radius: 50%; margin-bottom: 2rem;">
    <div class="about-text">
        ...
    </div>
</div>
```

### Add More Sections

Copy any section from `index.html` and modify the content. Remember to:
- Add a unique `id` attribute
- Update the navigation menu
- Keep the section structure consistent

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Need Help?

- Check browser console for any errors
- Ensure `assets/resume.pdf` exists for resume section to work
- Use browser dev tools to test responsive design
- Validate HTML at [validator.w3.org](https://validator.w3.org)

## License

This is your personal website - feel free to customize it however you like!

---

Built with ❤️ using HTML, CSS, and JavaScript

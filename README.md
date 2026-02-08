# Anything.com Clone

A modern, dark-themed clone of Anything.com - the AI app builder platform. Ready to deploy on GitHub Pages.

## Features

- 🌑 Modern dark theme with gradient accents
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🎨 Purple/indigo color scheme
- 🚀 Parallax scrolling effects
- 💫 Animated statistics counters
- 🎯 Interactive hover effects

## Design Inspiration

This website is inspired by [Anything.com](https://www.anything.com), an AI-powered app builder platform. The design features:
- Dark background with subtle gradients
- Purple/indigo accent colors
- Clean, modern typography
- Card-based layout
- Animated elements on scroll

## Quick Start

### Deploy to GitHub Pages

1. **Create a new repository** on GitHub
   - Go to [GitHub](https://github.com) and click "New repository"
   - Name it anything you like (e.g., `my-website`)
   - Make it public
   - Don't initialize with README (we already have one)

2. **Upload these files**
   - Download and extract the zip file
   - Click "uploading an existing file" on GitHub
   - Drag and drop all files from inside the `github-pages-site` folder
   - Make sure `index.html` is at the root level
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click Save

4. **Access your site**
   - Your site will be available at: `https://[your-username].github.io/[repository-name]/`
   - It may take a few minutes to deploy

## File Structure

```
github-pages-site/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Dark theme stylesheet
├── js/
│   └── main.js        # Interactive JavaScript
├── images/            # Place your images here
└── README.md          # This file
```

## Customization

### Update Content
- Edit `index.html` to change text, sections, and structure
- Modify feature cards, testimonials, and stats
- Update navigation links and footer information

### Change Colors
The main color scheme uses CSS variables in `style.css`:
```css
--primary-bg: #0a0a0a;      /* Main background */
--secondary-bg: #1a1a1a;    /* Card backgrounds */
--accent-color: #6366f1;    /* Primary accent (indigo) */
--accent-hover: #4f46e5;    /* Hover state */
--text-primary: #ffffff;    /* Main text */
--text-secondary: #a0a0a0;  /* Secondary text */
```

### Add Images
- Place image files in the `images/` folder
- Reference them in HTML: `<img src="images/your-image.jpg" alt="Description">`
- Update the hero background image if desired

### Modify Animations
All animations are in `js/main.js`:
- Parallax scrolling effects
- Fade-in animations
- Number counter animations
- Hover effects

## Features Breakdown

### Header
- Sticky navigation bar with blur effect
- Announcement banner (gradient background)
- Responsive mobile menu

### Hero Section
- Animated gradient background
- Large headline with gradient text
- Multiple CTA buttons
- Animated statistics counters

### Features Grid
- 6 feature cards with icons
- Hover effects with border glow
- Responsive 3-column layout

### Success Stories
- Testimonial cards
- Smooth hover animations
- Customer quotes

### Footer
- Multi-column layout
- Social links
- Legal links

## Browser Support

Works on all modern browsers:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight CSS and JavaScript
- No external dependencies
- Fast load times
- Optimized animations

## Credits

Design inspired by [Anything.com](https://www.anything.com)
Built with HTML, CSS, and vanilla JavaScript

## License

Feel free to use this template for any project!

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

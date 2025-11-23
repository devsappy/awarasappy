# Quick Start Guide

Get your hyper-realistic GSAP React website up and running in minutes!

## Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, or Edge)

## Installation

### 1. Dependencies Already Installed
If you're in the current directory, dependencies are already installed. Just run:

```bash
npm run dev
```

### 2. Fresh Installation (if needed)
```bash
npm install
npm run dev
```

## Access the Application

Once the dev server starts, open your browser to:
- **Local**: http://localhost:5174
- **Network**: Check terminal for network URL (for mobile testing)

## What You'll See

### Loading Screen (2-3 seconds)
- Animated GSAP letters
- Progress bar
- Smooth fade out

### Main Experience
1. **Hero Section**: Scroll down from the 3D sphere
2. **Feature Showcase**: 6 interactive cards
3. **Gallery**: Visual grid with parallax
4. **Call-to-Action**: Final engagement section

## Development

### File Structure
```
src/
├── components/     # All UI components
├── hooks/          # Custom GSAP hooks
├── App.jsx         # Main app
└── main.jsx        # Entry point
```

### Making Changes

1. **Edit Components**: Changes auto-reload (HMR)
2. **Modify Styles**: CSS updates instantly
3. **Add Animations**: Use GSAP in useEffect hooks

### Example: Change Hero Text

Edit `src/components/Hero.jsx`:
```javascript
<h1 className="hero-title" ref={titleRef}>
  <span className="title-word gradient-text">Your</span>
  <span className="title-word gradient-text">Custom</span>
  <span className="title-word gradient-text-alt">Text</span>
  <span className="title-word gradient-text-alt">Here</span>
</h1>
```

### Example: Adjust Animation Speed

In any component:
```javascript
gsap.from(element, {
  duration: 2, // Change this value (in seconds)
  ease: 'power3.out',
})
```

## Customization Tips

### 1. Change Colors
Update CSS custom properties or gradient values:
```css
--card-color: #6366f1; /* Your hex color */
```

### 2. Adjust Particles
In `Hero.jsx`:
```javascript
{[...Array(100)].map()} // Change number
```

### 3. Modify Scroll Speed
In components with ScrollTrigger:
```javascript
scrub: 1, // Higher = slower (try 0.5 to 2)
```

### 4. Disable Loading Screen
In `App.jsx`:
```javascript
const [isLoading, setIsLoading] = useState(false) // Change to false
```

## Production Build

### Build for Production
```bash
npm run build
```

Output: `dist/` folder with optimized files

### Preview Production Build
```bash
npm run preview
```

### Deploy
Upload the `dist/` folder to any static hosting:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## Troubleshooting

### Port Already in Use
The app auto-selects an available port. Check terminal for the actual URL.

### Animations Not Smooth
- Close other browser tabs
- Check if hardware acceleration is enabled
- Try in Chrome for best performance

### Hot Reload Not Working
```bash
# Restart dev server
Ctrl+C
npm run dev
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

## Performance Tips

### For Best Performance
1. **Use Chrome/Edge**: Best GSAP performance
2. **Enable Hardware Acceleration**: Browser settings
3. **Close Background Tabs**: Frees up GPU
4. **Test on Device**: Mobile may perform differently

### Monitor Performance
- Open DevTools > Performance
- Record while scrolling
- Look for 60fps green bars

## Next Steps

### Learn More
- Read `FEATURES.md` for detailed feature documentation
- Read `README.md` for comprehensive overview
- Check GSAP docs: https://greensock.com/docs/

### Extend the Project
1. Add more sections (create new components)
2. Implement routing with React Router
3. Add backend API integration
4. Create admin panel
5. Add authentication

### Common Additions

**Add a New Section**:
```javascript
// 1. Create component in src/components/
// 2. Import in App.jsx
import NewSection from './components/NewSection'

// 3. Add to render
<NewSection />
```

**Add ScrollTrigger Animation**:
```javascript
gsap.from(element, {
  scrollTrigger: {
    trigger: element,
    start: 'top 80%',
    scrub: 1,
  },
  y: 100,
  opacity: 0,
})
```

## Resources

- **GSAP Docs**: https://greensock.com/docs/
- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev
- **Project Repo**: Check package.json for details

## Support

For issues or questions:
1. Check `FEATURES.md` for detailed explanations
2. Review component files for inline comments
3. Consult GSAP documentation
4. Test in different browsers

## Quick Commands Reference

```bash
npm run dev              # Start development
npm run build            # Build for production
npm run preview          # Preview production build
npm install              # Install dependencies
```

---

**Ready to create something amazing!** 🚀

Visit **http://localhost:5174** to see your hyper-realistic web experience in action.

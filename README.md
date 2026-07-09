# Muhammad Abdullah's Portfolio Website

A professional, fast, and fully responsive portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Features

- ⚡ **Next.js 15** with App Router and TypeScript for modern development
- 🎨 **Tailwind CSS v4** for utility-first styling with a professional design system
- 🌓 **Dark mode toggle** with localStorage persistence and system preference detection
- ✨ **Subtle animations** using Framer Motion for smooth micro-interactions
- 📱 **Fully responsive** design (mobile-first, tested at 375px, 768px, 1024px, 1440px)
- ♿ **Accessible** with semantic HTML, ARIA labels, focus states, and WCAG AA compliance
- 🚀 **Optimized for Vercel** deployment
- 📊 **SEO-friendly** with proper metadata and Open Graph tags
- 🎯 **No backend needed** — fully static site perfect for Vercel

## Tech Stack

- **Next.js 15** (App Router)
- **React 19 RC** with TypeScript
- **Tailwind CSS v4**
- **Framer Motion** for animations
- **lucide-react** for icons
- **Geist Font** from Vercel (self-hosted)

## Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout with metadata and theme provider
│   ├── page.tsx                # Homepage combining all sections
│   └── globals.css             # Global styles and Tailwind directives
├── components/
│   ├── Navbar.tsx              # Sticky navigation with dark mode toggle
│   ├── Footer.tsx              # Footer with links and copyright
│   ├── ThemeProvider.tsx       # Dark mode provider with localStorage
│   └── sections/
│       ├── Hero.tsx            # Main hero section with CTAs
│       ├── About.tsx           # About section with background
│       ├── Skills.tsx          # Skills grouped by category
│       ├── Projects.tsx        # Project cards grid with repo links
│       ├── Experience.tsx      # Experience timeline
│       └── Contact.tsx         # Contact methods and social links
├── config/
│   └── siteConfig.ts           # Centralized config for all personal info
├── public/
│   └── resume.pdf              # Resume file (replace with your actual resume)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ (preferably 20+)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone or extract the project:**
   ```bash
   cd personal-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Update your personal information** in `config/siteConfig.ts`:
   ```ts
   export const siteConfig = {
     name: 'Your Name',
     title: 'Your Title',
     description: 'Your description',
     email: 'your.email@example.com',
     whatsapp: '923001234567', // digits only
     github: 'https://github.com/yourusername',
     linkedin: 'https://linkedin.com/in/yourprofile',
     instagram: 'https://instagram.com/yourusername',
     // ... other fields
   }
   ```

4. **Customize the content:**
   - Update the **projects array** in `config/siteConfig.ts` with your projects
   - Update the **experience array** with your work history
   - Update the **skills object** with your technical skills
   - Update the **aboutContent** with your personal background

5. **Add your resume:**
   - Replace `public/resume.pdf` with your actual resume PDF

6. **Start the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Development

### Available Commands

- `npm run dev` — Start the development server (hot reload)
- `npm run build` — Build for production
- `npm start` — Start the production server
- `npm run lint` — Run ESLint

### Customization

#### Adding New Sections

1. Create a new component in `components/sections/YourSection.tsx`
2. Import and add it to `app/page.tsx`
3. Update navigation links in `config/siteConfig.ts` if needed

#### Modifying Styles

- **Colors:** Update the color palette in `tailwind.config.ts`
- **Typography:** Adjust font families and sizes in `tailwind.config.ts`
- **Animations:** Modify Framer Motion variants in individual components
- **Layout:** Edit component classes or create new Tailwind utilities in `app/globals.css`

#### Dark Mode

The site automatically detects system preference for dark mode on first load. Users can toggle with the moon/sun icon in the navbar. The preference is saved to localStorage.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel will auto-detect Next.js and configure everything
5. Click Deploy — your site goes live!

### Other Platforms

This is a static Next.js site and can be deployed to:
- Netlify
- GitHub Pages (with `next export`)
- Any static hosting service

## SEO & Metadata

Update the metadata in `app/layout.tsx`:
- Title and description
- Open Graph tags for social sharing
- Twitter card configuration
- Favicon

## Performance

- **Image Optimization:** Uses Next.js Image component
- **Font Optimization:** Self-hosted Geist fonts
- **CSS:** Tailwind purges unused styles in production
- **Code Splitting:** Next.js automatically code-splits by route
- **Lighthouse:** Optimized for high Lighthouse scores

## Accessibility

- ✅ Semantic HTML structure
- ✅ ARIA labels on icon buttons and interactive elements
- ✅ Visible focus states on all interactive elements
- ✅ Color contrast passing WCAG AA standards
- ✅ Keyboard navigable throughout
- ✅ Smooth scroll behavior
- ✅ Proper heading hierarchy

## Editing Checklist

Before deploying:

- [ ] Update `siteConfig.ts` with your personal information
- [ ] Replace placeholder project URLs with your actual GitHub/live URLs
- [ ] Update project descriptions and tech stacks
- [ ] Add your actual resume to `/public/resume.pdf`
- [ ] Update the About section with your background
- [ ] Update the Experience section with your work history
- [ ] Update Skills with your actual technical skills
- [ ] Verify all social media links are correct
- [ ] Test the resume download button
- [ ] Test dark mode toggle
- [ ] Test mobile responsiveness
- [ ] Test all external links open in new tabs

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Questions?

If you have any questions about the setup or customization, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Made with ❤️ using Next.js, TypeScript, and Tailwind CSS**

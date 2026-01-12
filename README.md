# Dhruv Joshi - Portfolio Website

A modern, high-end, production-ready personal portfolio website built with Next.js, TypeScript, and cutting-edge web technologies.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and smooth animations
- **3D Background**: Subtle Three.js animations for a premium feel
- **Smooth Scrolling**: Cinematic section transitions with Framer Motion
- **Interactive Sections**:
  - Hero section with navigation buttons
  - Projects showcase with expandable modals
  - Experience timeline with expandable years
  - Contact form with social links
- **Fully Responsive**: Beautiful on all devices
- **Keyboard Navigation**: Arrow keys and Page Up/Down support
- **Navigation Dots**: Visual section indicators

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Three.js** via @react-three/fiber (3D effects)
- **GSAP** (scroll animations)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✏️ Customization

### Update Personal Information

1. **Name and Tagline**: Edit `app/page.tsx` in the Hero component
2. **Projects**: Edit `data/projects.ts`
3. **Experience**: Edit `data/experience.ts`
4. **Contact Info**: Edit `data/contact.ts`

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Glassmorphism utilities are defined in `globals.css`

## 🚢 Deployment

This site is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!

The site is optimized for production with:
- Automatic code splitting
- Image optimization
- SEO-friendly metadata
- Fast loading times

## 📝 License

This project is open source and available under the MIT License.


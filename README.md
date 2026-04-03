# Prajit Ramachandran — AI & Data Science Portfolio

A premium, futuristic multi-page personal portfolio built with React, Vite, Three.js, Framer Motion, and Tailwind CSS.

---

## 🧠 Tech Stack

| Layer       | Technology                    |
|-------------|-------------------------------|
| Framework   | React 18 + Vite               |
| Routing     | React Router v6               |
| 3D Graphics | Three.js + React Three Fiber  |
| Animation   | Framer Motion                 |
| Styling     | Tailwind CSS                  |
| Fonts       | Syne, DM Sans, JetBrains Mono |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx      # Animated cursor
│   │   ├── HeroCanvas.jsx        # Three.js 3D ring scene
│   │   ├── Navbar.jsx            # Animated navigation
│   │   ├── NoiseOverlay.jsx      # Film grain overlay
│   │   ├── PageLoader.jsx        # Loading spinner
│   │   ├── PageTransition.jsx    # Framer Motion page wrapper
│   │   └── SectionTitle.jsx      # Reusable heading component
│   ├── hooks/
│   │   └── useScrollReveal.js    # Intersection Observer hook
│   ├── pages/
│   │   ├── Home.jsx              # Hero + 3D canvas
│   │   ├── About.jsx             # Personal intro
│   │   ├── Projects.jsx          # Project cards + modal
│   │   ├── Skills.jsx            # Skill bars + categories
│   │   ├── Experience.jsx        # Timeline + certifications
│   │   └── Contact.jsx           # Contact form + socials
│   ├── App.jsx                   # Router + AnimatePresence
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles + Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ (recommended: v20 LTS)
- npm or yarn

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Visit: **http://localhost:5173**

### 3. Build for production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

---

## 🌐 Deployment

### Option A — Vercel (Recommended, Zero Config)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Framework: **Vite** (auto-detected)
5. Click **Deploy** ✓

For React Router to work on Vercel, add a `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Option B — GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

3. Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. Deploy:
```bash
npm run deploy
```

---

## 🎨 Customization

### Update personal info
- **Name / Title / Bio**: `src/pages/Home.jsx`, `src/pages/About.jsx`
- **Projects**: `src/pages/Projects.jsx` → edit the `projects` array
- **Skills**: `src/pages/Skills.jsx` → edit the `skillGroups` array
- **Experience**: `src/pages/Experience.jsx` → edit `experiences` and `certifications`
- **Contact**: `src/pages/Contact.jsx` → update email, GitHub, LinkedIn

### Change colors
Edit `tailwind.config.js` — the `neon` color palette controls the accent colors.

### Connect contact form
Replace the `handleSubmit` mock in `Contact.jsx` with a real backend call (EmailJS, Formspree, or your own API).

---

## ✨ Features

- 🌌 Interactive 3D animated ring with mouse parallax (Three.js + R3F)
- 🎬 Smooth page transitions with blur + fade (Framer Motion)
- 🖱️ Custom animated cursor (desktop)
- 🌫️ Film grain noise overlay
- 🪟 Glassmorphism UI cards with glow effects
- 📱 Fully responsive (mobile menu with animated hamburger)
- ⚡ Lazy-loaded routes via React.lazy + Suspense
- 🔢 Scroll-reveal animations on all content
- 🎭 Project modal with full detail view
- ✅ Contact form with real-time validation
- 🎨 Custom scrollbar, selection highlight
- 🔡 Premium typography: Syne + DM Sans + JetBrains Mono

---

## 📄 License

MIT — free to use and modify.

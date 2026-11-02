# Ravi Kumar — Premium Developer Portfolio

A production-ready, animated personal portfolio built with **React 19, Vite, Tailwind CSS v4, Framer Motion, React Router, React Icons, EmailJS, Swiper.js, React CountUp, and Typewriter effects.**

## ✨ Features
- Glassmorphism + Apple-inspired minimal design with soft gradients
- Dark/Light theme toggle (persisted to localStorage)
- Fully responsive, accessible (semantic HTML, ARIA labels, keyboard nav, focus states)
- Animated hero with typewriter effect & floating particles
- Skills section with animated circular progress bars, tabbed categories
- Projects section with live search, category filter, and pagination
- Animated vertical experience timeline
- Testimonials carousel (Swiper)
- Floating animated tech stack icons
- Live GitHub stats, top languages, and contribution graph
- Contact form with validation + EmailJS integration + success animation + embedded map
- Custom cursor, scroll progress bar, back-to-top button, page transitions
- SEO: React Helmet, Open Graph, Twitter Cards, JSON-LD Person schema
- Code splitting via `React.lazy` + Suspense, error boundaries, loading skeletons

## 🚀 Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build (outputs to /dist)
npm run preview   # preview the production build locally
```

## 🔧 Configuration

### 1. Personal data
Edit `src/data/personalData.js`, `src/data/projectsData.js`, `src/data/skillsData.js`, and `src/data/miscData.js` to update your own information, projects, skills, experience, education, certifications, services, testimonials, and blog posts.

### 2. Resume
Replace `public/resume-ravi-kumar.pdf` with your real resume (same filename, or update the path in `src/data/personalData.js` → `resumeUrl`).

### 3. EmailJS (Contact Form)
The contact form sends messages through EmailJS. To receive submissions at `mandalravi952@gmail.com`:

1. Create an account at [emailjs.com](https://www.emailjs.com/) and connect the email service you want to send through.
2. Create an EmailJS template. Set its **To Email** to `mandalravi952@gmail.com`. Use `{{from_name}}`, `{{from_email}}`, `{{subject}}`, and `{{message}}` in the template body. Set **Reply To** to `{{reply_to}}` so you can reply directly to the sender.
3. Copy `.env.example` to `.env.local` and fill in the Service ID, Template ID, and Public Key from EmailJS. Restart the dev server after changing environment variables.

The form only shows a success message after EmailJS confirms the send. Without valid EmailJS credentials, it shows an error rather than pretending the message was delivered.

### 4. GitHub Stats
In `src/sections/GithubStats.jsx`, update:
```js
const GITHUB_USERNAME = "ravikumar-dev";
```
to your real GitHub username to pull live stats via github-readme-stats.

### 5. Social links & avatar
Update `src/data/personalData.js` → `socials` object with your real profile URLs.

### 6. SEO / Open Graph image
Add a real `og-image.png` (1200×630px recommended) to the `public/` folder and update `siteUrl` in `src/components/SEO.jsx`.

## 📁 Folder Structure
```
src/
  components/   Reusable UI components (Button, GlassCard, Navbar, Footer, etc.)
  sections/     Page sections (Hero, About, Skills, Projects, Contact, etc.)
  pages/        Route-level pages (Home, NotFound)
  data/         Static content/data (edit this to personalize the site)
  hooks/        Custom React hooks
  context/      Theme context provider
  animations/   Reusable Framer Motion variants
```

## 🎨 Design Tokens
Colors, fonts, and animation keyframes are defined in `src/index.css` under the `@theme` block (Tailwind v4 CSS-first config) — edit there to restyle globally.

## 📦 Deployment
This is a static Vite build — deploy the `dist/` folder to Vercel, Netlify, Render, or any static host.

```bash
npm run build
# then upload /dist, or connect the repo directly to Vercel/Netlify
```

---
Built with React, Tailwind CSS & Framer Motion.

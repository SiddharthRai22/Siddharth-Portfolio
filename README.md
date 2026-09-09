# Siddharth Kumar Rai - Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 6" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Motion" />
  <img src="https://img.shields.io/badge/React_Router_v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Lucide_React-000000?style=for-the-badge&logo=lucide&logoColor=white" alt="Lucide React" />
</div>

<div align="center">
  <h3>A refined, interactive portfolio showcasing full-stack engineering, AI systems, and creative 3D web experiences</h3>
</div>

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📋 Prerequisites](#-prerequisites)
- [🚀 Installation](#-installation)
- [💻 Scripts & Usage](#-scripts--usage)
- [🏗️ Project Structure](#️-project-structure)
- [🎨 Design & Aesthetics](#-design--aesthetics)
- [📱 Responsive Design](#-responsive-design)
- [📞 Contact](#-contact)
- [📄 License](#-license)

---

## ✨ Features

- **🍂 Interactive 3D Autumn Leaves Simulation**: Real-time Three.js WebGL scene with GLTF leaf models, dynamic physics, fluttering motion, and scroll-linked depth.
- **🎯 Dynamic Project Showcase & Deep Dives**: Comprehensive case study pages (`/work/:id`) detailing architecture, challenges, solutions, and impact metrics.
- **🤖 AI & Full-Stack Engineering Highlights**: Showcasing autonomous AI research agents, college assistants, AI website generators, financial dashboards, and transit tracking.
- **🎨 Editorial Aesthetic**: Warm earthen palette paired with elegant serif display typography (**Cormorant Garamond**) and structured monospace details (**IBM Plex Mono**).
- **🎭 Motion & Micro-Interactions**: Powered by `motion` (Framer Motion v12) for fluid entry reveals, card hover transforms, and parallax scroll effects.
- **📱 Fully Responsive**: Fluid, mobile-first layouts designed for ultra-wide monitors down to compact smartphones.
- **🖼️ Interactive Lightbox / Modal Galleries**: Full-resolution image viewers for project screenshots and interface flows.
- **🔍 SEO & Structured Data**: Built-in JSON-LD structured metadata, Open Graph tags, and Twitter Cards for social sharing.

---

## 🛠️ Tech Stack

### Core Framework & Runtime
- **React 19** - Modern component-driven UI architecture with hooks and concurrent features
- **Vite 6** - Next-generation frontend build tool and ultra-fast dev server
- **TypeScript 5.8** - Strict type safety across components, models, and utility modules
- **React Router v7** - Declarative client-side routing with smooth hash-scroll recovery

### 3D Graphics & Animation
- **Three.js (v0.185)** - WebGL 3D rendering engine driving the hero background leaf particle simulation and GLTF loader
- **Motion (v12 / Framer Motion)** - Production-ready motion library for fluid gestures, layout animations, and scroll triggers

### Styling & Design System
- **Tailwind CSS v4** - The latest utility-first CSS engine integrated via `@tailwindcss/vite`
- **clsx** & **tailwind-merge** - Conditional class composition and deduplication
- **Lucide React** - Vector iconography
- **Google Fonts** - *Cormorant Garamond* (display serif) & *IBM Plex Mono* (technical mono)

---

## 📋 Prerequisites

Ensure you have the following installed:

- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher (or `pnpm` / `yarn`)
- **Git**

```bash
node --version
npm --version
```

---

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SiddharthRai22/Siddharth-Portfolio.git
   cd Siddharth-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port specified in terminal).

---

## 💻 Scripts & Usage

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement |
| `npm run build` | Compiles TypeScript and builds production-ready static assets |
| `npm run preview` | Locally serves the production build from `dist/` |
| `npm run lint` | Runs TypeScript static type checking without emitting files |

---

## 🏗️ Project Structure

```
Siddharth-Portfolio/
├── public/
│   ├── favicon.ico
│   ├── my-photo.jpg
│   ├── opengraph-image.jpg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── models/
│   │   └── red-leaf.glb             # 3D leaf model for Three.js scene
│   └── textures/
│       └── red-leaf.png             # Texture maps for 3D foliage
├── src/
│   ├── assets/                      # Branch graphics, photos, project screenshots
│   │   ├── images/
│   │   └── projects/
│   ├── components/                  # Modular React components
│   │   ├── About.tsx                # Professional journey & background
│   │   ├── Contact.tsx              # Contact details & social links
│   │   ├── FallingLeavesScene.tsx   # Three.js 3D WebGL canvas
│   │   ├── Hero.tsx                 # Headline hero section
│   │   ├── Image.tsx                # Lazy-loaded image helper
│   │   ├── JsonLd.tsx               # Structured schema markup
│   │   ├── LoadingScreen.tsx        # Initial loading sequence
│   │   ├── Navigation.tsx           # Floating navigation bar
│   │   ├── ParallaxSection.tsx      # Parallax scroll wrapper
│   │   ├── ProjectCard.tsx          # Interactive project card
│   │   ├── ProjectGallery.tsx       # Lightbox / image modal gallery
│   │   ├── Projects.tsx             # Curated works grid
│   │   ├── Reviews.tsx              # Testimonials & recommendations
│   │   ├── ServiceCard.tsx          # Service offering item
│   │   ├── Services.tsx             # Engineering & architecture services
│   │   └── Skills.tsx               # Tech stack & competence matrix
│   ├── pages/
│   │   ├── HomePage.tsx             # Primary single-page portfolio view
│   │   └── CaseStudyPage.tsx        # Detailed case study narrative view
│   ├── lib/
│   │   ├── constants.ts             # Global contact information & links
│   │   ├── projects.ts              # Case study content and project metadata
│   │   ├── services.ts              # Services data
│   │   ├── skills.ts                # Technical skills data
│   │   ├── types.ts                 # Shared TypeScript interfaces & types
│   │   └── utils.ts                 # Styling utilities (cn helper)
│   ├── App.tsx                      # Root router configuration & scroll handlers
│   ├── globals.css                  # Global Tailwind v4 theme & custom utilities
│   ├── main.tsx                     # Application entry point
│   └── vite-env.d.ts                # Vite environment definitions
├── index.html                       # HTML5 entry point & font links
├── metadata.json                    # Application metadata
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript compiler options
└── vite.config.ts                   # Vite configuration & path aliases
```

---

## 🎨 Design & Aesthetics

- **Warm Editorial Atmosphere**: Designed with warm cream backgrounds (`#f7ede0`), deep mahogany typography (`#3e1a0a`), and vibrant amber signal accents (`#b45309`).
- **Typographic Hierarchy**:
  - **Headings & Display**: *Cormorant Garamond* for a distinguished, artisanal editorial feel.
  - **Body & Data**: *IBM Plex Mono* and system sans-serif for clear, technical legibility.
- **Physical Depth & Atmosphere**:
  - Subtle noise textures and command grid patterns.
  - Three.js interactive falling leaves layer that responds smoothly to scrolling.
  - Reduced-motion support respecting user accessibility settings (`prefers-reduced-motion`).

---

## 📱 Responsive Design

- **Mobile First**: Built with responsive utility classes spanning mobile (`sm`), tablet (`md`), desktop (`lg`), and wide screens (`xl`).
- **Touch & Keyboard Accessible**: Large touch targets, visible keyboard focus rings, and screen-reader accessible elements.

---

## 📞 Contact

**Siddharth Kumar Rai** — *Full Stack Developer & AI Engineer*

- **LinkedIn**: [linkedin.com/in/iam-siddharth](https://www.linkedin.com/in/iam-siddharth)
- **GitHub**: [github.com/SiddharthRai22](https://github.com/SiddharthRai22)
- **Email**: [siddharthkumarrai23@gmail.com](mailto:siddharthkumarrai23@gmail.com)
- **Phone**: +91 7319792636

---

<div align="center">
  <p>© 2026 Siddharth Kumar Rai. All rights reserved.</p>
</div>


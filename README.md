# Mall of America | Interactive Sales Deck

A high-fidelity, cinematic, and fully interactive browser-based sales tool for North America's largest retail and entertainment destination. This project replaces traditional static pitch decks with an immersive digital experience designed for prospective tenants, sponsors, and event partners.

**Note**: We have used animation instead of video since video seemed too easy and common for the frontend assignment.

## 🚀 Live Demo
**URL**: [https://liat-assignment.netlify.app/](https://liat-assignment.netlify.app/)

---

## ✨ Key Features

- **Cinematic Scrollytelling**: A high-performance landing experience using scroll-linked image sequences and video to convey scale.
- **Interactive Architectural Map**: A custom SVG-based directory with real-time filtering, search, and floor-plan visualizations.
- **Modular Story Beats**: Dedicated modules for Retail, Luxury, Dining, Attractions, and Events, each optimized for sales conversion.
- **Non-Linear Navigation**: A luxury-brand inspired sidebar allows prospects to explore the property on their own terms.
- **Two-Portal Architecture**: Separate consumer-facing "Mall Experience" and corporate-facing "Business Hub" with route-aware navigation.
- **Partner Inquiry Portal**: Lead capture forms with Google Maps integration, replacing passive mailto links with an actionable pipeline.
- **Interactive Data Visualizations**: SVG-based charts (donut, bar) for audience demographics and traffic patterns — animated on scroll.
- **Performance Optimized**: Built for speed with lazy loading, asset optimization, and smooth Framer Motion animations.

---

## ⚡ Performance

The application is highly optimized for the best possible user experience, achieving near-perfect scores on Google Lighthouse.

- **Mobile Score**: 99/100
- **Desktop Score**: 100/100

![Lighthouse Global](./lighthouse_global.png)

### PageSpeed Insights - Mobile
![PageSpeed Mobile](./pagespeed_mobile.png)

### PageSpeed Insights - Desktop
![PageSpeed Desktop](./pagespeed_desktop.png)

---

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Luxury Minimalist Aesthetic)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router 7
- **Form Handling**: Web3Forms (serverless form submission)
- **Data Viz**: Custom SVG components (zero external charting libraries)

---

## 🎨 Design Rationale

### Two-Portal Architecture
The most significant architectural decision was splitting the tool into two distinct navigation modes:

- **Mall Experience** (7 nav items): For prospective tenants and partners exploring the property — Retail, Luxury, Dining, Attractions, Events, Directory.
- **Business Hub** (6 nav items): For corporate decision-makers evaluating sponsorship, leasing, venue rental, and event hosting opportunities.

This solved the "Long Sidebar" problem: a single flat navigation with 12+ items was overwhelming and buried high-conversion CTAs. By introducing explicit intent selection on the landing page ("Enter the Directory" vs "Business Opportunities"), each user journey is curated, shorter, and more effective.

### Visual Language
The UI is inspired by luxury brands like **Apple**, **Hermès**, and **Tesla**.
- **Typography**: Clean, sans-serif fonts with generous letter spacing and serif display titles for hierarchy.
- **Color Palette**: Deep blacks, subtle glassmorphism, and a signature "Mall of America Gold" accent (`#fdd500`) used sparingly for emphasis.
- **Interactivity**: Micro-animations, hover effects, and cinematic zoom transitions between portals create an experience that feels alive and premium.

### Lead Conversion Strategy
Every CTA in the deck drives to the **Inquiry Portal** — a multi-field form that captures company name, interest area, timeline, and message. This replaces passive `mailto` links with a structured lead pipeline, moving the tool closer to a real sales instrument.

---

## 🤖 AI Tools Usage

This project leverages AI tools as accelerators for asset generation and data research, while all architectural decisions, component design, and interaction patterns were human-driven.

- **Gemini**: Used for generating high-fidelity hero imagery, conceptual architectural renderings, and brand activation mockups across all modules where official photography was unavailable.
- **Veo**: Leveraged for generating cinematic b-roll video sequences to maintain the "video-first" storytelling requirement established in the brief.
- **egzip**: Employed for high-performance frame extraction from generated video sequences to power the scrollytelling canvas engine.
- **Antigravity**: Utilized as a coding assistant for accelerating component scaffolding, complex SVG floor plan coordinate generation, and Mall of America tenant data research.

---

## 📦 Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone [repository-url]
   cd mall-of-america-assignment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Directory/              # SVG Map & Search Logic
│   ├── Landing/                # Scrollytelling, Video Intro, Dual CTAs
│   ├── Layout/                 # Route-Aware Sidebar & Navigation
│   ├── Modules/                # Sales Deck Modules
│   │   ├── OverviewModule      # Property overview
│   │   ├── RetailModule        # Retail environment
│   │   ├── LuxuryModule        # Premium positioning
│   │   ├── DiningModule        # F&B & lifestyle
│   │   ├── AttractionsModule   # Entertainment
│   │   ├── EventsModule        # Events & hosting
│   │   ├── SponsorshipModule   # Partnership tiers + data viz
│   │   ├── LeasingModule       # Leasing paths & availability
│   │   ├── VenueModule         # The Rotunda venue spotlight
│   │   ├── BusinessHub         # Business portal dashboard
│   │   └── InquiryPortal       # Lead capture form + map
│   └── MallScrollExperience/   # Canvas-based Scroll Engine
├── data/                       # Property & Tenant Data
└── types/                      # TypeScript Definitions
```

---

## 🎯 Business Objectives

Every element of this deck is designed to drive specific actions:
1. **Leasing**: Showcasing flagship potential, visitor reach, and current availability.
2. **Sponsorship**: Highlighting global brand platform capabilities with audience intelligence data.
3. **Events**: Demonstrating venue scale, technical production quality, and booking pathways.
4. **Lead Capture**: Converting interest into structured inquiries via the Partner Inquiry Portal.

---

## 🔮 What I'd Improve With More Time

- **3D Virtual Tour**: WebGL-based property walkthrough using Three.js for an immersive spatial experience.
- **Real-Time Availability API**: Live leasing availability pulled from a CRM/property management backend.
- **Personalized Deck Builder**: Allow sales reps to select specific modules and generate a custom shareable link for each prospect.
- **Analytics Dashboard**: Track which modules prospects spend the most time on, enabling data-driven follow-up.
- **Multi-Language Support**: Internationalization for global brand partners (Korean, Japanese, Chinese, Spanish).

---
*Created for the LIAT.AI Frontend Screening Assignment.*

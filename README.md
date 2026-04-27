# Mall of America | Interactive Sales Tool (Round 2)

A high-fidelity, cinematic, and non-linear interactive sales tool designed for North America's largest retail and entertainment destination. This version has been significantly overhauled to transition from a "presentation" to a "crafted digital experience."

---

## 📬 Round 2: Responding to Feedback

This repository was updated in response to feedback from **LIAT.AI** regarding the initial submission. The following requirements for the "Senior Multidiscplinary Role" were addressed in this overhaul:

> "The work should feel polished, elevated, and commercially compelling... The experience should feel closer to Digideck, and ideally even more interactive... Video-first, AI-rich... Build an emotional arc that pulls the prospect through scale, energy, and opportunity."

### 🎯 Addressing the Challenges:
1. **Interactive, Not Presentation-Shaped**: Replaced linear navigation with a **Dual-Portal Architecture**. The viewer now drives their own non-linear journey via the "Mall Experience" or the "Business Hub," allowing for a self-directed exploration of the property.
2. **Video-First & AI-Rich**: Leveraged generative AI (Gemini, Veo, Antigravity) to create immersive, atmospheric imagery and cinematic b-roll video sequences. The "stock filler" was replaced with custom-crafted assets that define the MOA vibe.
3. **Storytelling Arc**: Created a "Not Just a Mall" emotional arc that transitions the user from the sheer scale of the property into specific high-energy modules (Retail, Luxury, Attractions).
4. **Mobile UX Overhaul**: Completely redesigned the mobile navigation, featuring a compact "Search Button" that expands into a full-screen interactive overlay and a repositioned "Request a Tour" CTA for higher conversion.

---

## ✨ "I Need to Be Here" Moment

**The Interaction**: The **Seamless Transition from Cinematic Video into the Interactive Portal**.
**Why it earns that reaction**: For a potential tenant or sponsor, the "moment" happens when the cinematic scale of the video (North America’s #1 Destination) suddenly resolves into a tactile, interactive choice. It moves from passive viewing to active participation. When a tenant clicks "Explore the Mall" and sees the level of detail in the directory—surrounded by global brands like Samsung and Hermès—the scale becomes personal. It shifts the perspective from "That's a big mall" to "I need my brand to be right there."

---

## 🚀 Live Demo
**URL**: [https://liat-assignment.netlify.app/](https://liat-assignment.netlify.app/)

---

## ✨ Key Features

- **Cinematic Scrollytelling**: High-performance landing experience using scroll-linked sequences and video to convey scale.
- **Interactive Architectural Map**: A custom SVG-based directory with real-time filtering, search, and floor-plan visualizations.
- **Non-Linear Navigation**: A luxury-brand inspired sidebar and dual-portal entry allow prospects to explore on their own terms.
- **AI-Crafted Assets**: High-fidelity imagery and video generated specifically for this project to maintain a cohesive, "crafted" atmosphere.
- **Mobile-First Search**: A premium mobile search interface with a full-screen overlay and recommendation engine.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Luxury Minimalist Aesthetic)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router 7
- **Data Viz**: Custom SVG components (zero external charting libraries)

---

## 🤖 AI Tools Usage

- **Gemini**: Generation of high-fidelity hero imagery and conceptual architectural renderings.
- **Veo**: Creation of cinematic b-roll video sequences for an immersive "video-first" experience.
- **Antigravity**: Utilized as a pair-programmer for accelerating component development, mobile navigation refinement, and complex SVG coordinate management.

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

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Directory/              # SVG Map & Search Logic
│   ├── Landing/                # Scrollytelling, Video Hero, Dual CTAs
│   ├── Layout/                 # Sidebar, GlobalSearch & Mobile Navigation
│   └── Modules/                # Sales Modules (Retail, Luxury, Business, etc.)
├── data/                       # Property & Tenant Data
└── types/                      # TypeScript Definitions
```

---

## 📝 A Personal Note on the Design

While I have strived for a visually strong and sophisticated aesthetic, I recognize that design is subjective and may not perfectly align with every expectation of the "standard." However, I hope this submission demonstrates my **strong technical signal** and **versatile skill set**. From building custom scrollytelling engines and complex SVG maps to architecting dual-portal navigation systems and refining mobile UX, I carry the multidisciplinary skills required to build high-stakes, interactive digital tools for a global stage.

---
*Created for the LIAT.AI Frontend Screening Assignment (Round 2 Update).*

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingView from './components/Landing/LandingView';
import ScrollToTop from './components/Layout/ScrollToTop';
import SplashScreen from './components/Layout/SplashScreen';

// Lazy-loaded route components for code splitting
const DeckLayout = React.lazy(() => import('./components/Layout/DeckLayout'));
const OverviewModule = React.lazy(() => import('./components/Modules/OverviewModule'));
const RetailModule = React.lazy(() => import('./components/Modules/RetailModule'));
const LuxuryModule = React.lazy(() => import('./components/Modules/LuxuryModule'));
const DiningModule = React.lazy(() => import('./components/Modules/DiningModule'));
const AttractionsModule = React.lazy(() => import('./components/Modules/AttractionsModule'));
const EventsModule = React.lazy(() => import('./components/Modules/EventsModule'));
const SponsorshipModule = React.lazy(() => import('./components/Modules/SponsorshipModule'));
const LeasingModule = React.lazy(() => import('./components/Modules/LeasingModule'));
const VenueModule = React.lazy(() => import('./components/Modules/VenueModule'));
const BusinessHub = React.lazy(() => import('./components/Modules/BusinessHub'));
const InquiryPortal = React.lazy(() => import('./components/Modules/InquiryPortal'));
const DirectoryView = React.lazy(() => import('./components/Directory/DirectoryView'));

/** Minimal loading fallback — matches the dark theme */
const RouteFallback = () => (
  <div style={{
    minHeight: '100vh',
    background: '#050505',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <div style={{
      width: '40px',
      height: '2px',
      background: 'rgba(253, 213, 0, 0.3)',
      borderRadius: '2px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        background: 'linear-gradient(90deg, transparent, #fdd500, transparent)',
        animation: 'loading-slide 1.5s infinite ease-in-out',
      }} />
    </div>
  </div>
);

/**
 * Main Application Component
 * 
 * Route structure — Two-Portal Architecture:
 * 
 *   /                       — Cinematic landing experience (no sidebar)
 * 
 *   MALL EXPERIENCE (sidebar: Mall mode)
 *   /overview               — Property overview deck slide
 *   /retail                 — Retail environment module
 *   /luxury                 — Luxury & prestige module
 *   /dining                 — Dining & lifestyle module
 *   /attractions            — Attractions module
 *   /events                 — Events & platform module
 *   /directory              — Interactive directory + SVG map
 *   /inquiry                — Partner inquiry form + map
 * 
 *   BUSINESS PORTAL (sidebar: Business mode)
 *   /business               — Business hub dashboard
 *   /business/sponsorship   — Sponsorship & brand partnerships
 *   /business/venue         — The Rotunda venue spotlight
 *   /business/events        — Events hosting & booking
 *   /business/leasing       — Leasing paths & contact
 *   /business/inquiry       — Partner inquiry form + map
 */
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <SplashScreen />
      <a href="#main-content" className="skip-nav">Skip to main content</a>
      <div className="app-container">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            {/* Landing — full-screen immersive, no sidebar */}
            <Route path="/" element={<LandingView />} />

            {/* Inner Deck pages — wrapped with Sidebar via DeckLayout */}
            <Route element={<DeckLayout />}>
              {/* Mall Experience */}
              <Route path="/overview" element={<OverviewModule />} />
              <Route path="/retail" element={<RetailModule />} />
              <Route path="/luxury" element={<LuxuryModule />} />
              <Route path="/dining" element={<DiningModule />} />
              <Route path="/attractions" element={<AttractionsModule />} />
              <Route path="/events" element={<EventsModule />} />
              <Route path="/directory" element={<DirectoryView />} />
              <Route path="/inquiry" element={<InquiryPortal />} />

              {/* Business Portal */}
              <Route path="/business" element={<BusinessHub />} />
              <Route path="/business/sponsorship" element={<SponsorshipModule />} />
              <Route path="/business/venue" element={<VenueModule />} />
              <Route path="/business/events" element={<EventsModule />} />
              <Route path="/business/leasing" element={<LeasingModule />} />
              <Route path="/business/inquiry" element={<InquiryPortal />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingView from './components/Landing/LandingView';
import DeckLayout from './components/Layout/DeckLayout';
import OverviewModule from './components/Modules/OverviewModule';
import RetailModule from './components/Modules/RetailModule';
import LuxuryModule from './components/Modules/LuxuryModule';
import DiningModule from './components/Modules/DiningModule';
import AttractionsModule from './components/Modules/AttractionsModule';
import EventsModule from './components/Modules/EventsModule';
import LeasingModule from './components/Modules/LeasingModule';
import DirectoryView from './components/Directory/DirectoryView';
import ScrollToTop from './components/Layout/ScrollToTop';

/**
 * Main Application Component
 * 
 * Route structure:
 *   /            — Cinematic landing experience (no sidebar)
 *   /overview    — Property overview deck slide
 *   /retail      — Retail environment module
 *   /luxury      — Luxury & prestige module
 *   /dining      — Dining & lifestyle module
 *   /attractions — Attractions module
 *   /events      — Events & platform module
 *   /directory   — Interactive directory + SVG map
 *   /leasing     — Leasing paths & contact
 */
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Routes>
          {/* Landing — full-screen immersive, no sidebar */}
          <Route path="/" element={<LandingView />} />

          {/* Inner Deck pages — wrapped with Sidebar via DeckLayout */}
          <Route element={<DeckLayout />}>
            <Route path="/overview" element={<OverviewModule />} />
            <Route path="/retail" element={<RetailModule />} />
            <Route path="/luxury" element={<LuxuryModule />} />
            <Route path="/dining" element={<DiningModule />} />
            <Route path="/attractions" element={<AttractionsModule />} />
            <Route path="/events" element={<EventsModule />} />
            <Route path="/directory" element={<DirectoryView />} />
            <Route path="/leasing" element={<LeasingModule />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

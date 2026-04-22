import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingView from './components/Landing/LandingView';
import DirectoryView from './components/Directory/DirectoryView';

/**
 * Main Application Component
 * Implements routing between the Landing Scrollytelling experience
 * and the Interactive Directory View using React Router.
 */
export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingView />} />
          <Route path="/directory" element={<DirectoryView />} />
        </Routes>
      </div>
    </Router>
  );
}

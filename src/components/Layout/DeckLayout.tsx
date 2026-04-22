import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './DeckLayout.css';

/**
 * DeckLayout — Wraps all inner "slide" pages with the persistent sidebar.
 * The landing/overview page does NOT use this layout to preserve its
 * full-screen immersive experience.
 */
const DeckLayout: React.FC = () => {
  return (
    <div className="deck-layout">
      <Sidebar />
      <main className="deck-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DeckLayout;

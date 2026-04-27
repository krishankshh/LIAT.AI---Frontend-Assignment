import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './DeckLayout.css';

/**
 * DeckLayout — Full-width layout with a glassmorphism top navbar.
 * All inner "deck" pages render full-width beneath the navbar.
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

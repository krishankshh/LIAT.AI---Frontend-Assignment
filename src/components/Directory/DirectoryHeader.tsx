import React from 'react';
import { Star } from 'lucide-react';
import './DirectoryHeader.css';

const DirectoryHeader: React.FC = () => (
  <header className="directory-header">
    <div className="header-left">
      <div className="moa-logo">
        MALL OF <span className="highlight-yellow">AMERICA</span>
      </div>
      <div className="header-divider" />
      <nav className="header-nav">
        <span className="nav-item active">Directory</span>
        <span className="nav-item">Parking</span>
        <span className="nav-item">Events</span>
      </nav>
    </div>
    <div className="header-right">
      <button className="favorites-btn">
        <Star size={14} className="star-icon" />
        Favorites
      </button>
      <button className="leasing-btn">
        Leasing Portal
      </button>
    </div>
  </header>
);

export default DirectoryHeader;

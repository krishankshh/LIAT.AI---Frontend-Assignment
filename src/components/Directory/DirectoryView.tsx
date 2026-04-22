import React, { useState, useMemo } from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { moaData } from '../../data';
import { Store } from '../../types';
import './DirectoryView.css';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const DirectoryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLevel, setActiveLevel] = useState(1);
  const [hoveredStore, setHoveredStore] = useState<string | null>(null);

  const filteredStores = useMemo(() => {
    return moaData.directory.filter((store: Store) => {
      const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          store.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || store.category === activeCategory;
      const matchesLevel = store.level === activeLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, activeCategory, activeLevel]);

  // SVG store positions for the floor plan (mapped to corridor/wing)
  const storePositions: Record<string, { x: number; y: number }> = {
    'n100': { x: 400, y: 60 },  'n102': { x: 300, y: 80 },
    'n103': { x: 500, y: 80 },  'n104': { x: 350, y: 100 },
    'n201': { x: 450, y: 60 },  'n202': { x: 400, y: 80 },
    'n203': { x: 350, y: 60 },  'n301': { x: 400, y: 100 },
    's100': { x: 400, y: 440 }, 's101': { x: 300, y: 420 },
    's102': { x: 500, y: 420 }, 's103': { x: 350, y: 400 },
    's201': { x: 450, y: 440 },
    'e100': { x: 700, y: 250 }, 'e101': { x: 680, y: 200 },
    'e201': { x: 700, y: 300 },
    'w101': { x: 100, y: 200 }, 'w102': { x: 100, y: 280 },
    'w103': { x: 120, y: 240 }, 'w104': { x: 80, y: 320 },
    'c100': { x: 400, y: 250 },
  };

  return (
    <div className="directory-page">
      {/* Header */}
      <div className="directory-header-bar">
        <div className="directory-header-left">
          <h1 className="directory-title">Directory + Map</h1>
          <p className="directory-desc">Explore 520+ stores, dining, and attractions across 4 levels.</p>
        </div>
        <div className="directory-search-box">
          <Search size={18} className="directory-search-icon" />
          <input 
            type="text"
            className="directory-search-input"
            placeholder="Search stores, restaurants, attractions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Filters */}
      <div className="directory-filters-bar">
        <div className="filter-group">
          <span className="filter-label">Level</span>
          <div className="filter-pills">
            {moaData.levels.map((level) => (
              <button
                key={level}
                className={`filter-pill ${activeLevel === level ? 'active-level' : ''}`}
                onClick={() => setActiveLevel(level)}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <span className="filter-label">Category</span>
          <div className="filter-pills">
            {moaData.categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeCategory === cat ? 'active-cat' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content: Map + Store Grid */}
      <div className="directory-body">
        {/* SVG Floor Plan */}
        <div className="floor-plan-container">
          <svg viewBox="0 0 800 500" className="floor-plan-svg">
            {/* Building Outline */}
            <rect x="50" y="30" width="700" height="440" rx="20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            
            {/* Wings */}
            {/* North Wing */}
            <rect x="200" y="30" width="400" height="120" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <text x="400" y="20" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="11" fontWeight="700" letterSpacing="0.1em">NORTH</text>
            
            {/* South Wing */}
            <rect x="200" y="350" width="400" height="120" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <text x="400" y="490" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="11" fontWeight="700" letterSpacing="0.1em">SOUTH</text>
            
            {/* East Wing */}
            <rect x="600" y="150" width="150" height="200" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <text x="760" y="255" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="11" fontWeight="700" letterSpacing="0.1em">EAST</text>
            
            {/* West Wing */}
            <rect x="50" y="150" width="150" height="200" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <text x="40" y="255" textAnchor="end" fill="rgba(255,255,255,0.25)" fontSize="11" fontWeight="700" letterSpacing="0.1em">WEST</text>

            {/* Center Atrium (Nickelodeon Universe) */}
            <rect x="250" y="170" width="300" height="160" rx="12" fill="rgba(253,213,0,0.03)" stroke="rgba(253,213,0,0.15)" strokeWidth="1" strokeDasharray="4 4" />
            <text x="400" y="255" textAnchor="middle" fill="rgba(253,213,0,0.3)" fontSize="10" fontWeight="700" letterSpacing="0.15em">NICKELODEON UNIVERSE</text>

            {/* Corridors */}
            <line x1="200" y1="250" x2="250" y2="250" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="550" y1="250" x2="600" y2="250" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="400" y1="150" x2="400" y2="170" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="400" y1="330" x2="400" y2="350" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 3" />

            {/* Store markers */}
            {filteredStores.map((store: Store) => {
              const pos = storePositions[store.pathId];
              if (!pos) return null;
              const isHovered = hoveredStore === store.id;
              return (
                <g key={store.id}>
                  <circle
                    cx={pos.x} cy={pos.y} r={isHovered ? 10 : 6}
                    fill={isHovered ? '#fdd500' : 'rgba(253,213,0,0.7)'}
                    stroke={isHovered ? '#fff' : 'none'}
                    strokeWidth="2"
                    style={{ transition: 'all 0.2s', cursor: 'pointer' }}
                    onMouseEnter={() => setHoveredStore(store.id)}
                    onMouseLeave={() => setHoveredStore(null)}
                  />
                  {isHovered && (
                    <>
                      <rect x={pos.x - 50} y={pos.y - 35} width="100" height="22" rx="4" fill="#fdd500" />
                      <text x={pos.x} y={pos.y - 20} textAnchor="middle" fill="#050505" fontSize="10" fontWeight="700">{store.name}</text>
                    </>
                  )}
                </g>
              );
            })}
          </svg>
          <div className="floor-plan-legend">
            <span className="legend-dot" /> Store Location &nbsp;&nbsp;
            <span className="legend-dot atrium" /> Attraction
          </div>
        </div>

        {/* Store Grid */}
        <div className="store-grid-section">
          <div className="store-grid-header">
            <span className="store-count">{filteredStores.length} Results</span>
            <span className="store-level-badge">Level {activeLevel}</span>
          </div>
          <div className="store-grid">
            {filteredStores.map((store: Store) => (
              <motion.div 
                key={store.id} 
                className={`store-grid-card ${hoveredStore === store.id ? 'highlighted' : ''}`}
                onMouseEnter={() => setHoveredStore(store.id)}
                onMouseLeave={() => setHoveredStore(null)}
                {...fadeUp}
              >
                <div className="store-grid-name">{store.name}</div>
                <div className="store-grid-meta">
                  <span className="store-grid-category">{store.category}</span>
                  <span className="store-grid-location">
                    <MapPin size={10} />
                    {store.corridor} Wing
                  </span>
                </div>
              </motion.div>
            ))}
            {filteredStores.length === 0 && (
              <div className="no-results-msg">No stores match your search.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectoryView;

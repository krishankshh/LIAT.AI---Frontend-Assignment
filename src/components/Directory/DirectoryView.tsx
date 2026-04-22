import React, { useState, useMemo } from 'react';
import { Search, MapPin, Building2, Utensils, Star, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Map stores to specific "Blocks" on the floor plan
  // Coordinates are designed to align with the SVG paths below
  const storeBlocks: Record<string, { x: number; y: number; w: number; h: number }> = {
    'n100': { x: 340, y: 60, w: 120, h: 50 },  // Nordstrom (North)
    'n102': { x: 260, y: 60, w: 70, h: 40 },   // Zara
    'n103': { x: 470, y: 60, w: 70, h: 40 },   // H&M
    'n104': { x: 550, y: 60, w: 40, h: 40 },   // Peloton
    'n201': { x: 300, y: 60, w: 40, h: 40 },   // Nike (L2)
    'n202': { x: 470, y: 60, w: 40, h: 40 },   // Cheesecake Factory (L2)
    'n203': { x: 350, y: 60, w: 40, h: 40 },   // Uniqlo (L2)
    'n301': { x: 400, y: 60, w: 40, h: 40 },   // Shake Shack (L3)
    's100': { x: 340, y: 390, w: 120, h: 50 }, // Macy's (South)
    's101': { x: 260, y: 400, w: 70, h: 40 },  // Lululemon
    's102': { x: 470, y: 400, w: 70, h: 40 },  // LEGO
    's103': { x: 550, y: 400, w: 40, h: 40 },  // Tesla
    's201': { x: 300, y: 400, w: 40, h: 40 },  // AE (L2)
    'e100': { x: 670, y: 180, w: 50, h: 140 }, // SEA LIFE (East)
    'e101': { x: 650, y: 120, w: 40, h: 50 },  // Rainforest Cafe
    'e201': { x: 650, y: 330, w: 40, h: 50 },  // Sephora (L2)
    'w101': { x: 80, y: 180, w: 50, h: 140 },  // Apple (West)
    'w102': { x: 110, y: 120, w: 40, h: 50 },  // Hollister
    'w103': { x: 110, y: 330, w: 40, h: 50 },  // Microsoft
    'w104': { x: 110, y: 390, w: 40, h: 50 },  // Warby Parker
    'c100': { x: 250, y: 170, w: 300, h: 160 },// Nickelodeon Universe
  };

  return (
    <div className="directory-page">
      {/* Search & Header */}
      <div className="directory-header-bar">
        <div className="directory-header-left">
          <h1 className="directory-title">Mall Directory</h1>
          <p className="directory-desc">Interactive architectural plan of Mall of America.</p>
        </div>
        <div className="directory-search-box">
          <Search size={18} className="directory-search-icon" />
          <input 
            type="text"
            className="directory-search-input"
            placeholder="Find a store, restaurant, or attraction..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Levels & Filters */}
      <div className="directory-filters-bar scrollbar-hide">
        <div className="filter-group">
          <span className="filter-label">Levels</span>
          <div className="filter-pills">
            {moaData.levels.map((level) => (
              <button
                key={level}
                className={`filter-pill ${activeLevel === level ? 'active-level' : ''}`}
                onClick={() => setActiveLevel(level)}
              >
                Floor {level}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <span className="filter-label">Filter By</span>
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
            <button
              className={`filter-pill leasing-pill ${activeCategory === 'Leasing' ? 'active-leasing' : ''}`}
              onClick={() => setActiveCategory('Leasing')}
              style={{ border: '1px solid rgba(253, 213, 0, 0.4)' }}
            >
              Leasing Opportunities
            </button>
          </div>
        </div>
      </div>

      <div className="directory-body">
        {/* Interactive SVG Map */}
        <div className="map-view-container">
          <div className="map-canvas-wrapper">
            <svg viewBox="0 0 800 500" className="architectural-map-svg">
              <defs>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.5" />
                </filter>
              </defs>

              {/* Mall Layout Foundations */}
              {/* Central Corridor Loop */}
              <rect x="210" y="140" width="380" height="220" rx="10" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="40" />
              
              {/* Wing Backdrops */}
              <rect x="220" y="50" width="360" height="70" fill="rgba(255,255,255,0.02)" rx="5" />
              <rect x="220" y="380" width="360" height="70" fill="rgba(255,255,255,0.02)" rx="5" />
              <rect x="70" y="140" width="70" height="220" fill="rgba(255,255,255,0.02)" rx="5" />
              <rect x="660" y="140" width="70" height="220" fill="rgba(255,255,255,0.02)" rx="5" />

              {/* The Rotunda (East Atrium) */}
              <motion.g
                onMouseEnter={() => setHoveredStore('rotunda')}
                onMouseLeave={() => setHoveredStore(null)}
                style={{ cursor: 'pointer' }}
              >
                <path 
                  d="M600,180 Q640,180 640,250 Q640,320 600,320" 
                  fill="rgba(253, 213, 0, 0.05)" 
                  stroke="#fdd500" 
                  strokeWidth="1" 
                  strokeDasharray="4 2"
                />
                <text x="615" y="255" textAnchor="middle" fill="#fdd500" fontSize="7" fontWeight="800" transform="rotate(90, 615, 255)">ROTUNDA</text>
              </motion.g>

              {/* The Executive Center (Level 4 - Proxy on Level 1/2/3) */}
              <motion.rect 
                x="300" y="20" width="200" height="20" rx="4"
                fill="rgba(255,255,255,0.03)"
                stroke="rgba(255,255,255,0.1)"
                onMouseEnter={() => setHoveredStore('exec-center')}
                onMouseLeave={() => setHoveredStore(null)}
                style={{ cursor: 'pointer' }}
              />
              <text x="400" y="33" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6" fontWeight="700">THE EXECUTIVE CENTER (LVL 4)</text>

              {/* Nickelodeon Universe (Center Atrium) */}
              <motion.rect 
                x="250" y="170" width="300" height="160" rx="20" 
                fill={hoveredStore === 'nickelodeon' ? 'rgba(253, 213, 0, 0.15)' : 'rgba(253, 213, 0, 0.05)'} 
                stroke="rgba(253, 213, 0, 0.2)" 
                strokeWidth="1.5"
                onMouseEnter={() => setHoveredStore('nickelodeon')}
                onMouseLeave={() => setHoveredStore(null)}
                style={{ cursor: 'pointer', transition: '0.3s' }}
              />
              <text x="400" y="255" textAnchor="middle" fill="rgba(253, 213, 0, 0.4)" fontSize="10" fontWeight="900" letterSpacing="0.3em" style={{ pointerEvents: 'none' }}>NICKELODEON UNIVERSE</text>

              {/* Available Units (Leasing Mode) */}
              {activeCategory === 'Leasing' && (
                <g>
                  <rect x="230" y="80" width="20" height="30" fill="#fdd500" opacity="0.6" stroke="#fff" strokeWidth="1" />
                  <rect x="560" y="390" width="30" height="30" fill="#fdd500" opacity="0.6" stroke="#fff" strokeWidth="1" />
                  <rect x="670" y="340" width="20" height="40" fill="#fdd500" opacity="0.6" stroke="#fff" strokeWidth="1" />
                </g>
              )}

              {/* Render Store Blocks Instead of Points */}
              {filteredStores.map((store: Store) => {
                const block = storeBlocks[store.pathId];
                if (!block) return null;
                const isHovered = hoveredStore === store.id;

                return (
                  <motion.g 
                    key={store.id}
                    onMouseEnter={() => setHoveredStore(store.id)}
                    onMouseLeave={() => setHoveredStore(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* The Store Unit Rectangle */}
                    <motion.rect
                      x={block.x}
                      y={block.y}
                      width={block.w}
                      height={block.h}
                      rx={4}
                      fill={isHovered ? '#fdd500' : 'rgba(255, 255, 255, 0.08)'}
                      stroke={isHovered ? '#fff' : 'rgba(255, 255, 255, 0.15)'}
                      strokeWidth={isHovered ? 2 : 1}
                      initial={false}
                      animate={{ 
                        scale: isHovered ? 1.05 : 1,
                        fill: isHovered ? '#fdd500' : 'rgba(255, 255, 255, 0.08)'
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    />
                    
                    {/* Hover Label */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.foreignObject 
                          x={block.x + block.w / 2 - 75} 
                          y={block.y - 45} 
                          width="150" 
                          height="40"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                        >
                          <div className="map-block-tooltip">
                            <div className="tooltip-title">{store.name}</div>
                            <div className="tooltip-subtitle">{store.category}</div>
                          </div>
                        </motion.foreignObject>
                      )}
                    </AnimatePresence>
                  </motion.g>
                );
              })}

              {/* Compass / Wing Indicators */}
              <g opacity="0.3" fontSize="9" fontWeight="800" letterSpacing="0.2em" fill="white">
                <text x="400" y="30" textAnchor="middle">NORTH</text>
                <text x="400" y="485" textAnchor="middle">SOUTH</text>
                <text x="780" y="250" textAnchor="middle" transform="rotate(90, 780, 250)">EAST</text>
                <text x="20" y="250" textAnchor="middle" transform="rotate(-90, 20, 250)">WEST</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Store Grid Results */}
        <div className="store-results-container">
          <div className="results-meta">
            <span className="results-badge">{filteredStores.length} Matching Results</span>
          </div>
          
          <div className="store-results-grid">
            {filteredStores.map((store: Store) => (
              <motion.div 
                key={store.id} 
                className={`store-entry-card ${hoveredStore === store.id ? 'active' : ''}`}
                onMouseEnter={() => setHoveredStore(store.id)}
                onMouseLeave={() => setHoveredStore(null)}
                {...fadeUp}
              >
                <div className="entry-icon">
                  {store.category === 'Dining' ? <Utensils size={18} /> : 
                   store.category === 'Attractions' ? <Star size={18} /> : <Building2 size={18} />}
                </div>
                <div className="entry-content">
                  <h3 className="entry-name">{store.name}</h3>
                  <div className="entry-details">
                    <span className="entry-cat">{store.category}</span>
                    <span className="entry-sep">•</span>
                    <span className="entry-loc">{store.corridor} Wing, Floor {store.level}</span>
                  </div>
                </div>
                <div className="entry-action">
                  <MapPin size={16} />
                </div>
              </motion.div>
            ))}
            {filteredStores.length === 0 && (
              <div className="no-results-view">
                <p>No results found for your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectoryView;

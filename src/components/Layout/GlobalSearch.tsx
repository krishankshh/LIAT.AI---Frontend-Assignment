import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, MapPin, Layout, Building2, Store } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { moaData } from '../../data';
import './GlobalSearch.css';

interface GlobalSearchProps {
  className?: string;
  isBusinessMode?: boolean;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ className = '', isBusinessMode = false }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Pre-defined deck pages for search index
  const pagesIndex = [
    { name: 'Retail Environment', path: '/retail', icon: <Store size={16} /> },
    { name: 'Luxury & Prestige', path: '/luxury', icon: <Store size={16} /> },
    { name: 'Dining Portfolio', path: '/dining', icon: <Store size={16} /> },
    { name: 'Attractions & Entertainment', path: '/attractions', icon: <Layout size={16} /> },
    { name: 'Interactive Directory', path: '/directory', icon: <MapPin size={16} /> },
    { name: 'Brand Sponsorships', path: '/business/sponsorship', icon: <Building2 size={16} /> },
    { name: 'Leasing Opportunities', path: '/business/leasing', icon: <Building2 size={16} /> },
    { name: 'The Rotunda Venue', path: '/business/venue', icon: <Layout size={16} /> },
    { name: 'Platform & Events', path: isBusinessMode ? '/business/events' : '/events', icon: <Layout size={16} /> },
  ];

  // Quick options for empty state
  const quickOptions = [
    pagesIndex[0], // Retail
    pagesIndex[2], // Dining
    pagesIndex[4], // Directory
    pagesIndex[6], // Leasing
  ];

  // Derived filtered results
  const lowerQuery = query.toLowerCase();
  
  const filteredPages = query.length > 0 
    ? pagesIndex.filter(p => p.name.toLowerCase().includes(lowerQuery))
    : [];

  const filteredDirectory = query.length > 0
    ? moaData.directory.filter(s => s.name.toLowerCase().includes(lowerQuery) || s.category.toLowerCase().includes(lowerQuery)).slice(0, 5) // Limit to top 5
    : [];

  const hasResults = filteredPages.length > 0 || filteredDirectory.length > 0;

  const handleSelect = (path: string) => {
    navigate(path);
    setIsFocused(false);
    setQuery('');
  };

  const handleDirectorySearch = () => {
    navigate(`/directory?q=${encodeURIComponent(query)}`);
    setIsFocused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (query.length > 0) {
        handleDirectorySearch();
      }
    }
  };

  return (
    <div className={`global-search-container ${className}`} ref={containerRef}>
      <div className={`global-search-input-wrapper ${isFocused ? 'focused' : ''}`}>
        <Search size={16} className="global-search-icon" />
        <input
          type="text"
          placeholder="Search deck, brands..."
          className="global-search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
        />
        {query && (
          <button className="global-search-clear" onClick={() => setQuery('')}>
            <X size={14} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isFocused && (
          <motion.div
            className="global-search-dropdown"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {query.length === 0 ? (
              <div className="search-section">
                <div className="search-section-title">Quick Navigation</div>
                {quickOptions.map(option => (
                  <button key={option.path} className="search-result-item" onClick={() => handleSelect(option.path)}>
                    <span className="result-icon">{option.icon}</span>
                    <span className="result-name">{option.name}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="search-results-scrollable">
                {hasResults ? (
                  <>
                    {filteredPages.length > 0 && (
                      <div className="search-section">
                        <div className="search-section-title">Deck Pages</div>
                        {filteredPages.map(page => (
                          <button key={page.path} className="search-result-item" onClick={() => handleSelect(page.path)}>
                            <span className="result-icon">{page.icon}</span>
                            <span className="result-name">{page.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {filteredDirectory.length > 0 && (
                      <div className="search-section">
                        <div className="search-section-title">Directory Matches</div>
                        {filteredDirectory.map(store => (
                          <button key={store.id} className="search-result-item directory-result" onClick={() => handleSelect(`/directory?q=${encodeURIComponent(store.name)}`)}>
                            <div className="result-icon directory"><MapPin size={14} /></div>
                            <div className="result-details">
                              <span className="result-name">{store.name}</span>
                              <span className="result-cat">{store.category} &middot; Level {store.level}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="search-no-results">
                    <Search size={24} className="no-results-icon" />
                    <p>No matches for "{query}"</p>
                    <button className="search-fallback-btn" onClick={handleDirectorySearch}>
                      Search full directory
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

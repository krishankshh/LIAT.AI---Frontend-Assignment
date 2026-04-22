import React, { useState, useMemo } from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { moaData } from '../../data';
import { Store } from '../../types';
import DirectoryHeader from './DirectoryHeader';
import './DirectoryView.css';

const DirectoryView: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLevel, setActiveLevel] = useState(1);

  const filteredStores = useMemo(() => {
    return moaData.directory.filter((store: Store) => {
      const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          store.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || store.category === activeCategory;
      const matchesLevel = store.level === activeLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, activeCategory, activeLevel]);

  return (
    <div className="directory-container">
      <DirectoryHeader />
      <main className="directory-main">
        <aside className="directory-sidebar">
          <div className="search-container">
            <div className="search-input-wrapper">
              <Search className="search-icon" size={18} />
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search stores, dining..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="store-list no-scrollbar">
            {filteredStores.map((store: Store) => (
              <div key={store.id} className="store-card group">
                <div className="store-name">{store.name}</div>
                <div className="store-category">{store.category}</div>
                <div className="store-location">
                  <MapPin size={12} />
                  Level {store.level} • {store.corridor} Wing
                </div>
              </div>
            ))}
          </div>
        </aside>
        
        <div className="map-viewport">
           <div className="map-placeholder">
              <div className="map-engine-text">
                MAP_ENGINE_V1.1
              </div>
           </div>
           
           <button 
              onClick={() => navigate('/')}
              className="return-btn group"
           >
             <ArrowRight className="rotate-180" size={16} />
             Return to Entry
           </button>
        </div>
      </main>
    </div>
  );
};

export default DirectoryView;

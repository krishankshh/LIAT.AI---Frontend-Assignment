import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBag, Star, Utensils, 
  Ticket, Calendar, Building2, Map,
  Menu, X, Megaphone, Mic, ArrowLeftRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [zoomState, setZoomState] = useState<{ active: boolean; color: string } | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  /** Determine which "mode" the sidebar is in based on the current route */
  const isBusinessMode = location.pathname.startsWith('/business');

  const mallNavItems = [
    { name: 'Overview', path: '/overview', icon: <LayoutDashboard size={18} /> },
    { name: 'Retail', path: '/retail', icon: <ShoppingBag size={18} /> },
    { name: 'Luxury', path: '/luxury', icon: <Star size={18} /> },
    { name: 'Dining', path: '/dining', icon: <Utensils size={18} /> },
    { name: 'Attractions', path: '/attractions', icon: <Ticket size={18} /> },
    { name: 'Events', path: '/events', icon: <Calendar size={18} /> },
    { name: 'Directory + Map', path: '/directory', icon: <Map size={18} /> },
  ];

  const businessNavItems = [
    { name: 'Hub', path: '/business', icon: <LayoutDashboard size={18} /> },
    { name: 'Sponsorship', path: '/business/sponsorship', icon: <Megaphone size={18} /> },
    { name: 'The Rotunda', path: '/business/venue', icon: <Mic size={18} /> },
    { name: 'Events', path: '/business/events', icon: <Calendar size={18} /> },
    { name: 'Leasing Paths', path: '/business/leasing', icon: <Building2 size={18} /> },
    { name: 'Directory + Map', path: '/directory', icon: <Map size={18} /> },
  ];

  const navItems = isBusinessMode ? businessNavItems : mallNavItems;

  const handleModeSwitch = () => {
    // Trigger cinematic zoom transition
    setZoomState({ 
      active: true, 
      color: isBusinessMode ? 'white' : '#fdd500' // Target mode's primary color
    });

    setTimeout(() => {
      navigate(isBusinessMode ? '/overview' : '/business');
      // Reset zoom after transition
      setTimeout(() => setZoomState(null), 500);
    }, 1000);
  };

  const showSidebar = isDesktop || isOpen;

  return (
    <>
      {/* Cinematic Zoom Overlay */}
      <AnimatePresence>
        {zoomState?.active && (
          <motion.div 
            className="sidebar-zoom-overlay"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 100, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
            style={{ 
              backgroundColor: zoomState.color,
              position: 'fixed',
              left: isDesktop ? '140px' : '50%', // Originates from sidebar area
              bottom: '120px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              zIndex: 9999,
              pointerEvents: 'none'
            }}
          />
        )}
      </AnimatePresence>

      {!isDesktop && (
        <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      )}

      <AnimatePresence>
        {showSidebar && (
          <motion.aside 
            initial={!isDesktop ? { x: -300 } : false}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="sidebar-container"
          >
            <div className="sidebar-brand" onClick={() => navigate('/')} role="button" tabIndex={0}>
              <img src="/moa_logo.png" alt="Mall of America" className="brand-logo-img" />
            </div>

            <div className={`sidebar-mode-badge ${isBusinessMode ? 'business' : 'mall'}`}>
              {isBusinessMode ? 'Business Portal' : 'Mall Experience'}
            </div>

            <nav className="sidebar-nav">
              {navItems.map((item) => (
                <NavLink 
                  key={item.name}
                  to={item.path}
                  end={item.path === '/business'}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.name}</span>
                </NavLink>
              ))}
            </nav>

            <div className="sidebar-footer">
              <button
                className="mode-switch-btn"
                onClick={handleModeSwitch}
                disabled={zoomState?.active}
              >
                <ArrowLeftRight size={14} />
                {isBusinessMode ? 'Mall Experience' : 'Business Opportunities'}
              </button>

              <button
                className="quick-action-btn"
                onClick={() => navigate(isBusinessMode ? '/business/inquiry' : '/inquiry')}
              >
                {isBusinessMode ? 'Contact Partnerships' : 'Request a Tour'}
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && !isDesktop && (
          <motion.div 
            className="sidebar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;

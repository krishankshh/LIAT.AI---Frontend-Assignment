import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBag, Star, Utensils, 
  Ticket, Calendar, Building2, Map, Compass,
  Menu, X, Megaphone, Mic, ArrowLeftRight, Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DiscoveryHub from './DiscoveryHub';
import { GlobalSearch } from './GlobalSearch';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [discoveryOpen, setDiscoveryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      setScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDiscoveryOpen(false);
  }, [location.pathname]);

  const isBusinessMode = location.pathname.startsWith('/business');

  const mallNavItems = [
    { name: 'Overview', path: '/overview', icon: <LayoutDashboard size={16} /> },
    { name: 'Retail', path: '/retail', icon: <ShoppingBag size={16} /> },
    { name: 'Luxury', path: '/luxury', icon: <Star size={16} /> },
    { name: 'Dining', path: '/dining', icon: <Utensils size={16} /> },
    { name: 'Attractions', path: '/attractions', icon: <Ticket size={16} /> },
    { name: 'Events', path: '/events', icon: <Calendar size={16} /> },
  ];

  const businessNavItems = [
    { name: 'Hub', path: '/business', icon: <LayoutDashboard size={16} /> },
    { name: 'Sponsorship', path: '/business/sponsorship', icon: <Megaphone size={16} /> },
    { name: 'The Rotunda', path: '/business/venue', icon: <Mic size={16} /> },
    { name: 'Events', path: '/business/events', icon: <Calendar size={16} /> },
    { name: 'Leasing', path: '/business/leasing', icon: <Building2 size={16} /> },
  ];

  const navItems = isBusinessMode ? businessNavItems : mallNavItems;

  const handleModeSwitch = useCallback(() => {
    navigate(isBusinessMode ? '/overview' : '/business');
  }, [isBusinessMode, navigate]);

  const tickerStats = [
    '40M+ Annual Visitors',
    '520+ Global Brands',
    '$2B Economic Impact',
    '5.6M Sq Ft',
    '96% Occupancy',
    '400+ Events Per Year',
  ];

  return (
    <>
      {/* Glassmorphism Top Navbar */}
      <motion.nav
        className={`glass-navbar-v3 ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: navVisible ? 0 : -140 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Row 1: Main Navigation */}
        <div className="navbar-row-main">
          <div className="nav-row-inner">
            <div className="navbar-brand-v3" onClick={() => navigate('/')}>
              <div className="logo-bg-block">
                <img src="/moa_logo.png" alt="Mall of America" className="navbar-logo-v3" />
              </div>
            </div>

            <div className="navbar-links-v3">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === '/business'}
                  className={({ isActive }) => `nav-link-v3 ${isActive ? 'active' : ''}`}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="navbar-actions-v3">
              <GlobalSearch className="nav-search-bar-integrated" isBusinessMode={isBusinessMode} />
              <button className="nav-primary-cta" onClick={() => navigate(isBusinessMode ? '/business/inquiry' : '/inquiry')}>
                {isBusinessMode ? 'Contact Sales' : 'Request a Tour'}
              </button>
              <button className="mobile-toggle-v3" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Black Featured Bar / Stats Ticker */}
        <div className="navbar-row-featured">
          <div className="nav-row-inner featured-scroll">
            <div className="ticker-track" style={{ display: 'flex', gap: '3rem', animation: 'ticker-scroll 30s linear infinite' }}>
              {[...tickerStats, ...tickerStats].map((stat, i) => (
                <span key={i} className="featured-link" style={{ fontSize: '0.6rem', color: i % 2 === 0 ? 'var(--moa-yellow)' : '#999' }}>
                  {stat}
                  <span style={{ marginLeft: '1.5rem', opacity: 0.3 }}>•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="mobile-menu-header">
                <img src="/moa_logo.png" alt="Mall of America" className="mobile-logo" />
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="mobile-mode-badge">
                {isBusinessMode ? 'Business Portal' : 'Mall Experience'}
              </div>

              <nav className="mobile-nav">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    end={item.path === '/business'}
                    className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                  >
                    <span className="mobile-link-icon">{item.icon}</span>
                    {item.name}
                  </NavLink>
                ))}
                <NavLink to="/directory" className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>
                  <span className="mobile-link-icon"><Map size={16} /></span>
                  Directory + Map
                </NavLink>
              </nav>

              <div className="mobile-footer">
                <button className="mobile-mode-switch" onClick={handleModeSwitch}>
                  <ArrowLeftRight size={14} />
                  Switch to {isBusinessMode ? 'Mall Experience' : 'Business Portal'}
                </button>
                <button
                  className="mobile-cta"
                  onClick={() => navigate(isBusinessMode ? '/business/inquiry' : '/inquiry')}
                >
                  {isBusinessMode ? 'Contact Partnerships' : 'Request a Tour'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Discovery Hub Overlay */}
      <DiscoveryHub isOpen={discoveryOpen} onClose={() => setDiscoveryOpen(false)} />
    </>
  );
};

export default Sidebar;

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBag, Star, Utensils, 
  Ticket, Calendar, Building2, Map,
  Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
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

  const navItems = [
    { name: 'Overview', path: '/overview', icon: <LayoutDashboard size={18} /> },
    { name: 'Retail', path: '/retail', icon: <ShoppingBag size={18} /> },
    { name: 'Luxury', path: '/luxury', icon: <Star size={18} /> },
    { name: 'Dining', path: '/dining', icon: <Utensils size={18} /> },
    { name: 'Attractions', path: '/attractions', icon: <Ticket size={18} /> },
    { name: 'Events', path: '/events', icon: <Calendar size={18} /> },
    { name: 'Directory + Map', path: '/directory', icon: <Map size={18} /> },
    { name: 'Leasing', path: '/leasing', icon: <Building2 size={18} /> },
  ];

  const showSidebar = isDesktop || isOpen;

  return (
    <>
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

            <nav className="sidebar-nav">
              {navItems.map((item) => (
                <NavLink 
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.name}</span>
                </NavLink>
              ))}
            </nav>

            <div className="sidebar-footer">
              <div className="contact-status">
                <div className="status-dot" />
                Live Support Online
              </div>
              <a href="mailto:lease.inquiry@moa.net" className="quick-action-btn">
                Request a Tour
              </a>
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

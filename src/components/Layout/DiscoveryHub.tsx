import React, { useEffect, useRef } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  X, LayoutDashboard, ShoppingBag, Star, Utensils, 
  Ticket, Calendar, Megaphone, Mic, Building2, Map 
} from 'lucide-react';
import './DiscoveryHub.css';

interface DiscoveryHubProps {
  isOpen: boolean;
  onClose: () => void;
}

const mallPortals = [
  { 
    name: 'Property Overview', 
    path: '/overview', 
    icon: <LayoutDashboard size={20} />,
    tagline: 'Scale. Reach. Impact.',
    video: '/videos/portal_retail.mp4',
    fallback: '/moa_overview_hero.webp',
  },
  { 
    name: 'Retail', 
    path: '/retail', 
    icon: <ShoppingBag size={20} />,
    tagline: '520+ Global Brands',
    video: '/videos/portal_retail.mp4',
    fallback: '/retail_hero.webp',
  },
  { 
    name: 'Luxury', 
    path: '/luxury', 
    icon: <Star size={20} />,
    tagline: 'Where Brands Become Icons',
    video: '/videos/portal_luxury.mp4',
    fallback: '/luxury_hero.webp',
  },
  { 
    name: 'Dining', 
    path: '/dining', 
    icon: <Utensils size={20} />,
    tagline: 'A Culinary Destination',
    video: '/videos/portal_dining.mp4',
    fallback: '/dining_hero.webp',
  },
  { 
    name: 'Attractions', 
    path: '/attractions', 
    icon: <Ticket size={20} />,
    tagline: 'A World of Experiences',
    video: '/videos/portal_attractions.mp4',
    fallback: '/attractions_hero.webp',
  },
  { 
    name: 'Events', 
    path: '/events', 
    icon: <Calendar size={20} />,
    tagline: '400+ Events Per Year',
    video: '/videos/portal_events.mp4',
    fallback: '/events_hero.webp',
  },
];

const businessPortals = [
  { 
    name: 'Sponsorship', 
    path: '/business/sponsorship', 
    icon: <Megaphone size={20} />,
    tagline: 'Own The Moment',
    video: '/videos/portal_sponsorship.mp4',
    fallback: '/sponsorship_hero.webp',
  },
  { 
    name: 'The Rotunda', 
    path: '/business/venue', 
    icon: <Mic size={20} />,
    tagline: '5,000-Capacity Venue',
    video: '/videos/portal_venue.mp4',
    fallback: '/venue_rotunda_hero.webp',
  },
  { 
    name: 'Leasing', 
    path: '/business/leasing', 
    icon: <Building2 size={20} />,
    tagline: 'Your Space Awaits',
    video: '/videos/portal_leasing.mp4',
    fallback: '/leasing_hero.webp',
  },
  { 
    name: 'Directory + Map', 
    path: '/directory', 
    icon: <Map size={20} />,
    tagline: 'Interactive Floor Plan',
    video: null,
    fallback: null,
  },
];

const DiscoveryHub: React.FC<DiscoveryHubProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleNavigate = (path: string) => {
    onClose();
    setTimeout(() => navigate(path), 200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          className="discovery-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="discovery-bg" />

          {/* Close Button */}
          <motion.button
            className="discovery-close"
            onClick={onClose}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.2 }}
          >
            <X size={24} />
          </motion.button>

          {/* Header */}
          <motion.div
            className="discovery-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <h2 className="discovery-title">Explore the <span>Deck</span></h2>
            <p className="discovery-subtitle">Choose any section to dive in. Your journey, your pace.</p>
          </motion.div>

          {/* Portal Grid */}
          <div className="discovery-content">
            {/* Mall Experience Column */}
            <div className="discovery-column">
              <div className="column-label">Mall Experience</div>
              <div className="portal-grid">
                {mallPortals.map((portal, i) => (
                  <motion.div
                    key={portal.name}
                    className="portal-card"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => handleNavigate(portal.path)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="portal-media">
                      {portal.fallback && (
                        <img 
                          src={portal.fallback} 
                          alt={portal.name} 
                          className="portal-fallback"
                          loading="lazy"
                        />
                      )}
                      {portal.video && (
                        <video 
                          src={portal.video} 
                          muted 
                          loop 
                          playsInline 
                          className="portal-video"
                          onMouseEnter={(e) => (e.target as HTMLVideoElement).play().catch(() => {})}
                          onMouseLeave={(e) => { (e.target as HTMLVideoElement).pause(); (e.target as HTMLVideoElement).currentTime = 0; }}
                        />
                      )}
                      <div className="portal-media-overlay" />
                    </div>
                    <div className="portal-info">
                      <div className="portal-icon">{portal.icon}</div>
                      <div>
                        <div className="portal-name">{portal.name}</div>
                        <div className="portal-tagline">{portal.tagline}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Business Portal Column */}
            <div className="discovery-column">
              <div className="column-label">Business Portal</div>
              <div className="portal-grid">
                {businessPortals.map((portal, i) => (
                  <motion.div
                    key={portal.name}
                    className="portal-card business"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => handleNavigate(portal.path)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="portal-media">
                      {portal.fallback && (
                        <img 
                          src={portal.fallback} 
                          alt={portal.name} 
                          className="portal-fallback"
                          loading="lazy"
                        />
                      )}
                      {portal.video && (
                        <video 
                          src={portal.video} 
                          muted 
                          loop 
                          playsInline 
                          className="portal-video"
                          onMouseEnter={(e) => (e.target as HTMLVideoElement).play().catch(() => {})}
                          onMouseLeave={(e) => { (e.target as HTMLVideoElement).pause(); (e.target as HTMLVideoElement).currentTime = 0; }}
                        />
                      )}
                      <div className="portal-media-overlay" />
                    </div>
                    <div className="portal-info">
                      <div className="portal-icon">{portal.icon}</div>
                      <div>
                        <div className="portal-name">{portal.name}</div>
                        <div className="portal-tagline">{portal.tagline}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiscoveryHub;

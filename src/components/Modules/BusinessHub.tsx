import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Megaphone, Building2, Mic, TrendingUp, ArrowRight,
  ShoppingBag, Star, Utensils, Ticket, Calendar, Map,
  Lock, Globe, FileText, Code
} from 'lucide-react';
import './ModuleSlide.css';
import './BusinessHub.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const BusinessHub: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { value: '40M+', label: 'Annual Visitors' },
    { value: '$2B', label: 'Economic Impact' },
    { value: '96%', label: 'Occupancy Rate' },
    { value: '520+', label: 'Brand Partners' },
  ];

  const opportunities = [
    {
      icon: <Megaphone size={28} />,
      title: 'Sponsorship & Activations',
      description: 'Partnership tiers from presenting sponsors to pop-up activations. Reach 40M+ visitors with immersive brand experiences.',
      path: '/business/sponsorship',
      highlight: '4 Partnership Tiers',
    },
    {
      icon: <Mic size={28} />,
      title: 'The Rotunda',
      description: 'A 5,000-capacity performance venue with world-class production capabilities. From concerts to corporate keynotes.',
      path: '/business/venue',
      highlight: '200+ Events/Year',
    },
    {
      icon: <Building2 size={28} />,
      title: 'Leasing Paths',
      description: 'Flagship anchors to pop-up spaces. Multiple leasing paths tailored for luxury, retail, F&B, and seasonal concepts.',
      path: '/business/leasing',
      highlight: '5.6M Sq Ft',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Events & Platform',
      description: '400+ events per year with full production support. Brand activations, concerts, corporate summits, and more.',
      path: '/business/events',
      highlight: '1M+ Event Attendees',
    },
  ];

  /* Deck Overview — all modules from both portals */
  const deckModules = [
    { name: 'Property Overview', desc: 'Scale, location, and visitor demographics', path: '/overview', icon: <Globe size={18} /> },
    { name: 'Retail', desc: 'The retail environment and key tenants', path: '/retail', icon: <ShoppingBag size={18} /> },
    { name: 'Luxury', desc: 'Premium positioning and brand elevation', path: '/luxury', icon: <Star size={18} /> },
    { name: 'Dining & Lifestyle', desc: 'F&B as a destination draw', path: '/dining', icon: <Utensils size={18} /> },
    { name: 'Attractions', desc: 'Entertainment and experiences', path: '/attractions', icon: <Ticket size={18} /> },
    { name: 'Events', desc: 'Hosting, production, and booking', path: '/business/events', icon: <Calendar size={18} /> },
    { name: 'Sponsorship', desc: 'Tiers, audience data, and activations', path: '/business/sponsorship', icon: <Megaphone size={18} /> },
    { name: 'Directory + Map', desc: 'Interactive SVG floor plan', path: '/directory', icon: <Map size={18} /> },
  ];

  const resourceVault = [
    {
      icon: <Globe size={24} />,
      title: '3D Virtual Tour',
      description: 'Explore every corner of the property in immersive 3D — from anchor wings to the Rotunda stage.',
    },
    {
      icon: <FileText size={24} />,
      title: 'Tenant Design Guidelines',
      description: 'Brand standards, signage specifications, and build-out templates for new and existing tenants.',
    },
    {
      icon: <Code size={24} />,
      title: 'Activation API',
      description: 'Integrate your digital campaigns with MOA\'s signage network, social channels, and event calendar.',
    },
  ];

  return (
    <div className="module-slide">
      <div className="module-hero">
        <div className="module-hero-bg" style={{ backgroundImage: 'url(/sponsorship_hero.png)' }} />
        <div className="module-hero-overlay" />
        <motion.div className="module-hero-content" {...fadeUp}>
          <span className="module-eyebrow">Business Partnerships</span>
          <h1 className="module-title">Partner <br /><span style={{ color: '#fdd500' }}>With Us.</span></h1>
          <p className="module-subtitle">From sponsorship to leasing, explore how your brand can thrive inside America's most-visited destination.</p>
        </motion.div>
      </div>

      <div className="module-stats">
        {stats.map((s) => (
          <motion.div key={s.label} className="module-stat" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="module-stat-value">{s.value}</div>
            <div className="module-stat-label">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Opportunity Cards */}
      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>Explore <span style={{ color: '#fdd500' }}>Opportunities</span></motion.h2>
        <div className="hub-opportunities-grid">
          {opportunities.map((opp, i) => (
            <motion.div
              key={opp.title}
              className="hub-opportunity-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => navigate(opp.path)}
              role="button"
              tabIndex={0}
            >
              <div className="hub-card-top">
                <div className="hub-card-icon">{opp.icon}</div>
                <span className="hub-card-highlight">{opp.highlight}</span>
              </div>
              <h3 className="hub-card-title">{opp.title}</h3>
              <p className="hub-card-desc">{opp.description}</p>
              <div className="hub-card-action">
                Explore <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deck Overview — Non-Linear Navigation */}
      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>Deck <span style={{ color: '#fdd500' }}>Overview</span></motion.h2>
        <motion.p {...fadeUp} style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'sans-serif', fontSize: '0.9rem', marginBottom: '2rem', marginTop: '-1.5rem' }}>
          Jump directly to any section of the sales deck.
        </motion.p>
        <div className="deck-overview-grid">
          {deckModules.map((mod, i) => (
            <motion.div
              key={mod.name}
              className="deck-overview-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => navigate(mod.path)}
              role="button"
              tabIndex={0}
            >
              <div className="deck-card-icon">{mod.icon}</div>
              <div>
                <div className="deck-card-name">{mod.name}</div>
                <div className="deck-card-desc">{mod.desc}</div>
              </div>
              <ArrowRight size={14} className="deck-card-arrow" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resource Vault — Expandability Signal */}
      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>Resource <span style={{ color: '#fdd500' }}>Vault</span></motion.h2>
        <div className="resource-vault-grid">
          {resourceVault.map((res, i) => (
            <motion.div
              key={res.title}
              className="resource-vault-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="vault-card-lock">
                <Lock size={12} />
                <span>Coming Soon</span>
              </div>
              <div className="vault-card-icon">{res.icon}</div>
              <h3 className="vault-card-title">{res.title}</h3>
              <p className="vault-card-desc">{res.description}</p>
              <div className="vault-shimmer" />
            </motion.div>
          ))}
        </div>
      </section>

      <div className="module-cta">
        <motion.h2 className="module-cta-title" {...fadeUp}>Ready to <span style={{ color: '#fdd500' }}>Start?</span></motion.h2>
        <motion.p className="module-cta-subtitle" {...fadeUp}>Connect with our partnerships team to explore how Mall of America can amplify your brand.</motion.p>
        <motion.button onClick={() => navigate('/inquiry?type=other')} className="module-cta-btn" {...fadeUp}>Contact Partnerships Team</motion.button>
      </div>
    </div>
  );
};

export default BusinessHub;

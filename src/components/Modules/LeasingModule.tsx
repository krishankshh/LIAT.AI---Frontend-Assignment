import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Store, Zap, TrendingUp, Mail } from 'lucide-react';
import './ModuleSlide.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const LeasingModule: React.FC = () => {
  const stats = [
    { value: '96%', label: 'Occupancy Rate' },
    { value: '40M+', label: 'Annual Visitors' },
    { value: '$2B', label: 'Economic Impact' },
    { value: '5.6M', label: 'Sq Ft Total' },
  ];

  const paths = [
    { icon: <Building2 size={24} />, title: 'Flagship & Anchor', text: 'Premium, high-visibility anchor positions with dedicated entrances and custom build-outs for maximum brand expression.' },
    { icon: <Store size={24} />, title: 'In-Line Retail', text: 'Optimally positioned inline spaces, from 800 to 15,000 sq ft, with data-driven tenant placement for cross-sell potential.' },
    { icon: <Zap size={24} />, title: 'Pop-Up & Seasonal', text: 'Flexible short-term spaces for product launches, seasonal campaigns, and direct-to-consumer activations. No long-term commitment required.' },
    { icon: <TrendingUp size={24} />, title: 'F&B Concepts', text: 'From fast-casual to fine dining — curated dining spaces with built-in foot traffic from 40M+ annual visitors.' },
  ];

  return (
    <div className="module-slide">
      <div className="module-hero">
        <div className="module-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)' }} />
        <div className="module-hero-overlay" />
        <motion.div className="module-hero-content" {...fadeUp}>
          <span className="module-eyebrow">Leasing & Partnerships</span>
          <h1 className="module-title">Your Space <br /><span style={{ color: '#fdd500' }}>Awaits.</span></h1>
          <p className="module-subtitle">Join 520+ brands at North America's most-visited retail destination. Multiple leasing paths for every brand size and strategy.</p>
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

      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>Leasing <span style={{ color: '#fdd500' }}>Paths</span></motion.h2>
        <div className="module-grid">
          {paths.map((p) => (
            <motion.div key={p.title} className="module-card" {...fadeUp}>
              <div className="module-card-icon">{p.icon}</div>
              <div className="module-card-title">{p.title}</div>
              <div className="module-card-text">{p.text}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="module-cta">
        <motion.h2 className="module-cta-title" {...fadeUp}>Let's <span style={{ color: '#fdd500' }}>Talk.</span></motion.h2>
        <motion.p className="module-cta-subtitle" {...fadeUp}>Connect with our leasing team to explore available spaces and custom solutions for your brand.</motion.p>
        <motion.div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }} {...fadeUp}>
          <a href="mailto:lease.inquiry@moa.net" className="module-cta-btn">
            <Mail size={16} /> Leasing Inquiry
          </a>
          <a href="mailto:mike.tvrdik@moa.net" className="module-cta-btn" style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
            Sponsorship & Alliances
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default LeasingModule;

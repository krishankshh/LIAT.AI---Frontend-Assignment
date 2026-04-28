import React from 'react';
import { m as motion } from 'framer-motion';
import { ShoppingBag, TrendingUp, Users, MapPin } from 'lucide-react';
import './ModuleSlide.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const RetailModule: React.FC = () => {
  const stats = [
    { value: '520+', label: 'Retail Stores' },
    { value: '96%', label: 'Occupancy Rate' },
    { value: '5.6M', label: 'Sq Ft of Space' },
    { value: '$2B', label: 'Annual Revenue Impact' },
  ];

  const tenants = [
    { name: 'Nordstrom', category: 'Anchor', logo: '/logos/brands/apple.png' }, // Need to use apple for now if nordstrom missing or just path
    { name: "Macy's", category: 'Anchor', logo: '/logos/brands/macys-com-logo.png' },
    { name: 'Nike', category: 'Apparel', logo: '/logos/brands/nike.png' },
    { name: 'Zara', category: 'Apparel', logo: '/logos/brands/zara.png' },
    { name: 'H&M', category: 'Apparel', logo: '/logos/brands/hm.png' },
    { name: 'Uniqlo', category: 'Apparel', logo: '/logos/brands/uniqlo-com-logo.png' },
    { name: 'Apple', category: 'Tech', logo: '/logos/brands/apple.png' },
    { name: 'Microsoft', category: 'Tech', logo: '/logos/brands/microsoft.png' },
    { name: 'Lululemon', category: 'Active', logo: '/logos/brands/lululemon.png' },
    { name: 'American Eagle', category: 'Apparel', logo: '/logos/brands/aeo-inc-com-logo.png' },
    { name: 'Tesla', category: 'Automotive', logo: '/logos/brands/tesla.png' },
    { name: 'Peloton', category: 'Fitness', logo: '/logos/brands/onepeloton-com-logo.png' },
  ];

  const opportunities = [
    {
      icon: <ShoppingBag size={24} />,
      title: 'Flagship Spaces',
      text: 'High-visibility anchor locations and multi-level flagship opportunities in the most-trafficked wings.',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'In-Line Retail',
      text: 'Curated retail spaces for lifestyle brands, emerging boutiques, and global specialty stores.',
    },
    {
      icon: <Users size={24} />,
      title: 'Brand Activations',
      text: 'High-impact pop-ups and immersive brand experiences in our grand central atriums.',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Luxury Collection',
      text: 'Premier positions within our dedicated luxury wing alongside world-renowned fashion houses.',
    },
  ];

  return (
    <div className="module-slide">
      {/* Hero */}
      <div className="module-hero">
        <div
          className="module-hero-bg"
          style={{
            backgroundImage:
              'url(/retail_hero.webp)',
          }}
        />
        <video autoPlay muted loop playsInline className="module-hero-video" poster="/retail_hero.webp" preload="none">
          <source src="/videos/retail_ambient.mp4" type="video/mp4" />
        </video>
        <div className="module-hero-overlay" />
        <motion.div className="module-hero-content" {...fadeUp}>
          <span className="module-eyebrow">The Retail Environment</span>
          <h1 className="module-title">
            520+ Brands. <br />
            <span style={{ color: '#fdd500' }}>One Destination.</span>
          </h1>
          <p className="module-subtitle">
            North America's largest retail ecosystem, anchored by global flagships
            and surrounded by a curated mix of luxury, lifestyle, and emerging brands.
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="module-stats">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            className="module-stat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="module-stat-value">{s.value}</div>
            <div className="module-stat-label">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="module-grid-section">
        <motion.h2 {...fadeUp} className="section-title">Premier Tenant Mix</motion.h2>
        <div className="tenants-grid">
          {tenants.map((t, i) => (
            <motion.div 
              key={t.name}
              className="tenant-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="tenant-logo-wrapper">
                <img src={t.logo} alt={`${t.name} logo`} loading="lazy" className={`tenant-brand-logo ${['apple', 'microsoft', 'tesla', 'nike'].includes(t.name.toLowerCase()) ? 'invert-light' : ''}`} width="120" height="40" />
              </div>
              <div className="tenant-info">
                <span className="tenant-name">{t.name}</span>
                <span className="tenant-cat">{t.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Opportunity Cards */}
      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>
          Leasing <span style={{ color: '#fdd500' }}>Opportunities</span>
        </motion.h2>
        <div className="module-grid">
          {opportunities.map((o) => (
            <motion.div key={o.title} className="module-card" {...fadeUp}>
              <div className="module-card-icon">{o.icon}</div>
              <div className="module-card-title">{o.title}</div>
              <div className="module-card-text">{o.text}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="module-cta">
        <motion.h2 className="module-cta-title" {...fadeUp}>
          Ready to <span style={{ color: '#fdd500' }}>Join?</span>
        </motion.h2>
        <motion.p className="module-cta-subtitle" {...fadeUp}>
          Explore available spaces and connect with our leasing team today.
        </motion.p>
        <motion.a
          href="mailto:lease.inquiry@moa.net"
          className="module-cta-btn"
          {...fadeUp}
        >
          Inquire About Leasing
        </motion.a>
      </div>
    </div>
  );
};

export default RetailModule;

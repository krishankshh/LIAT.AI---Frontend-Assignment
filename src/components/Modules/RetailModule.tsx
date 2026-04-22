import React from 'react';
import { motion } from 'framer-motion';
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
    { name: 'Nordstrom', category: 'Anchor' },
    { name: "Macy's", category: 'Anchor' },
    { name: 'Nike', category: 'Apparel' },
    { name: 'Zara', category: 'Apparel' },
    { name: 'H&M', category: 'Apparel' },
    { name: 'Uniqlo', category: 'Apparel' },
    { name: 'Apple', category: 'Tech' },
    { name: 'Microsoft', category: 'Tech' },
    { name: 'Lululemon', category: 'Active' },
    { name: 'American Eagle', category: 'Apparel' },
    { name: 'Tesla', category: 'Automotive' },
    { name: 'Peloton', category: 'Fitness' },
  ];

  const opportunities = [
    {
      icon: <ShoppingBag size={24} />,
      title: 'Flagship Stores',
      text: 'Premium anchor positions with high-visibility entrances and dedicated foot traffic corridors.',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Pop-Up Retail',
      text: 'Flexible short-term spaces for seasonal launches, brand activations, and direct-to-consumer campaigns.',
    },
    {
      icon: <Users size={24} />,
      title: 'Foot Traffic',
      text: '40M+ annual visitors create unmatched organic discovery for new and established brands alike.',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Strategic Placement',
      text: 'Data-driven tenant placement optimized for cross-sell potential and category synergy.',
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
              'url(/retail_hero.png)',
          }}
        />
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

      {/* Featured Tenants */}
      <section className="module-content" style={{ paddingTop: 0 }}>
        <motion.h2 className="module-section-title" {...fadeUp}>
          Key <span style={{ color: '#fdd500' }}>Tenants</span>
        </motion.h2>
        <div className="module-featured-grid">
          {tenants.map((t) => (
            <motion.div key={t.name} className="featured-item" {...fadeUp}>
              <div className="featured-item-name">{t.name}</div>
              <div className="featured-item-category">{t.category}</div>
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

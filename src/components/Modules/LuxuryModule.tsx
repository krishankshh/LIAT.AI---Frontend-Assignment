import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Award, Crown, Sparkles } from 'lucide-react';
import './ModuleSlide.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const LuxuryModule: React.FC = () => {
  const stats = [
    { value: '50+', label: 'Premium Brands' },
    { value: '$450', label: 'Avg. Transaction' },
    { value: '2.1M', label: 'High-Net-Worth Visitors' },
    { value: '#1', label: 'Luxury Destination Midwest' },
  ];

  const brands = [
    { name: 'Louis Vuitton', category: 'Fashion', logo: '/logos/brands/louisvuitton-com-logo.png' },
    { name: 'Gucci', category: 'Fashion', logo: '/logos/brands/gucci-com-logo.png' },
    { name: 'Burberry', category: 'Fashion', logo: '/logos/brands/burberry-com-logo.png' },
    { name: 'Tiffany & Co.', category: 'Jewelry', logo: '/logos/brands/tiffany-com-logo.png' },
    { name: 'Coach', category: 'Leather Goods', logo: '/logos/brands/coach-com-logo.png' },
    { name: 'Michael Kors', category: 'Fashion', logo: '/logos/brands/michaelkors-com-logo.png' },
    { name: 'Kate Spade', category: 'Fashion', logo: '/logos/brands/katespade-com-logo.png' },
    { name: 'Swarovski', category: 'Jewelry', logo: '/logos/brands/swarovski-com-logo.png' },
  ];

  const features = [
    {
      icon: <Gem size={24} />,
      title: 'Curated Luxury Wing',
      text: 'A dedicated floor section with premium finishes, private shopping suites, and VIP concierge services.',
    },
    {
      icon: <Award size={24} />,
      title: 'Exclusive Events',
      text: 'Private trunk shows, designer previews, and invite-only shopping experiences for top-tier clientele.',
    },
    {
      icon: <Crown size={24} />,
      title: 'VIP Services',
      text: 'Personal shopping, valet, and white-glove delivery — the full luxury retail experience.',
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Brand Elevation',
      text: 'Position alongside the world\'s most recognized luxury houses in the Midwest\'s premier destination.',
    },
  ];

  return (
    <div className="module-slide">
      <div className="module-hero">
        <div
          className="module-hero-bg"
          style={{
            backgroundImage:
              'url(/luxury_hero.png)',
          }}
        />
        <video autoPlay muted loop playsInline className="module-hero-video" poster="/luxury_hero.png" preload="none">
          <source src="/videos/luxury_ambient.mp4" type="video/mp4" />
        </video>
        <div className="module-hero-overlay" />
        <motion.div className="module-hero-content" {...fadeUp}>
          <span className="module-eyebrow">The Luxury Collection</span>
          <h1 className="module-title">
            Sophisticated. <br />
            <span style={{ color: '#fdd500' }}>Exclusive. Rare.</span>
          </h1>
          <p className="module-subtitle">
            A dedicated luxury wing housing the world's most coveted fashion houses 
            and jewelry boutiques in a setting of unparalleled elegance.
          </p>
        </motion.div>
      </div>

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

      <div className="module-grid-section luxury-wing">
        <motion.h2 {...fadeUp} className="section-title">The Luxury Portfolio</motion.h2>
        <div className="tenants-grid">
          {brands.map((b, i) => (
            <motion.div 
              key={b.name}
              className="tenant-card luxury-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="tenant-logo-wrapper">
                <img src={b.logo} alt={b.name} className="tenant-brand-logo invert-light" />
              </div>
              <div className="tenant-info">
                <span className="tenant-name">{b.name}</span>
                <span className="tenant-cat">{b.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>
          The Luxury <span style={{ color: '#fdd500' }}>Experience</span>
        </motion.h2>
        <div className="module-grid">
          {features.map((f) => (
            <motion.div key={f.title} className="module-card" {...fadeUp}>
              <div className="module-card-icon">{f.icon}</div>
              <div className="module-card-title">{f.title}</div>
              <div className="module-card-text">{f.text}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="module-cta">
        <motion.h2 className="module-cta-title" {...fadeUp}>
          Elevate Your <span style={{ color: '#fdd500' }}>Brand.</span>
        </motion.h2>
        <motion.p className="module-cta-subtitle" {...fadeUp}>
          Join the Midwest's premier luxury destination and position your brand alongside global icons.
        </motion.p>
        <motion.a
          href="mailto:lease.inquiry@moa.net"
          className="module-cta-btn"
          {...fadeUp}
        >
          Explore Luxury Spaces
        </motion.a>
      </div>
    </div>
  );
};

export default LuxuryModule;

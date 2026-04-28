import React from 'react';
import { m as motion } from 'framer-motion';
import { UtensilsCrossed, Wine, Coffee, Salad } from 'lucide-react';
import './ModuleSlide.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const DiningModule: React.FC = () => {
  const stats = [
    { value: '60+', label: 'Dining Locations' },
    { value: '15+', label: 'Full-Service Restaurants' },
    { value: '30+', label: 'Cuisines Represented' },
    { value: '12M', label: 'Meals Served Annually' },
  ];

  const restaurants = [
    { name: 'The Cheesecake Factory', category: 'American', logo: '/logos/brands/cheesecakefactory-com-logo.png' },
    { name: 'Shake Shack', category: 'Burgers', logo: '/logos/brands/shakeshack-com-logo.png' },
    { name: 'Rainforest Cafe', category: 'Experience Dining', logo: '/logos/brands/rainforestcafeuae-com-logo.png' },
    { name: "P.F. Chang's", category: 'Asian', logo: '/logos/brands/pfchangs-com-logo.png' },
    { name: 'Twin City Grill', category: 'American', logo: '/logos/brands/twincitygrillrestaurant-com-logo.png' },
    { name: 'Crave', category: 'American/Sushi', logo: '/logos/brands/samsung.png' }, // Placeholder if crave missing
    { name: 'Naf Naf Grill', category: 'Middle Eastern', logo: '/logos/brands/nafnafgrill-com-logo.png' },
    { name: 'FireLake Grill House', category: 'American', logo: '/logos/brands/firelakerestaurant-com-logo.png' },
  ];

  const concepts = [
    {
      icon: <UtensilsCrossed size={24} />,
      title: 'Fine Dining',
      text: 'Full-service restaurants anchoring each wing, offering elevated culinary experiences beyond the typical mall food court.',
    },
    {
      icon: <Wine size={24} />,
      title: 'Bar & Lounge',
      text: 'Premium cocktail bars and lounges creating social destinations for evening visitors and event-goers.',
    },
    {
      icon: <Coffee size={24} />,
      title: 'Fast-Casual & Café',
      text: 'Trend-forward fast-casual concepts and artisan coffee destinations for the on-the-go shopper.',
    },
    {
      icon: <Salad size={24} />,
      title: 'Food Halls',
      text: 'Curated multi-vendor dining halls showcasing local and international culinary concepts.',
    },
  ];

  return (
    <div className="module-slide">
      <div className="module-hero">
        <div
          className="module-hero-bg"
          style={{
            backgroundImage:
              'url(/dining_hero.webp)',
          }}
        />
        <video autoPlay muted loop playsInline className="module-hero-video" poster="/dining_hero.webp" preload="none">
          <source src="/videos/dining_ambient.mp4" type="video/mp4" />
        </video>
        <div className="module-hero-overlay" />
        <motion.div className="module-hero-content" {...fadeUp}>
          <span className="module-eyebrow">A Culinary Destination</span>
          <h1 className="module-title">
            60+ Restaurants. <br />
            <span style={{ color: '#fdd500' }}>Infinite Flavor.</span>
          </h1>
          <p className="module-subtitle">
            From world-renowned full-service concepts to fast-casual favorites, 
            our dining ecosystem serves 12M+ meals annually across every global cuisine.
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

      <div className="module-grid-section dining-scene">
        <motion.h2 {...fadeUp} className="section-title">The Dining Portfolio</motion.h2>
        <div className="tenants-grid">
          {restaurants.map((r, i) => (
            <motion.div 
              key={r.name}
              className="tenant-card dining-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="tenant-logo-wrapper">
                <img src={r.logo} alt={r.name} className={`tenant-brand-logo ${['crave'].includes(r.name.toLowerCase()) ? 'invert-light' : ''}`} />
              </div>
              <div className="tenant-info">
                <span className="tenant-name">{r.name}</span>
                <span className="tenant-cat">{r.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>
          Dining <span style={{ color: '#fdd500' }}>Concepts</span>
        </motion.h2>
        <div className="module-grid">
          {concepts.map((c) => (
            <motion.div key={c.title} className="module-card" {...fadeUp}>
              <div className="module-card-icon">{c.icon}</div>
              <div className="module-card-title">{c.title}</div>
              <div className="module-card-text">{c.text}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="module-cta">
        <motion.h2 className="module-cta-title" {...fadeUp}>
          Bring Your <span style={{ color: '#fdd500' }}>Concept.</span>
        </motion.h2>
        <motion.p className="module-cta-subtitle" {...fadeUp}>
          From pop-up kitchens to flagship restaurants, explore the possibilities.
        </motion.p>
        <motion.a
          href="mailto:lease.inquiry@moa.net"
          className="module-cta-btn"
          {...fadeUp}
        >
          Explore F&B Spaces
        </motion.a>
      </div>
    </div>
  );
};

export default DiningModule;

import React from 'react';
import { motion } from 'framer-motion';
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
    { name: 'The Cheesecake Factory', category: 'American' },
    { name: 'Shake Shack', category: 'Burgers' },
    { name: 'Rainforest Cafe', category: 'Experience Dining' },
    { name: 'P.F. Chang\'s', category: 'Asian' },
    { name: 'Twin City Grill', category: 'American' },
    { name: 'Crave', category: 'American/Sushi' },
    { name: 'Naf Naf Grill', category: 'Middle Eastern' },
    { name: 'FireLake Grill House', category: 'American' },
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
              'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80)',
          }}
        />
        <div className="module-hero-overlay" />
        <motion.div className="module-hero-content" {...fadeUp}>
          <span className="module-eyebrow">Dining & Lifestyle</span>
          <h1 className="module-title">
            More Than <br />
            <span style={{ color: '#fdd500' }}>A Food Court.</span>
          </h1>
          <p className="module-subtitle">
            A curated culinary destination where world-class dining drives foot traffic
            and transforms shopping into a lifestyle experience.
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

      <section className="module-content" style={{ paddingTop: 0 }}>
        <motion.h2 className="module-section-title" {...fadeUp}>
          Signature <span style={{ color: '#fdd500' }}>Restaurants</span>
        </motion.h2>
        <div className="module-featured-grid">
          {restaurants.map((r) => (
            <motion.div key={r.name} className="featured-item" {...fadeUp}>
              <div className="featured-item-name">{r.name}</div>
              <div className="featured-item-category">{r.category}</div>
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

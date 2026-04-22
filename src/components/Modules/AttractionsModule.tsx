import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Fish, Rocket, Gamepad2 } from 'lucide-react';
import './ModuleSlide.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const AttractionsModule: React.FC = () => {
  const stats = [
    { value: '25+', label: 'Attractions & Rides' },
    { value: '7 Acres', label: 'Nickelodeon Universe' },
    { value: '1.2M', label: 'Gallons (Aquarium)' },
    { value: '300+', label: 'Species at SEA LIFE' },
  ];

  const attractions = [
    { icon: <Rocket size={24} />, title: 'Nickelodeon Universe', text: "The nation's largest indoor theme park with 27 rides across 7 acres — the single biggest foot traffic driver." },
    { icon: <Fish size={24} />, title: 'SEA LIFE Aquarium', text: '1.2M gallons of water, 300+ species, and an immersive walk-through tunnel drawing families year-round.' },
    { icon: <Compass size={24} />, title: 'FlyOver America', text: "A state-of-the-art flight ride taking guests on a breathtaking aerial journey across America's landscapes." },
    { icon: <Gamepad2 size={24} />, title: 'Crayola Experience', text: '60,000 sq ft of interactive family fun that extends average visit duration by 90 minutes.' },
  ];

  return (
    <div className="module-slide">
      <div className="module-hero">
        <div className="module-hero-bg" style={{ backgroundImage: 'url(/attractions_hero.png)' }} />
        <div className="module-hero-overlay" />
        <motion.div className="module-hero-content" {...fadeUp}>
          <span className="module-eyebrow">Attractions & Entertainment</span>
          <h1 className="module-title">Not A Mall. <br /><span style={{ color: '#fdd500' }}>A Destination.</span></h1>
          <p className="module-subtitle">World-class attractions driving 40M+ annual visitors through the doors.</p>
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
        <motion.h2 className="module-section-title" {...fadeUp}>Anchor <span style={{ color: '#fdd500' }}>Attractions</span></motion.h2>
        <div className="module-grid">
          {attractions.map((a) => (
            <motion.div key={a.title} className="module-card" {...fadeUp}>
              <div className="module-card-icon">{a.icon}</div>
              <div className="module-card-title">{a.title}</div>
              <div className="module-card-text">{a.text}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="module-cta">
        <motion.h2 className="module-cta-title" {...fadeUp}>Activate <span style={{ color: '#fdd500' }}>Here.</span></motion.h2>
        <motion.p className="module-cta-subtitle" {...fadeUp}>Sponsor attractions or launch activations at the most-visited destination in the Midwest.</motion.p>
        <motion.a href="mailto:mike.tvrdik@moa.net" className="module-cta-btn" {...fadeUp}>Partner With Us</motion.a>
      </div>
    </div>
  );
};

export default AttractionsModule;

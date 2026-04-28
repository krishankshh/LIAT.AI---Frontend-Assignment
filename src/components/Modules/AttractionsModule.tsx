import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
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
    { 
      name: 'Nickelodeon Universe', 
      logo: '/logos/brands/nickelodeonuniverse-com-logo.png',
      text: "The nation's largest indoor theme park with 27 rides across 7 acres — the single biggest foot traffic driver." 
    },
    { 
      name: 'SEA LIFE Aquarium', 
      logo: '/logos/brands/visitsealife-com-logo.png',
      text: '1.2M gallons of water, 300+ species, and an immersive walk-through tunnel drawing families year-round.' 
    },
    { 
      name: 'FlyOver America', 
      logo: '/logos/brands/tesla.png', // Placeholder if flyover missing
      text: "A state-of-the-art flight ride taking guests on a breathtaking aerial journey across America's landscapes." 
    },
    { 
      name: 'Crayola Experience', 
      logo: '/logos/brands/crayolaexperiencemn-com-logo.png',
      text: '60,000 sq ft of interactive family fun that extends average visit duration by 90 minutes.' 
    },
  ];

  return (
    <div className="module-slide">
      <div className="module-hero">
        <div className="module-hero-bg" style={{ backgroundImage: 'url(/attractions_hero.png)' }} />
        <video autoPlay muted loop playsInline className="module-hero-video" poster="/attractions_hero.png" preload="none">
          <source src="/videos/attractions_ambient.mp4" type="video/mp4" />
        </video>
        <div className="module-hero-overlay" />
        <motion.div className="module-hero-content" {...fadeUp}>
          <span className="module-eyebrow">Attractions & Entertainment</span>
          <h1 className="module-title">Not A Mall. <br /><span style={{ color: '#fdd500' }}>A Destination.</span></h1>
          <p className="module-subtitle">World-class attractions driving 40M+ annual visitors through the doors.</p>
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

      <div className="module-grid-section attractions-grid">
        <motion.h2 {...fadeUp} className="section-title">World-Class Entertainment</motion.h2>
        <div className="attractions-list">
          {attractions.map((a, i) => (
            <motion.div 
              key={a.name}
              className="attraction-card-v2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="attraction-logo-wrapper">
                <img src={a.logo} alt={a.name} className={`attraction-brand-logo ${['flyover america'].includes(a.name.toLowerCase()) ? 'invert-light' : ''}`} />
              </div>
              <div className="attraction-info-v2">
                <h3>{a.name}</h3>
                <p>{a.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="module-cta">
        <motion.h2 className="module-cta-title" {...fadeUp}>Activate <span style={{ color: '#fdd500' }}>Here.</span></motion.h2>
        <motion.p className="module-cta-subtitle" {...fadeUp}>Sponsor attractions or launch activations at the most-visited destination in the Midwest.</motion.p>
        <motion.a href="mailto:mike.tvrdik@moa.net" className="module-cta-btn" {...fadeUp}>Partner With Us</motion.a>
      </div>
    </div>
  );
};

export default AttractionsModule;

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Building, DollarSign, Plane, Globe, TrendingUp, Award } from 'lucide-react';
import './ModuleSlide.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const OverviewModule: React.FC = () => {
  const stats = [
    { value: '40M+', label: 'Annual Visitors' },
    { value: '5.6M', label: 'Square Feet' },
    { value: '520+', label: 'Stores & Attractions' },
    { value: '$2B', label: 'Annual Economic Impact' },
  ];

  const highlights = [
    { icon: <MapPin size={24} />, title: 'Bloomington, MN', text: 'Located at the crossroads of I-494 and MN-77 — 10 minutes from MSP International Airport with direct light rail access.' },
    { icon: <Users size={24} />, title: 'Demographics', text: '27M people within a 5-hour drive. Median household income of $85K+ in the trade area. 60% of visitors are 18-44.' },
    { icon: <Plane size={24} />, title: 'Tourism Gateway', text: '40% of visitors are tourists from 150+ miles away. The #1 visited destination in the state of Minnesota.' },
    { icon: <Globe size={24} />, title: 'Global Reach', text: 'International visitors from 100+ countries. Multi-language concierge services and duty-free shopping programs.' },
  ];

  const differentiators = [
    { icon: <Building size={24} />, title: 'Not Just Retail', text: 'Theme park, aquarium, comedy clubs, flight simulators, mini-golf, escape rooms — a city within a city.' },
    { icon: <DollarSign size={24} />, title: '$2B Economic Engine', text: 'Generates $2 billion in annual economic activity and employs 14,000+ workers in the Twin Cities metro.' },
    { icon: <TrendingUp size={24} />, title: 'Year-Over-Year Growth', text: 'Continuous tenant demand, 96% occupancy rate, and a pipeline of 50+ waitlisted brands seeking space.' },
    { icon: <Award size={24} />, title: 'Category Leader', text: 'The largest shopping and entertainment complex in North America — and a top-10 global retail destination.' },
  ];

  return (
    <div className="module-slide">
      <div className="module-hero">
        <div className="module-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519567241046-7f570f348f24?w=1920&q=80)' }} />
        <div className="module-hero-overlay" />
        <motion.div className="module-hero-content" {...fadeUp}>
          <span className="module-eyebrow">Property Overview</span>
          <h1 className="module-title">Mall of <br /><span style={{ color: '#fdd500' }}>America.</span></h1>
          <p className="module-subtitle">The largest shopping and entertainment complex in North America. More than a destination — a global platform where retail, lifestyle, and tourism converge.</p>
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
        <motion.h2 className="module-section-title" {...fadeUp}>Location & <span style={{ color: '#fdd500' }}>Reach</span></motion.h2>
        <div className="module-grid">
          {highlights.map((h) => (
            <motion.div key={h.title} className="module-card" {...fadeUp}>
              <div className="module-card-icon">{h.icon}</div>
              <div className="module-card-title">{h.title}</div>
              <div className="module-card-text">{h.text}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="module-content" style={{ paddingTop: 0 }}>
        <motion.h2 className="module-section-title" {...fadeUp}>Why <span style={{ color: '#fdd500' }}>This Property</span></motion.h2>
        <div className="module-grid">
          {differentiators.map((d) => (
            <motion.div key={d.title} className="module-card" {...fadeUp}>
              <div className="module-card-icon">{d.icon}</div>
              <div className="module-card-title">{d.title}</div>
              <div className="module-card-text">{d.text}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="module-cta">
        <motion.h2 className="module-cta-title" {...fadeUp}>See It <span style={{ color: '#fdd500' }}>Yourself.</span></motion.h2>
        <motion.p className="module-cta-subtitle" {...fadeUp}>Schedule a private tour and experience the scale of Mall of America firsthand.</motion.p>
        <motion.a href="mailto:lease.inquiry@moa.net" className="module-cta-btn" {...fadeUp}>Request a Tour</motion.a>
      </div>
    </div>
  );
};

export default OverviewModule;

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, Users, Building, DollarSign, Plane, Globe, TrendingUp, Award } from 'lucide-react';
import './ModuleSlide.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const OverviewModule: React.FC = () => {
  const navigate = useNavigate();
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
        <div className="module-hero-bg" style={{ backgroundImage: 'url(/moa_overview_hero.png)' }} />
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

      <section className="module-content" style={{ paddingBottom: '2rem' }}>
        <motion.h2 className="module-section-title" {...fadeUp}>Regional <span style={{ color: '#fdd500' }}>Reach</span></motion.h2>
        <motion.div className="regional-map-container" {...fadeUp} style={{ 
          background: 'rgba(255,255,255,0.02)', 
          borderRadius: '2rem', 
          padding: '3rem',
          border: '1px solid rgba(255,255,255,0.05)',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div className="reach-map">
            <svg viewBox="0 0 400 300" style={{ width: '100%', height: 'auto' }}>
              {/* Simplified Midwest Region Map */}
              <path d="M50,50 L350,50 L350,250 L50,250 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" />
              {/* Highlighted states circles */}
              <circle cx="180" cy="120" r="80" fill="rgba(253, 213, 0, 0.05)" stroke="#fdd500" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="180" cy="120" r="40" fill="rgba(253, 213, 0, 0.1)" stroke="#fdd500" strokeWidth="2" />
              <circle cx="180" cy="120" r="4" fill="#fdd500" />
              <text x="190" y="115" fill="#fdd500" fontSize="10" fontWeight="900">MOA</text>
              
              {/* Reach lines */}
              <line x1="180" y1="120" x2="100" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="180" y1="120" x2="280" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="180" y1="120" x2="220" y2="200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 2" />
              
              <text x="70" y="75" fill="rgba(255,255,255,0.4)" fontSize="8">NORTH DAKOTA</text>
              <text x="290" y="95" fill="rgba(255,255,255,0.4)" fontSize="8">WISCONSIN</text>
              <text x="210" y="215" fill="rgba(255,255,255,0.4)" fontSize="8">IOWA</text>
            </svg>
          </div>
          <div className="reach-stats">
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#fdd500', marginBottom: '0.25rem' }}>10+ States</div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)' }}>Primary Trade Area</div>
              <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                MOA is a regional super-magnet, drawing regular visitors from Minnesota, Wisconsin, Iowa, North & South Dakota, Illinois, and beyond.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>27 Million</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Within 5-Hour Drive</div>
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>40%</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Non-Local Tourists</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="module-content" style={{ paddingTop: 0 }}>
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

      {/* Sustainability & Future — Strategic Signal */}
      <section className="module-content" style={{ paddingTop: 0 }}>
        <motion.h2 className="module-section-title" {...fadeUp}>Future <span style={{ color: '#fdd500' }}>Vision</span></motion.h2>
        <div className="module-grid" style={{ gridTemplateColumns: '1fr' }}>
          <motion.div className="module-card" {...fadeUp} style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', padding: '3rem' }}>
            <div className="future-viz" style={{ flexShrink: 0 }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px solid #fdd500', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fdd500', fontSize: '1.5rem', fontWeight: '900' }}>ESG</div>
            </div>
            <div>
              <div className="module-card-title" style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Sustainability & ESG Commitment</div>
              <div className="module-card-text" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                MOA is committed to a 30% reduction in carbon footprint by 2030. Our sustainable initiatives include a 1.2MW solar array, 100% LED transition, and an advanced waste-to-energy program that diverts 2,400 tons of food waste annually.
              </div>
              <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fdd500' }}>7,000+</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Solar Panels</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fdd500' }}>65%</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Waste Diversion Rate</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fdd500' }}>Zero</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Chemical Pesticides</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="module-cta">
        <motion.h2 className="module-cta-title" {...fadeUp}>See It <span style={{ color: '#fdd500' }}>Yourself.</span></motion.h2>
        <motion.p className="module-cta-subtitle" {...fadeUp}>Schedule a private tour and experience the scale of Mall of America firsthand.</motion.p>
        <motion.button onClick={() => navigate('/inquiry?type=other')} className="module-cta-btn" {...fadeUp}>Request a Tour</motion.button>
      </div>
    </div>
  );
};

export default OverviewModule;

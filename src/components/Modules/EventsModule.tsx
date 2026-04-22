import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mic2, PartyPopper, Users } from 'lucide-react';
import './ModuleSlide.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const EventsModule: React.FC = () => {
  const stats = [
    { value: '400+', label: 'Events Per Year' },
    { value: '1M+', label: 'Event Attendees' },
    { value: '20+', label: 'Event Venues' },
    { value: '$50M', label: 'Event Revenue' },
  ];

  const venues = [
    { icon: <Mic2 size={24} />, title: 'Concert Venues', text: 'Multiple performance spaces from intimate 200-person stages to the 5,000-capacity Rotunda, equipped with full production capabilities.' },
    { icon: <PartyPopper size={24} />, title: 'Brand Activations', text: 'High-traffic activation zones throughout the property for product launches, pop-up experiences, and immersive brand takeovers.' },
    { icon: <Calendar size={24} />, title: 'Convention Space', text: 'Flexible expo and meeting spaces for corporate events, trade shows, and product demos — all within walking distance of 520+ retailers.' },
    { icon: <Users size={24} />, title: 'Celebrity Appearances', text: 'A proven platform for celebrity meet-and-greets, book signings, and influencer events that generate massive social engagement.' },
  ];

  return (
    <div className="module-slide">
      <div className="module-hero">
        <div className="module-hero-bg" style={{ backgroundImage: 'url(/events_hero.png)' }} />
        <div className="module-hero-overlay" />
        <motion.div className="module-hero-content" {...fadeUp}>
          <span className="module-eyebrow">Events & Platform</span>
          <h1 className="module-title">A Global <br /><span style={{ color: '#fdd500' }}>Stage.</span></h1>
          <p className="module-subtitle">400+ events per year. From concerts and brand activations to corporate summits — this is a platform, not just a building.</p>
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
        <motion.h2 className="module-section-title" {...fadeUp}>Venue <span style={{ color: '#fdd500' }}>Capabilities</span></motion.h2>
        <div className="module-grid">
          {venues.map((v) => (
            <motion.div key={v.title} className="module-card" {...fadeUp}>
              <div className="module-card-icon">{v.icon}</div>
              <div className="module-card-title">{v.title}</div>
              <div className="module-card-text">{v.text}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="module-cta">
        <motion.h2 className="module-cta-title" {...fadeUp}>Book Your <span style={{ color: '#fdd500' }}>Event.</span></motion.h2>
        <motion.p className="module-cta-subtitle" {...fadeUp}>From intimate gatherings to arena-scale productions, make it happen at the nation's most-visited destination.</motion.p>
        <motion.a href="mailto:mike.tvrdik@moa.net" className="module-cta-btn" {...fadeUp}>Inquire About Events</motion.a>
      </div>
    </div>
  );
};

export default EventsModule;

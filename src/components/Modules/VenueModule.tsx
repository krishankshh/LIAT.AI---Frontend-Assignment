import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Music, Presentation, Sparkles, ShoppingBag, ChevronDown, ChevronUp, Monitor, Speaker, Lightbulb, Truck } from 'lucide-react';
import './ModuleSlide.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const VenueModule: React.FC = () => {
  const navigate = useNavigate();
  const [expandedSpec, setExpandedSpec] = useState<string | null>(null);

  const stats = [
    { value: '5,000', label: 'Max Capacity' },
    { value: '4,800', label: 'Sq Ft Stage' },
    { value: '200+', label: 'Events Hosted/Year' },
    { value: '360°', label: 'Audience Sightlines' },
  ];

  const eventTypes = [
    { icon: <Music size={24} />, title: 'Live Concerts', text: 'From intimate acoustic sets to full-production arena shows with 5,000+ standing capacity and premium VIP balcony seating.' },
    { icon: <Presentation size={24} />, title: 'Corporate Events', text: 'Product launches, shareholder meetings, and keynote presentations with full AV support, breakout rooms, and catering.' },
    { icon: <Sparkles size={24} />, title: 'Fashion & Culture', text: 'Runway shows, art installations, and cultural celebrations with flexible staging, professional lighting rigs, and media areas.' },
    { icon: <ShoppingBag size={24} />, title: 'Brand Takeovers', text: 'Full-venue brand activations with immersive theming, product displays, sampling zones, and integrated digital signage.' },
  ];

  const technicalSpecs = [
    {
      id: 'av',
      icon: <Monitor size={20} />,
      title: 'Audio-Visual',
      specs: [
        'JBL VTX Line Array system (120dB SPL)',
        '4x 12\'x8\' LED video walls (4K resolution)',
        'Allen & Heath dLive mixing console',
        '48-channel wireless microphone system',
        'Fiber-optic broadcast connectivity',
      ],
    },
    {
      id: 'lighting',
      icon: <Lightbulb size={20} />,
      title: 'Lighting',
      specs: [
        '200+ intelligent moving fixtures',
        'Full-color LED wash system',
        'Follow spots with dedicated operator positions',
        'Programmable architectural accent lighting',
        'Hazers and atmospheric effects package',
      ],
    },
    {
      id: 'sound',
      icon: <Speaker size={20} />,
      title: 'Stage & Rigging',
      specs: [
        '4,800 sq ft modular main stage',
        '80-point overhead rigging grid (2,000 lb per point)',
        'Hydraulic thrust stage extension',
        'Orchestra pit conversion capability',
        'Green rooms and artist lounges (4 rooms)',
      ],
    },
    {
      id: 'logistics',
      icon: <Truck size={20} />,
      title: 'Load-In & Logistics',
      specs: [
        'Ground-level dock with 14\' clearance',
        '2x loading bays for 53\' trailers',
        'Freight elevator to stage level',
        'Dedicated production office',
        '400A 3-phase power distribution',
      ],
    },
  ];

  const calendar = [
    { month: 'May 2026', status: 'limited', note: '3 weekends available' },
    { month: 'Jun 2026', status: 'available', note: 'Open for bookings' },
    { month: 'Jul 2026', status: 'available', note: 'Open for bookings' },
    { month: 'Aug 2026', status: 'peak', note: 'Back-to-school season' },
    { month: 'Sep 2026', status: 'available', note: 'Open for bookings' },
    { month: 'Oct 2026', status: 'limited', note: 'Halloween programming' },
    { month: 'Nov 2026', status: 'peak', note: 'Holiday season begins' },
    { month: 'Dec 2026', status: 'peak', note: 'Holiday season' },
  ];

  return (
    <div className="module-slide">
      <div className="module-hero">
        <div className="module-hero-bg" style={{ backgroundImage: 'url(/venue_rotunda_hero.png)' }} />
        <div className="module-hero-overlay" />
        <motion.div className="module-hero-content" {...fadeUp}>
          <span className="module-eyebrow">Venue Spotlight</span>
          <h1 className="module-title">The <br /><span style={{ color: '#fdd500' }}>Rotunda.</span></h1>
          <p className="module-subtitle">A 5,000-capacity performance venue at the heart of America's most-visited destination. World-class production. Unmatched foot traffic.</p>
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

      {/* Event Types */}
      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>Event <span style={{ color: '#fdd500' }}>Formats</span></motion.h2>
        <div className="module-grid">
          {eventTypes.map((e) => (
            <motion.div key={e.title} className="module-card" {...fadeUp}>
              <div className="module-card-icon">{e.icon}</div>
              <div className="module-card-title">{e.title}</div>
              <div className="module-card-text">{e.text}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Specs Accordion */}
      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>Technical <span style={{ color: '#fdd500' }}>Specifications</span></motion.h2>
        <div className="specs-accordion">
          {technicalSpecs.map((spec) => (
            <motion.div key={spec.id} className="spec-item" {...fadeUp}>
              <button
                className={`spec-header ${expandedSpec === spec.id ? 'expanded' : ''}`}
                onClick={() => setExpandedSpec(expandedSpec === spec.id ? null : spec.id)}
              >
                <div className="spec-header-left">
                  <span className="spec-icon">{spec.icon}</span>
                  <span className="spec-title">{spec.title}</span>
                </div>
                {expandedSpec === spec.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              <AnimatePresence>
                {expandedSpec === spec.id && (
                  <motion.div
                    className="spec-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="spec-list">
                      {spec.specs.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Availability Calendar */}
      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>Availability <span style={{ color: '#fdd500' }}>Calendar</span></motion.h2>
        <div className="calendar-grid">
          {calendar.map((m) => (
            <motion.div key={m.month} className={`calendar-cell ${m.status}`} {...fadeUp}>
              <div className="calendar-month">{m.month}</div>
              <div className={`calendar-status-badge ${m.status}`}>
                {m.status === 'available' ? 'Available' : m.status === 'limited' ? 'Limited' : 'Peak Season'}
              </div>
              <div className="calendar-note">{m.note}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="module-cta">
        <motion.h2 className="module-cta-title" {...fadeUp}>Book The <span style={{ color: '#fdd500' }}>Rotunda.</span></motion.h2>
        <motion.p className="module-cta-subtitle" {...fadeUp}>From concerts to corporate keynotes, bring your event to the stage that 40 million people walk past every year.</motion.p>
        <motion.button onClick={() => navigate('/inquiry?type=venue')} className="module-cta-btn" {...fadeUp}>Inquire About Booking</motion.button>
      </div>
    </div>
  );
};

export default VenueModule;

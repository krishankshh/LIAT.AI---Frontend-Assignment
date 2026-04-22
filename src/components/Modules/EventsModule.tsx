import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, Mic2, PartyPopper, Users, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import './ModuleSlide.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const EventsModule: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const pastHighlights = [
    {
      title: 'New Year\'s Eve Spectacular',
      type: 'Annual Celebration',
      attendees: '25,000+',
      impressions: '4.8M social impressions',
      description: 'A multi-stage, all-ages celebration featuring live performances, countdown experiences, and a midnight balloon drop visible from all four floors.',
    },
    {
      title: 'Summer Concert Series',
      type: 'Music & Entertainment',
      attendees: '12,000 per weekend',
      impressions: '2.1M social impressions',
      description: '12-week concert series in the Rotunda featuring emerging and established artists, drawing record foot traffic during summer months.',
    },
    {
      title: 'Back-to-School Fashion Week',
      type: 'Brand Activation',
      attendees: '45,000 over 5 days',
      impressions: '3.5M social impressions',
      description: 'A multi-brand fashion event with runway shows, influencer meet-and-greets, and exclusive in-store promotions across 100+ participating retailers.',
    },
    {
      title: 'Holiday Grand Opening',
      type: 'Seasonal Campaign',
      attendees: '60,000 opening weekend',
      impressions: '8.2M social impressions',
      description: 'The annual holiday season launch featuring a celebrity tree lighting, Santa\'s arrival, and the unveiling of immersive holiday installations.',
    },
    {
      title: 'International Food Festival',
      type: 'Culinary Event',
      attendees: '35,000 over 3 days',
      impressions: '1.8M social impressions',
      description: 'A celebration of global cuisine featuring pop-up kitchens from 30+ international chefs, cooking demos, and exclusive tasting menus.',
    },
  ];

  const eventTypes = [
    { type: 'Concert / Performance', capacity: 'Up to 5,000', setup: 'Full production', turnaround: '24-48 hours' },
    { type: 'Brand Activation', capacity: 'Up to 15,000', setup: 'Custom build', turnaround: '48-72 hours' },
    { type: 'Corporate Event', capacity: 'Up to 2,000', setup: 'Theater / Banquet', turnaround: '12-24 hours' },
    { type: 'Product Launch', capacity: 'Up to 8,000', setup: 'Immersive / Experiential', turnaround: '72+ hours' },
    { type: 'Community Event', capacity: 'Up to 20,000', setup: 'Multi-zone', turnaround: 'Varies' },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % pastHighlights.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + pastHighlights.length) % pastHighlights.length);

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

      {/* Past Event Highlights Carousel */}
      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>Past Event <span style={{ color: '#fdd500' }}>Highlights</span></motion.h2>
        <motion.div className="event-carousel" {...fadeUp}>
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous event">
            <ChevronLeft size={20} />
          </button>
          <div className="carousel-viewport">
            <motion.div
              className="carousel-card"
              key={currentSlide}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
            >
              <div className="carousel-card-header">
                <h3 className="carousel-card-title">{pastHighlights[currentSlide].title}</h3>
                <span className="carousel-card-type">{pastHighlights[currentSlide].type}</span>
              </div>
              <p className="carousel-card-desc">{pastHighlights[currentSlide].description}</p>
              <div className="carousel-card-metrics">
                <div className="carousel-metric">
                  <Users size={14} />
                  <span>{pastHighlights[currentSlide].attendees}</span>
                </div>
                <div className="carousel-metric">
                  <TrendingUp size={14} />
                  <span>{pastHighlights[currentSlide].impressions}</span>
                </div>
              </div>
              <div className="carousel-dots">
                {pastHighlights.map((_, i) => (
                  <button
                    key={i}
                    className={`carousel-dot ${i === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(i)}
                    aria-label={`Go to event ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next event">
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </section>

      {/* Event Hosting Specs Table */}
      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>Hosting <span style={{ color: '#fdd500' }}>Capabilities</span></motion.h2>
        <motion.div className="specs-table-wrapper" {...fadeUp}>
          <table className="specs-table">
            <thead>
              <tr>
                <th>Event Type</th>
                <th>Capacity</th>
                <th>Setup Style</th>
                <th>Turnaround</th>
              </tr>
            </thead>
            <tbody>
              {eventTypes.map((et) => (
                <tr key={et.type}>
                  <td className="spec-type-cell">{et.type}</td>
                  <td>{et.capacity}</td>
                  <td>{et.setup}</td>
                  <td>{et.turnaround}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Enhanced Booking CTA */}
      <div className="module-cta">
        <motion.h2 className="module-cta-title" {...fadeUp}>Book Your <span style={{ color: '#fdd500' }}>Event.</span></motion.h2>
        <motion.p className="module-cta-subtitle" {...fadeUp}>From intimate gatherings to arena-scale productions, make it happen at the nation's most-visited destination.</motion.p>
        <motion.div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }} {...fadeUp}>
          <button onClick={() => navigate('/inquiry?type=events')} className="module-cta-btn">
            Inquire About Events
          </button>
          <button onClick={() => navigate('/business/venue')} className="module-cta-btn" style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
            Explore The Rotunda →
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default EventsModule;

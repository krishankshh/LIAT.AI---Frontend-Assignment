import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Megaphone, Building2, Mic, TrendingUp, ArrowRight } from 'lucide-react';
import './ModuleSlide.css';
import './BusinessHub.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const BusinessHub: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { value: '40M+', label: 'Annual Visitors' },
    { value: '$2B', label: 'Economic Impact' },
    { value: '96%', label: 'Occupancy Rate' },
    { value: '520+', label: 'Brand Partners' },
  ];

  const opportunities = [
    {
      icon: <Megaphone size={28} />,
      title: 'Sponsorship & Activations',
      description: 'Partnership tiers from presenting sponsors to pop-up activations. Reach 40M+ visitors with immersive brand experiences.',
      path: '/business/sponsorship',
      highlight: '4 Partnership Tiers',
    },
    {
      icon: <Mic size={28} />,
      title: 'The Rotunda',
      description: 'A 5,000-capacity performance venue with world-class production capabilities. From concerts to corporate keynotes.',
      path: '/business/venue',
      highlight: '200+ Events/Year',
    },
    {
      icon: <Building2 size={28} />,
      title: 'Leasing Paths',
      description: 'Flagship anchors to pop-up spaces. Multiple leasing paths tailored for luxury, retail, F&B, and seasonal concepts.',
      path: '/business/leasing',
      highlight: '5.6M Sq Ft',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Events & Platform',
      description: '400+ events per year with full production support. Brand activations, concerts, corporate summits, and more.',
      path: '/business/events',
      highlight: '1M+ Event Attendees',
    },
  ];

  return (
    <div className="module-slide">
      <div className="module-hero">
        <div className="module-hero-bg" style={{ backgroundImage: 'url(/sponsorship_hero.png)' }} />
        <div className="module-hero-overlay" />
        <motion.div className="module-hero-content" {...fadeUp}>
          <span className="module-eyebrow">Business Partnerships</span>
          <h1 className="module-title">Partner <br /><span style={{ color: '#fdd500' }}>With Us.</span></h1>
          <p className="module-subtitle">From sponsorship to leasing, explore how your brand can thrive inside America's most-visited destination.</p>
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
        <motion.h2 className="module-section-title" {...fadeUp}>Explore <span style={{ color: '#fdd500' }}>Opportunities</span></motion.h2>
        <div className="hub-opportunities-grid">
          {opportunities.map((opp, i) => (
            <motion.div
              key={opp.title}
              className="hub-opportunity-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => navigate(opp.path)}
              role="button"
              tabIndex={0}
            >
              <div className="hub-card-top">
                <div className="hub-card-icon">{opp.icon}</div>
                <span className="hub-card-highlight">{opp.highlight}</span>
              </div>
              <h3 className="hub-card-title">{opp.title}</h3>
              <p className="hub-card-desc">{opp.description}</p>
              <div className="hub-card-action">
                Explore <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="module-cta">
        <motion.h2 className="module-cta-title" {...fadeUp}>Ready to <span style={{ color: '#fdd500' }}>Start?</span></motion.h2>
        <motion.p className="module-cta-subtitle" {...fadeUp}>Connect with our partnerships team to explore how Mall of America can amplify your brand.</motion.p>
        <motion.a href="mailto:mike.tvrdik@moa.net" className="module-cta-btn" {...fadeUp}>Contact Partnerships Team</motion.a>
      </div>
    </div>
  );
};

export default BusinessHub;

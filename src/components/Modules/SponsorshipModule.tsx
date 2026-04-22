import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, BarChart3, Zap, Crown, Users, Eye, Share2, TrendingUp } from 'lucide-react';
import './ModuleSlide.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const SponsorshipModule: React.FC = () => {
  const audienceStats = [
    { value: '40M+', label: 'Annual Visitors', icon: <Users size={20} /> },
    { value: '2.3B', label: 'Social Impressions/Year', icon: <Eye size={20} /> },
    { value: '78%', label: 'Brand Recall Rate', icon: <TrendingUp size={20} /> },
    { value: '45min', label: 'Avg. Dwell Time', icon: <BarChart3 size={20} /> },
  ];

  const tiers = [
    {
      tier: 'Presenting Partner',
      icon: <Crown size={28} />,
      price: 'Custom',
      color: '#fdd500',
      benefits: [
        'Exclusive naming rights for major event series',
        'Premium digital signage across all 4 floors',
        'Dedicated 2,000+ sq ft activation zone',
        'Co-branded marketing across all MOA channels',
        'VIP hospitality suite for 50+ guests',
        'Year-round brand integration',
      ],
    },
    {
      tier: 'Experience Sponsor',
      icon: <Zap size={28} />,
      price: 'From $250K',
      color: '#a78bfa',
      benefits: [
        'Branded experiential pop-up (up to 1,500 sq ft)',
        'Digital screen takeover (50+ screens)',
        'Social media amplification package',
        'On-site sampling & product demos',
        'Event-day hospitality for 25 guests',
      ],
    },
    {
      tier: 'Digital Takeover',
      icon: <Share2 size={28} />,
      price: 'From $75K',
      color: '#38bdf8',
      benefits: [
        'Full digital signage network takeover',
        'In-app banner & push notification placement',
        'Wi-Fi splash page branding',
        'Social media co-promotion',
      ],
    },
    {
      tier: 'Pop-Up Activation',
      icon: <Megaphone size={28} />,
      price: 'From $25K',
      color: '#34d399',
      benefits: [
        'High-traffic activation zone (up to 500 sq ft)',
        'Weekend or event-tied activation window',
        'On-site brand ambassador support',
        'Post-event performance report',
      ],
    },
  ];

  const caseStudies = [
    {
      brand: 'Nike Air Max Day',
      type: 'Experiential Activation',
      result: '45K visitors over 3 days',
      description: 'A 3-day immersive sneaker culture experience featuring exclusive drops, custom design stations, and athlete appearances in the Rotunda.',
    },
    {
      brand: 'Samsung Galaxy Experience',
      type: 'Digital Takeover + Pop-Up',
      result: '2.1M social impressions',
      description: 'A 10-day technology showcase with hands-on demo zones, VR experiences, and a digital signage takeover across the entire property.',
    },
    {
      brand: 'Coca-Cola Holiday Village',
      type: 'Presenting Partnership',
      result: '120K engagements, 8-week run',
      description: 'A season-long branded holiday village in the North Atrium with photo ops, product sampling, and co-branded merchandise.',
    },
  ];

  return (
    <div className="module-slide">
      <div className="module-hero">
        <div className="module-hero-bg" style={{ backgroundImage: 'url(/sponsorship_hero.png)' }} />
        <div className="module-hero-overlay" />
        <motion.div className="module-hero-content" {...fadeUp}>
          <span className="module-eyebrow">Sponsorship & Alliances</span>
          <h1 className="module-title">Own The <br /><span style={{ color: '#fdd500' }}>Moment.</span></h1>
          <p className="module-subtitle">Transform 40M+ annual visitors into your brand's most engaged audience. From digital takeovers to full-scale experiential activations.</p>
        </motion.div>
      </div>

      {/* Audience Data Dashboard */}
      <div className="module-stats">
        {audienceStats.map((s) => (
          <motion.div key={s.label} className="module-stat" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="module-stat-value">{s.value}</div>
            <div className="module-stat-label">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Partnership Tiers */}
      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>Partnership <span style={{ color: '#fdd500' }}>Tiers</span></motion.h2>
        <div className="module-grid tiers-grid">
          {tiers.map((t) => (
            <motion.div key={t.tier} className="module-card tier-card" {...fadeUp}>
              <div className="module-card-icon" style={{ color: t.color }}>{t.icon}</div>
              <div className="module-card-title">{t.tier}</div>
              <div className="tier-price" style={{ color: t.color }}>{t.price}</div>
              <ul className="tier-benefits">
                {t.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Activation Case Studies */}
      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>Activation <span style={{ color: '#fdd500' }}>Highlights</span></motion.h2>
        <div className="case-studies-grid">
          {caseStudies.map((cs) => (
            <motion.div key={cs.brand} className="case-study-card" {...fadeUp}>
              <div className="case-study-header">
                <h3 className="case-study-brand">{cs.brand}</h3>
                <span className="case-study-type">{cs.type}</span>
              </div>
              <p className="case-study-desc">{cs.description}</p>
              <div className="case-study-result">
                <TrendingUp size={14} />
                <span>{cs.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="module-cta">
        <motion.h2 className="module-cta-title" {...fadeUp}>Build Your <span style={{ color: '#fdd500' }}>Activation.</span></motion.h2>
        <motion.p className="module-cta-subtitle" {...fadeUp}>Let our partnerships team design a custom sponsorship package tailored to your brand goals and audience.</motion.p>
        <motion.a href="mailto:mike.tvrdik@moa.net" className="module-cta-btn" {...fadeUp}>Start a Partnership Conversation</motion.a>
      </div>
    </div>
  );
};

export default SponsorshipModule;

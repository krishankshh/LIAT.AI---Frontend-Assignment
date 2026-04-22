import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Megaphone, BarChart3, Zap, Crown, Users, Eye, Share2, TrendingUp } from 'lucide-react';
import './ModuleSlide.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

/* ========== SVG Data Viz Components ========== */

const DonutChart: React.FC<{ data: { label: string; value: number; color: string }[] }> = ({ data }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const radius = 70;
  const cx = 100;
  const cy = 100;

  let cumulativePercent = 0;

  const getCoordinatesForPercent = (percent: number) => {
    const x = cx + radius * Math.cos(2 * Math.PI * percent - Math.PI / 2);
    const y = cy + radius * Math.sin(2 * Math.PI * percent - Math.PI / 2);
    return [x, y];
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      <svg width="200" height="200" viewBox="0 0 200 200">
        {data.map((slice, i) => {
          const percent = slice.value / total;
          const startPercent = cumulativePercent;
          cumulativePercent += percent;
          const [startX, startY] = getCoordinatesForPercent(startPercent);
          const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
          const largeArcFlag = percent > 0.5 ? 1 : 0;
          const isHovered = hovered === i;
          const pathD = `M ${cx} ${cy} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;

          return (
            <motion.path
              key={slice.label}
              d={pathD}
              fill={slice.color}
              stroke="#050505"
              strokeWidth="2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: isHovered ? 1 : 0.8, scale: isHovered ? 1.05 : 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: 'pointer', transformOrigin: `${cx}px ${cy}px` }}
            />
          );
        })}
        <circle cx={cx} cy={cy} r="45" fill="#050505" />
        <text x={cx} y={cy - 6} textAnchor="middle" fill="white" fontSize="18" fontWeight="900" fontFamily="serif">
          {hovered !== null ? `${data[hovered].value}%` : '40M+'}
        </text>
        <text x={cx} y={cy + 12} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontWeight="700" letterSpacing="0.1em" style={{ textTransform: 'uppercase' }}>
          {hovered !== null ? data[hovered].label : 'ANNUAL'}
        </text>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {data.map((d, i) => (
          <div
            key={d.label}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', opacity: hovered === null || hovered === i ? 1 : 0.4, transition: 'opacity 0.2s' }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: d.color }} />
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', fontFamily: 'sans-serif' }}>{d.label}</span>
            <span style={{ fontSize: '0.8rem', color: 'white', fontWeight: 700, fontFamily: 'sans-serif', marginLeft: 'auto' }}>{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const BarChart: React.FC<{ data: { label: string; value: number }[] }> = ({ data }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      {data.map((d, i) => {
        const widthPercent = (d.value / maxValue) * 100;
        const isHovered = hovered === i;
        return (
          <motion.div
            key={d.label}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <span style={{ width: '32px', fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textAlign: 'right', fontFamily: 'sans-serif', flexShrink: 0 }}>
              {d.label}
            </span>
            <div style={{ flex: 1, height: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', overflow: 'hidden', position: 'relative' }}>
              <motion.div
                style={{
                  height: '100%',
                  borderRadius: '6px',
                  background: isHovered
                    ? 'linear-gradient(90deg, #fdd500, #f59e0b)'
                    : 'linear-gradient(90deg, rgba(253,213,0,0.6), rgba(253,213,0,0.3))',
                  transition: 'background 0.3s',
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${widthPercent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <span style={{ width: '36px', fontSize: '0.75rem', color: isHovered ? '#fdd500' : 'rgba(255,255,255,0.5)', fontWeight: 700, fontFamily: 'sans-serif', transition: 'color 0.2s' }}>
              {d.value.toFixed(1)}M
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

/* ========== Main Component ========== */

const SponsorshipModule: React.FC = () => {
  const navigate = useNavigate();

  const audienceStats = [
    { value: '40M+', label: 'Annual Visitors', icon: <Users size={20} /> },
    { value: '2.3B', label: 'Social Impressions/Year', icon: <Eye size={20} /> },
    { value: '78%', label: 'Brand Recall Rate', icon: <TrendingUp size={20} /> },
    { value: '45min', label: 'Avg. Dwell Time', icon: <BarChart3 size={20} /> },
  ];

  const demographicData = [
    { label: '18-24', value: 32, color: '#fdd500' },
    { label: '25-34', value: 28, color: '#f59e0b' },
    { label: '35-44', value: 22, color: '#a78bfa' },
    { label: '45+', value: 18, color: '#38bdf8' },
  ];

  const monthlyTraffic = [
    { label: 'Jan', value: 2.8 }, { label: 'Feb', value: 2.5 },
    { label: 'Mar', value: 3.1 }, { label: 'Apr', value: 3.4 },
    { label: 'May', value: 3.8 }, { label: 'Jun', value: 4.2 },
    { label: 'Jul', value: 4.5 }, { label: 'Aug', value: 4.1 },
    { label: 'Sep', value: 3.6 }, { label: 'Oct', value: 3.3 },
    { label: 'Nov', value: 4.8 }, { label: 'Dec', value: 5.2 },
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

      {/* Interactive Data Visualizations */}
      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>Audience <span style={{ color: '#fdd500' }}>Intelligence</span></motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
          <motion.div {...fadeUp} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.25rem', padding: '2rem' }}>
            <h3 style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)', marginBottom: '1.5rem', fontFamily: 'sans-serif' }}>
              Visitor Demographics by Age
            </h3>
            <DonutChart data={demographicData} />
          </motion.div>

          <motion.div {...fadeUp} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.25rem', padding: '2rem' }}>
            <h3 style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)', marginBottom: '1.5rem', fontFamily: 'sans-serif' }}>
              Monthly Foot Traffic (Millions)
            </h3>
            <BarChart data={monthlyTraffic} />
          </motion.div>
        </div>
      </section>

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
        <motion.button onClick={() => navigate('/inquiry?type=sponsorship')} className="module-cta-btn" {...fadeUp}>Start a Partnership Conversation</motion.button>
      </div>
    </div>
  );
};

export default SponsorshipModule;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Building2, Store, Zap, TrendingUp, Mail, ChevronDown, ChevronUp, Users, MapPin } from 'lucide-react';
import './ModuleSlide.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const LeasingModule: React.FC = () => {
  const navigate = useNavigate();
  const [expandedPath, setExpandedPath] = useState<string | null>(null);

  const stats = [
    { value: '96%', label: 'Occupancy Rate' },
    { value: '40M+', label: 'Annual Visitors' },
    { value: '$2B', label: 'Economic Impact' },
    { value: '5.6M', label: 'Sq Ft Total' },
  ];

  const paths = [
    {
      id: 'flagship',
      icon: <Building2 size={24} />,
      title: 'Flagship & Anchor',
      text: 'Premium, high-visibility anchor positions with dedicated entrances and custom build-outs for maximum brand expression.',
      details: {
        idealTenant: 'Global luxury brands, department stores, and category leaders seeking maximum visibility and brand expression.',
        sqFt: '10,000 – 200,000 sq ft',
        traffic: '8M+ annual visitors in anchor zones',
        termLength: '10-20 year leases',
        comparables: ['Nordstrom', 'Macy\'s', 'Zara', 'H&M'],
        highlights: [
          'Dedicated street-level entrances',
          'Custom façade and signage packages',
          'Priority placement in marketing campaigns',
          'Exclusive event hosting rights in adjacent zones',
        ],
      },
    },
    {
      id: 'inline',
      icon: <Store size={24} />,
      title: 'In-Line Retail',
      text: 'Optimally positioned inline spaces, from 800 to 15,000 sq ft, with data-driven tenant placement for cross-sell potential.',
      details: {
        idealTenant: 'Specialty retailers, DTC brands scaling to physical, and emerging concepts looking for high-traffic exposure.',
        sqFt: '800 – 15,000 sq ft',
        traffic: '5M+ annual visitors per corridor',
        termLength: '3-10 year leases',
        comparables: ['Lululemon', 'Apple', 'Sephora', 'Tesla'],
        highlights: [
          'Data-driven placement for maximum cross-sell',
          'Flexible build-out packages available',
          'Co-tenancy with complementary brands',
          'Access to MOA\'s integrated marketing platform',
        ],
      },
    },
    {
      id: 'popup',
      icon: <Zap size={24} />,
      title: 'Pop-Up & Seasonal',
      text: 'Flexible short-term spaces for product launches, seasonal campaigns, and direct-to-consumer activations. No long-term commitment required.',
      details: {
        idealTenant: 'DTC brands, seasonal retailers, product launchers, and brands testing physical retail for the first time.',
        sqFt: '200 – 2,000 sq ft',
        traffic: '40M+ annual visitors property-wide',
        termLength: '1 week – 12 months',
        comparables: ['Casper (pop-up)', 'Glossier (seasonal)', 'Disney (holiday)'],
        highlights: [
          'Turnkey spaces with plug-and-play infrastructure',
          'High-traffic locations near anchor tenants',
          'Flexible lease terms — no long-term commitment',
          'Marketing support and social media amplification',
        ],
      },
    },
    {
      id: 'fnb',
      icon: <TrendingUp size={24} />,
      title: 'F&B Concepts',
      text: 'From fast-casual to fine dining — curated dining spaces with built-in foot traffic from 40M+ annual visitors.',
      details: {
        idealTenant: 'Fast-casual concepts, fine dining operators, food hall vendors, and celebrity chef-backed restaurants.',
        sqFt: '1,200 – 8,000 sq ft',
        traffic: '60+ existing restaurants create a dining destination',
        termLength: '5-15 year leases',
        comparables: ['The Cheesecake Factory', 'Shake Shack', 'Rainforest Cafe'],
        highlights: [
          'Dedicated dining districts on every level',
          'Grease trap and hood ventilation pre-installed',
          'Patio and outdoor seating options available',
          'Built-in captive audience of 40M+ annual visitors',
        ],
      },
    },
  ];

  const availability = [
    { zone: 'North Wing, Level 1', type: 'In-Line Retail', sqFt: '2,400 sq ft', status: 'Available' },
    { zone: 'South Wing, Level 2', type: 'F&B Concept', sqFt: '3,800 sq ft', status: 'Available' },
    { zone: 'East Corridor, Level 1', type: 'Pop-Up Space', sqFt: '600 sq ft', status: 'Available' },
    { zone: 'West Wing, Level 3', type: 'In-Line Retail', sqFt: '1,200 sq ft', status: 'Coming Soon' },
    { zone: 'North Atrium, Level 1', type: 'Flagship', sqFt: '12,000 sq ft', status: 'Available' },
  ];

  return (
    <div className="module-slide">
      <div className="module-hero">
        <div className="module-hero-bg" style={{ backgroundImage: 'url(/leasing_hero.png)' }} />
        <div className="module-hero-overlay" />
        <motion.div className="module-hero-content" {...fadeUp}>
          <span className="module-eyebrow">Leasing & Partnerships</span>
          <h1 className="module-title">Your Space <br /><span style={{ color: '#fdd500' }}>Awaits.</span></h1>
          <p className="module-subtitle">Join 520+ brands at North America's most-visited retail destination. Multiple leasing paths for every brand size and strategy.</p>
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

      {/* Expandable Leasing Paths */}
      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>Leasing <span style={{ color: '#fdd500' }}>Paths</span></motion.h2>
        <div className="leasing-paths-list">
          {paths.map((p) => (
            <motion.div key={p.id} className={`leasing-path-item ${expandedPath === p.id ? 'expanded' : ''}`} {...fadeUp}>
              <button
                className="leasing-path-header"
                onClick={() => setExpandedPath(expandedPath === p.id ? null : p.id)}
              >
                <div className="leasing-path-header-left">
                  <div className="module-card-icon">{p.icon}</div>
                  <div>
                    <div className="module-card-title">{p.title}</div>
                    <div className="module-card-text" style={{ marginTop: '0.25rem' }}>{p.text}</div>
                  </div>
                </div>
                <div className="leasing-path-toggle">
                  {expandedPath === p.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {expandedPath === p.id && (
                  <motion.div
                    className="leasing-path-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="path-detail-grid">
                      <div className="path-detail-item">
                        <span className="path-detail-label">Ideal Tenant</span>
                        <span className="path-detail-value">{p.details.idealTenant}</span>
                      </div>
                      <div className="path-detail-item">
                        <span className="path-detail-label">Size Range</span>
                        <span className="path-detail-value">{p.details.sqFt}</span>
                      </div>
                      <div className="path-detail-item">
                        <span className="path-detail-label">Foot Traffic</span>
                        <span className="path-detail-value">{p.details.traffic}</span>
                      </div>
                      <div className="path-detail-item">
                        <span className="path-detail-label">Term Length</span>
                        <span className="path-detail-value">{p.details.termLength}</span>
                      </div>
                    </div>
                    <div className="path-comparables">
                      <span className="path-detail-label">Current Comparables</span>
                      <div className="comparable-tags">
                        {p.details.comparables.map((c) => (
                          <span key={c} className="comparable-tag">{c}</span>
                        ))}
                      </div>
                    </div>
                    <div className="path-highlights">
                      <span className="path-detail-label">Key Highlights</span>
                      <ul className="path-highlight-list">
                        {p.details.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                    <button onClick={() => navigate(`/inquiry?type=leasing-${p.id === 'fnb' ? 'fnb' : p.id}`)} className="path-cta-btn">
                      <Mail size={14} /> Inquire About {p.title} Space
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Current Availability */}
      <section className="module-content">
        <motion.h2 className="module-section-title" {...fadeUp}>Current <span style={{ color: '#fdd500' }}>Availability</span></motion.h2>
        <motion.div className="specs-table-wrapper" {...fadeUp}>
          <table className="specs-table">
            <thead>
              <tr>
                <th>Location</th>
                <th>Type</th>
                <th>Size</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {availability.map((a) => (
                <tr key={a.zone}>
                  <td className="spec-type-cell"><MapPin size={12} style={{ opacity: 0.5 }} /> {a.zone}</td>
                  <td>{a.type}</td>
                  <td>{a.sqFt}</td>
                  <td><span className={`availability-badge ${a.status === 'Available' ? 'available' : 'coming-soon'}`}>{a.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      <div className="module-cta">
        <motion.h2 className="module-cta-title" {...fadeUp}>Let's <span style={{ color: '#fdd500' }}>Talk.</span></motion.h2>
        <motion.p className="module-cta-subtitle" {...fadeUp}>Connect with our leasing team to explore available spaces and custom solutions for your brand.</motion.p>
        <motion.div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }} {...fadeUp}>
          <button onClick={() => navigate('/inquiry?type=leasing-inline')} className="module-cta-btn">
            <Mail size={16} /> Leasing Inquiry
          </button>
          <button onClick={() => navigate('/inquiry?type=sponsorship')} className="module-cta-btn" style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
            Sponsorship & Alliances
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LeasingModule;

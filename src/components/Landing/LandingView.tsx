import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight, Volume2, VolumeX, Compass,
  ShoppingBag, Star, Utensils, Ticket, Calendar, Building2,
  Megaphone, MapPin, Users, TrendingUp, Globe, Award,
  ChevronRight, Menu, X, Search
} from 'lucide-react';
import DiscoveryHub from '../Layout/DiscoveryHub';
import VideoSection from './VideoSection';
import '../Layout/Sidebar.css';
import './LandingView.css';
import { GlobalSearch } from '../Layout/GlobalSearch';

/** Animated counter hook — supports decimals */
const useCounter = (target: number, duration = 2000, inView = false) => {
  const [count, setCount] = useState(0);
  const isDecimal = target % 1 !== 0;
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, inView, isDecimal]);
  return count;
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const LandingView: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [discoveryOpen, setDiscoveryOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  // Scroll listener for navbar
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      setNavScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Stats counter observer
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsInView(true); }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const visitors = useCounter(40, 2000, statsInView);
  const stores = useCounter(520, 2000, statsInView);
  const impact = useCounter(2, 2000, statsInView);
  const sqft = useCounter(5.6, 2500, statsInView);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const moduleCards = [
    { name: 'Retail', desc: '520+ global brands under one roof', icon: <ShoppingBag size={20} />, path: '/retail', image: '/retail_hero.png' },
    { name: 'Luxury', desc: 'Where brands become icons', icon: <Star size={20} />, path: '/luxury', image: '/luxury_hero.png' },
    { name: 'Dining', desc: '60+ culinary destinations', icon: <Utensils size={20} />, path: '/dining', image: '/dining_hero.png' },
    { name: 'Attractions', desc: '25+ world-class experiences', icon: <Ticket size={20} />, path: '/attractions', image: '/attractions_hero.png' },
    { name: 'Events', desc: '400+ events per year', icon: <Calendar size={20} />, path: '/events', image: '/events_hero.png' },
    { name: 'Sponsorship', desc: 'Own the moment', icon: <Megaphone size={20} />, path: '/business/sponsorship', image: '/sponsorship_hero.png' },
  ];

  const differentiators = [
    { icon: <Globe size={22} />, title: 'Global Reach', value: '100+', sub: 'Countries', text: 'International visitors from over 100 countries. Multi-language concierge and duty-free programs.' },
    { icon: <Users size={22} />, title: 'Demographics', value: '27M', sub: 'In Trade Area', text: '27M people within a 5-hour drive. 60% of visitors are 18-44 with $85K+ median income.' },
    { icon: <TrendingUp size={22} />, title: 'Growth', value: '96%', sub: 'Occupancy', text: 'Continuous tenant demand with a pipeline of 50+ waitlisted brands seeking space.' },
    { icon: <Award size={22} />, title: 'Category Leader', value: '#1', sub: 'In N. America', text: 'The largest shopping and entertainment complex in North America — a top-10 global destination.' },
  ];

  const partners = [
    { name: 'Nike', logo: '/logos/brands/nike.png' },
    { name: 'Apple', logo: '/logos/brands/apple.png' },
    { name: 'Zara', logo: '/logos/brands/zara.png' },
    { name: 'Lululemon', logo: '/logos/brands/lululemon.png' },
    { name: 'Sephora', logo: '/logos/brands/sephora.png' },
    { name: 'LEGO', logo: '/logos/brands/lego.png' },
    { name: 'HM', logo: '/logos/brands/hm.png' },
    { name: 'Tesla', logo: '/logos/brands/tesla.png' },
    { name: 'Microsoft', logo: '/logos/brands/microsoft.png' },
    { name: 'Samsung', logo: '/logos/brands/samsung.png' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Starbucks', logo: '/logos/brands/starbucks.svg' }
  ];

  return (
    <div className="landing-page-v2">
      {/* ======== LANDING NAVBAR ======== */}
      <motion.nav
        className={`glass-navbar-v3 ${navScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: navVisible ? 0 : -140 }} /* Hide entirely based on v3 height */
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Row 1: Main Navigation */}
        <div className="navbar-row-main">
          <div className="nav-row-inner">
            <div className="navbar-brand-v3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="logo-bg-block">
                <img src="/moa_logo.png" alt="Mall of America" className="navbar-logo-v3" />
              </div>
            </div>

            <div className="navbar-links-v3">
              <a href="#explore" className="nav-link-v3">Explore</a>
              <a href="#why-moa" className="nav-link-v3">Why MOA</a>
              <a href="#partners" className="nav-link-v3">Partners</a>
              <button className="nav-link-v3" onClick={() => navigate('/business')}>Partnerships</button>
            </div>

            <div className="navbar-actions-v3">
              <GlobalSearch className="nav-search-bar-integrated" />
              <button className="nav-primary-cta" onClick={() => navigate('/inquiry')}>
                Request a Tour
              </button>
              <button className="mobile-toggle-v3" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Black Featured Bar */}
        <div className="navbar-row-featured">
          <div className="nav-row-inner featured-scroll">
            <a href="/retail" className="featured-link">Retail</a>
            <a href="/luxury" className="featured-link">Luxury</a>
            <a href="/dining" className="featured-link">Dining</a>
            <a href="/attractions" className="featured-link">Attractions</a>
            <a href="/events" className="featured-link">Events</a>
            <a href="/directory" className="featured-link">Map & Directory</a>
            <a href="/business/leasing" className="featured-link highlights">Leasing Opportunities</a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu for Landing */}
      {mobileMenuOpen && (
        <>
          <motion.div className="mobile-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setMobileMenuOpen(false)} />
          <motion.div className="mobile-menu" initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ type: 'spring', damping: 30, stiffness: 300 }}>
            <div className="mobile-menu-header">
              <img src="/moa_logo.png" alt="Mall of America" className="mobile-logo" />
              <button onClick={() => setMobileMenuOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><X size={24} /></button>
            </div>
            <nav className="mobile-nav">
              <button className="mobile-link" onClick={() => { setMobileMenuOpen(false); navigate('/overview'); }}>
                <span className="mobile-link-icon"><ShoppingBag size={16} /></span>Mall Experience
              </button>
              <button className="mobile-link" onClick={() => { setMobileMenuOpen(false); navigate('/business'); }}>
                <span className="mobile-link-icon"><Building2 size={16} /></span>Business Portal
              </button>
              <button className="mobile-link" onClick={() => { setMobileMenuOpen(false); navigate('/directory'); }}>
                <span className="mobile-link-icon"><MapPin size={16} /></span>Directory & Map
              </button>
            </nav>
            <div className="mobile-footer">
              <button className="mobile-cta" onClick={() => { setMobileMenuOpen(false); navigate('/inquiry'); }}>Request a Tour</button>
            </div>
          </motion.div>
        </>
      )}

      {/* ======== VIDEO HERO ======== */}
      <div ref={heroRef} className="hero-section">
        <motion.div className="hero-video-container" style={{ scale: heroScale }}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
            poster="/moa_overview_hero.png"
          >
            <source src="/videos/hero_intro.mp4" type="video/mp4" />
          </video>
          <div className="hero-vignette" />
          <div className="hero-gradient" />
        </motion.div>

        <motion.div className="hero-content" style={{ y: textY, opacity: heroOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero-eyebrow">North America's #1 Retail & Entertainment Destination</span>
            <h1 className="hero-title-v2">
              Not Just <br />A Mall.
            </h1>
            <p className="hero-tagline">A World Inside.</p>
          </motion.div>

          {/* Dual CTA Tiles */}
          <motion.div
            className="hero-cta-grid"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="cta-tile mall" onClick={() => navigate('/overview')}>
              <div className="cta-tile-label">Explore the Mall</div>
              <div className="cta-tile-desc">Retail, Luxury, Dining & Attractions</div>
              <ArrowRight size={18} className="cta-tile-arrow" />
            </button>
            <button className="cta-tile business" onClick={() => navigate('/business')}>
              <div className="cta-tile-label">Partner With Us</div>
              <div className="cta-tile-desc">Leasing, Sponsorship & Events</div>
              <ArrowRight size={18} className="cta-tile-arrow" />
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div className="scroll-cue" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="scroll-cue-inner">
              <div className="scroll-line" />
              <span className="scroll-text">Scroll to Explore</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Sound Toggle */}
        <button className="sound-toggle" onClick={toggleMute}>
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      {/* ======== STATS BANNER ======== */}
      <div ref={statsRef} className="stats-banner">
        {[
          { val: `${visitors}M+`, label: 'Annual Visitors' },
          { val: `${stores}+`, label: 'Global Brands' },
          { val: `$${impact}B`, label: 'Economic Impact' },
          { val: `${sqft}M`, label: 'Square Feet' },
        ].map((s, i) => (
          <React.Fragment key={s.label}>
            {i > 0 && <div className="stat-divider" />}
            <motion.div className="stat-block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <div className="stat-number">{s.val}</div>
              <div className="stat-desc">{s.label}</div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>

      {/* ======== EXPLORE MODULES ======== */}
      <section id="explore" className="landing-section">
        <motion.div className="section-header" {...fadeUp}>
          <span className="section-eyebrow">The Experience</span>
          <h2 className="section-title">Explore the <span>Deck</span></h2>
          <p className="section-subtitle">Dive into any section of the sales deck. A curated journey through everything Mall of America has to offer.</p>
        </motion.div>

        <div className="module-cards-grid">
          {moduleCards.map((card, i) => (
            <motion.div
              key={card.name}
              className="module-preview-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => navigate(card.path)}
              role="button"
              tabIndex={0}
            >
              <div className="preview-card-image">
                <img src={card.image} alt={card.name} loading="lazy" />
                <div className="preview-card-overlay" />
              </div>
              <div className="preview-card-content">
                <div className="preview-card-icon">{card.icon}</div>
                <div>
                  <h3 className="preview-card-name">{card.name}</h3>
                  <p className="preview-card-desc">{card.desc}</p>
                </div>
                <ChevronRight size={16} className="preview-card-arrow" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="section-action" {...fadeUp}>
          <button className="explore-all-btn" onClick={() => setDiscoveryOpen(true)}>
            <Compass size={16} />
            Open Full Deck
            <ArrowRight size={14} />
          </button>
        </motion.div>
      </section>

      {/* ======== VIDEO SECTION (Drone) ======== */}
      <VideoSection />

      {/* ======== WHY MOA ======== */}
      <section id="why-moa" className="landing-section">
        <motion.div className="section-header" {...fadeUp}>
          <span className="section-eyebrow">The Opportunity</span>
          <h2 className="section-title">Why <span>Mall of America</span></h2>
          <p className="section-subtitle">More than a property — a global platform where retail, lifestyle, and tourism converge.</p>
        </motion.div>

        <div className="diff-grid">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              className="diff-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="diff-card-top">
                <div className="diff-icon">{d.icon}</div>
                <div className="diff-metric">
                  <div className="diff-value">{d.value}</div>
                  <div className="diff-sub">{d.sub}</div>
                </div>
              </div>
              <h3 className="diff-title">{d.title}</h3>
              <p className="diff-text">{d.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======== PARTNER LOGOS ======== */}
      <section id="partners" className="partners-section">
        <motion.div {...fadeUp} className="partners-label">Trusted by the world's premier brands</motion.div>
        <motion.div {...fadeUp} className="partners-static-grid">
          {partners.slice(0, 12).map((p, i) => {
            const needsInvert = ['apple', 'samsung', 'starbucks', 'amazon', 'microsoft'].includes(p.name.toLowerCase());
            return (
              <div key={p.name} className={`partner-logo-box ${needsInvert ? 'logo-invert' : ''}`}>
                <img src={p.logo} alt={p.name} className="partner-logo-img" />
              </div>
            );
          })}
          <div className="partner-more-count">
            <span className="count-plus">+</span>
            <span className="count-number">520</span>
            <span className="count-text">More World-Class Brands</span>
          </div>
        </motion.div>
      </section>

      {/* ======== FINAL CTA ======== */}
      <section className="landing-cta-section">
        <motion.div className="landing-cta-inner" {...fadeUp}>
          <span className="section-eyebrow">Get Started</span>
          <h2 className="landing-cta-title">Ready to Be <span>Here?</span></h2>
          <p className="landing-cta-subtitle">Whether you're looking to lease, sponsor, host an event, or explore partnerships — let's talk.</p>
          <div className="landing-cta-buttons">
            <button className="lcta-primary" onClick={() => navigate('/inquiry')}>
              Request a Tour
              <ArrowRight size={16} />
            </button>
            <button className="lcta-secondary" onClick={() => navigate('/business')}>
              Business Opportunities
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ======== FOOTER ======== */}
      <footer className="landing-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/moa_logo.png" alt="Mall of America" className="footer-logo" />
            <p className="footer-address">60 E Broadway, Bloomington, MN 55425</p>
          </div>
          <div className="footer-links">
            <button onClick={() => navigate('/overview')}>Mall Experience</button>
            <button onClick={() => navigate('/business')}>Business Portal</button>
            <button onClick={() => navigate('/directory')}>Directory & Map</button>
            <button onClick={() => navigate('/inquiry')}>Contact</button>
          </div>
          <div className="footer-copy">© 2026 Mall of America. Interactive Sales Deck.</div>
        </div>
      </footer>

      {/* Discovery Hub */}
      <DiscoveryHub isOpen={discoveryOpen} onClose={() => setDiscoveryOpen(false)} />
    </div>
  );
};

export default LandingView;

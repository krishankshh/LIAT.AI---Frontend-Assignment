import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './VideoSection.css';

const VideoSection: React.FC = () => {
  const navigate = useNavigate();
  const [zoomTarget, setZoomTarget] = useState<'mall' | 'business' | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleMallEnter = () => {
    setZoomTarget('mall');
    setTimeout(() => {
      navigate('/overview');
    }, 1000);
  };

  const handleBusinessEnter = () => {
    setZoomTarget('business');
    setTimeout(() => {
      navigate('/business');
    }, 1000);
  };

  const stats = [
    { label: 'Retail', value: '520+', sub: 'Brands' },
    { label: 'Attractions', value: '25+', sub: 'Experiences' },
    { label: 'Dining', value: '60+', sub: 'Locations' }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="video-section-container"
      style={{ position: 'relative' }}
    >
      <div className="video-background">
        <motion.div style={{ y: videoY }} className="video-parallax">
          <video autoPlay muted loop playsInline className="video-element">
            <source src="/droneshot.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="video-vignette" />
        <div className="video-gradient-overlay" />
      </div>

      <div className="video-content-wrapper">
        <motion.div
          style={{ y: contentY }}
          animate={{ opacity: zoomTarget ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="video-content-stack"
        >
          <span className="video-subtitle">The Hub of Possibility</span>
          <h2 className="video-title">
            Experience <br /><span className="highlight-yellow">The Horizon.</span>
          </h2>
          <p className="video-description">
            Witness the architectural scale of North America's largest retail and entertainment complex. A journey that evolves at every turn.
          </p>
          
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="stat-card"
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Zoom Elements */}
        <div className="dual-cta-wrapper">
          <motion.button 
            onClick={handleMallEnter}
            animate={zoomTarget === 'mall' ? { scale: 100, borderRadius: 0, zIndex: 1000 } : { scale: 1 }}
            transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
            whileHover={!zoomTarget ? { scale: 1.05 } : {}}
            whileTap={!zoomTarget ? { scale: 0.95 } : {}}
            className="enter-directory-btn"
            style={{ opacity: zoomTarget === 'business' ? 0 : 1 }}
          >
            <motion.div 
              animate={zoomTarget === 'mall' ? { opacity: 0 } : { opacity: 1 }}
              className="btn-content"
            >
              Enter the Directory
              <div className="btn-icon-wrapper">
                <ArrowRight size={16} className="arrow-icon" />
              </div>
            </motion.div>
          </motion.button>

          <motion.button 
            onClick={handleBusinessEnter}
            animate={zoomTarget === 'business' ? { scale: 100, borderRadius: 0, zIndex: 1000 } : { scale: 1 }}
            transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
            whileHover={!zoomTarget ? { scale: 1.05 } : {}}
            whileTap={!zoomTarget ? { scale: 0.95 } : {}}
            className="business-cta-btn"
            style={{ opacity: zoomTarget === 'mall' ? 0 : 1 }}
          >
            <motion.div 
              animate={zoomTarget === 'business' ? { opacity: 0 } : { opacity: 1 }}
              className="btn-content"
            >
              Business Opportunities
              <div className="btn-icon-wrapper business">
                <ArrowRight size={16} className="arrow-icon" />
              </div>
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default VideoSection;

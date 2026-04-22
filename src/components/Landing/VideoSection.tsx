import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './VideoSection.css';

const VideoSection: React.FC = () => {
  const navigate = useNavigate();
  const [isZooming, setIsZooming] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleEnter = () => {
    setIsZooming(true);
    setTimeout(() => {
      navigate('/directory');
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
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

          <motion.button 
            onClick={handleEnter}
            animate={isZooming ? { scale: 100, borderRadius: 0 } : { scale: 1 }}
            transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
            whileHover={!isZooming ? { scale: 1.05 } : {}}
            whileTap={!isZooming ? { scale: 0.95 } : {}}
            className="enter-directory-btn"
          >
            <motion.div 
              animate={isZooming ? { opacity: 0 } : { opacity: 1 }}
              className="btn-content"
            >
              Enter the Directory
              <div className="btn-icon-wrapper">
                <ArrowRight size={16} className="arrow-icon" />
              </div>
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VideoSection;

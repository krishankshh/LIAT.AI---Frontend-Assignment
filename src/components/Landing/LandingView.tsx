import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import MallScrollExperience from '../MallScrollExperience/MallScrollExperience';
import NarrativeSlide from './NarrativeSlide';
import VideoSection from './VideoSection';
import './LandingView.css';

const LandingView: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="landing-page">
      <div 
        ref={scrollContainerRef} 
        className="scroll-container"
        style={{ position: 'relative' }}
      >
        <MallScrollExperience progress={smoothProgress}>
          <NarrativeSlide progress={smoothProgress} range={[0, 0, 0.05, 0.08]} align="center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}>
              <h1 className="hero-title">
                Not Just <br />A Mall.
              </h1>
              <p className="hero-subtitle">
                A World Inside.
              </p>
              <div className="scroll-indicator">
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="indicator-stack">
                  <div className="indicator-line" />
                  <span className="indicator-text">Scroll</span>
                </motion.div>
              </div>
            </motion.div>
          </NarrativeSlide>

          <NarrativeSlide progress={smoothProgress} range={[0.15, 0.22, 0.35, 0.42]} align="left">
            <h2 className="narrative-heading">
              5.6 Million <br /><span className="highlight-yellow">Square Feet.</span>
            </h2>
            <p className="narrative-text">
              An architectural marvel. A city of luxury, light, and unlimited discovery.
            </p>
            <div className="narrative-stats">
              <div className="stat-item">
                <div className="stat-value">520+</div>
                <div className="stat-label">Global Retailers</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">40M</div>
                <div className="stat-label">Annual Visitors</div>
              </div>
            </div>
          </NarrativeSlide>

          <NarrativeSlide progress={smoothProgress} range={[0.48, 0.55, 0.65, 0.72]} align="right">
            <h2 className="narrative-heading">
              Luxury. <br />Experience. <br /><span className="dimmed">Icons.</span>
            </h2>
            <p className="narrative-text right-aligned">
              From world-class brands to global attractions, the journey evolves at every turn.
            </p>
          </NarrativeSlide>

          <NarrativeSlide progress={smoothProgress} range={[0.78, 0.85, 0.9, 0.98]} align="center">
            <motion.div className="final-slide">
              <h2 className="hero-title small">
                Step Into <br /><span className="highlight-yellow">The Scale.</span>
              </h2>
              <p className="hero-subtitle tiny">
                Keep Scrolling to Explore
              </p>
            </motion.div>
          </NarrativeSlide>
        </MallScrollExperience>
      </div>

      <div className="video-overlap-section">
        <VideoSection />
      </div>

      <motion.div className="scroll-progress-bar" style={{ scaleX: scrollYProgress }} />
    </div>
  );
};

export default LandingView;

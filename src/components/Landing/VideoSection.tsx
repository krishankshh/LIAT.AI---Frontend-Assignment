import React, { useState, useRef, useEffect } from 'react';
import { m as motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './VideoSection.css';

const VideoSection: React.FC = () => {
  const navigate = useNavigate();
  const [zoomTarget, setZoomTarget] = useState<'mall' | 'business' | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Lazy-load the drone video only when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !videoLoaded && videoRef.current) {
          videoRef.current.src = '/droneshot.mp4';
          videoRef.current.load();
          setVideoLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [videoLoaded]);

  const handleMallEnter = () => {
    setZoomTarget('mall');
    setTimeout(() => navigate('/overview'), 1000);
  };

  const handleBusinessEnter = () => {
    setZoomTarget('business');
    setTimeout(() => navigate('/business'), 1000);
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="video-section-v2"
    >
      <div className="video-bg-layer">
        <motion.div style={{ y: videoY }} className="video-parallax-wrap">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="video-el"
            preload="none"
          />
        </motion.div>
        <div className="video-vig" />
        <div className="video-grad" />
      </div>

      <div className="video-content-v2">
        <motion.div
          style={{ y: contentY }}
          animate={{ opacity: zoomTarget ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="video-text-stack"
        >
          <span className="video-tag">The Hub of Possibility</span>
          <h2 className="video-heading">
            Experience <br /><span className="highlight-yellow">The Horizon.</span>
          </h2>
          <p className="video-desc">
            Witness the architectural scale of North America's largest retail and entertainment complex. A journey that evolves at every turn.
          </p>
        </motion.div>

        <div className="dual-cta-v2">
          <motion.button 
            onClick={handleMallEnter}
            animate={zoomTarget === 'mall' ? { scale: 100, borderRadius: 0, zIndex: 1000 } : { scale: 1 }}
            transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
            whileHover={!zoomTarget ? { scale: 1.03 } : {}}
            className="enter-btn mall-btn"
            style={{ opacity: zoomTarget === 'business' ? 0 : 1 }}
            aria-label="Enter the Mall Directory"
          >
            <motion.div 
              animate={zoomTarget === 'mall' ? { opacity: 0 } : { opacity: 1 }}
              className="btn-inner"
            >
              Enter the Directory
              <ArrowRight size={16} />
            </motion.div>
          </motion.button>

          <motion.button 
            onClick={handleBusinessEnter}
            animate={zoomTarget === 'business' ? { scale: 100, borderRadius: 0, zIndex: 1000 } : { scale: 1 }}
            transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
            whileHover={!zoomTarget ? { scale: 1.03 } : {}}
            className="enter-btn biz-btn"
            style={{ opacity: zoomTarget === 'mall' ? 0 : 1 }}
            aria-label="Explore business opportunities"
          >
            <motion.div 
              animate={zoomTarget === 'business' ? { opacity: 0 } : { opacity: 1 }}
              className="btn-inner"
            >
              Business Opportunities
              <ArrowRight size={16} />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default VideoSection;

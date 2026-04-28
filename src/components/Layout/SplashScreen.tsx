import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SplashScreen.css';

const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Reduced from 3500ms to 1800ms — still cinematic but saves ~1.7s on TTI/LCP
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="splash-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          role="presentation"
          aria-hidden="true"
        >
          {/* Atmospheric Glow */}
          <div className="splash-bg-glow" />

          {/* Logo with Cinematic Reveal */}
          <motion.div
            className="splash-logo-wrapper"
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ 
              duration: 1, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1
            }}
          >
            <img 
              src="/moa_logo.png" 
              alt="" 
              className="splash-logo"
              width="200"
              height="80"
            />
          </motion.div>

          {/* Minimalist Progress Indicator */}
          <motion.div 
            className="splash-loader-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="splash-loader-bar" />
          </motion.div>

          {/* Status Text */}
          <motion.div 
            className="splash-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Initializing Experience
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;

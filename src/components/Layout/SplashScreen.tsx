import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SplashScreen.css';

const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash screen after 3.5 seconds to allow for the reveal animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="splash-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Atmospheric Glow */}
          <div className="splash-bg-glow" />

          {/* Logo with Cinematic Reveal */}
          <motion.div
            className="splash-logo-wrapper"
            initial={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ 
              duration: 1.5, 
              ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for premium feel
              delay: 0.2
            }}
          >
            <img 
              src="/moa_logo.png" 
              alt="Mall of America" 
              className="splash-logo"
            />
          </motion.div>

          {/* Minimalist Progress Indicator */}
          <motion.div 
            className="splash-loader-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="splash-loader-bar" />
          </motion.div>

          {/* Status Text */}
          <motion.div 
            className="splash-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Initializing Experience
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;

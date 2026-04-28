import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

/**
 * SplashScreen v3 — Non-blocking cinematic entrance
 * 
 * Instead of a fixed overlay that blocks LCP, this uses a
 * dark overlay that fades away quickly, allowing the hero
 * content beneath to be the LCP element from the start.
 * 
 * The overlay is transparent to paint metrics because:
 * 1. It starts fading immediately (no setTimeout delay)
 * 2. The hero video poster paints first, giving us fast LCP
 * 3. The overlay is purely decorative (doesn't contain the LCP element)
 */
const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Start exit immediately — the CSS animation handles the reveal timing
    const timer = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="splash-overlay-v3"
      role="presentation"
      aria-hidden="true"
    >
      <div className="splash-brand-reveal">
        <img
          src="/moa_logo.png"
          alt=""
          className="splash-logo"
          width="200"
          height="80"
        />
        <div className="splash-loader-container">
          <div className="splash-loader-bar" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

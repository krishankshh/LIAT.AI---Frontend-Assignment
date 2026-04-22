import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import './NarrativeSlide.css';

interface NarrativeSlideProps {
  progress: MotionValue<number>;
  range: [number, number, number, number];
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

const NarrativeSlide: React.FC<NarrativeSlideProps> = ({ progress, range, children, align = "center" }) => {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, range, [40, 0, 0, -40]);

  const alignmentClass = `narrative-slide ${align}`;

  return (
    <motion.div 
      style={{ opacity, y }}
      className={alignmentClass}
    >
      <div className="narrative-content">
        {children}
      </div>
    </motion.div>
  );
};

export default NarrativeSlide;

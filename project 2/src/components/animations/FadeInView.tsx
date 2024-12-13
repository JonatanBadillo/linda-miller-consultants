import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeInView({ children, delay = 0, className = '' }: FadeInViewProps) {
  const { ref, controls, variants } = useScrollAnimation({ delay });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { useSlideAnimation } from '../../hooks/useScrollAnimation';

interface SlideInViewProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  className?: string;
}

export function SlideInView({
  children,
  direction = 'left',
  delay = 0,
  className = '',
}: SlideInViewProps) {
  // Para elementos que no necesitan animación, simplemente los renderizamos
  if (delay > 0.4) {
    return <div className={className}>{children}</div>;
  }

  const { ref, controls, variants } = useSlideAnimation(direction, { delay });

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
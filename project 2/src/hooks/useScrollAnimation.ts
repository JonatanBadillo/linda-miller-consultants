import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationConfig {
  threshold?: number;
  delay?: number;
}

export function useScrollAnimation({ threshold = 0.1, delay = 0 }: ScrollAnimationConfig = {}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return {
    ref,
    controls,
    variants: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          delay: delay * 0.5, // Reducimos el delay
          ease: 'easeOut',
        },
      },
    },
  };
}

export function useSlideAnimation(direction: 'left' | 'right', config: ScrollAnimationConfig = {}) {
  const { ref, controls } = useScrollAnimation(config);

  return {
    ref,
    controls,
    variants: {
      hidden: {
        opacity: 0,
        x: direction === 'left' ? -20 : 20, // Reducimos la distancia
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.4,
          delay: (config.delay || 0) * 0.5, // Reducimos el delay
          ease: 'easeOut',
        },
      },
    },
  };
}
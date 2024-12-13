import { useEffect } from 'react';
import { useAnimation, AnimationControls } from 'framer-motion';
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
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay,
          ease: [0.22, 1, 0.36, 1],
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
        x: direction === 'left' ? -50 : 50,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay: config.delay || 0,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
  };
}
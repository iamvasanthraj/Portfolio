import { useEffect } from 'react';
import { initScrollAnimations, initSmoothScroll } from '../utils/scrollAnimations';

export const useScrollAnimations = () => {
  useEffect(() => {
    // Initialize animations after component mount
    initScrollAnimations();
    initSmoothScroll();
    
    // Re-initialize when route changes
    const handleRouteChange = () => {
      setTimeout(() => {
        initScrollAnimations();
        initSmoothScroll();
      }, 100);
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
};
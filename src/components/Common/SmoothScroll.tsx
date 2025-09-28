'use client';

import { useEffect } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    // Enhanced smooth scrolling with custom easing
    const smoothScrollTo = (target: Element, duration: number = 1000) => {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      // Custom easing function for inertia effect
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    // Handle anchor links with smooth scrolling
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const targetElement = document.querySelector(target.hash);
        if (targetElement) {
          e.preventDefault();
          smoothScrollTo(targetElement, 1200); // Longer duration for more inertia
        }
      }
    };

    // Add event listener for anchor links
    document.addEventListener('click', handleAnchorClick);

    // Smooth scroll for programmatic scrolling
    const originalScrollTo = window.scrollTo.bind(window);
    
    const customScrollTo = (x: number | ScrollToOptions, y?: number) => {
      if (typeof x === 'object') {
        // If options object is passed, use native smooth behavior
        originalScrollTo({ ...x, behavior: 'smooth' });
      } else {
        // For numeric values, use custom smooth scrolling
        const targetY = typeof y === 'number' ? y : x;
        const currentY = window.pageYOffset;
        const distance = targetY - currentY;
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / 800, 1);
          const ease = progress < 0.5 ? 4 * progress * progress * progress : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;
          
          originalScrollTo(0, currentY + distance * ease);
          
          if (timeElapsed < 800) {
            requestAnimationFrame(animation);
          }
        };

        requestAnimationFrame(animation);
      }
    };

    // Override window.scrollTo
    (window as any).scrollTo = customScrollTo;

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.scrollTo = originalScrollTo;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Configure ScrollTrigger to NEVER interfere with native scrolling
if (typeof window !== 'undefined' && ScrollTrigger) {
  ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange', // Minimize refresh events
    ignoreMobileResize: true,
    // Disable automatic refresh that might interfere

  });

  // CRITICAL: Disable ScrollTrigger refresh until after user scrolls
  let hasUserScrolled = false;
  const originalRefresh = ScrollTrigger.refresh;

  // Override refresh to prevent interference
  ScrollTrigger.refresh = function () {
    if (!hasUserScrolled) {
      // Don't refresh until user has scrolled at least once
      return;
    }
    return originalRefresh.apply(this, arguments as any);
  };

  // Enable refresh after first scroll
  const enableRefresh = () => {
    if (!hasUserScrolled) {
      hasUserScrolled = true;
      // Now allow refresh
      originalRefresh.call(ScrollTrigger);
    }
  };

  // Enable after first scroll or delay
  window.addEventListener('scroll', enableRefresh, { passive: true, once: true });
  window.addEventListener('wheel', enableRefresh, { passive: true, once: true });
  window.addEventListener('touchmove', enableRefresh, { passive: true, once: true });

  // Fallback: enable after 2 seconds
  setTimeout(() => {
    if (!hasUserScrolled) {
      hasUserScrolled = true;
    }
  }, 2000);
}

interface ScrollAnimationOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  toggleActions?: string;
  once?: boolean;
}

export const useScrollAnimation = (
  elementRef: React.RefObject<HTMLElement>,
  animationProps: gsap.TweenVars,
  options: ScrollAnimationOptions = {}
) => {
  const animationRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const defaultOptions: ScrollAnimationOptions = {
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      ...options
    };

    // DELAY ScrollTrigger animation creation to allow native scroll first
    const delay = 500; // Wait 500ms before creating ScrollTrigger animations

    const timeoutId = setTimeout(() => {
      if (!elementRef.current) return;

      // Create the animation
      animationRef.current = gsap.fromTo(
        elementRef.current,
        {
          ...animationProps.from
        },
        {
          ...animationProps.to,
          scrollTrigger: {
            trigger: elementRef.current,
            ...defaultOptions,
            // Disable refresh on create
            refreshPriority: -1,
          }
        }
      );
    }, delay);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [elementRef, animationProps, options]);

  return animationRef;
};
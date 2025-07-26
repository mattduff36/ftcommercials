'use client';

import { ReactNode, useRef, useEffect, useState } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-in';
  delay?: number;
  threshold?: number;
  className?: string;
  id?: string;
}

export default function AnimatedSection({
  children,
  animation = 'fade',
  delay = 0,
  threshold = 0.1,
  className = '',
  id,
}: AnimatedSectionProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const currentRef = sectionRef.current;

    // On mobile, show content immediately to avoid issues
    if (isMobile) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Fallback: ensure content is visible after 2 seconds
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      clearTimeout(fallbackTimer);
    };
  }, [threshold, isMobile]);

  const getAnimationClasses = (): string => {
    const baseClasses = 'transition-all duration-700';
    const delayClass = delay ? `delay-${delay}` : '';

    if (!isVisible) {
      switch (animation) {
        case 'fade':
          return `${baseClasses} opacity-0`;
        case 'slide-up':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'slide-in':
          return `${baseClasses} opacity-0 -translate-x-8`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }

    return `${baseClasses} ${delayClass} opacity-100 translate-y-0 translate-x-0`;
  };

  return (
    <div ref={sectionRef} id={id} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
}

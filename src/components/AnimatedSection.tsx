import { ReactNode, useRef, useEffect, useState } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-in';
  delay?: number;
  threshold?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation = 'fade',
  delay = 0,
  threshold = 0.1,
  className = '',
}: AnimatedSectionProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

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
    <div ref={sectionRef} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
} 
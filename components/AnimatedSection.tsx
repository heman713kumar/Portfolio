import React from 'react';
import { useAnimatedSection } from '../hooks/useAnimatedSection';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
  const [ref, isVisible] = useAnimatedSection<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className || ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

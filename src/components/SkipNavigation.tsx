'use client';

import React from 'react';

const SkipNavigation: React.FC = () => {
  const handleSkipClick = () => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.focus();
      mainElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleSkipClick}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-brand-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-medium focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-accent-light"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  );
};

export default SkipNavigation;

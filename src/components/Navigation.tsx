'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    const sectionId = href.replace('#', '');
    return activeSection === sectionId;
  };

  const handleLinkClick = (href: string) => {
    closeMenu();
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'facilities', 'about', 'contact'];
      const navbarHeight = 80; // h-20 = 80px
      const scrollPosition = window.scrollY + navbarHeight + 50; // Add offset for better detection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 gap-4">
          {/* Logo with animations */}
          <button
            onClick={() => handleLinkClick('#home')}
            className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-lg p-2 group transition-all duration-300 hover:scale-105"
          >
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/Logo-trans-bg.png"
                alt="F.T. Commercials Logo"
                fill
                sizes="48px"
                className="object-contain transition-transform duration-300 group-hover:rotate-3"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-left">
                <span className="text-lg font-bold text-brand-black-900 group-hover:text-brand-accent transition-colors duration-300">
                  F.T. Commercials LTD
                </span>
                <p className="text-sm text-brand-grey-500 group-hover:text-brand-accent-light transition-colors duration-300">
                  HGV & Commercial Vehicle Specialists
                </p>
              </div>
            </div>
            <div className="sm:hidden">
              <div className="text-left">
                <span className="text-lg font-bold text-brand-black-900 group-hover:text-brand-accent transition-colors duration-300">
                  F.T. Commercials
                </span>
                <p className="text-sm text-brand-grey-500 group-hover:text-brand-accent-light transition-colors duration-300">
                  Commercial Vehicle Repairs
                </p>
              </div>
            </div>
          </button>

          {/* Mobile Phone Button */}
          <a
            href="tel:01777871493"
            className="md:hidden flex items-center justify-center h-12 px-3 rounded-lg bg-brand-light hover:bg-brand-DEFAULT text-brand-black-900 transition-all duration-300 mr-2 focus:outline-none focus:ring-2 focus:ring-brand-accent"
            aria-label="Call office: 01777 871493"
            title="Call office: 01777 871493"
          >
            <span className="sr-only">Call office: 01777 871493</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              role="img"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>

          {/* Desktop Navigation with enhanced animations */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navigationItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={`text-base font-medium transition-all duration-300 hover:text-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-md px-3 py-2 relative overflow-hidden group ${
                  isActiveLink(item.href)
                    ? 'text-brand-accent'
                    : 'text-brand-black-900 hover:text-brand-accent'
                }`}
                role="menuitem"
                aria-current={isActiveLink(item.href) ? 'page' : undefined}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-brand-accent-light bg-opacity-10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-md"></div>
                {/* Active indicator */}
                {isActiveLink(item.href) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent animate-scale-in"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button with enhanced animation */}
          <button
            ref={menuButtonRef}
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-lg bg-brand-accent hover:bg-brand-accent-dark focus:outline-none focus:ring-2 focus:ring-brand-accent-light focus:ring-offset-2 transition-all duration-300 shadow-md flex-shrink-0 hover:scale-110 hover:shadow-lg"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-1 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`absolute top-2.5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute top-4 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu with improved animations */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white border-t border-brand-grey-200 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="mobile-menu-button"
        >
          <div className="py-6 space-y-3">
            {navigationItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={`flex items-center w-full px-6 py-4 text-lg font-medium transition-all duration-300 hover:bg-brand-light hover:text-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-inset rounded-lg transform hover:translate-x-2 hover:scale-105 ${
                  isActiveLink(item.href)
                    ? 'text-brand-accent bg-brand-accent-light bg-opacity-10 border-l-4 border-brand-accent scale-105'
                    : 'text-brand-black-900'
                } ${isMenuOpen ? 'animate-fade-in-left' : ''}`}
                role="menuitem"
                aria-current={isActiveLink(item.href) ? 'page' : undefined}
                tabIndex={isMenuOpen ? 0 : -1}
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.3s ease-out ${index * 100}ms`,
                }}
              >
                {item.label}
              </button>
            ))}

            {/* Emergency Contact in Mobile Menu */}
            <div
              className="mt-6 px-6 py-4 bg-brand-accent-light bg-opacity-10 rounded-lg"
              aria-labelledby="emergency-contact-heading"
            >
              <p
                id="emergency-contact-heading"
                className="text-sm font-medium text-brand-black-900 mb-2"
              >
                Contact Us
              </p>
              <a
                href="tel:01777871493"
                className="flex items-center text-brand-accent font-bold text-lg focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-md px-2 py-1 mb-2"
                aria-label="Call office: 01777 871493"
                title="Call office: 01777 871493"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                  aria-hidden="true"
                  role="img"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                01777 871493
              </a>
              <a
                href="tel:07967176567"
                className="flex items-center text-brand-accent font-bold text-lg focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-md px-2 py-1"
                aria-label="Call mobile: 07967 176567"
                title="Call mobile: 07967 176567"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                  aria-hidden="true"
                  role="img"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                07967 176567
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

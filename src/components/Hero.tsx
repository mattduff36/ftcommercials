'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(1).fill(false));
  const [isVisible, setIsVisible] = useState(true); // Start visible immediately

  const heroImages = ['/building.jpg'];

  // Trigger content animations after a shorter delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Much shorter delay
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance slides every 5 seconds (if we had multiple images)
  useEffect(() => {
    if (!isAutoPlaying || heroImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroImages.length]);

  // Handle image load completion
  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(index);
  };

  return (
    <section id="home" className="relative h-screen md:h-[72vh] lg:h-[80vh] w-full overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <Image
              src={image}
              alt={`F.T. Commercials Workshop Hero Image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-1000 ease-in-out"
              priority={index === 0}
              quality={index === 0 ? 90 : 80}
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
              onLoad={() => handleImageLoad(index)}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            {/* Loading placeholder for non-priority images */}
            {!imagesLoaded[index] && index !== 0 && (
              <div className="absolute inset-0 bg-brand-black-900 animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {/* Dark Overlay with subtle animation */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-1000"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center pb-32 md:pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo with floating animation */}
            <div
              className={`mb-4 md:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="relative w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto animate-float">
                <Image
                  src="/Logo-trans-bg.png"
                  alt="F.T. Commercials Logo"
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-110"
                  priority
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                  quality={95}
                />
              </div>
            </div>

            {/* Animated heading */}
            <h1
              className={`text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 md:mb-6 leading-tight transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              F.T. <span className="text-brand-accent animate-pulse-soft">Commercials</span> LTD
            </h1>
            <div
              className={`inline-block bg-brand-accent text-white text-xs md:text-base font-bold px-3 py-1 rounded-full mb-3 md:mb-4 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 scale-100 animate-bounce-entrance' : 'opacity-0 scale-50'
              }`}
            >
              For All Your Servicing Needs
            </div>

            {/* Animated subtitle */}
            <p
              className={`text-base md:text-xl lg:text-2xl text-white mb-4 md:mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span className="font-semibold">
                Your One Stop Shop for HGV and Commercial Vehicle Repairs
              </span>
            </p>

            {/* Animated buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-2 md:gap-4 justify-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="group relative overflow-hidden flex items-center justify-center bg-brand-accent hover:bg-brand-accent-dark text-white px-4 md:px-8 py-2 md:py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-brand-accent-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="group relative overflow-hidden flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-black-900 px-4 md:px-8 py-2 md:py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="relative z-10">View Services</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Dot Indicators (only show if multiple images) */}
      {heroImages.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-brand-accent scale-125 animate-pulse-soft'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-70 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Contact Info Banner with smooth animations */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand-black-900 bg-opacity-90 text-white py-3 md:py-4 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-xs md:text-sm">
            <div className="flex items-center space-x-2 transition-all duration-300 hover:scale-105">
              <span className="text-brand-accent">
                <Phone size={16} />
              </span>
              <a
                href="tel:01777871493"
                className="hover:text-brand-accent transition-colors duration-300"
              >
                01777 871493
              </a>
              <span className="text-xs text-brand-grey-300">(Office)</span>
            </div>
            <div className="flex items-center space-x-2 transition-all duration-300 hover:scale-105">
              <span className="text-brand-accent">
                <Phone size={16} />
              </span>
              <a
                href="tel:07967176567"
                className="hover:text-brand-accent transition-colors duration-300"
              >
                07967 176567
              </a>
              <span className="text-xs text-brand-grey-300">(Mobile)</span>
            </div>
            <div className="flex items-center space-x-2 transition-all duration-300 hover:scale-105">
              <span className="text-brand-accent">
                <Mail size={16} />
              </span>
              <a
                href="mailto:ftcommercials@gmail.com"
                className="hover:text-brand-accent transition-colors duration-300"
              >
                ftcommercials@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2 transition-all duration-300 hover:scale-105">
              <span className="text-brand-accent">
                <MapPin size={16} />
              </span>
              <span>Ollerton Road, Newark</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
}

export default function Hero({
  title = 'Your One Stop Shop for HGV and Commercial Vehicle Repairs',
  subtitle = 'Fully equipped 5-bay workshop with inground brake rollers in Newark',
  showCTA = true,
}: HeroProps): JSX.Element {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Placeholder images - replace with actual workshop images
  const backgroundImages = [
    '/images/hero-bg-1.jpg',
    '/images/hero-bg-2.jpg',
    '/images/hero-bg-3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(current => (current + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Image
              src={image}
              alt={`F.T. Commercials workshop ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">{subtitle}</p>

        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-200"
            >
              Our Services
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-accent mb-4">F.T. Commercials LTD</h3>
            <p className="text-brand-grey-300 text-sm leading-relaxed">
              Your one stop shop for all HGV and commercial vehicle repairs and maintenance.
              Professional service with 5-bay fully equipped workshop.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              <a
                href="https://www.facebook.com/profile.php?id=61561442176165&locale=en_GB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-grey-400 hover:text-brand-accent transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-accent mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <div>
                  <a
                    href="tel:01777871493"
                    className="hover:text-brand-accent transition-colors duration-300"
                  >
                    01777 871493
                  </a>
                  <span className="text-xs text-brand-grey-400 block">Office</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <div>
                  <a
                    href="tel:07967176567"
                    className="hover:text-brand-accent transition-colors duration-300"
                  >
                    07967 176567
                  </a>
                  <span className="text-xs text-brand-grey-400 block">Mobile</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <a
                  href="mailto:ftcommercials@gmail.com"
                  className="hover:text-brand-accent transition-colors duration-300"
                >
                  ftcommercials@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-1" />
                <div>
                  <p>Ollerton Road</p>
                  <p>Newark, Nottinghamshire</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-accent mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-sm text-brand-grey-300">7:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <div>
                  <p className="font-medium">Saturday</p>
                  <p className="text-sm text-brand-grey-300">By Appointment</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-sm text-brand-grey-300">Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-accent mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block hover:text-brand-accent transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block hover:text-brand-accent transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block hover:text-brand-accent transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block hover:text-brand-accent transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                href="/accessibility"
                className="block hover:text-brand-accent transition-colors duration-300"
              >
                Accessibility
              </Link>
            </nav>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 pt-8 border-t border-brand-grey-700 text-center">
          <div className="bg-brand-accent-dark bg-opacity-20 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-brand-accent mb-2">
              Need Professional Transport Services?
            </h3>
            <p className="text-brand-grey-300 mb-4">
              L.W. Barker Transport Services LTD - Complete transport solutions from 3.5-ton vans to 44-ton articulated lorries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01636402360"
                className="bg-brand-accent hover:bg-brand-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Call Now: 01636 402360
              </a>
              <a
                href="https://lwbarker.mpdee.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Visit Website
              </a>
            </div>
            <div className="mt-4 text-sm text-brand-grey-400">
              <p>24/7 Emergency Transport Available • UK-Wide Coverage • Family-run since 2004</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-brand-grey-700 text-center">
          <p className="text-brand-grey-400 text-sm">
            Website developed by{' '}
            <a
              href="https://mpdee.co.uk"
              className="text-brand-accent hover:text-brand-accent-light transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              mpdee.co.uk
            </a>{' '}
            © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

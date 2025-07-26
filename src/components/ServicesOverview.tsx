import React from 'react';
import Link from 'next/link';
import { Wrench, Zap, Shield, Paintbrush, Truck, Settings } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'PMI Testing',
      description:
        'Professional PMI inspections and testing services to keep your vehicles compliant and roadworthy.',
      features: [
        'Comprehensive inspections',
        'Traffic Commissioner guidelines',
        'Detailed reporting',
      ],
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Brake Testing',
      description:
        'State-of-the-art inground brake rollers for accurate brake testing and certification.',
      features: ['Inground brake rollers', 'Loaded brake tests', 'Loading trailer available'],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Electrical Diagnostics',
      description:
        'Advanced electrical diagnostic investigation and solutions for all commercial vehicles.',
      features: ['Diagnostic investigation', 'Electrical solutions', 'Modern equipment'],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Welding & Fabrication',
      description:
        'Expert welding and fabrication services for commercial vehicle repairs and modifications.',
      features: ['Professional welding', 'Custom fabrication', 'Structural repairs'],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Tail Lift Repairs',
      description:
        'Specialized tail lift repair and maintenance services to keep your loading equipment operational.',
      features: ['Tail lift repairs', 'Maintenance services', 'Emergency callouts'],
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: 'Spray Painting & Bodywork',
      description:
        'Professional spray painting and bodywork repairs to restore your vehicles to excellent condition.',
      features: ['Spray painting', 'Bodywork repairs', 'Quality finishes'],
    },
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black-900 mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-brand-grey-600 max-w-3xl mx-auto">
            Comprehensive HGV and commercial vehicle repair services from our fully equipped 5-bay
            workshop
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent-light bg-opacity-10 rounded-full mx-auto mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <div className="text-brand-accent group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-brand-black-900 mb-4">{service.title}</h3>
                <p className="text-brand-grey-600 leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-brand-grey-600"
                    >
                      <div className="w-2 h-2 bg-brand-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="#services" 
            className="bg-brand-accent hover:bg-brand-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
          >
            View All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

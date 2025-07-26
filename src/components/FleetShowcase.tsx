import React from 'react';
import Image from 'next/image';
import { CheckCircle, MapPin, Clock, Users } from 'lucide-react';

const FleetShowcase: React.FC = () => {
  const workshopFeatures = [
    {
      title: '5-Bay Workshop',
      description:
        'Fully equipped modern workshop bays capable of handling all commercial vehicle types',
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: 'Inground Brake Rollers',
      description:
        'Newly installed brake testing equipment meeting Traffic Commissioner Guidelines',
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: 'Loading Trailer Available',
      description: 'Optional loading trailer for comprehensive loaded brake testing services',
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: 'Spacious Parking',
      description: '1-acre site with parking capacity for 20-30 commercial vehicles',
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: 'Modern Equipment',
      description: 'Latest diagnostic tools and workshop equipment for professional service',
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: 'Skilled Team',
      description:
        'Experienced technicians with expertise in all aspects of commercial vehicle repair',
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  const stats = [
    {
      icon: <MapPin className="w-8 h-8" />,
      value: '1 Acre',
      label: 'Workshop Site',
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: '20-30',
      label: 'Vehicle Capacity',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: '7am-5pm',
      label: 'Opening Hours',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black-900 mb-6">
            Our Workshop Facilities
          </h2>
          <p className="text-xl text-brand-grey-600 max-w-3xl mx-auto">
            State-of-the-art facilities designed for comprehensive commercial vehicle servicing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Workshop Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/building.jpg"
                alt="F.T. Commercials Workshop Facility"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-brand-accent text-white px-4 py-2 rounded-lg font-semibold">
                5-Bay Fully Equipped Workshop
              </div>
            </div>
          </div>

          {/* Workshop Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-black-900 mb-6">
                Professional Workshop Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {workshopFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 rounded-lg hover:bg-brand-light transition-colors duration-300"
                  >
                    <div className="text-brand-accent flex-shrink-0 mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-brand-black-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-brand-grey-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-brand-grey-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-brand-accent-light bg-opacity-10 rounded-full mx-auto mb-3">
                    <div className="text-brand-accent">{stat.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-brand-black-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-brand-grey-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetShowcase;

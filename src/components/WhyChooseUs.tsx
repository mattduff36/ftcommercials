import React from 'react';
import { Clock, MapPin, Users, Award, Wrench, Truck } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: '5-Bay Fully Equipped Workshop',
      description:
        'Our modern 5-bay workshop is fully equipped with the latest tools and technology to handle any commercial vehicle repair.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Inground Brake Rollers',
      description:
        'Newly installed inground brake rollers ensure brake tests are carried out in line with Traffic Commissioner Guidelines.',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: '1 Acre Site',
      description:
        'Our spacious 1-acre site in Tuxford provides ample parking for 20-30 vehicles, ensuring convenient access.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Extended Opening Hours',
      description:
        'Open 7am - 5pm to accommodate your busy schedule and minimize vehicle downtime.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Skilled Technicians',
      description:
        'Our experienced technicians have expertise across all areas of commercial vehicle maintenance and repair.',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'One Stop Shop',
      description:
        'Complete range of services from PMI testing to spray painting - everything you need under one roof.',
    },
  ];

  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black-900 mb-6">
            Why Choose F.T. Commercials?
          </h2>
          <p className="text-xl text-brand-grey-600 max-w-3xl mx-auto">
            We provide trusted and reliable commercial vehicle services you can count on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 group text-center"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div>
                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent-light bg-opacity-10 rounded-full mx-auto mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <div className="text-brand-accent group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-brand-black-900 mb-4">{feature.title}</h3>
                <p className="text-brand-grey-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

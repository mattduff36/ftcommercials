import Hero from '@/components/Hero';
import FleetShowcase from '@/components/FleetShowcase';
import AnimatedSection from '@/components/AnimatedSection';
import BackToTop from '@/components/BackToTop';

interface Equipment {
  name: string;
  description: string;
  specifications: string[];
}

const workshopEquipment: Equipment[] = [
  {
    name: 'Inground Brake Rollers',
    description:
      'State-of-the-art brake testing equipment for comprehensive vehicle safety assessments.',
    specifications: [
      'Suitable for all commercial vehicle types',
      'Digital readout system',
      'Load simulation capability',
      'Meets DVSA standards',
      'Automatic weight measurement',
    ],
  },
  {
    name: 'Diagnostic Equipment',
    description: 'Advanced diagnostic tools for identifying and resolving vehicle issues.',
    specifications: [
      'Multi-brand compatibility',
      'Real-time data analysis',
      'Fault code reading and clearing',
      'System programming capability',
      'Wireless connectivity',
    ],
  },
  {
    name: 'Welding Equipment',
    description: 'Professional-grade welding and fabrication tools.',
    specifications: [
      'MIG and TIG welding capability',
      'Plasma cutting system',
      'Mobile welding units',
      'High-capacity power supply',
      'Safety equipment included',
    ],
  },
  {
    name: 'Vehicle Lifts',
    description: 'Heavy-duty lifting equipment for safe and efficient vehicle maintenance.',
    specifications: [
      'Multiple lifting points',
      'Variable height adjustment',
      'Safety locking mechanisms',
      'High weight capacity',
      'Regular safety certification',
    ],
  },
];

export default function FleetPage(): JSX.Element {
  return (
    <>
      <Hero
        title="Our Workshop Facilities"
        subtitle="State-of-the-art 5-bay workshop equipped for all commercial vehicle needs"
        showCTA={false}
      />

      <AnimatedSection animation="fade" className="py-16">
        <FleetShowcase />
      </AnimatedSection>

      <AnimatedSection animation="slide-up" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Workshop Equipment</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our workshop is equipped with the latest technology and tools to provide comprehensive
              repair and maintenance services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshopEquipment.map(equipment => (
              <div
                key={equipment.name}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold mb-2">{equipment.name}</h3>
                <p className="text-gray-600 mb-4">{equipment.description}</p>
                <ul className="space-y-2">
                  {equipment.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg
                        className="h-5 w-5 text-orange-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Site Facilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our 1-acre site provides ample space for vehicle storage and maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Parking Capacity</h3>
              <p className="text-gray-600">
                Secure parking for 20-30 vehicles with easy access and maneuvering space
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Workshop Space</h3>
              <p className="text-gray-600">
                5 fully equipped service bays capable of handling multiple vehicles simultaneously
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Loading Areas</h3>
              <p className="text-gray-600">
                Dedicated areas for loading and unloading, including trailer brake testing facilities
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <BackToTop />
    </>
  );
} 
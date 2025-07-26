import Image from 'next/image';

interface FacilityFeature {
  title: string;
  description: string;
}

export default function FleetShowcase(): JSX.Element {
  const facilities: FacilityFeature[] = [
    {
      title: '5-Bay Workshop',
      description: 'Fully equipped workshop capable of handling multiple vehicles simultaneously',
    },
    {
      title: 'Brake Testing',
      description: 'Newly installed inground brake rollers for comprehensive brake testing',
    },
    {
      title: 'Loading Capability',
      description: 'Option for loading trailers to perform loaded brake tests',
    },
    {
      title: 'Spacious Site',
      description: '1-acre site with parking capacity for 20-30 vehicles',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Workshop Facilities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            State-of-the-art facilities equipped to handle all your commercial vehicle needs
          </p>
        </div>

        {/* Workshop Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/workshop-1.jpg"
              alt="F.T. Commercials workshop bay"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-44 md:h-[182px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/workshop-2.jpg"
                alt="Brake testing equipment"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-44 md:h-[182px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/workshop-3.jpg"
                alt="Workshop equipment"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-44 md:h-[182px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/workshop-4.jpg"
                alt="Vehicle maintenance"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-44 md:h-[182px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/workshop-5.jpg"
                alt="Workshop overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Facility Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map(facility => (
            <div
              key={facility.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our modern workshop is equipped with the latest diagnostic and repair equipment, ensuring we
            can handle everything from routine maintenance to complex repairs for all types of
            commercial vehicles.
          </p>
        </div>
      </div>
    </section>
  );
} 
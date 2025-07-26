import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

function ServiceCard({ title, description, icon, href }: ServiceCardProps): JSX.Element {
  return (
    <Link
      href={href}
      className="group flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <div className="text-orange-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}

export default function ServicesOverview(): JSX.Element {
  const services = [
    {
      title: 'PMI & MOT Inspections',
      description: 'Regular inspections and MOT preparations to ensure your vehicles remain compliant.',
      icon: '🔍',
      href: '/services#inspections',
    },
    {
      title: 'Electrical Diagnostics',
      description: 'Advanced diagnostic services to identify and resolve electrical system issues.',
      icon: '⚡',
      href: '/services#diagnostics',
    },
    {
      title: 'Welding & Fabrication',
      description: 'Professional welding and fabrication services for repairs and modifications.',
      icon: '🔧',
      href: '/services#welding',
    },
    {
      title: 'Tail Lift Repairs',
      description: 'Specialized repairs and maintenance for all types of tail lifts.',
      icon: '⬆️',
      href: '/services#tail-lifts',
    },
    {
      title: 'Brake Testing',
      description: 'Comprehensive brake testing using our inground brake rollers.',
      icon: '🛑',
      href: '/services#brakes',
    },
    {
      title: 'Body Work & Spray Painting',
      description: 'Professional body repairs and spray painting services.',
      icon: '🎨',
      href: '/services#bodywork',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive repair and maintenance services for all types of commercial vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
} 
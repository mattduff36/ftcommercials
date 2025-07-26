import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import AnimatedSection from '@/components/AnimatedSection';
import BackToTop from '@/components/BackToTop';

interface ServiceDetails {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

const services: ServiceDetails[] = [
  {
    id: 'inspections',
    title: 'PMI & MOT Inspections',
    description:
      'Regular inspections and MOT preparations to ensure your vehicles remain compliant with all regulations.',
    features: [
      'Comprehensive vehicle inspections',
      'Pre-MOT checks and preparations',
      'Brake testing with inground rollers',
      'Compliance with Traffic Commissioner Guidelines',
      'Documentation and certification',
    ],
    icon: '🔍',
  },
  {
    id: 'diagnostics',
    title: 'Electrical Diagnostics',
    description:
      'Advanced diagnostic services to identify and resolve electrical system issues in commercial vehicles.',
    features: [
      'State-of-the-art diagnostic equipment',
      'Electrical fault finding',
      'System repairs and updates',
      'Component testing and replacement',
      'Full system health checks',
    ],
    icon: '⚡',
  },
  {
    id: 'welding',
    title: 'Welding & Fabrication',
    description:
      'Professional welding and fabrication services for repairs, modifications, and custom solutions.',
    features: [
      'Structural repairs',
      'Custom fabrication work',
      'Body panel repairs',
      'Chassis modifications',
      'Quality certified welding',
    ],
    icon: '🔧',
  },
  {
    id: 'tail-lifts',
    title: 'Tail Lift Repairs',
    description:
      'Specialized repairs and maintenance for all types of commercial vehicle tail lifts.',
    features: [
      'Tail lift servicing',
      'Hydraulic system repairs',
      'Safety inspections',
      'Parts replacement',
      'Load testing',
    ],
    icon: '⬆️',
  },
  {
    id: 'brakes',
    title: 'Brake Testing',
    description:
      'Comprehensive brake testing using our newly installed inground brake rollers.',
    features: [
      'Loaded brake testing',
      'Roller brake testing',
      'Brake component inspection',
      'Performance analysis',
      'Safety certification',
    ],
    icon: '🛑',
  },
  {
    id: 'bodywork',
    title: 'Body Work & Spray Painting',
    description:
      'Professional body repairs and spray painting services for commercial vehicles.',
    features: [
      'Accident damage repairs',
      'Full resprays',
      'Paintwork touch-ups',
      'Rust treatment',
      'Color matching service',
    ],
    icon: '🎨',
  },
];

async function handleServiceRequest(data: any): Promise<void> {
  // This will be implemented in the email integration task
  console.log('Service request submitted:', data);
}

export default function ServicesPage(): JSX.Element {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive repair and maintenance services for all types of commercial vehicles"
        showCTA={false}
      />

      <AnimatedSection animation="fade" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of services to keep your commercial vehicles running safely and
              efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
                href={`#${service.id}`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="slide-up" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Service</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out our service request form and we'll get back to you as soon as possible
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ServiceRequestForm onSubmit={handleServiceRequest} />
          </div>
        </div>
      </AnimatedSection>

      <BackToTop />
    </>
  );
} 
import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import BackToTop from '@/components/BackToTop';

interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: 'Team Lead',
    role: 'Senior Technician',
    expertise: [
      'Over 20 years of commercial vehicle experience',
      'Specialized in electrical diagnostics',
      'Certified brake testing specialist',
      'Expert in vehicle compliance and regulations',
    ],
  },
  {
    name: 'Workshop Team',
    role: 'Skilled Technicians',
    expertise: [
      'Combined decades of industry experience',
      'Regular training and certification updates',
      'Diverse skill set covering all repair types',
      'Commitment to quality and safety',
    ],
  },
];

const companyValues = [
  {
    title: 'Quality Service',
    description:
      'We are committed to delivering the highest quality repairs and maintenance services, ensuring your vehicles are safe and reliable.',
  },
  {
    title: 'Customer Focus',
    description:
      'Our customers are at the heart of everything we do. We strive to exceed expectations and build long-lasting relationships.',
  },
  {
    title: 'Technical Excellence',
    description:
      'We invest in the latest equipment and continuous training to maintain our position as industry leaders in commercial vehicle repairs.',
  },
  {
    title: 'Reliability',
    description:
      'When you need us, we're there. Our rapid response and efficient service keep your vehicles on the road.',
  },
];

export default function AboutPage(): JSX.Element {
  return (
    <>
      <Hero
        title="About F.T. Commercials"
        subtitle="Your trusted partner for commercial vehicle repairs and maintenance"
        showCTA={false}
      />

      <AnimatedSection animation="fade" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              F.T. Commercials LTD has established itself as a leading provider of commercial vehicle
              repairs and maintenance services in the Newark area. Our state-of-the-art 5-bay workshop
              and experienced team are dedicated to keeping your vehicles running safely and
              efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional commercial vehicle repair and maintenance services that ensure the
                safety, reliability, and efficiency of our customers' fleets. We achieve this through
                technical excellence, customer focus, and a commitment to quality in everything we do.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and respected commercial vehicle repair service in the region,
                known for our expertise, reliability, and outstanding customer service. We aim to grow
                while maintaining the personal touch that sets us apart.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="slide-up" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our skilled technicians bring decades of combined experience in commercial vehicle repairs
              and maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map(member => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-orange-600 mb-4">{member.role}</p>
                <ul className="space-y-2">
                  {member.expertise.map((item, index) => (
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
                      {item}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in delivering exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map(value => (
              <div key={value.title} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <BackToTop />
    </>
  );
} 
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import FleetShowcase from '@/components/FleetShowcase';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import AnimatedSection from '@/components/AnimatedSection';
import BackToTop from '@/components/BackToTop';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'F.T. Commercials LTD | HGV & Commercial Vehicle Repairs',
  description:
    'F.T. Commercials LTD - Your one stop shop for all HGV and commercial vehicle repairs and maintenance. 5-bay fully equipped workshop with inground brake rollers in Newark.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'F.T. Commercials LTD | HGV & Commercial Vehicle Repairs',
    description:
      'F.T. Commercials LTD - Your one stop shop for all HGV and commercial vehicle repairs and maintenance. 5-bay fully equipped workshop with inground brake rollers in Newark.',
    url: 'https://ftcommercialslimited.com',
  },
};

export default function HomePage(): JSX.Element {
  return (
    <>
      <StructuredData />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Services Overview */}
      <AnimatedSection animation="fade" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ServicesOverview />
        </div>
      </AnimatedSection>

      {/* Fleet Showcase */}
      <AnimatedSection animation="slide-up" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FleetShowcase />
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection animation="fade" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <WhyChooseUs />
        </div>
      </AnimatedSection>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black-900 mb-6">
              About F.T. Commercials
            </h2>
            <p className="text-xl text-brand-grey-600 max-w-3xl mx-auto">
              F.T. Commercials LTD is your trusted partner for all HGV and commercial vehicle repairs and maintenance. 
              Based in Newark, we operate a fully equipped 5-bay workshop with state-of-the-art facilities including 
              inground brake rollers for comprehensive testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-brand-black-900 mb-4">Our Workshop</h3>
              <p className="text-brand-grey-600 leading-relaxed mb-4">
                Our 1-acre site provides ample parking for 20-30 vehicles, with a 5-bay fully equipped workshop 
                featuring newly installed inground brake rollers that ensure brake tests are carried out in line 
                with Traffic Commissioner guidelines.
              </p>
              <ul className="space-y-2 text-brand-grey-600">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-accent mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  5-bay fully equipped workshop
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-accent mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Inground brake rollers for testing
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-accent mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Ample parking for 20-30 vehicles
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-accent mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Open 7am - 5pm Monday to Friday
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-brand-black-900 mb-4">Our Expertise</h3>
              <p className="text-brand-grey-600 leading-relaxed mb-4">
                Our skilled technicians have a wide range of expertise covering all aspects of commercial vehicle 
                maintenance and repair, ensuring your vehicles are safe, reliable, and compliant.
              </p>
              <ul className="space-y-2 text-brand-grey-600">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-accent mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  PMI inspections and testing
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-accent mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Electrical diagnostics and solutions
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-accent mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Welding and fabrication
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-brand-accent mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Tail lift repairs and maintenance
                </li>
              </ul>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-brand-black-900 mb-4">Our Team</h3>
            <p className="text-brand-grey-600 leading-relaxed mb-4">
              Our experienced technicians bring decades of combined expertise in commercial vehicle repairs and maintenance, 
              with specialized knowledge across all aspects of HGV and commercial vehicle servicing.
            </p>
            <ul className="space-y-2 text-brand-grey-600">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-accent mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                Over 20 years of commercial vehicle experience
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-accent mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                Specialized in electrical diagnostics
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-accent mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                Certified brake testing specialist
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-accent mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                Expert in vehicle compliance and regulations
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-accent mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                Regular training and certification updates
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-brand-accent mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                Commitment to quality and safety
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black-900 mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-brand-grey-600 max-w-3xl mx-auto">
              Get in touch with our team for all your commercial vehicle repair needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-black-900 mb-4">Send Us a Message</h3>
                <p className="text-lg text-brand-grey-600">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-black-900 mb-4">Contact Information</h3>
                <p className="text-lg text-brand-grey-600">
                  Find us at our workshop in Newark or reach out through any of our contact channels
                </p>
              </div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Eye,
  Keyboard,
  Volume2,
  MousePointer,
  Smartphone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'F.T. Commercials LTD accessibility statement - our commitment to making our website accessible to all users.',
  openGraph: {
    title: 'Accessibility Statement | F.T. Commercials LTD',
    description: 'Our commitment to making our website accessible to all users.',
  },
};

interface AccessibilityFeature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const accessibilityFeatures: AccessibilityFeature[] = [
  {
    icon: Eye,
    title: 'Visual Accessibility',
    description:
      'High contrast colors, scalable fonts, and alternative text for images to support users with visual impairments.',
  },
  {
    icon: Keyboard,
    title: 'Keyboard Navigation',
    description:
      'Full keyboard navigation support with visible focus indicators for users who cannot use a mouse.',
  },
  {
    icon: Volume2,
    title: 'Screen Reader Support',
    description:
      'Semantic HTML structure and ARIA labels to ensure compatibility with screen reading software.',
  },
  {
    icon: MousePointer,
    title: 'Motor Accessibility',
    description:
      'Large click targets and sufficient spacing to accommodate users with motor impairments.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Accessibility',
    description:
      'Responsive design that works across all devices and screen sizes with touch-friendly interfaces.',
  },
  {
    icon: Shield,
    title: 'WCAG Compliance',
    description: 'Following Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.',
  },
];

export default function AccessibilityPage(): JSX.Element {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-brand-black-900 to-brand-grey-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Accessibility Statement
          </h1>
          <p className="text-lg md:text-xl text-brand-light max-w-2xl mx-auto">
            Our commitment to making our website accessible to all users
          </p>
        </div>
      </section>

      <AnimatedSection animation="fade" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Accessibility</h2>
              <p className="text-gray-600 mb-8">
                F.T. Commercials LTD is committed to ensuring digital accessibility for people with
                disabilities. We are continually improving the user experience for everyone and
                applying the relevant accessibility standards.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Accessibility Features</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {accessibilityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <feature.icon size={24} className="text-brand-accent mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-4">Standards and Guidelines</h3>
              <p className="text-gray-600 mb-4">
                This website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1
                Level AA. These guidelines explain how to make web content more accessible to people
                with disabilities.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Known Issues</h3>
              <p className="text-gray-600 mb-4">
                We are continuously working to improve the accessibility of our website. If you
                encounter any accessibility barriers, please contact us so we can address them
                promptly.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Feedback and Contact</h3>
              <p className="text-gray-600 mb-6">
                We welcome your feedback on the accessibility of our website. Please let us know if
                you encounter accessibility barriers or have suggestions for improvement.
              </p>

              <div className="bg-brand-light p-6 rounded-lg mb-8">
                <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-brand-accent" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:01777871493" className="text-brand-accent hover:underline">
                        01777 871493 (Office)
                      </a>
                      <span className="mx-2">|</span>
                      <a href="tel:07967176567" className="text-brand-accent hover:underline">
                        07967 176567 (Mobile)
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-brand-accent" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:ftcommercials@gmail.com"
                        className="text-brand-accent hover:underline"
                      >
                        ftcommercials@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={18} className="text-brand-accent" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">Ollerton Road, Newark, Nottinghamshire</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock size={18} className="text-brand-accent" />
                    <div>
                      <p className="font-medium">Opening Hours</p>
                      <p className="text-gray-600">Monday - Friday: 7:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Technical Specifications</h3>
              <p className="text-gray-600 mb-4">
                Accessibility of this website relies on the following technologies:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                <li>HTML5 semantic markup</li>
                <li>CSS3 for styling and layout</li>
                <li>JavaScript for enhanced functionality</li>
                <li>ARIA (Accessible Rich Internet Applications) attributes</li>
                <li>Responsive design principles</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Last Updated</h3>
              <p className="text-gray-600 mb-8">
                This accessibility statement was last updated on{' '}
                {new Date().toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                .
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form Section */}
      <AnimatedSection animation="slide-up" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Report an Accessibility Issue</h2>
            <p className="text-gray-600">
              If you've encountered an accessibility barrier, please let us know so we can improve.
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import BackToTop from '@/components/BackToTop';

interface AccessibilityFeature {
  title: string;
  description: string;
}

const accessibilityFeatures: AccessibilityFeature[] = [
  {
    title: 'Navigation',
    description:
      'Our website is designed to be navigable using keyboard controls and screen readers. All interactive elements are properly labeled and can be accessed using the Tab key.',
  },
  {
    title: 'Color Contrast',
    description:
      'We maintain high contrast ratios between text and background colors to ensure readability for all users, including those with visual impairments.',
  },
  {
    title: 'Text Alternatives',
    description:
      'All images and non-text content have appropriate alternative text descriptions for users who rely on screen readers.',
  },
  {
    title: 'Responsive Design',
    description:
      'Our website adapts to different screen sizes and devices, ensuring accessibility across desktop computers, tablets, and mobile phones.',
  },
  {
    title: 'Forms',
    description:
      'All forms on our website are properly labeled and include error messages that are clearly communicated to all users, including those using assistive technologies.',
  },
  {
    title: 'Focus Indicators',
    description:
      'Visual indicators are provided to show which element has keyboard focus, helping users navigate the site using keyboard controls.',
  },
];

const wcagGuidelines = [
  {
    title: 'Perceivable',
    description:
      'Information and user interface components must be presentable to users in ways they can perceive.',
  },
  {
    title: 'Operable',
    description:
      'User interface components and navigation must be operable through various inputs beyond just a mouse.',
  },
  {
    title: 'Understandable',
    description:
      'Information and the operation of the user interface must be understandable to all users.',
  },
  {
    title: 'Robust',
    description:
      'Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.',
  },
];

export default function AccessibilityPage(): JSX.Element {
  return (
    <>
      <Hero
        title="Accessibility Statement"
        subtitle="Our commitment to making our website accessible to all users"
        showCTA={false}
      />

      <AnimatedSection animation="fade" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Accessibility</h2>
              <p className="text-gray-600 mb-8">
                F.T. Commercials LTD is committed to ensuring digital accessibility for people of all
                abilities. We are continually improving the user experience for everyone and applying
                the relevant accessibility standards to achieve this.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Standards We Follow</h3>
              <p className="text-gray-600 mb-8">
                Our website strives to conform to level AA of the World Wide Web Consortium (W3C) Web
                Content Accessibility Guidelines 2.1. These guidelines explain how to make web content
                more accessible for people with disabilities and more user-friendly for everyone.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="slide-up" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Accessibility Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our website includes the following accessibility features to ensure a better experience
              for all users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessibilityFeatures.map(feature => (
              <div key={feature.title} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">WCAG 2.1 Compliance</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our website follows the four main principles of the Web Content Accessibility Guidelines
              (WCAG) 2.1
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {wcagGuidelines.map(guideline => (
              <div key={guideline.title} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{guideline.title}</h3>
                <p className="text-gray-600">{guideline.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">Contact Us About Accessibility</h3>
            <p className="text-gray-600">
              We welcome your feedback on the accessibility of the F.T. Commercials LTD website. If you
              encounter any accessibility barriers or have suggestions for improvement, please contact
              us:
            </p>
            <div className="mt-4">
              <a
                href="mailto:ftcommercials@gmail.com"
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                ftcommercials@gmail.com
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <BackToTop />
    </>
  );
} 
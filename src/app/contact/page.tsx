import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import AnimatedSection from '@/components/AnimatedSection';
import BackToTop from '@/components/BackToTop';

async function handleContactSubmit(data: any): Promise<void> {
  // This will be implemented in the email integration task
  console.log('Contact form submitted:', data);
}

export default function ContactPage(): JSX.Element {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team for all your commercial vehicle repair needs"
        showCTA={false}
      />

      <AnimatedSection animation="fade" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-xl text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>
              <ContactForm onSubmit={handleContactSubmit} />
            </div>

            {/* Contact Information */}
            <div>
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Information</h2>
                <p className="text-xl text-gray-600">
                  Find us at our workshop in Newark or reach out through any of our contact channels
                </p>
              </div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="slide-up" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Find Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our workshop is conveniently located on Ollerton Road in Newark, with easy access for all
              vehicle types
            </p>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2!2d-0.8!3d53.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0PCsDYnMDAuMCJOIDDCsDQ4JzAwLjAiVw!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="F.T. Commercials Location"
              className="absolute inset-0"
            />
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Directions</h3>
            <p className="text-gray-600">
              Located on Ollerton Road in Newark. Look for our workshop with ample parking space for
              commercial vehicles. If you need help finding us, please don't hesitate to call.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <BackToTop />
    </>
  );
} 
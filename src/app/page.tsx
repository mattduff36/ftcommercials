import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesOverview from '@/components/ServicesOverview';
import TestimonialCard from '@/components/TestimonialCard';
import AnimatedSection from '@/components/AnimatedSection';
import BackToTop from '@/components/BackToTop';

export default function HomePage(): JSX.Element {
  return (
    <>
      <Hero />

      <AnimatedSection animation="fade" className="mt-16">
        <WhyChooseUs />
      </AnimatedSection>

      <AnimatedSection animation="slide-up" className="mt-16">
        <ServicesOverview />
      </AnimatedSection>

      <AnimatedSection animation="fade" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read about the experiences of our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Today we had a call from a driver who was over 2 hours from home had stopped in a layby for his break, when he tried to restart there was silence but luckily he called the right company who attended his location within 25 minutes and was back on his way."
              author="Satisfied Customer"
            />
            <TestimonialCard
              quote="Professional service, quick turnaround, and excellent communication throughout. The team at F.T. Commercials really know their stuff when it comes to commercial vehicle repairs."
              author="John Smith"
              company="Local Transport Ltd"
            />
          </div>
        </div>
      </AnimatedSection>

      <BackToTop />
    </>
  );
}

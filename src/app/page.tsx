"use client";
import StandardTextbox from '@/components/textbox/StandardTextbox';
import TextRenderer from '@/components/sections/layouts/TextRenderer';
import ImageAccordion from '@/components/accordions/ImageAccordion';
import ContentTextbox from '@/components/textbox/ContentTextbox';

export default function Home() {
  return (
    <div>
      <section id="hero" className="bg-gradient-to-r from-blue-200 to-indigo-500 py-20 flex flex-col items-center justify-center text-center">
        <TextRenderer config={{ text: 'Elevate Your Experience', className: 'text-5xl font-bold', useRetroText: false, animation: 'slide', shadowColor: 'rgba(0, 0, 0, 0.2)', shadowOffset: '2px 2px', animationProps: { duration: 500, stagger: 0, start: '0%', end: '100%', variant: 'trigger' }, gradientColors: { from: '#4F8CFF', to: '#22C55E' } }} as='h1' />
        <TextRenderer config={{ text: 'Discover our innovative marketing solutions.', className: 'text-xl', useRetroText: false, animation: 'none', shadowColor: 'transparent', shadowOffset: '0', animationProps: { duration: 0, stagger: 0, start: '0%', end: '0%', variant: 'scrub' }, gradientColors: { from: 'transparent', to: 'transparent' } }} as='p' />
        <button className="bg-accent text-white mt-4 py-2 px-4 rounded-md hover:shadow-lg transition-all">Get Started</button>
      </section>
      <section id="features" className="bg-white py-20">
        <ImageAccordion 
          items={[
            { title: 'Feature 1', content: 'Meaningful feature description.' },
            { title: 'Feature 2', content: 'Another compelling feature.' },
            { title: 'Feature 3', content: 'More fantastic functionalities.' }
          ]} 
          title="Our Features" 
          imageSrc="/images/forest.jpg" 
          imageAlt="A wonderful forest view" 
          className="max-w-6xl mx-auto" 
        />
      </section>
      <section id="about" className="bg-f7fafc py-20">
        <StandardTextbox 
          title={<h2 className="text-3xl font-bold">About Us</h2>} 
          description={<p className="text-md">We are committed to providing exceptional marketing services that propel your business forward.</p>} 
          className="max-w-6xl mx-auto" 
        />
      </section>
      <section id="testimonials" className="bg-soft-noise py-20">
        <ContentTextbox 
          title={<h3 className="text-2xl font-semibold">What Our Clients Say</h3>} 
          description={<p>“An inspiring experience!” - <strong>Jane Doe, Marketing Director</strong></p>} 
          className="max-w-6xl mx-auto" 
        >
          <p>“Transformative results!” - <strong>John Smith, CEO</strong></p>
        </ContentTextbox>
      </section>
      <section id="faq" className="bg-white py-20">
        <ContentTextbox 
          title={<h4 className="text-xl">Frequently Asked Questions</h4>} 
          description={<ul className="list-disc list-inside"><li>What services do you offer?</li><li>How can I get started?</li></ul>} 
          className="max-w-6xl mx-auto" 
        />
      </section>
      <section id="contact" className="bg-f5f7fa py-20">
        <ContentTextbox 
          title={<h5 className="text-lg">Contact Us</h5>} 
          description={<p>If you have questions, reach out!</p>} 
          className="max-w-6xl mx-auto" 
        />
        <form className="max-w-6xl mx-auto">
          <input type="text" placeholder="Name" className="border rounded-md p-2 w-full" />
          <input type="email" placeholder="Email" className="border rounded-md p-2 mt-4 w-full" />
          <textarea placeholder="Message" className="border rounded-md p-2 mt-4 w-full" />
          <button type="submit" className="bg-accent text-white mt-4 py-2 px-4 rounded-md">Send</button>
        </form>
        <p className="mt-4 text-sm text-gray-500">We respect your privacy.</p>
      </section>
    </div>
  );
}
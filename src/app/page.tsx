"use client";
import ContentTextbox from '@/components/textbox/ContentTextbox';
import StandardTextbox from '@/components/textbox/StandardTextbox';
import SlideButton from '@/components/buttons/SlideButton';
import Timeline from '@/components/timeline/Timeline';
import PricingBento from '@/components/bento/PricingBento';
import PepeHero from '@/components/sections/layouts/hero/PepeHero';

const heroImageSrc = "/images/logo.svg";

export default function Home() {
  return (
    <>
      <section id="hero" className="bg-gradient-to-r from-[#EFF4FF] to-[#FFFFFF] py-24 text-center">
        <PepeHero
          style={{ navbar: { logoSrc: heroImageSrc, buttonBgColor: '#2563EB', buttonHoverBgColor: '#1D4ED8', buttonTextColor: '#FFF', buttonHoverTextColor: '#FFF', buttonClassName: '', buttonContentClassName: '' }, section: { className: 'min-h-[400px]', backgroundColor: '', backgroundPattern: '', backgroundImage: '' }, heading: { text: 'Welcome to PulseLaunch!', className: 'text-5xl font-bold', useRetroText: false, animation: 'none', shadowColor: '', shadowOffset: '', animationProps: { duration: 0, stagger: 0, start: '', end: '', variant: 'trigger' }, gradientColors: { from: '', to: '' }, subheading: { text: '', className: '' }, ctaStyle: { containerClassName: 'py-4', addressText: '', addressClassName: '', buttonText: 'Get Started', buttonClassName: '', iconClassName: '' }}
          onMenuClick={() => {}} onContactClick={() => {}}
        />
      </section>

      <section id="about" className="bg-white py-24">
        <ContentTextbox
          title={<h2 className="text-3xl font-bold">About PulseLaunch</h2>}
          description={<p className="text-lg">PulseLaunch offers a seamless onboarding experience for users.</p>}
          className="max-w-3xl mx-auto"
        />
      </section>

      <section id="features" className="bg-[#F8FBFF] py-24">
        <StandardTextbox
          title={<h2 className="text-3xl font-bold">Features</h2>}
          description={<p className="text-lg">Explore the features designed to enhance your experience.</p>}
          className="max-w-3xl mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {[
            { title: 'Feature One', description: 'Description for feature one.' },
            { title: 'Feature Two', description: 'Description for feature two.' },
            { title: 'Feature Three', description: 'Description for feature three.' }
          ].map((feature, index) => (
            <div key={index} className="p-6 rounded-lg shadow-card bg-white">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="bg-soft-dot-grid py-24">
        <StandardTextbox
          title={<h2 className="text-3xl font-bold">Testimonials</h2>}
          description={<p className="text-lg">What our users say about us.</p>}
          className="max-w-3xl mx-auto"
        />
        <Timeline
          items={[
            { title: 'Great product!', description: 'User A', video: '', image: '' },
            { title: 'Amazing experience!', description: 'User B', video: '', image: '' }
          ]}
          title="Testimonials"
          className="max-w-3xl mx-auto"
        />
      </section>

      <section id="pricing" className="bg-white py-24">
        <PricingBento
          items={[
            { badge: ['Basic'], price: '$9', features: 'Feature 1, Feature 2' },
            { badge: ['Pro'], price: '$19', subtitle: 'Best for small teams', features: 'All Basic features + More' },
          ]}
          className="max-w-3xl mx-auto"
        />
      </section>

      <section id="contact" className="bg-white py-24">
        <ContentTextbox
          title={<h2 className="text-3xl font-bold">Contact Us</h2>}
          description={<p className="text-lg">Feel free to reach out for inquiries.</p>}
          className="max-w-3xl mx-auto"
        />
        <form className="mt-4">
          <input className="border border-gray-300 rounded p-2 w-full mb-4" type="text" placeholder="Name" required />
          <input className="border border-gray-300 rounded p-2 w-full mb-4" type="email" placeholder="Email" required />
          <textarea className="border border-gray-300 rounded p-2 w-full mb-4" placeholder="Message" required></textarea>
          <SlideButton text="Submit" onClick={() => {}} className="bg-[#2563EB] text-white" />
        </form>
      </section>
    </>
  );
}
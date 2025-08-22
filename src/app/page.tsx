"use client"
import ContentTextbox from '@/components/textbox/ContentTextbox';
import MomoCoinAbout from '@/components/sections/layouts/about/Momocoinabout';
import PepeHero from '@/components/sections/layouts/hero/PepeHero';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import SimpleFooter from '@/components/footer/SimpleFooter';
import { Carousel } from '@/components/carousels/Carousel';

export default function Home() {
  return (
    <>
      <section id="hero" className="bg-gradient-to-br from-[#EFF4FF] to-[#FFFFFF] py-[72px]">
        <PepeHero
          style={{
            navbar: {
              logoSrc: "/images/logo.svg",
              className: "flex justify-between items-center",
            },
            section: {
              className: "h-[80vh] flex flex-col justify-center items-center",
              backgroundColor: "#FFFFFF",
            },
            heading: {
              text: "Welcome to PulseLaunch!",
              className: "text-[clamp(24px,4vw,48px)] font-bold",
            },
            subheading: {
              text: "Experience seamless onboarding and simplify your tasks!",
              className: "text-lg",
            },
            ctaStyle: {
              containerClassName: "flex items-center gap-4 mt-8",
              addressText: "Get started with a free trial",
              buttonText: "Start Free Trial",
              buttonClassName: "bg-[#2563EB] text-white py-2 px-4 rounded",
            },
          }}
          onMenuClick={() => {}}
          onContactClick={() => {}}
        />
      </section>
      <section id="about" className="bg-white py-[72px]">
        <MomoCoinAbout style={{
          section: {
            className: "text-center",
            backgroundColor: "#FFFFFF",
            backgroundPattern: "",
            backgroundImage: "",
            spotlight: {
              width: "",
              height: "",
              left: "",
              top: "",
              rotate: "",
              color: "",
              blur: "",
              opacity: 0,
              mobileWidth: "",
              mobileHeight: "",
              mobileLeft: "",
              mobileTop: "",
              mobileRotate: "",
            },
            sparkles: {
              particleColor: "",
              particleDensity: 0,
              minSize: 0,
              maxSize: 0,
              speed: 0,
            },
          },
          title: {
            text: "About PulseLaunch",
            className: "text-3xl font-semibold",
            useRetroText: false,
            animation: 'none',
          },
          descriptions: {
            texts: [
              "PulseLaunch is a state-of-the-art platform designed to streamline your processes.",
              "Our mission is to empower users with innovative solutions that maximize productivity.",
            ],
            className: "text-lg",
            containerClassName: "mt-4",
          },
          image: {
            parentClassName: "mt-8",
            className: "w-full h-auto",
          },
        }} />
      </section>
      <section id="features" className="bg-[#F8FBFF] py-[72px]">
        <SimpleKPIBento 
          items={[
            { value: "Speedy Setup", description: "Get started in just a few clicks!" },
            { value: "Seamless Integration", description: "Works effortlessly with your existing tools!" },
            { value: "24/7 Support", description: "We're here for you around the clock!" },
          ]}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          valueClassName="text-lg font-semibold"
          descriptionClassName="text-sm"
        />
      </section>
      <section id="testimonials" className="bg-soft-dot-grid py-[72px]">
        <Carousel>
          <ContentTextbox
            title={<h3 className="text-xl font-bold">What Our Users Say!</h3>}
            description={<p className="mt-4">&quot;PulseLaunch has transformed our workflow! 💡&quot; - Jane Doe</p>}
            className="text-center"
          />
          <ContentTextbox
            title={<h3 className="text-xl font-bold">What Our Users Say!</h3>}
            description={<p className="mt-4">&quot;An essential tool for my team! 🚀&quot; - John Smith</p>}
            className="text-center"
          />
        </Carousel>
      </section>
      <section id="pricing" className="bg-white py-[72px]">
        <ContentTextbox
          title={<h3 className="text-xl font-bold">Choose Your Plan</h3>}
          description={<p className="mt-4">&quot;Explore our plans tailored for different needs.&quot;</p>}
          className="text-center"
        />
      </section>
      <section id="contact" className="bg-white py-[72px]">
        <ContentTextbox
          title={<h3 className="text-xl font-bold">Get in Touch</h3>}
          description={<p className="mt-4">&quot;We would love to hear from you! Fill out the form below.&quot;</p>}
          className="text-center"
        />
      </section>
      <SimpleFooter
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={50}
          columns={[
            { items: [
              { label: "Privacy Policy", onClick: () => {} },
              { label: "Terms of Service", onClick: () => {} },
            ] },
          ]} 
          copyrightText="© 2023 PulseLaunch"
          className="text-center"
          containerClassName="py-4 bg-gray-200"
        />
    </>
  );
}
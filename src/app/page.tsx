import { Carousel } from '@/components/carousels/Carousel';
import ContentTextbox from '@/components/textbox/ContentTextbox';

'use client';

export default function Page() {
  return (
    <section id="testimonials" className="bg-soft-dot-grid py-[72px]">
      <Carousel>
        <ContentTextbox
          title={<h3 className="text-xl font-bold">What Our Users Say!</h3>}
          description={<p className="mt-4">&quot;PulseLaunch has transformed our workflow! 💡&quot; - Jane Doe</p>}
          className="text-center"
        >
          <div></div>
        </ContentTextbox>
      </Carousel>
    </section>
  );
}

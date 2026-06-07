import Image from 'next/image';
import { Reveal } from './Reveal';

const frames = [
  {
    src: '/lifestyle/oceanfront.webp',
    alt: 'Oceanfront view along the Southern California coast',
    caption: 'Oceanfront mornings',
    ratio: 'aspect-[7/5]',
  },
  {
    src: '/lifestyle/equestrian.webp',
    alt: 'Rider on a trail in the hills above the South Bay',
    caption: 'Trails and open space, just inland',
    ratio: 'aspect-[3/4]',
  },
  {
    src: '/lifestyle/golden-hour.webp',
    alt: 'Golden-hour Southern California coastline',
    caption: 'The coastline at golden hour',
    ratio: 'aspect-[16/10]',
  },
  {
    src: '/neighborhoods/rolling-hills.webp',
    alt: 'Green rolling hills with a ranch fence near the coast',
    caption: 'Green hills, minutes from the beach',
    ratio: 'aspect-[3/4]',
  },
];

// Staggered, offset editorial layout with heavy negative space. No hard sell.
export function CoastalLifestyle() {
  return (
    <section id="lifestyle" className="bg-sand-deep py-24 lg:py-32">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
          <Reveal className="md:col-span-7" as="figure">
            <div className={`relative ${frames[0].ratio} overflow-hidden bg-sand`}>
              <Image src={frames[0].src} alt={frames[0].alt} fill sizes="(max-width:768px) 100vw, 58vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 font-sans text-[0.78rem] uppercase tracking-[0.16em] text-ink/45">
              {frames[0].caption}
            </figcaption>
          </Reveal>

          <Reveal className="md:col-span-5 md:mt-24" as="figure" delay={0.1}>
            <div className={`relative ${frames[1].ratio} overflow-hidden bg-sand`}>
              <Image src={frames[1].src} alt={frames[1].alt} fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 font-sans text-[0.78rem] uppercase tracking-[0.16em] text-ink/45">
              {frames[1].caption}
            </figcaption>
          </Reveal>

          <Reveal className="md:col-span-5" as="figure" delay={0.05}>
            <div className={`relative ${frames[3].ratio} overflow-hidden bg-sand`}>
              <Image src={frames[3].src} alt={frames[3].alt} fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 font-sans text-[0.78rem] uppercase tracking-[0.16em] text-ink/45">
              {frames[3].caption}
            </figcaption>
          </Reveal>

          <Reveal className="md:col-span-7 md:-mt-16" as="figure" delay={0.1}>
            <div className={`relative ${frames[2].ratio} overflow-hidden bg-sand`}>
              <Image src={frames[2].src} alt={frames[2].alt} fill sizes="(max-width:768px) 100vw, 58vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 font-sans text-[0.78rem] uppercase tracking-[0.16em] text-ink/45">
              {frames[2].caption}
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

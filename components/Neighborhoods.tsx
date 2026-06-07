import Image from 'next/image';
import { Reveal } from './Reveal';
import { neighborhoods } from '@/data/neighborhoods';

export function Neighborhoods() {
  return (
    <section id="neighborhoods" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {neighborhoods.map((n, i) => (
            <Reveal key={n.id} delay={i * 0.08} as="figure" className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-sand-deep">
                <Image
                  src={n.image}
                  alt={n.alt}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1.2s] ease-editorial group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-sand/95 px-2.5 py-1 font-sans text-[0.58rem] uppercase tracking-[0.2em] text-brass">
                  {n.tag}
                </span>
              </div>
              <figcaption>
                <h3 className="mt-5 font-serif text-2xl font-normal leading-tight text-ink">
                  {n.name}
                </h3>
                <p className="mt-3 font-sans text-[0.85rem] font-light leading-relaxed text-ink/60">
                  {n.blurb}
                </p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

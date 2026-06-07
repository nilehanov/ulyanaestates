import { Reveal } from './Reveal';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-sand-deep py-24 lg:py-32">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <p className="eyebrow">In Their Words</p>
          {/* Honest labeling — these are placeholders until real, permissioned quotes exist. */}
          <span className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-ink/35">
            Placeholder — to be replaced
          </span>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1} as="figure" className="flex flex-col">
              <span className="font-serif text-5xl leading-none text-brass/50" aria-hidden>
                “
              </span>
              <blockquote className="mt-3 font-serif text-[1.4rem] font-normal leading-snug text-ink/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/10 pt-4 font-sans text-[0.75rem] uppercase tracking-[0.16em] text-ink/50">
                <span className="text-ink/70">{t.attribution}</span> · {t.context}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

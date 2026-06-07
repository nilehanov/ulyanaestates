import { Reveal } from './Reveal';
import { SectionHeading } from './Section';

const pillars = [
  {
    num: '01',
    title: 'You work with me, not a rotating team',
    body: 'From the first call to closing day, I’m the one handling your sale — answering the phone, showing up to appointments, and keeping track of the details.',
  },
  {
    num: '02',
    title: 'I keep your business your business',
    body: 'Private showings, careful communication, and no pressure on your timeline. What we talk about stays between us.',
  },
  {
    num: '03',
    title: 'Straight talk on price',
    body: 'I’ll walk you through the actual comparable sales and what’s moving right now, then price it to sell — not to flatter you.',
  },
  {
    num: '04',
    title: 'I handle the moving parts',
    body: 'Staging, photography, marketing, vendors, paperwork — I coordinate all of it, with the resources of Estate Properties behind me.',
  },
];

// Dark charcoal section (§3 #22262E) — carries the premium weight in place of a
// sold-history wall (§6).
export function Concierge() {
  return (
    <section id="concierge" className="bg-charcoal py-24 text-off-white lg:py-32">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <SectionHeading
          light
          eyebrow="How I Work"
          title="Whatever your budget, you get my full attention."
          intro="I’m newer to the business, and I treat every client like they’re my only one. That means I pick up the phone, do the prep work, and tell you the truth — whether you’re buying your first place or selling a home you’ve had for thirty years."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-off-white/10 bg-off-white/10 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal
              key={p.num}
              delay={i * 0.08}
              className="flex flex-col bg-charcoal p-8 lg:p-10"
            >
              <span className="font-serif text-3xl text-brass-soft">{p.num}</span>
              <h3 className="mt-5 font-serif text-2xl font-normal text-off-white">{p.title}</h3>
              <p className="mt-3 font-sans text-[0.9rem] font-light leading-relaxed text-off-white/65">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

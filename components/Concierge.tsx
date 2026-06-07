import { Reveal } from './Reveal';
import { SectionHeading } from './Section';

const pillars = [
  {
    num: '01',
    title: 'Personalized representation',
    body: 'One agent, fully engaged — from first conversation to closing. You work directly with me, not a handoff chain.',
  },
  {
    num: '02',
    title: 'Discretion by default',
    body: 'Quiet, confidential handling of every detail. Private showings, careful communication, and respect for your timeline.',
  },
  {
    num: '03',
    title: 'Data-informed pricing',
    body: 'Positioning grounded in current comparables and local market movement — never guesswork, never inflated promises.',
  },
  {
    num: '04',
    title: 'A white-glove process',
    body: 'Coordination of staging, photography, marketing, and vendors, backed by the resources of Estate Properties.',
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
          eyebrow="The Concierge Approach"
          title="Premium is a standard of care, not a price point."
          intro="A newer name, an exacting standard. Every client receives the same attentive, full-service representation — measured, discreet, and thorough."
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

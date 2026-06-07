import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from './Reveal';
import { site } from '@/data/site';

// Honest framing for a newly licensed agent (§5): lead with local knowledge,
// concierge attention, and the backing of Estate Properties — NOT sales stats.
export function About() {
  return (
    <section id="about" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto grid max-w-editorial grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <Reveal className="lg:col-span-5" as="figure">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand-deep">
            <Image
              src="/about/ulyana-portrait.webp"
              alt="Portrait of Ulyana Hanov, REALTOR®"
              fill
              sizes="(max-width:1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 font-sans text-[0.72rem] uppercase tracking-[0.18em] text-ink/45">
            Ulyana Hanov · REALTOR® · DRE# {site.agent.dre}
          </figcaption>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <p className="eyebrow">About Ulyana</p>
          <h2 className="mt-5 text-balance font-serif text-[2.1rem] font-normal leading-[1.1] text-ink sm:text-4xl lg:text-[2.8rem]">
            I know these neighborhoods — and I’ll give you the time.
          </h2>

          {/* [BIO] Replace with Ulyana's own bio. Placeholder copy below is honest
              for a newly licensed agent — no fabricated sales history. */}
          <div className="mt-7 space-y-5 font-sans text-[0.98rem] font-light leading-relaxed text-ink/70">
            <p>
              [BIO] Ulyana Hanov is a licensed REALTOR® based in the South Bay,
              working across Torrance and the beach cities, West LA and the
              greater Los Angeles area, and Orange County. She knows these
              neighborhoods well and gives every client real, patient attention —
              treating your sale or purchase like it’s the only one on her desk.
            </p>
            <p>
              As a newer agent, she competes on effort, not a long sales count:
              she answers quickly, prepares carefully, and has the marketing
              resources and broker support of Estate Properties behind her.
              Whether you’re buying your first home in Torrance or selling on the
              bluffs of Palos Verdes, you get the same care.
            </p>
          </div>

          {/* [CREDENTIALS] Confirm / expand with Ulyana before launch. */}
          <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-ink/10 pt-8 sm:grid-cols-3">
            <div>
              <dt className="field-label">License</dt>
              <dd className="mt-1 font-serif text-lg text-ink">DRE# {site.agent.dre}</dd>
            </div>
            <div>
              <dt className="field-label">Brokerage</dt>
              <dd className="mt-1 font-serif text-lg text-ink">{site.broker.name}</dd>
            </div>
            <div>
              <dt className="field-label">Service Area</dt>
              <dd className="mt-1 font-serif text-lg text-ink">South Bay · LA · Orange County</dd>
            </div>
          </dl>

          <Link href="/#contact" className="btn-outline mt-9">
            Work With Ulyana
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from './Reveal';
import { SectionHeading } from './Section';
import { listings, viewMyListingsHref, type Listing } from '@/data/listings';

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-serif text-2xl text-ink">{value}</span>
      <span className="field-label mt-1">{label}</span>
    </div>
  );
}

// Single-feature editorial layout. With one real active listing we present it
// generously rather than padding the grid with fabricated tiles (§2, §6).
function FeatureListing({ listing }: { listing: Listing }) {
  return (
    <Reveal className="grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10 lg:grid-cols-2">
      <Link
        href={listing.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-[4/3] overflow-hidden bg-sand-deep lg:aspect-auto"
      >
        <Image
          src={listing.image}
          alt={listing.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1.2s] ease-editorial group-hover:scale-105"
        />
        <span className="absolute left-5 top-5 bg-sand/95 px-3 py-1.5 font-sans text-[0.6rem] uppercase tracking-[0.2em] text-ink">
          {listing.status === 'active' ? 'Active Listing' : listing.status}
        </span>
        <span className="absolute bottom-0 left-0 right-0 translate-y-2 bg-gradient-to-t from-ink/70 to-transparent p-5 text-right font-sans text-[0.65rem] uppercase tracking-[0.22em] text-sand opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          View Property →
        </span>
      </Link>

      <div className="flex flex-col justify-center bg-sand p-8 lg:p-12">
        <p className="eyebrow">{listing.neighborhood}</p>
        <p className="mt-4 font-serif text-4xl font-normal text-ink lg:text-5xl">
          {usd.format(listing.price)}
        </p>
        <p className="mt-3 font-sans text-base font-light text-ink/75">{listing.address}</p>

        <div className="mt-8 grid grid-cols-3 gap-6 border-y border-ink/10 py-6">
          <Spec label="Beds" value={String(listing.beds)} />
          <Spec label="Baths" value={String(listing.baths)} />
          <Spec label="Sq Ft" value={listing.sqft.toLocaleString()} />
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 font-sans text-[0.82rem] text-ink/60">
          {listing.yearBuilt && (
            <div className="flex justify-between border-b border-ink/5 py-1">
              <dt>Year Built</dt>
              <dd className="text-ink/80">{listing.yearBuilt}</dd>
            </div>
          )}
          {listing.lotSqft && (
            <div className="flex justify-between border-b border-ink/5 py-1">
              <dt>Lot</dt>
              <dd className="text-ink/80">{listing.lotSqft.toLocaleString()} sf</dd>
            </div>
          )}
          {listing.pricePerSqft && (
            <div className="flex justify-between border-b border-ink/5 py-1">
              <dt>$/Sq Ft</dt>
              <dd className="text-ink/80">${listing.pricePerSqft}</dd>
            </div>
          )}
          {listing.mls && (
            <div className="flex justify-between border-b border-ink/5 py-1">
              <dt>MLS#</dt>
              <dd className="text-ink/80">{listing.mls}</dd>
            </div>
          )}
        </dl>

        <Link
          href={listing.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline mt-9 self-start"
        >
          View Property
        </Link>

        {/* IDX/MLS attribution line (§0.2 / §2). */}
        <p className="mt-6 font-sans text-[0.7rem] leading-relaxed text-ink/45">
          {listing.attribution} · {listing.source} · MLS# {listing.mls}
        </p>
      </div>
    </Reveal>
  );
}

export function ListingsGrid() {
  const visible = listings.filter((l) => l.status !== 'placeholder');

  return (
    <section id="listings" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Curated Collection"
            title="A considered, current offering."
            intro="Every property is represented with editorial care — accurate, well-photographed, and honestly presented."
          />
          {/* Secondary deep-link to her Estate Properties roster (placeholder URL). */}
          <Reveal delay={0.1}>
            <Link
              href={viewMyListingsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[0.74rem] uppercase tracking-[0.18em] text-ink/70 underline-offset-8 hover:text-brass hover:underline"
            >
              View My Listings →
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 space-y-12">
          {visible.map((l) => (
            <FeatureListing key={l.id} listing={l} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/data/site';

// §0.2 / §9 — full DRE advertising compliance block. MUST appear on every page.
export function Footer() {
  return (
    <footer className="bg-charcoal text-off-white">
      <div className="mx-auto max-w-editorial px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            {/* CONFIRM LOGO ROLES: footer wordmark uses logo1.png (production asset). */}
            <Image
              src="/brand/logo1-transparent.png"
              alt="Ulyana Estates"
              width={1419}
              height={1108}
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="mt-6 max-w-sm font-sans text-[0.9rem] font-light leading-relaxed text-off-white/60">
              Ulyana Hanov, REALTOR® — representing buyers and sellers across the
              Palos Verdes Peninsula and the South Bay.
            </p>
            <div className="mt-6 flex gap-5 font-sans text-[0.72rem] uppercase tracking-[0.18em] text-off-white/50">
              {/* Social placeholders — CONFIRM real handles in data/site.ts. */}
              <a href={site.social.instagram} className="hover:text-brass-soft">
                Instagram
              </a>
              <a href={site.social.linkedin} className="hover:text-brass-soft">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="field-label text-off-white/40">Contact</p>
            <ul className="mt-4 space-y-2 font-sans text-[0.9rem] text-off-white/70">
              <li>
                <a href={`tel:${site.agent.phoneHref}`} className="hover:text-brass-soft">
                  {site.agent.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.agent.email}`} className="hover:text-brass-soft">
                  {site.agent.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="field-label text-off-white/40">Offices</p>
            <ul className="mt-4 space-y-3 font-sans text-[0.9rem] leading-relaxed text-off-white/70">
              <li>
                <span className="text-off-white/45">Office · </span>
                {site.broker.office}
              </li>
              <li>
                <span className="text-off-white/45">Brokerage HQ · </span>
                {site.broker.hq}
              </li>
            </ul>
            <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-sans text-[0.72rem] uppercase tracking-[0.16em] text-off-white/50">
              <Link href="/#listings" className="hover:text-brass-soft">
                Listings
              </Link>
              <Link href="/about/" className="hover:text-brass-soft">
                About
              </Link>
              <Link href="/#contact" className="hover:text-brass-soft">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* ---- Compliance block (§0.2) ---- */}
        <div className="mt-16 border-t border-off-white/10 pt-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4">
              <EqualHousingMark />
              <div className="font-sans text-[0.72rem] leading-relaxed text-off-white/55">
                <p className="font-medium text-off-white/75">REALTOR® · Equal Housing Opportunity</p>
                <p className="mt-1 max-w-md">{site.compliance.equalHousing}</p>
              </div>
            </div>

            <div className="space-y-2 font-sans text-[0.72rem] leading-relaxed text-off-white/55 lg:max-w-md lg:text-right">
              <p>
                <span className="text-off-white/75">Ulyana Hanov</span>, REALTOR® · DRE#{' '}
                {site.agent.dre}
              </p>
              <p>
                {site.broker.name} ({site.broker.affiliate}) · DRE# {site.broker.dre}
              </p>
              <p>{site.compliance.affiliation}</p>
              <p>{site.compliance.idxAttribution}</p>
            </div>
          </div>

          <p className="mt-10 font-sans text-[0.68rem] text-off-white/35">
            © {2026} Ulyana Hanov. All rights reserved. Ulyana Estates is the
            personal brand of Ulyana Hanov, a licensed real estate salesperson —
            not a brokerage. Information deemed reliable but not guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
}

function EqualHousingMark() {
  // Simple inline Equal Housing Opportunity house mark (no external asset needed).
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="Equal Housing Opportunity"
      className="shrink-0"
    >
      <rect x="1" y="1" width="46" height="46" stroke="currentColor" strokeWidth="1.5" className="text-off-white/40" />
      <path
        d="M24 11 L38 22 H34 V37 H14 V22 H10 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-off-white/70"
        fill="none"
      />
      <rect x="21" y="27" width="6" height="10" className="fill-off-white/40" />
    </svg>
  );
}

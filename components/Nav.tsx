'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '/#lifestyle', label: 'Lifestyle' },
  { href: '/#neighborhoods', label: 'Neighborhoods' },
  { href: '/about/', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

// CONFIRM LOGO ROLES: nav/footer wordmark uses logo1.png (clean flat gold
// wordmark on white — the production-ready asset). logo2.png is a 3D embossed
// mockup render and is kept in /public/brand for reference only.
export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid || open
          ? 'bg-sand/95 backdrop-blur supports-[backdrop-filter]:bg-sand/80'
          : 'bg-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-editorial items-center justify-between px-6 transition-all duration-500 lg:px-10 ${
          solid ? 'h-16' : 'h-20'
        }`}
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Ulyana Estates — home">
          <Image
            src="/brand/logo1-transparent.webp"
            alt="Ulyana Estates"
            width={1419}
            height={1108}
            priority
            className={`w-auto transition-all duration-500 ${solid ? 'h-9' : 'h-11'} ${
              solid || open ? '' : 'drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]'
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-sans text-[0.78rem] uppercase tracking-[0.16em] transition-colors duration-300 hover:text-brass ${
                solid ? 'text-ink/80' : 'text-sand drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden ${
            solid || open ? 'text-ink' : 'text-sand'
          }`}
        >
          <span
            className={`h-px w-6 bg-current transition-transform duration-300 ${
              open ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span className={`h-px w-6 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-px w-6 bg-current transition-transform duration-300 ${
              open ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-sand/98 px-6 pb-8 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink/5 py-4 font-sans text-sm uppercase tracking-[0.16em] text-ink/80"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

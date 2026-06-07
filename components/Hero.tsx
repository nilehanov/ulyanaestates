'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { site } from '@/data/site';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-charcoal">
      {/* [HERO PHOTO] Replace /public/hero.webp with Ulyana's own landscape
          coastal/city photo. Keep it optimized (webp, ~1600px wide). */}
      <Image
        src="/hero.webp"
        alt="Golden-hour view of the Southern California coastline"
        fill
        priority
        sizes="100vw"
        className={`object-cover ${reduce ? '' : 'animate-ken-burns'}`}
      />
      {/* Gradient scrim for text contrast over image (§0.6). */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/55 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-editorial flex-col justify-end px-6 pb-24 lg:px-10 lg:pb-32">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow mb-6 text-brass-soft"
        >
          South Bay · Greater Los Angeles · Orange County
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 26 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-balance font-serif text-[2.7rem] font-normal leading-[1.04] text-sand sm:text-6xl lg:text-7xl"
        >
          Your home, handled with care.
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl font-sans text-base font-light leading-relaxed text-sand/80"
        >
          Ulyana Hanov, REALTOR® — helping buyers and sellers across the South
          Bay, the greater Los Angeles area, and Orange County, with one agent
          handling the whole process from start to finish.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link href="/#contact" className="btn-solid bg-sand text-ink hover:bg-brass hover:text-sand">
            What’s My Home Worth?
          </Link>
          <Link href="/#neighborhoods" className="btn-light">
            Explore the Areas
          </Link>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <span className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-sand/50">
          Scroll
        </span>
      </div>

      <span className="sr-only">{site.tagline}</span>
    </section>
  );
}

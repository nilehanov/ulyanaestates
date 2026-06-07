import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

// Section heading with eyebrow + serif title, consistently spaced across the page.
export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  align = 'left',
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  align?: 'left' | 'center';
}) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className={`eyebrow ${light ? 'text-brass-soft' : 'text-brass'}`}>{eyebrow}</p>
      <h2
        className={`mt-5 text-balance font-serif text-[2.1rem] font-normal leading-[1.08] sm:text-4xl lg:text-[2.9rem] ${
          light ? 'text-off-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 font-sans text-[0.98rem] font-light leading-relaxed ${
            light ? 'text-off-white/70' : 'text-ink/65'
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // §3 palette — warm, gallery-neutral, gold-led. No pure black, no saturated color.
        sand: '#F7F4EF',
        'sand-deep': '#EFEAE1',
        ink: '#1A1F2B',
        brass: '#A67C52',
        'brass-soft': '#C39A6B',
        charcoal: '#22262E',
        'off-white': '#EDEAE3',
        // faint tertiary muted green — used sparingly, never dominant
        sage: '#7E8A77',
      },
      fontFamily: {
        // Wired up in app/layout.tsx via next/font (self-hosted, static).
        serif: ['var(--font-display)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.22em',
        wide2: '0.16em',
      },
      borderRadius: {
        // Near-zero radius — crisp heritage geometry, no rounded "app" UI.
        none: '0',
        sm: '1px',
      },
      maxWidth: {
        editorial: '78rem',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1.05) translateY(0)' },
          '100%': { transform: 'scale(1.16) translateY(-1.5%)' },
        },
      },
      animation: {
        'ken-burns': 'ken-burns 22s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;

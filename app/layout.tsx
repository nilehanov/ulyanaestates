import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { site } from '@/data/site';
import { realEstateAgentJsonLd } from '@/lib/jsonld';

// Self-hosted via next/font (downloaded at build, served static — no runtime CDN call).
const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Ulyana Estates — Ulyana Hanov, REALTOR® | South Bay, LA & Orange County',
    template: '%s · Ulyana Estates',
  },
  description:
    'Ulyana Hanov, REALTOR® affiliated with Estate Properties — helping buyers and sellers across the South Bay, Torrance, West LA, Greater Los Angeles, and Orange County.',
  keywords: [
    'South Bay realtor',
    'Torrance real estate',
    'Redondo Beach homes',
    'Manhattan Beach',
    'West LA real estate',
    'Santa Monica homes',
    'Los Angeles realtor',
    'Orange County real estate',
    'Palos Verdes',
    'Ulyana Hanov',
    'Estate Properties',
  ],
  authors: [{ name: site.agent.name }],
  alternates: { canonical: site.url },
  openGraph: {
    type: 'website',
    url: site.url,
    title: 'Ulyana Estates — South Bay, LA & Orange County Real Estate',
    description: site.tagline,
    siteName: site.name,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ulyana Estates' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ulyana Estates — South Bay, LA & Orange County Real Estate',
    description: site.tagline,
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-sand"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentJsonLd()) }}
        />
      </body>
    </html>
  );
}

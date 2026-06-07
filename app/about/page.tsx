import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { About } from '@/components/About';
import { Concierge } from '@/components/Concierge';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Ulyana Hanov, REALTOR®',
  description:
    'Ulyana Hanov, REALTOR® (DRE# 02442380) affiliated with Estate Properties — local knowledge and full-service representation across the South Bay, West LA, greater Los Angeles, and Orange County.',
  alternates: { canonical: 'https://ulyanaestates.com/about/' },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-20">
        <About />
        <Concierge />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

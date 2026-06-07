import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { ListingsGrid } from '@/components/ListingsGrid';
import { CoastalLifestyle } from '@/components/CoastalLifestyle';
import { Neighborhoods } from '@/components/Neighborhoods';
import { About } from '@/components/About';
import { Concierge } from '@/components/Concierge';
import { Testimonials } from '@/components/Testimonials';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <ListingsGrid />
        <CoastalLifestyle />
        <Neighborhoods />
        <About />
        <Concierge />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

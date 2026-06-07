import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { CoastalLifestyle } from '@/components/CoastalLifestyle';
import { Neighborhoods } from '@/components/Neighborhoods';
import { About } from '@/components/About';
import { Concierge } from '@/components/Concierge';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <CoastalLifestyle />
        <Neighborhoods />
        <About />
        <Concierge />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

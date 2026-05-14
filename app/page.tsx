import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Bridal from '@/components/Bridal';
import Academy from '@/components/Academy';
import Branches from '@/components/Branches';
import Testimonials from '@/components/Testimonials';
import Offers from '@/components/Offers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-white selection:bg-brand-gold selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Bridal />
      <Academy />
      <Branches />
      <Offers />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

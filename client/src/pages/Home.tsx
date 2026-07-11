/**
 * Home — Viajes Casal Landing Page
 * Design: Coastal Luxury Minimalism
 * Sections: Hero, Benefits, Promotions, Packages, Tours, HowItWorks, Testimonials, FAQ, Contact, Footer
 */
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Promotions from "../components/Promotions";
import Packages from "../components/Packages";
import Tours from "../components/Tours";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#009FE3] focus:text-white focus:rounded-lg focus:font-semibold"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Benefits — floats over hero bottom */}
        <Benefits />

        {/* 3. Promociones de Julio */}
        <Promotions />

        {/* 4. Paquetes */}
        <Packages />

        {/* 5. Tours Destacados */}
        <Tours />

        {/* 6. Cómo funciona */}
        <HowItWorks />

        {/* 7. Testimonios */}
        <Testimonials />

        {/* 8. Preguntas Frecuentes */}
        <FAQ />

        {/* 9. Contacto */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating WhatsApp button */}
      <FloatingWhatsApp />

    </>
  );
}

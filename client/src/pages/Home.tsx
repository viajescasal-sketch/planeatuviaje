/**
 * Home — Viajes Casal Landing Page
 * Design: Coastal Luxury Minimalism
 * Sections: Hero, Benefits, TravelPartner, Packages, Tours, HowItWorks, Testimonials, FAQ, Contact, Footer
 */
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import { lazy, Suspense } from "react";
import { useSeo } from "@/hooks/useSeo";
import { getPage } from "@shared/seo";

const homeSeo = getPage("/");
const HomeSections = lazy(() => import("./HomeSections"));
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Home() {
  useSeo(homeSeo);
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

        {/* 3 al 9. Travel Partner, paquetes, tours, cómo funciona, testimonios, FAQ y contacto */}
        <Suspense fallback={<div style={{ minHeight: "100vh" }} aria-hidden="true" />}>
          <HomeSections />
        </Suspense>
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating WhatsApp button */}
      <FloatingWhatsApp />

    </>
  );
}

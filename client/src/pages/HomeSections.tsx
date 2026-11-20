/**
 * Secciones de la página de inicio que están debajo del primer pantallazo.
 * Se cargan en un archivo aparte para que lo primero que ve el visitante aparezca más rápido.
 */
import { useEffect } from "react";
import TravelPartner from "../components/TravelPartner";
import Packages from "../components/Packages";
import Tours from "../components/Tours";
import ExploreLinks from "../components/ExploreLinks";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function HomeSections() {
  // Si el enlace trae un ancla (viajescasal.com/#contacto), ya con las secciones cargadas se baja hasta ella.
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const t = setTimeout(() => document.getElementById(decodeURIComponent(id))?.scrollIntoView(), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* 2.5. Tu Travel Partner — presenta a Paulina */}
      <TravelPartner />

      {/* 4. Paquetes */}
      <Packages />

      {/* 5. Tours Destacados */}
      <Tours />

      {/* 5.5 Explora por destino o servicio (enlaces internos) */}
      <ExploreLinks />

      {/* 6. Cómo funciona */}
      <HowItWorks />

      {/* 7. Testimonios */}
      <Testimonials />

      {/* 8. Preguntas Frecuentes */}
      <FAQ />

      {/* 9. Contacto */}
      <Contact />
    </>
  );
}

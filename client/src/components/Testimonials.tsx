/**
 * Testimonials — Viajes Casal
 * Design: Editorial layout with Google Reviews widget
 * Section: Testimonios
 * Widget: Elfsight Google Reviews
 */
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

// Suppress ResizeObserver errors from Elfsight widget
if (typeof window !== 'undefined') {
  const resizeObserverErrorHandler = (e: ErrorEvent) => {
    if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
      e.stopImmediatePropagation();
    }
  };
  window.addEventListener('error', resizeObserverErrorHandler);
}

export default function Testimonials() {
  const { language } = useLanguage();
  const { ref, visible } = useScrollAnimation();

  useEffect(() => {
    if (language === "en") return;
    // Cargar el script de Elfsight
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiar si es necesario
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [language]);

  return (
    <section
      id="testimonios"
      className="py-24"
      style={{ background: "#F0F8FF" }}
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-14 fade-in ${visible ? "visible" : ""}`}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="section-label">Lo que dicen nuestros viajeros</span>
              <h2 id="testimonials-title" className="section-title">
                Historias reales,<br />
                <span style={{ color: "#009FE3" }}>experiencias inolvidables</span>
              </h2>
              <div className="gold-divider" />
            </div>
            <div className="flex gap-6 lg:text-right">
              {[
                { value: "+500", label: "Viajes realizados" },
                { value: "4.9/5", label: "Calificación" },
                { value: "98%", label: "Satisfacción" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-extrabold text-[#009FE3]">{s.value}</div>
                  <div className="text-xs text-[#5a7080] font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Google Reviews Widget — Elfsight */}
        <div className={`fade-in ${visible ? "visible" : ""}`} style={{ transitionDelay: "100ms" }}>
          <div className="w-full">
            {language === "es" ? <div 
              className="elfsight-app-8b06e29f-8feb-44d8-bfa3-5753468c41b1" 
              data-elfsight-app-lazy
              style={{ minHeight: "400px" }}
            /> : <div className="rounded-3xl border border-[#dcebf3] bg-white p-8 text-center shadow-sm">
              <div className="mb-3 text-4xl">⭐</div>
              <h3 className="text-xl font-bold text-[#1A2B3C]">Verified traveler reviews</h3>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#5a7080]">Our travelers highlight the personalized assistance, clear communication and support they receive before and during their trips.</p>
              <p className="mt-4 font-bold text-[#009FE3]">4.9/5 average rating</p>
            </div>}
          </div>
        </div>
      </div>
    </section>
  );
}

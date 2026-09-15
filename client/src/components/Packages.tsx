/**
 * Packages — Viajes Casal
 * Design: Editorial luxury cards — elevated, aspirational
 * No coupon feel: premium concierge presentation
 * Actualizado con las 6 combinaciones de alta prioridad de la Campaña Publicitaria
 * (destino × ciudad de origen). Precios de referencia investigados en OTAs
 * (Booking, Bestday, PriceTravel, Expedia) — validar tarifa final con el
 * mayorista antes de cotizar a un cliente.
 */
import { useRef, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import QuoteModal from "./QuoteModal";

const packages = [
  {
    id: "cancun-cdmx",
    destino: "Cancún",
    origen: "Desde CDMX",
    tagline: "Familiar · El Caribe Mexicano",
    img: "/assets/cancun.webp",
    precio: "$12,099",
    precioOld: "$12,900",
    duracion: "5 noches · 6 días",
    personas: "2 personas",
    hotel: "Grand Oasis Cancún ★★★★",
    ventana: "📅 Reserva antes del 9 de noviembre · Viaja: octubre-noviembre 2026",
    beneficios: [
      "Vuelo redondo desde CDMX",
      "Hotel todo incluido frente al mar, apto para niños",
      "Desayunos, comidas y cenas incluidos",
      "Traslados aeropuerto-hotel redondos GRATIS",
      "Precio cerrado: sin sorpresas al llegar",
    ],
    hook: "🎁 Traslados redondos GRATIS",
    badge: "Favorito Familiar",
    badgeColor: "#009FE3",
    featured: true,
  },
  {
    id: "cancun-mty",
    destino: "Cancún",
    origen: "Desde Monterrey",
    tagline: "Pareja Premium · Solo Adultos",
    img: "/assets/cancun.webp",
    precio: "$20,202",
    precioOld: "$21,500",
    duracion: "4 noches · 5 días",
    personas: "2 personas",
    hotel: "Excellence Playa Mujeres ★★★★★ (Adults Only)",
    ventana: "📅 Reserva antes del 9 de noviembre · Viaja: octubre-noviembre 2026",
    beneficios: [
      "Vuelo redondo directo desde Monterrey",
      "Hotel boutique adults-only, playa tranquila",
      "Desayunos y cenas gourmet incluidos",
      "Traslados privados aeropuerto-hotel",
      "Ideal para aniversario o desconexión en pareja",
    ],
    hook: "🎁 10% dto. por reserva anticipada",
    badge: "Escapada Adults-Only",
    badgeColor: "#F5A623",
    featured: false,
  },
  {
    id: "rivieramaya-cdmx",
    destino: "Riviera Maya",
    origen: "Desde CDMX",
    tagline: "Familiar / Pareja · Frente a los parques Xcaret",
    img: "https://images.unsplash.com/photo-1693343972851-af02947e60d4?w=900&q=85",
    precio: "$10,212",
    precioOld: "$10,900",
    duracion: "4 noches · 5 días",
    personas: "2 personas",
    hotel: "Occidental at Xcaret Destination ★★★★",
    ventana: "📅 Reserva antes del 9 de noviembre · Viaja: octubre-noviembre 2026",
    beneficios: [
      "Vuelo redondo desde CDMX",
      "Hotel todo incluido a pasos de los parques Xcaret",
      "Traslados aeropuerto-hotel incluidos",
      "1 día de acceso a Xcaret incluido sin costo extra",
      "La naturaleza de la Riviera Maya, con la misma tranquilidad de Cancún",
    ],
    hook: "🎁 1 día de Xcaret incluido + 12% dto. temporada baja",
    badge: "Acceso a Parques Xcaret",
    badgeColor: "#006B9A",
    featured: false,
  },
  {
    id: "pv-gdl",
    destino: "Puerto Vallarta",
    origen: "Desde Guadalajara",
    tagline: "Escapada de fin de semana",
    img: "/assets/puerto-vallarta.webp",
    precio: "$13,098",
    precioOld: "$13,900",
    duracion: "2 noches · 3 días",
    personas: "2 personas",
    hotel: "Hard Rock Hotel Vallarta ★★★★★",
    ventana: "📅 Reserva antes del 9 de noviembre · Viaja: octubre-noviembre 2026",
    beneficios: [
      "Vuelo redondo corto desde Guadalajara",
      "Hotel todo incluido frente al mar",
      "Traslados aeropuerto-hotel redondos GRATIS",
      "Listo para reservar en días, no en semanas",
      "También disponible en versión 4★ de menor costo — pregunta por opciones",
    ],
    hook: "🎁 Traslados redondos GRATIS",
    badge: "Escapada Relámpago",
    badgeColor: "#F5A623",
    featured: false,
  },
  {
    id: "cabo-cdmx",
    destino: "Los Cabos",
    origen: "Desde CDMX",
    tagline: "Ejecutivo / Pareja · Alto Ticket",
    img: "/assets/los-cabos.webp",
    precio: "$31,635",
    precioOld: "$33,500",
    duracion: "4 noches · 5 días",
    personas: "2 personas",
    hotel: "Grand Velas Los Cabos o equivalente ★★★★★ (frente al Mar de Cortés)",
    ventana: "📅 Reserva antes del 9 de noviembre · Viaja: octubre-noviembre 2026",
    beneficios: [
      "Vuelo redondo desde CDMX",
      "Hotel 5 estrellas frente al Mar de Cortés",
      "Traslados privados aeropuerto-hotel GRATIS",
      "Desayunos y cenas incluidas",
      "Exclusividad y logística resuelta de principio a fin",
    ],
    hook: "🎁 Traslados privados GRATIS",
    badge: "Alto Ticket · Exclusivo",
    badgeColor: "#1A2B3C",
    featured: false,
  },
  {
    id: "cabo-mty",
    destino: "Los Cabos",
    origen: "Desde Monterrey",
    tagline: "Ejecutivo Bleisure",
    img: "/assets/los-cabos.webp",
    precio: "$16,650",
    precioOld: "$17,600",
    duracion: "4 noches · 5 días",
    personas: "2 personas",
    hotel: "Hyatt Ziva Los Cabos ★★★★★",
    ventana: "📅 Reserva antes del 9 de noviembre · Viaja: octubre-noviembre 2026",
    beneficios: [
      "Vuelo redondo desde Monterrey",
      "Hotel todo incluido, ideal para extender un viaje de trabajo",
      "Traslados incluidos",
      "Cambio de fecha sin costo por flexibilidad de agenda",
      "Ya vas por trabajo — quédate unos días más por ti",
    ],
    hook: "🎁 Cambio de fecha sin costo",
    badge: "Bleisure",
    badgeColor: "#006B9A",
    featured: false,
  },
];

export default function Packages() {
  const { ref, visible } = useScrollAnimation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDestino, setSelectedDestino] = useState("");
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  const handleQuote = (destino: string) => {
    setSelectedDestino(destino);
    setModalOpen(true);
  };

  return (
    <section
      id="paquetes"
      className="py-24"
      style={{ background: "#F0F8FF" }}
      aria-labelledby="packages-title"
    >
      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-14 fade-in ${visible ? "visible" : ""}`}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="section-label">Nuestros Destinos</span>
              <h2 id="packages-title" className="section-title">
                Paquetes Turísticos<br />
                <span style={{ color: "#009FE3" }}>Premium</span>
              </h2>
              <div className="gold-divider" />
            </div>
            <div className="flex flex-col items-start lg:items-end gap-4">
              <p className="text-base font-bold text-[#1A2B3C] lg:text-right max-w-sm leading-snug">
                Paquetes de viaje todo incluido: <span style={{ color: "#009FE3" }}>vuelo, hotel y traslados</span> en un solo precio
              </p>
              <div
                className="flex items-start gap-4 sm:gap-6"
                role="img"
                aria-label="Cada paquete incluye vuelo, hotel y traslados armados según tu ciudad de origen, con un beneficio adicional que no afecta lo que ya cotizamos contigo"
              >
              {[
                {
                  label: "Vuelo",
                  path: <path d="M22 2 11 13M22 2 15 22l-4-9-9-4Z" />,
                },
                {
                  label: "Hotel",
                  path: (
                    <>
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </>
                  ),
                },
                {
                  label: "Traslados",
                  path: (
                    <>
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </>
                  ),
                },
                {
                  label: "Beneficio",
                  path: (
                    <>
                      <polyline points="20 12 20 22 4 22 4 12" />
                      <rect x="2" y="7" width="20" height="5" />
                      <line x1="12" y1="22" x2="12" y2="7" />
                      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                    </>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1.5" aria-hidden="true">
                  <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009FE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {item.path}
                    </svg>
                  </span>
                  <span className="text-[11px] font-semibold text-[#5a7080] whitespace-nowrap">{item.label}</span>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>

        {/* Package Cards — carrusel horizontal */}
        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="hidden sm:flex absolute left-1 top-[118px] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-[#006B9A] hover:bg-blue-50 hover:text-[#009FE3] transition-colors"
            aria-label="Ver paquetes anteriores"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="hidden sm:flex absolute right-1 top-[118px] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-[#006B9A] hover:bg-blue-50 hover:text-[#009FE3] transition-colors"
            aria-label="Ver más paquetes"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
          <div ref={scrollerRef} className="h-scroll flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-1 px-1 pt-2 pb-8">
          {packages.map((pkg, i) => (
            <article
              key={pkg.id}
              className={`vc-card fade-in ${visible ? "visible" : ""} ${pkg.featured ? "ring-2 ring-[#009FE3]/30" : ""} flex-shrink-0 w-[300px] sm:w-[340px] snap-start`}
              style={{ transitionDelay: `${i * 100}ms` }}
              aria-label={`Paquete ${pkg.destino} ${pkg.origen}`}
            >
              {/* Image */}
              <div className="pkg-img-wrap relative">
                <img
                  src={pkg.img}
                  alt={`Paquete todo incluido a ${pkg.destino} ${pkg.origen} — ${pkg.hotel}`}
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,20,40,0.75) 0%, transparent 55%)" }}
                  aria-hidden="true"
                />
                {/* Badge */}
                <div
                  className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ background: pkg.badgeColor }}
                >
                  {pkg.badge}
                </div>
                {/* Origen */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#006B9A] text-xs font-semibold px-3 py-1 rounded-full">
                  {pkg.origen}
                </div>
                {/* Destination */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-extrabold text-2xl leading-tight">{pkg.destino}</h3>
                  <p className="text-white/75 text-xs font-medium">{pkg.tagline}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#006B9A] text-xs font-medium px-3 py-1.5 rounded-full">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {pkg.duracion}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#006B9A] text-xs font-medium px-3 py-1.5 rounded-full">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                    {pkg.personas}
                  </span>
                </div>

                {/* Ventana de reserva y viaje */}
                <p className="text-xs font-semibold text-[#006B9A] mb-2 flex items-center gap-1.5">
                  {pkg.ventana}
                </p>
              
              {/* Hotel */}
                <p className="text-xs font-semibold text-[#1A2B3C] mb-3 flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#009FE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 17h20"/><path d="M4 17c0-4.5 2-8 8-8s8 3.5 8 8"/><circle cx="12" cy="6" r="1.5"/><path d="M9 21h6"/></svg>
                  {pkg.hotel}
                </p>

                {/* Benefits */}
                <ul className="mb-4 space-y-1.5 border-t border-gray-100 pt-4">
                  {pkg.beneficios.map((b) => (
                    <li key={b} className="text-xs text-[#5a7080] flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#009FE3]/10 flex items-center justify-center flex-shrink-0">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#009FE3" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Hook / gancho */}
                <div className="mb-5 text-xs font-bold px-3 py-2 rounded-lg" style={{ background: "rgba(245,166,35,0.12)", color: "#a9660b" }}>
                  {pkg.hook}
                </div>

                {/* Price */}
                <div className="mb-5 pb-4 border-b border-gray-100">
                  <span className="mb-1 block text-xs font-semibold text-[#5a7080]">Desde</span>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-[#1A2B3C]">{pkg.precio} <small className="text-xs font-bold">MXN</small></span>
                    <span className="text-sm text-gray-400 line-through">{pkg.precioOld}</span>
                    <span className="text-xs text-gray-400">/ Por persona</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleQuote(`${pkg.destino} (${pkg.origen})`)}
                  className="btn-primary w-full justify-center text-sm"
                  aria-label={`Solicitar cotización para ${pkg.destino} ${pkg.origen}`}
                >
                  Solicitar cotización
                </button>
              </div>
            </article>
          ))}
          </div>
        </div>

        {/* Bottom note */}
        <p className={`text-center text-sm text-[#5a7080] mt-8 fade-in ${visible ? "visible" : ""}`} style={{ transitionDelay: "400ms" }}>
          Todos los precios son por persona, con base en tarifas de referencia consultadas en Booking, Bestday, PriceTravel y Expedia. Sujetos a disponibilidad — confirmamos la tarifa final contigo antes de reservar. Cotización sin costo y sin compromiso.
        </p>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultDestino={selectedDestino}
      />
    </section>
  );
}

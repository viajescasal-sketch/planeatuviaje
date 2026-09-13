/**
 * Packages — Viajes Casal
 * Design: Editorial luxury cards — elevated, aspirational
 * No coupon feel: premium concierge presentation
 * Actualizado con las 6 combinaciones de alta prioridad de la Campaña Publicitaria
 * (destino × ciudad de origen). Precios de referencia investigados en OTAs
 * (Booking, Bestday, PriceTravel, Expedia) — validar tarifa final con el
 * mayorista antes de cotizar a un cliente.
 */
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import QuoteModal from "./QuoteModal";

const packages = [
  {
    id: "cancun-cdmx",
    destino: "Cancún",
    origen: "Desde CDMX",
    tagline: "Familiar · El Caribe Mexicano",
    img: "/assets/cancun.png",
    precio: "$10,900",
    precioOld: "$12,900",
    duracion: "5 noches · 6 días",
    personas: "2 personas",
    hotel: "Grand Oasis Cancún ★★★★",
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
    img: "/assets/cancun.png",
    precio: "$18,200",
    precioOld: "$21,500",
    duracion: "4 noches · 5 días",
    personas: "2 personas",
    hotel: "Excellence Playa Mujeres ★★★★★ (Adults Only)",
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
    precio: "$9,200",
    precioOld: "$10,900",
    duracion: "4 noches · 5 días",
    personas: "2 personas",
    hotel: "Occidental at Xcaret Destination ★★★★",
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
    img: "/assets/puerto-vallarta.png",
    precio: "$11,800",
    precioOld: "$13,900",
    duracion: "2 noches · 3 días",
    personas: "2 personas",
    hotel: "Hard Rock Hotel Vallarta ★★★★★",
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
    img: "/assets/los-cabos.png",
    precio: "$28,500",
    precioOld: "$33,500",
    duracion: "4 noches · 5 días",
    personas: "2 personas",
    hotel: "Grand Velas Los Cabos o equivalente ★★★★★ (frente al Mar de Cortés)",
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
    img: "/assets/los-cabos.png",
    precio: "$15,000",
    precioOld: "$17,600",
    duracion: "4 noches · 5 días",
    personas: "2 personas",
    hotel: "Hyatt Ziva Los Cabos ★★★★★",
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
            <p className="section-subtitle lg:text-right max-w-sm">
              Cada paquete incluye vuelo, hotel y traslados armados según tu ciudad de origen — con un beneficio adicional que no afecta lo que ya cotizamos contigo.
            </p>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <article
              key={pkg.id}
              className={`vc-card fade-in ${visible ? "visible" : ""} ${pkg.featured ? "ring-2 ring-[#009FE3]/30" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              aria-label={`Paquete ${pkg.destino} ${pkg.origen}`}
            >
              {/* Image */}
              <div className="pkg-img-wrap relative">
                <img
                  src={pkg.img}
                  alt={`Vista de ${pkg.destino}`}
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

                {/* Hotel */}
                <p className="text-xs font-semibold text-[#1A2B3C] mb-3 flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#009FE3" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
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

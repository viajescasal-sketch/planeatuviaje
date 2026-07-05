/**
 * Packages — Viajes Casal
 * Design: Editorial luxury cards — elevated, aspirational
 * No coupon feel: premium concierge presentation
 */
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import QuoteModal from "./QuoteModal";

const packages = [
  {
    id: "cancun",
    destino: "Cancún",
    tagline: "El Caribe Mexicano",
    img: "/manus-storage/cancun-package_8a498266.jpg",
    precio: "$14,500",
    precioOld: "$18,200",
    duracion: "5 noches · 6 días",
    personas: "2 personas",
    hotel: "Riu Palace Cancún ★★★★★",
    beneficios: [
      "Vuelo redondo desde CDMX",
      "Hotel todo incluido frente al mar",
      "Desayunos y cenas gourmet",
      "Traslados aeropuerto-hotel",
      "Tour de snorkel en Isla Mujeres",
    ],
    badge: "Más Solicitado",
    badgeColor: "#009FE3",
    featured: true,
  },
  {
    id: "puerto-vallarta",
    destino: "Puerto Vallarta",
    tagline: "El Pacífico Romántico",
    img: "/manus-storage/puerto-vallarta-package_2afb54f9.jpg",
    precio: "$11,800",
    precioOld: "$15,500",
    duracion: "4 noches · 5 días",
    personas: "2 personas",
    hotel: "Marriott Puerto Vallarta ★★★★★",
    beneficios: [
      "Vuelo redondo desde CDMX",
      "Suite superior vista al mar",
      "Desayunos incluidos",
      "Traslados aeropuerto-hotel",
      "Tour gastronómico por el Malecón",
    ],
    badge: "Escapada Romántica",
    badgeColor: "#F5A623",
    featured: false,
  },
  {
    id: "los-cabos",
    destino: "Los Cabos",
    tagline: "Donde el Desierto Abraza el Mar",
    img: "/manus-storage/los-cabos-package_6d114d0a.jpg",
    precio: "$13,200",
    precioOld: "$17,000",
    duracion: "4 noches · 5 días",
    personas: "2 personas",
    hotel: "One&Only Palmilla ★★★★★",
    beneficios: [
      "Vuelo redondo desde CDMX",
      "Suite con vista al Mar de Cortés",
      "Desayunos y cenas incluidas",
      "Traslados aeropuerto-hotel",
      "Tour al Arco de Los Cabos",
    ],
    badge: "Aventura Premium",
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
              Cada paquete incluye vuelo, hotel cinco estrellas y experiencias curadas por nuestro equipo.
            </p>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <article
              key={pkg.id}
              className={`vc-card fade-in ${visible ? "visible" : ""} ${pkg.featured ? "ring-2 ring-[#009FE3]/30" : ""}`}
              style={{ transitionDelay: `${i * 120}ms` }}
              aria-label={`Paquete ${pkg.destino}`}
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
                <ul className="mb-5 space-y-1.5 border-t border-gray-100 pt-4">
                  {pkg.beneficios.map((b) => (
                    <li key={b} className="text-xs text-[#5a7080] flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#009FE3]/10 flex items-center justify-center flex-shrink-0">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#009FE3" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-5 pb-4 border-b border-gray-100">
                  <span className="text-2xl font-extrabold text-[#1A2B3C]">{pkg.precio}</span>
                  <span className="text-sm text-gray-400 line-through">{pkg.precioOld}</span>
                  <span className="text-xs text-gray-400">/ paquete</span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleQuote(pkg.destino)}
                  className="btn-primary w-full justify-center text-sm"
                  aria-label={`Solicitar cotización para ${pkg.destino}`}
                >
                  Solicitar cotización
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <p className={`text-center text-sm text-[#5a7080] mt-8 fade-in ${visible ? "visible" : ""}`} style={{ transitionDelay: "400ms" }}>
          Todos los precios son por persona. Cotización sin costo y sin compromiso.
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

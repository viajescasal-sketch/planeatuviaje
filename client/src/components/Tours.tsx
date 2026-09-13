/**
 * Tours — Viajes Casal
 * Design: Editorial grid, aspirational imagery, concierge voice
 * Section: Tours Destacados
 * Actualizado: catálogo alineado a la Campaña Publicitaria (temporada Sep–Dic 2026).
 * Los tours que ya existían con su propia descripción/imagen la conservan tal cual
 * (solo se actualiza precio y orden); los que la campaña reemplaza por nombre/copy
 * nuevo se marcan abajo; el resto son incorporaciones nuevas del catálogo.
 */
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import TourQuoteModal from "./TourQuoteModal";

const tours = [
  // ---- Tendencia de temporada (primero) ----
  {
    // Ya existía — se respeta título, descripción e imagen originales. Solo precio y orden.
    id: "whale",
    title: "Avistamiento de Ballenas",
    destino: "Los Cabos",
    img: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&q=85",
    duracion: "4 horas",
    precio: "$1,600",
    desc: "Observa ballenas jorobadas en su hábitat natural en el Mar de Cortés.",
    categoria: "Aventura",
    cta: "Cotizar",
    tendencia: "🐋 Temporada Ballenas",
  },
  {
    // Nuevo — no existía en el catálogo.
    id: "xoximilco",
    title: "Xoximilco",
    destino: "Cancún",
    img: "https://images.unsplash.com/photo-1564762332974-5bf63a654c9d?w=600&q=85",
    duracion: "5 horas",
    precio: "$2,100",
    headline: "La fiesta mexicana que no sabías que necesitabas en Cancún.",
    desc: "Barra libre de tequila y cerveza, música en vivo, trajineras y mariachi.",
    categoria: "Fiesta Mexicana",
    cta: "Resérvalo antes de que se llene tu fecha",
    tendencia: "🇲🇽 Mes Patrio",
  },
  // ---- Reemplazos: mismo tour, nombre/descripción/precio actualizados a la campaña ----
  {
    // Reemplaza "Snorkel en Isla Mujeres"
    id: "catamaran",
    title: "Catamarán Isla Mujeres",
    destino: "Cancún",
    img: "https://images.unsplash.com/photo-1585094744214-ebb557f6e886?w=600&q=85",
    duracion: "6 horas",
    precio: "$2,200",
    headline: "No sabes nadar bien y aun así quieres ver el arrecife.",
    desc: "Chaleco, guía y snorkel incluidos. Tú solo disfruta.",
    categoria: "Aventura",
    cta: "Pregúntanos por WhatsApp",
  },
  {
    // Reemplaza "Chichén Itzá + Cenote"
    id: "chichen",
    title: "Chichén Itzá Deluxe",
    destino: "Cancún",
    img: "https://images.unsplash.com/photo-1561577101-aa749bffbb70?w=600&q=85",
    duracion: "10 horas",
    precio: "$2,900",
    headline: "Ir solo a Chichén Itzá suena más fácil de lo que es.",
    desc: "Te contamos qué nadie te dice antes de reservar.",
    categoria: "Cultura",
    cta: "Escríbenos tus fechas",
  },
  {
    // Reemplaza la mitad "Xcaret" del combo "Xcaret + Xel-Há"
    id: "xcaret-plus",
    title: "Xcaret Plus",
    destino: "Riviera Maya",
    img: "https://images.unsplash.com/photo-1766776341444-f8f5c95693cc?w=600&q=85",
    duracion: "1 día",
    precio: "$2,800",
    headline: "Un parque, un día, cero pendientes.",
    desc: "Buffet, snorkel y transporte ya incluidos. Solo trae ganas de disfrutar.",
    categoria: "Naturaleza",
    cta: "Arma tu combo por WhatsApp",
  },
  {
    // Reemplaza la mitad "Xel-Há" del combo "Xcaret + Xel-Há"
    id: "xelha",
    title: "Xel-Há Todo Incluido",
    destino: "Riviera Maya",
    img: "https://images.unsplash.com/photo-1615695478392-af177ac550b9?w=600&q=85",
    duracion: "6 horas",
    precio: "$2,300",
    headline: "El agua más clara que vas a ver en tu vida está a 90 minutos de tu hotel.",
    desc: "Snorkel ilimitado, tobogán y tirolesas incluidos.",
    categoria: "Naturaleza",
    cta: "Pregunta fechas disponibles",
  },
  // ---- Nuevos ----
  {
    id: "xplor",
    title: "Xplor",
    destino: "Riviera Maya",
    img: "https://images.unsplash.com/photo-1648853070657-6d58398bee93?w=600&q=85",
    duracion: "5 horas",
    precio: "$2,500",
    headline: "Para los que quieren adrenalina sin organizar nada.",
    desc: "Te armamos el combo perfecto según tu grupo: tirolesas, vehículo anfibio y cuevas.",
    categoria: "Aventura",
    cta: "Escríbenos y cotizamos",
  },
  {
    id: "marietas",
    title: "Islas Marietas",
    destino: "Puerto Vallarta",
    img: "https://images.unsplash.com/photo-1707066991531-604564b0c558?w=600&q=85",
    duracion: "4 horas",
    precio: "$1,800",
    headline: "La playa que solo se ve desde adentro de una cueva. Literal.",
    desc: "Cupo limitado por día. Snorkel incluido en la playa escondida.",
    categoria: "Naturaleza",
    cta: "Pregunta disponibilidad",
  },
  {
    // Reemplaza "Sunset Cruise en Catamarán"
    id: "rhythms",
    title: "Rhythms of the Night",
    destino: "Puerto Vallarta",
    img: "https://images.unsplash.com/photo-1639244132045-94c307ff4bfc?w=600&q=85",
    duracion: "4 horas",
    precio: "$2,400",
    headline: "La cena que van a recordar más que el hotel.",
    desc: "Ideal para aniversarios y lunas de miel. Cupo limitado, reserva con anticipación.",
    categoria: "Romance",
    cta: "Aparta tu fecha",
  },
  {
    // Ya existía — se respeta título, descripción e imagen originales. Solo precio y orden.
    id: "malecon",
    title: "Tour Gastronómico Malecón",
    destino: "Puerto Vallarta",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=85",
    duracion: "3 horas",
    precio: "$1,700",
    desc: "Descubre los mejores sabores de la cocina jalisciense junto al mar.",
    categoria: "Gastronomía",
    cta: "Cotizar",
  },
  {
    id: "arco",
    title: "El Arco + Playa del Amor",
    destino: "Los Cabos",
    img: "https://images.unsplash.com/photo-1580846629083-02669741360a?w=600&q=85",
    duracion: "3 horas",
    precio: "$950",
    headline: "La foto que todos hacen en Cabo, sin perder medio día organizándola.",
    desc: "Salidas todos los días, tour corto en lancha.",
    categoria: "Naturaleza",
    cta: "Reserva tu horario",
  },
  {
    id: "atv",
    title: "ATV en el Desierto",
    destino: "Los Cabos",
    img: "https://images.unsplash.com/photo-1747485009413-0b58e646367c?w=600&q=85",
    duracion: "3 horas",
    precio: "$1,950",
    headline: "Para el que no quiere solo playa en Cabo.",
    desc: "Equipo y guía incluidos. Recorrido por dunas al atardecer.",
    categoria: "Aventura",
    cta: "Escríbenos por WhatsApp",
  },
];

const categorias = ["Todos", "Naturaleza", "Cultura", "Aventura", "Fiesta Mexicana", "Gastronomía", "Romance"];

export default function Tours() {
  const { ref, visible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");

  const filtered = activeFilter === "Todos"
    ? tours
    : tours.filter((t) => t.categoria === activeFilter);

  const handleQuote = (tour: string) => {
    setSelectedTour(tour);
    setModalOpen(true);
  };

  return (
    <section
      id="tours"
      className="py-24 bg-white"
      aria-labelledby="tours-title"
    >
      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-12 fade-in ${visible ? "visible" : ""}`}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="section-label">Inspírate</span>
              <h2 id="tours-title" className="section-title">
                Tours &<br />
                <span style={{ color: "#009FE3" }}>Experiencias</span>
              </h2>
              <div className="gold-divider" />
            </div>
            <p className="section-subtitle lg:text-right max-w-sm">
              Los favoritos de la temporada, primero. Actividades únicas seleccionadas para complementar tu viaje y crear recuerdos que duran toda la vida.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap gap-2 mb-10 fade-in ${visible ? "visible" : ""}`} style={{ transitionDelay: "100ms" }}>
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? "text-white shadow-md"
                  : "bg-gray-100 text-[#5a7080] hover:bg-blue-50 hover:text-[#009FE3]"
              }`}
              style={activeFilter === cat ? { background: "linear-gradient(135deg, #006B9A, #009FE3)" } : {}}
              aria-pressed={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tour Cards — carrusel horizontal */}
        <div className="h-scroll flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-1 px-1 pt-2 pb-8">
          {filtered.map((tour, i) => (
            <article
              key={tour.id}
              className={`vc-card fade-in ${visible ? "visible" : ""} flex-shrink-0 w-[280px] sm:w-[310px] snap-start`}
              style={{ transitionDelay: `${i * 80}ms` }}
              aria-label={tour.title}
            >
              {/* Image */}
              <div className="tour-img-wrap relative">
                <img
                  src={tour.img}
                  alt={tour.title}
                  loading="lazy"
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#006B9A] text-xs font-semibold px-3 py-1 rounded-full">
                  {tour.categoria}
                </div>
                {/* Destination */}
                <div
                  className="absolute top-3 right-3 text-white text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: "rgba(0,111,154,0.85)", backdropFilter: "blur(4px)" }}
                >
                  {tour.destino}
                </div>
                {/* Temporada / tendencia ribbon */}
                {tour.tendencia && (
                  <div
                    className="absolute bottom-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md"
                    style={{ background: "linear-gradient(135deg, #F5A623, #e09510)" }}
                  >
                    {tour.tendencia}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-[#1A2B3C] text-base mb-1.5">{tour.title}</h3>
                {tour.headline && (
                  <p className="text-xs italic text-[#009FE3] font-medium mb-2 leading-snug">
                    "{tour.headline}"
                  </p>
                )}
                <p className="text-sm text-[#5a7080] mb-4 leading-relaxed">{tour.desc}</p>

                <div className="pt-3 border-t border-gray-100">
                  <div className="mb-3">
                    <span className="text-xs text-[#5a7080] flex items-center gap-1 mb-1">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {tour.duracion}
                    </span>
                    <span className="block text-xs font-semibold text-[#5a7080]">Desde</span>
                    <div className="flex flex-wrap items-baseline gap-1">
                      <span className="text-lg font-extrabold text-[#1A2B3C]">{tour.precio}</span>
                      <span className="text-xs text-gray-400">MXN / Por persona</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleQuote(tour.title)}
                    className="btn-secondary w-full justify-center text-xs px-4 py-2"
                    aria-label={`Cotizar ${tour.title}`}
                  >
                    {tour.cta}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <p className={`text-center text-sm text-[#5a7080] mt-8 fade-in ${visible ? "visible" : ""}`} style={{ transitionDelay: "400ms" }}>
          Precios de referencia por persona. Sujetos a disponibilidad y confirmación con el proveedor.
        </p>
      </div>

      <TourQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTour={selectedTour}
      />
    </section>
  );
}

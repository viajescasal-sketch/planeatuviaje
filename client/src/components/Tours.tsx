/**
 * Tours — Viajes Casal
 * Design: Editorial grid, aspirational imagery, concierge voice
 * Section: Tours Destacados
 */
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import TourQuoteModal from "./TourQuoteModal";

const tours = [
  {
    id: "xcaret",
    title: "Xcaret + Xel-Há",
    destino: "Cancún",
    img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=85",
    duracion: "2 días",
    precio: "$3,200",
    desc: "Los parques acuáticos y culturales más emblemáticos de la Riviera Maya.",
    categoria: "Naturaleza",
  },
  {
    id: "chichen",
    title: "Chichén Itzá + Cenote",
    destino: "Cancún",
    img: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&q=85",
    duracion: "1 día",
    precio: "$1,800",
    desc: "Visita la maravilla del mundo maya y nada en un cenote sagrado.",
    categoria: "Cultura",
  },
  {
    id: "whale",
    title: "Avistamiento de Ballenas",
    destino: "Los Cabos",
    img: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&q=85",
    duracion: "4 horas",
    precio: "$1,200",
    desc: "Observa ballenas jorobadas en su hábitat natural en el Mar de Cortés.",
    categoria: "Aventura",
  },
  {
    id: "malecon",
    title: "Tour Gastronómico Malecón",
    destino: "Puerto Vallarta",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=85",
    duracion: "3 horas",
    precio: "$950",
    desc: "Descubre los mejores sabores de la cocina jalisciense junto al mar.",
    categoria: "Gastronomía",
  },
  {
    id: "snorkel",
    title: "Snorkel en Isla Mujeres",
    destino: "Cancún",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=85",
    duracion: "6 horas",
    precio: "$1,500",
    desc: "Explora los arrecifes de coral más coloridos del Caribe mexicano.",
    categoria: "Aventura",
  },
  {
    id: "sunset",
    title: "Sunset Cruise en Catamarán",
    destino: "Puerto Vallarta",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=85",
    duracion: "3 horas",
    precio: "$1,100",
    desc: "Navega al atardecer con cóctel de bienvenida y música en vivo.",
    categoria: "Romance",
  },
];

const categorias = ["Todos", "Naturaleza", "Cultura", "Aventura", "Gastronomía", "Romance"];

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
              Actividades únicas seleccionadas para complementar tu viaje y crear recuerdos que duran toda la vida.
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

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tour, i) => (
            <article
              key={tour.id}
              className={`vc-card fade-in ${visible ? "visible" : ""}`}
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
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-[#1A2B3C] text-base mb-2">{tour.title}</h3>
                <p className="text-sm text-[#5a7080] mb-4 leading-relaxed">{tour.desc}</p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-[#5a7080] flex items-center gap-1 mb-1">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {tour.duracion}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-extrabold text-[#1A2B3C]">{tour.precio}</span>
                      <span className="text-xs text-gray-400">/ persona</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleQuote(tour.title)}
                    className="btn-secondary text-xs px-4 py-2"
                    aria-label={`Cotizar ${tour.title}`}
                  >
                    Cotizar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <TourQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTour={selectedTour}
      />
    </section>
  );
}

/**
 * Tours — Viajes Casal
 * Design: Editorial grid, aspirational imagery, concierge voice
 * Section: Tours Destacados
 * Actualizado: catálogo alineado a la Campaña Publicitaria (temporada Sep–Dic 2026).
 * Los tours que ya existían con su propia descripción/imagen la conservan tal cual
 * (solo se actualiza precio y orden); los que la campaña reemplaza por nombre/copy
 * nuevo se marcan abajo; el resto son incorporaciones nuevas del catálogo.
 */
import { useRef, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import TourQuoteModal from "./TourQuoteModal";
import TourDetailModal, { type TourSummary } from "./TourDetailModal";

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
    detalle: {
      horario: "Salidas a las 9:00 am, 12:00 pm y 3:00 pm. Duración aprox. 2 horas de navegación (más traslados). Temporada: 15 de diciembre a 15 de abril, con mejor avistamiento en febrero y marzo.",
      incluye: [
        "Guía bilingüe especializado en ballenas",
        "Lancha rápida tipo inflable con hidrófono para detectar cantos de ballenas",
        "Agua embotellada",
        "Chaleco salvavidas y equipo de seguridad",
      ],
      queVeras: [
        "Ballenas jorobadas y grises en época de apareamiento, parto y crianza",
        "Vistas de El Arco y Land's End desde el mar",
        "Alta probabilidad de avistamiento en temporada alta",
      ],
    },
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
    detalle: {
      horario: "Lunes a sábado. Check-in 7:00 pm, último abordaje 8:30 pm, término aprox. 11:00 pm. Duración aprox. 3 horas.",
      incluye: [
        "Paseo en trajinera decorada por los canales del parque",
        "Cena mexicana (antojitos, platillos de cerdo, res, mariscos y pollo, más postre)",
        "Barra libre de cerveza, tequila, ron, vodka, refrescos y aguas frescas",
        "Música en vivo: mariachi, norteño, ranchero y marimba",
        "Anfitrión que guía la fiesta durante todo el recorrido",
        "Estacionamiento gratuito",
      ],
      queVeras: [
        "Canales iluminados y trajineras con nombres de estados de México",
        "Espectáculo de baile y canto en vivo con distintos conjuntos musicales",
        "Ambiente de fiesta mexicana para brindar y gritar '¡Viva México!'",
      ],
    },
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
    detalle: {
      horario: "Salida aprox. 10:00 am (check-in 9:30 am). Regreso aprox. 4:45–5:00 pm. Duración total aprox. 6-7 horas incluyendo traslados.",
      incluye: [
        "Transporte redondo hotel–muelle–hotel con aire acondicionado",
        "Barra libre a bordo (agua, refresco, cocteles y cerveza de barril)",
        "Comida en restaurante frente al mar en Isla Mujeres",
        "Equipo de snorkel",
        "Música y animación a bordo del catamarán",
        "Tiempo libre para explorar Isla Mujeres",
      ],
      queVeras: [
        "Aguas turquesas del Caribe mexicano en ruta a Isla Mujeres",
        "Snorkel en arrecife (actividad no recomendada para embarazadas, menores de 10 o mayores de 65 años)",
        "Calles, playas y tiendas de Isla Mujeres en tiempo libre",
      ],
    },
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
    detalle: {
      horario: "Salida muy temprano por la mañana. Duración total aprox. 10-12 horas (día completo, ida y vuelta).",
      incluye: [
        "Transporte redondo",
        "Entrada a la zona arqueológica de Chichén Itzá",
        "Guía certificado durante el recorrido",
        "Visita a un cenote para nadar",
        "Comida buffet con platillos yucatecos",
        "Tiempo libre para tomar fotos",
      ],
      queVeras: [
        "Pirámide de Kukulkán, el Gran Juego de Pelota, el Templo de los Guerreros, el Observatorio y la Plaza de las Mil Columnas",
        "Un chapuzón refrescante en cenote natural",
        "Un pueblo colonial cercano (según el itinerario, usualmente Valladolid)",
      ],
    },
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
    detalle: {
      horario: "Se recomienda dedicar el día completo, aprox. 8-10 horas dentro del parque.",
      incluye: [
        "Acceso completo al parque Xcaret",
        "Comida buffet ilimitada en restaurantes seleccionados",
        "Vestidores privados con casillero",
        "Equipo de snorkel (con depósito reembolsable)",
        "Show nocturno 'México Espectacular'",
        "Acceso a pajarera y mariposario",
      ],
      queVeras: [
        "Ríos subterráneos para nadar o flotar",
        "Playas y caleta natural, además del acuario de arrecife",
        "Jardines, criaderos de especies nativas y áreas culturales",
        "Espectáculo nocturno de danza y música mexicana",
      ],
    },
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
    detalle: {
      horario: "Todos los días, 8:30 am a 6:00 pm. Experiencia de día completo.",
      incluye: [
        "Desayuno continental y buffet de snacks/comida durante el día",
        "Barra libre nacional y bebidas sin alcohol ilimitadas",
        "Snorkel ilimitado con aletas y visor",
        "Flotadores para el río, chalecos salvavidas y bicicletas",
      ],
      queVeras: [
        "Faro escénico con vistas 360° desde 40 metros de altura",
        "Mundo de Aventura: tirolesas, juegos de cuerdas y clavados",
        "Cenotes, caletas y el vivero con más de 270 especies nativas",
        "Área infantil con actividades para niños",
      ],
    },
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
    detalle: {
      horario: "Diurno: lunes a sábado, 9:00 am a 5:00 pm. Versión nocturna 'Xplor Fuego': 5:30 pm a 11:00 pm.",
      incluye: [
        "Acceso a las 4 actividades principales del parque",
        "Equipo de seguridad para cada actividad",
        "Comida (según el paquete contratado)",
      ],
      queVeras: [
        "Circuitos de tirolesas de casi 4 km sobrevolando la selva a 45 m de altura",
        "Expediciones en vehículos anfibios por cavernas y puentes colgantes",
        "Recorrido en balsa por ríos subterráneos en cuevas milenarias",
        "Exploración de cavernas con aguas cristalinas",
      ],
    },
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
    detalle: {
      horario: "Duración aprox. 5 horas, incluyendo navegación y actividades.",
      incluye: [
        "Traslado en lancha rápida por la bahía",
        "Nado guiado a través de un túnel de roca para llegar a Playa Escondida",
        "Equipo de snorkel y de seguridad",
        "Snack ligero a bordo",
        "Cuota de conservación del parque",
      ],
      queVeras: [
        "Playa Escondida, con acceso limitado a 15-20 minutos por regulación ambiental (sujeto a condiciones del mar)",
        "Más de 100 especies de aves y peces, incluido el piquero de patas azules",
        "Posibilidad de ver tortugas marinas, mantarrayas y, en temporada (dic-marzo), ballenas jorobadas",
      ],
    },
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
    detalle: {
      horario: "Salida aprox. 5:30 pm (check-in 45 min antes). Duración total aprox. 5 horas.",
      incluye: [
        "Crucero en catamarán al atardecer por la Bahía de Banderas",
        "Cena gourmet con vino",
        "Espectáculo teatral ALMA (acróbatas, bailarines y música en vivo)",
        "Crucero de regreso con música y ambiente festivo",
      ],
      queVeras: [
        "Atardecer sobre la Bahía de Banderas (posible avistamiento de ballenas migrando entre dic-marzo)",
        "Cena frente al mar en una cala escondida",
        "Espectáculo inmersivo en anfiteatro iluminado con velas dentro de la selva",
      ],
    },
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
    detalle: {
      horario: "Salidas diarias a las 10:30 am y 11:00 am. Duración aprox. 3-3.5 horas.",
      incluye: [
        "Más de 10 degustaciones en distintos locales y restaurantes del centro",
        "Botella de agua",
        "Recorrido guiado con contexto cultural e histórico",
      ],
      queVeras: [
        "Iglesia de Nuestra Señora de Guadalupe, el Muelle de Los Muertos, el Río Cuale y el Malecón",
        "Sabores típicos como tacos, birria, ceviche, mole, mariscos, aguas frescas y postres tradicionales",
        "Encuentro con chefs, vendedores y artesanos locales",
      ],
    },
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
    detalle: {
      horario: "Salidas todos los días. Recorrido básico 45 min-1 hora; con parada en playa aprox. 1.5-2 horas.",
      incluye: [
        "Transporte en lancha o catamarán",
        "Vista de El Arco de Cabo San Lucas",
        "Parada en Playa del Amor (según el paquete contratado)",
      ],
      queVeras: [
        "El Arco, el punto donde se encuentran el Mar de Cortés y el Océano Pacífico",
        "Colonia de lobos marinos y la formación 'Dedo de Neptuno'",
        "Playa del Amor, con arena blanca y aguas cristalinas",
      ],
    },
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
    detalle: {
      horario: "Salidas a las 9:00, 10:00, 12:00, 13:00, 15:00 y 16:00 hrs. Duración aprox. 2 horas.",
      incluye: [
        "Transporte redondo",
        "Cuatrimoto 4x4 automática",
        "Casco y equipo de seguridad",
        "Guía durante todo el recorrido",
      ],
      queVeras: [
        "Senderos del desierto de Los Cabos",
        "Dunas para subir y bajar",
        "Tramos de playa y acantilados al atardecer",
      ],
    },
  },
];

const categorias = ["Todos", "Naturaleza", "Cultura", "Aventura", "Fiesta Mexicana", "Gastronomía", "Romance"];

export default function Tours() {
  const { ref, visible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");
  const [detailTour, setDetailTour] = useState<TourSummary | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const filtered = activeFilter === "Todos"
    ? tours
    : tours.filter((t) => t.categoria === activeFilter);

  const handleQuote = (tour: string) => {
    setSelectedTour(tour);
    setModalOpen(true);
  };

  const handleDetail = (tour: TourSummary) => {
    setDetailTour(tour);
  };

  const handleCotizarFromDetail = (tour: string) => {
    setDetailTour(null);
    handleQuote(tour);
  };

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
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
        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="hidden sm:flex absolute left-1 top-[108px] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-[#006B9A] hover:bg-blue-50 hover:text-[#009FE3] transition-colors"
            aria-label="Ver tours anteriores"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="hidden sm:flex absolute right-1 top-[108px] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-[#006B9A] hover:bg-blue-50 hover:text-[#009FE3] transition-colors"
            aria-label="Ver más tours"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
          <div ref={scrollerRef} className="h-scroll flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-1 px-1 pt-2 pb-8">
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
                  alt={`${tour.title} en ${tour.destino} — tour con Viajes Casal`}
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
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleDetail(tour)}
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-full border border-gray-200 text-[#5a7080] text-xs font-semibold px-4 py-2 transition-colors duration-200 hover:border-[#009FE3] hover:text-[#009FE3]"
                      aria-label={`Conocer más sobre ${tour.title}`}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                      Conocer más
                    </button>
                    <button
                      onClick={() => handleQuote(tour.title)}
                      className="btn-secondary w-full justify-center text-xs px-4 py-2"
                      aria-label={`Cotizar ${tour.title}`}
                    >
                      {tour.cta}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
          </div>
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
      <TourDetailModal
        isOpen={detailTour !== null}
        onClose={() => setDetailTour(null)}
        tour={detailTour}
        onCotizar={handleCotizarFromDetail}
      />
    </section>
  );
}

/**
 * Promotions — Viajes Casal
 * Design: Editorial luxury layout — asymmetric, aspirational
 * No coupon/marketplace feel: "exclusive curated opportunities"
 * Section: Promociones de Julio
 */
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import CountdownTimer from "./CountdownTimer";

const promos = [
  {
    badge: "Oferta Exclusiva · Julio",
    title: "Cancún Todo Incluido",
    desc: "Cinco noches en un resort frente al mar con servicio de primera. Vuelo redondo incluido desde Ciudad de México.",
    price: "$12,500",
    oldPrice: "$16,800",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=85",
    validUntil: "Disponible hasta el 31 de julio",
    highlight: true,
  },
  {
    badge: "Escapada Romántica",
    title: "Puerto Vallarta",
    desc: "Cuatro noches en suite con vista al Pacífico. Cena privada en la playa incluida para dos.",
    price: "$9,800",
    oldPrice: "$13,200",
    img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=85",
    validUntil: "Disponible hasta el 25 de julio",
    highlight: false,
  },
  {
    badge: "Aventura de Lujo",
    title: "Los Cabos",
    desc: "Tres noches con experiencias únicas: snorkel, kayak y tour al Arco. Hotel boutique de lujo incluido.",
    price: "$8,200",
    oldPrice: "$11,500",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=85",
    validUntil: "Disponible hasta el 28 de julio",
    highlight: false,
  },
];

export default function Promotions() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="promociones"
      className="py-24"
      style={{ background: "linear-gradient(160deg, #003d5c 0%, #005f8a 40%, #007db5 100%)" }}
      aria-labelledby="promos-title"
    >
      <div className="container">
        {/* Header — editorial style */}
        <div
          ref={ref}
          className={`mb-14 fade-in ${visible ? "visible" : ""}`}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="section-label" style={{ color: "#F5A623" }}>
          Julio 2026
              </span>
              <h2 id="promos-title" className="text-white font-extrabold leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
                Oportunidades<br />
                <span style={{ color: "#F5A623" }}>exclusivas</span> de este mes
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white/70 text-base max-w-sm leading-relaxed lg:text-right">
                Cupos limitados. Cada propuesta está seleccionada por nuestro equipo para ofrecerte la mejor experiencia al mejor valor.
              </p>
              <CountdownTimer />
            </div>
          </div>
          {/* Gold divider */}
          <div className="mt-6 w-16 h-0.5 bg-[#F5A623]" />
        </div>

        {/* Featured promo — large editorial card */}
        <div className={`mb-8 fade-in ${visible ? "visible" : ""}`} style={{ transitionDelay: "100ms" }}>
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ minHeight: "380px" }}
          >
            <img
              src={promos[0].img}
              alt={promos[0].title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, rgba(0,20,40,0.85) 0%, rgba(0,40,70,0.6) 50%, transparent 100%)" }}
              aria-hidden="true"
            />
            <div className="relative z-10 p-8 lg:p-12 flex flex-col justify-end h-full" style={{ minHeight: "380px" }}>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#F5A623] mb-3 bg-white/10 px-3 py-1 rounded-full w-fit backdrop-blur-sm">
                {promos[0].badge}
              </span>
              <h3 className="text-white font-extrabold text-3xl lg:text-4xl mb-3">{promos[0].title}</h3>
              <p className="text-white/80 text-base max-w-lg mb-6 leading-relaxed">{promos[0].desc}</p>
              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <span className="text-white/60 text-sm line-through">{promos[0].oldPrice}</span>
                  <div className="text-white font-extrabold text-3xl">{promos[0].price} <span className="text-sm font-normal text-white/70">/ persona</span></div>
                  <p className="text-[#F5A623] text-xs font-semibold mt-1">⏰ {promos[0].validUntil}</p>
                </div>
                <a
                  href={`https://wa.me/529983921530?text=Hola,%20me%20interesa%20la%20oferta%20de%20${encodeURIComponent(promos[0].title)}%20de%20julio`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-6 py-3"
                >
                  Consultar disponibilidad
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Two smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promos.slice(1).map((promo, i) => (
            <div
              key={promo.title}
              className={`relative overflow-hidden rounded-2xl fade-in ${visible ? "visible" : ""}`}
              style={{ minHeight: "260px", transitionDelay: `${(i + 2) * 100}ms` }}
            >
              <img
                src={promo.img}
                alt={promo.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,20,40,0.9) 0%, rgba(0,40,70,0.5) 50%, transparent 100%)" }}
                aria-hidden="true"
              />
              <div className="relative z-10 p-6 flex flex-col justify-end h-full" style={{ minHeight: "260px" }}>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#F5A623] mb-2 bg-white/10 px-3 py-1 rounded-full w-fit backdrop-blur-sm">
                  {promo.badge}
                </span>
                <h3 className="text-white font-bold text-xl mb-1">{promo.title}</h3>
                <p className="text-white/75 text-sm mb-4 leading-relaxed">{promo.desc}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/50 text-xs line-through">{promo.oldPrice}</span>
                    <div className="text-white font-extrabold text-xl">{promo.price}</div>
                    <p className="text-[#F5A623] text-xs font-semibold">⏰ {promo.validUntil}</p>
                  </div>
                  <a
                    href={`https://wa.me/529983921530?text=Hola,%20me%20interesa%20la%20oferta%20de%20${encodeURIComponent(promo.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs px-4 py-2.5"
                  >
                    Consultar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

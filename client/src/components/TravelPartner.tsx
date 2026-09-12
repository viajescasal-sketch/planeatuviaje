/**
 * TravelPartner — Viajes Casal
 * Design: Editorial layout introducing Paulina Salazar, tu Travel Partner
 * Section: Tu Travel Partner — enlaza a su microsite dedicado (paulina.viajescasal.com)
 */
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function TravelPartner() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="travel-partner"
      className="py-24 bg-white overflow-hidden"
      aria-labelledby="travel-partner-title"
    >
      <div className="container">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Photo */}
          <div className={`relative slide-right ${visible ? "visible" : ""}`}>
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ aspectRatio: "4/5" }}
            >
              <img
                src="https://paulina.viajescasal.com/public/hero-paulina-final.png"
                alt="Paulina Salazar, tu Travel Partner en Cancún y Riviera Maya"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,30,60,0.5) 0%, transparent 45%)" }}
                aria-hidden="true"
              />

              {/* Floating badge */}
              <div
                className="absolute top-6 left-6 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 text-xs font-bold tracking-wide flex items-center gap-1.5"
                style={{ color: "#009FE3", boxShadow: "0 4px 16px rgba(0,30,60,0.15)" }}
              >
                <PlaneIcon /> Tu Travel Partner
              </div>

              {/* Name card */}
              <div
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5"
                style={{ boxShadow: "0 8px 32px rgba(0,30,60,0.2)" }}
              >
                <div className="font-bold text-[#1A2B3C] text-base">Paulina Salazar</div>
                <div className="text-xs text-[#5a7080] font-medium">Especialista en Cancún y Riviera Maya</div>
              </div>
            </div>

            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-10 -z-10"
              style={{ background: "#F5A623" }}
              aria-hidden="true"
            />
          </div>

          {/* Right: Content */}
          <div className={`fade-in ${visible ? "visible" : ""}`} style={{ transitionDelay: "150ms" }}>
            <span className="section-label">Conoce a quien te acompaña</span>
            <h2 id="travel-partner-title" className="section-title">
              Tu Travel Partner:<br />
              <span style={{ color: "#009FE3" }}>Paulina Salazar</span>
            </h2>
            <div className="gold-divider" />
            <p className="section-subtitle mb-4">
              Cuando hablas con nosotros no hablas con un call center: hablas con Paulina.
              Tu Travel Partner se encarga de todo, desde el primer mensaje hasta que
              regresas a casa, para que no tengas que preocuparte por caer en una estafa,
              perder tu dinero o batallar con los detalles.
            </p>
            <p className="section-subtitle mb-8">
              Conoce su historia, sus especialidades y cómo trabaja contigo paso a paso.
            </p>
            <a
              href="https://paulina.viajescasal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-7 py-3.5"
            >
              <PlaneIcon />
              Conoce a tu Travel Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlaneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  );
}

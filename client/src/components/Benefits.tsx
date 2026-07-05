/**
 * Benefits — Viajes Casal
 * Design: Premium floating card with editorial layout
 * 5 benefits with icons, elevated from hero
 */
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const benefits = [
  {
    icon: <ClockIcon />,
    title: "Ahorra tiempo",
    desc: "No pierdas horas buscando, nosotros lo hacemos por ti.",
  },
  {
    icon: <ShieldIcon />,
    title: "Viaja seguro",
    desc: "Te acompañamos antes, durante y después de tu viaje.",
  },
  {
    icon: <StarIcon />,
    title: "100% personalizado",
    desc: "Cada viaje se diseña según tu estilo y presupuesto.",
  },
  {
    icon: <DiamondIcon />,
    title: "Experiencias únicas",
    desc: "Acceso a lugares, hoteles y experiencias que marcan.",
  },
  {
    icon: <HeadsetIcon />,
    title: "Atención cercana",
    desc: "Estamos contigo en cada paso del camino.",
  },
];

export default function Benefits() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="beneficios"
      className="relative z-10 -mt-16 pb-16"
      aria-labelledby="benefits-title"
    >
      <div className="container">
        <div
          ref={ref}
          className={`bg-white rounded-2xl p-8 lg:p-10 fade-in ${visible ? "visible" : ""}`}
          style={{ boxShadow: "0 24px 64px rgba(0,111,154,0.18)" }}
        >
          <h2 id="benefits-title" className="sr-only">Beneficios de Viajes Casal</h2>

          {/* Top accent line */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-[#009FE3] to-transparent" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#009FE3]">
              Por qué elegirnos
            </span>
            <div className="h-0.5 flex-1 bg-gradient-to-l from-[#009FE3] to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`flex flex-col items-center text-center gap-3 fade-in ${visible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #e8f6fd, #c8eaf8)" }}
                >
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-[#1A2B3C] mb-1">{b.title}</h3>
                  <p className="text-xs text-[#5a7080] leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#009FE3" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#009FE3" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#009FE3" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#009FE3" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
      <line x1="12" y1="2" x2="12" y2="22"/>
      <line x1="2" y1="8.5" x2="22" y2="8.5"/>
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#009FE3" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M3 18v-6a9 9 0 0118 0v6"/>
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
    </svg>
  );
}

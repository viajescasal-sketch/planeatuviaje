/**
 * HowItWorks — Viajes Casal
 * Design: Asymmetric editorial layout — steps on left, large image on right
 * Section: Cómo funciona (4 pasos)
 */
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const steps = [
  {
    number: "01",
    title: "Hablamos",
    desc: "Nos cuentas tu idea de viaje, presupuesto y todo lo que sueñas vivir. Sin formularios complicados.",
    color: "#009FE3",
    icon: <ChatIcon />,
  },
  {
    number: "02",
    title: "Diseñamos tu viaje",
    desc: "Creamos tu itinerario 100% personalizado con las mejores opciones de hoteles, vuelos y experiencias.",
    color: "#006B9A",
    icon: <MapIcon />,
  },
  {
    number: "03",
    title: "Reservamos y organizamos",
    desc: "Nos encargamos de todo: reservas, coordinación y cada detalle para que no tengas que preocuparte.",
    color: "#F5A623",
    icon: <BriefcaseIcon />,
  },
  {
    number: "04",
    title: "¡Disfruta!",
    desc: "Tú solo disfrutas. Nosotros estamos contigo en cada paso del camino, disponibles 24/7.",
    color: "#009FE3",
    icon: <PalmIcon />,
  },
];

export default function HowItWorks() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="como-funciona"
      className="py-24 bg-white overflow-hidden"
      aria-labelledby="how-title"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Steps */}
          <div ref={ref}>
            <div className={`mb-10 fade-in ${visible ? "visible" : ""}`}>
              <span className="section-label">Así trabajamos contigo</span>
              <h2 id="how-title" className="section-title">
                Tu viaje en<br />
                <span style={{ color: "#009FE3" }}>4 simples pasos</span>
              </h2>
              <div className="gold-divider" />
              <p className="section-subtitle">
                Un proceso sencillo y transparente para que solo te preocupes por disfrutar.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`flex gap-5 items-start fade-in ${visible ? "visible" : ""}`}
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  {/* Step indicator */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
                      style={{ background: `${step.color}18`, border: `1.5px solid ${step.color}30` }}
                    >
                      <span style={{ color: step.color }}>{step.icon}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="w-0.5 flex-1 mt-2"
                        style={{ minHeight: "24px", background: `linear-gradient(to bottom, ${step.color}40, transparent)` }}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-4">
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className="text-xs font-bold tracking-widest"
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </span>
                      <h3 className="font-bold text-[#1A2B3C] text-base">{step.title}</h3>
                    </div>
                    <p className="text-sm text-[#5a7080] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={`mt-10 fade-in ${visible ? "visible" : ""}`} style={{ transitionDelay: "550ms" }}>
              <a
                href="https://wa.me/529983921530?text=Hola,%20quiero%20planear%20mi%20viaje%20con%20Viajes%20Bumeran%20Casal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-7 py-3.5"
              >
                <WhatsAppIcon />
                Comenzar ahora
              </a>
            </div>
          </div>

          {/* Right: Large aspirational image */}
          <div className={`relative slide-right ${visible ? "visible" : ""}`} style={{ transitionDelay: "200ms" }}>
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ aspectRatio: "4/5" }}
            >
              <img
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=700&q=85"
                alt="Pareja disfrutando de una playa de lujo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,30,60,0.6) 0%, transparent 50%)" }}
                aria-hidden="true"
              />

              {/* Floating stat card */}
              <div
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5"
                style={{ boxShadow: "0 8px 32px rgba(0,30,60,0.2)" }}
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "+500", label: "Viajes" },
                    { value: "4.9★", label: "Calificación" },
                    { value: "8+", label: "Años" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-xl font-extrabold text-[#009FE3]">{s.value}</div>
                      <div className="text-xs text-[#5a7080] font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative gold accent */}
              <div
                className="absolute top-6 right-6 w-16 h-16 rounded-full opacity-30"
                style={{ background: "radial-gradient(circle, #F5A623, transparent)" }}
                aria-hidden="true"
              />
            </div>

            {/* Decorative element */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-10 -z-10"
              style={{ background: "#009FE3" }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
      <line x1="9" y1="3" x2="9" y2="18"/>
      <line x1="15" y1="6" x2="15" y2="21"/>
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
    </svg>
  );
}

function PalmIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M17 8C8 10 5.9 16.17 3.82 21"/>
      <path d="M9.1 7.4C9.1 7.4 7 14 3 15"/>
      <path d="M14.5 4C14.5 4 16 11 12 14"/>
      <path d="M20 4C20 4 22 9 19 12"/>
      <path d="M10 21C10 21 11 14 14 12"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

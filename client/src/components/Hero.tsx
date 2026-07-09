/**
 * Hero — Viajes Casal
 * Design: Fullscreen, asymmetric layout, text left, image right
 * Gradient overlay for text contrast
 */
import { useEffect, useRef } from "react";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textRef.current) {
        textRef.current.style.opacity = "1";
        textRef.current.style.transform = "translateY(0)";
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/hero-beach_c36bf04e.jpg"
          alt="Playa tropical de lujo"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient overlay — dark left for text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(0,30,60,0.82) 0%, rgba(0,60,100,0.65) 45%, rgba(0,100,150,0.25) 70%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-32 lg:py-40">
        <div className="max-w-2xl">
          {/* Label */}
          <div
            ref={textRef}
            style={{
              opacity: 0,
              transform: "translateY(28px)",
              transition: "opacity 700ms cubic-bezier(0.23,1,0.32,1), transform 700ms cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#F5A623] mb-4 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
              ✦ Viajes Premium en México
            </span>

            {/* Headline */}
            <h1 className="text-white font-extrabold leading-tight mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              Nosotros nos encargamos{" "}
              <span style={{ color: "#F5A623" }}>de todo.</span>
              <br />
              Tú solo disfruta.
            </h1>

            {/* Subheadline */}
            <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-xl">
              Planificamos viajes personalizados a los mejores destinos de México para que vivas experiencias únicas, sin estrés y sin perder tiempo en los detalles.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/529983921530?text=Hola,%20quiero%20cotizar%20un%20viaje%20con%20Viajes%20Bumeran%20Casal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4"
                aria-label="Cotizar por WhatsApp"
              >
                <WhatsAppIcon />
                Cotizar por WhatsApp
              </a>
              <a
                href="#paquetes"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#paquetes")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white border-2 border-white/60 hover:bg-white/15 transition-all duration-200"
              >
                Ver Paquetes
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-10">
              <TrustBadge icon="⭐" text="4.9/5 en Google" />
              <TrustBadge icon="✈️" text="+500 viajes realizados" />
              <TrustBadge icon="🏆" text="Agencia certificada" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
        <span className="text-white/60 text-xs font-medium tracking-widest uppercase">Explorar</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}

function TrustBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
      <span aria-hidden="true">{icon}</span>
      <span className="text-white/90 text-sm font-medium">{text}</span>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

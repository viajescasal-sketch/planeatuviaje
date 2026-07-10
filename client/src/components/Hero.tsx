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
          src="/planeatuviaje/assets/hero-cancun.png"
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

            {/* Social Media Links */}
            <div className="flex gap-3 mb-6">
              <a href="https://www.facebook.com/share/1GjFtGYqvk/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white/70 hover:bg-[#009FE3] hover:text-white transition-all duration-200" aria-label="Facebook" title="Síguenos en Facebook">
                <FacebookIcon />
              </a>
              <a href="https://www.tiktok.com/@viajes_bumeran_casal?_r=1&_t=ZS-97tnwvvVyF8" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white/70 hover:bg-[#009FE3] hover:text-white transition-all duration-200" aria-label="TikTok" title="Síguenos en TikTok">
                <TikTokIconFixed />
              </a>
              <a href="https://www.instagram.com/viaja.pau?igsh=bWZzeGphM2JveHV0&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white/70 hover:bg-[#009FE3] hover:text-white transition-all duration-200" aria-label="Instagram" title="Síguenos en Instagram">
                <InstagramIconFixed />
              </a>
              <a href="https://youtube.com/@inspirateaviajar?si=x4N2enDjoUBr3QF_" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white/70 hover:bg-[#009FE3] hover:text-white transition-all duration-200" aria-label="YouTube" title="Síguenos en YouTube">
                <YouTubeIcon />
              </a>
            </div>

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

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.498 3.094c1.356-.027 2.463-.994 2.468-2.326.005-1.338-1.119-2.433-2.479-2.433-.797 0-1.512.38-1.938.968-.426.588-.664 1.34-.664 2.134 0 1.338 1.119 2.433 2.479 2.433.067 0 .133-.003.199-.009zm-.502 4.905c-1.294 0-2.487-.512-3.368-1.346-.881-.834-1.368-1.97-1.368-3.154 0-.603.1-1.189.291-1.745.191-.556.475-1.07.85-1.524.375-.454.83-.832 1.354-1.119.524-.287 1.102-.487 1.717-.594.615-.107 1.262-.124 1.92-.05.658.074 1.315.237 1.953.485.638.248 1.247.59 1.812 1.022.565.432 1.078.955 1.528 1.56.45.605.83 1.285 1.131 2.027.301.742.52 1.541.651 2.378.131.837.17 1.705.114 2.586-.056.881-.218 1.771-.483 2.655-.265.884-.633 1.757-1.096 2.609-.463.852-1.016 1.676-1.65 2.46-.634.784-1.342 1.522-2.115 2.207-.773.685-1.605 1.31-2.485 1.869-.88.559-1.802 1.045-2.756 1.45-.954.405-1.933.733-2.923.98-.99.247-1.983.42-2.97.515-.987.095-1.96.107-2.91.035-.95-.072-1.87-.27-2.75-.587-.88-.317-1.71-.75-2.48-1.293-.77-.543-1.47-1.19-2.09-1.93-.62-.74-1.15-1.57-1.58-2.47-.43-.9-.76-1.86-.99-2.86-.23-1-.36-2.03-.39-3.07-.03-1.04.05-2.07.24-3.08.19-1.01.48-1.99.87-2.93.39-.94.88-1.83 1.46-2.65.58-.82 1.24-1.56 1.98-2.21.74-.65 1.55-1.21 2.42-1.66.87-.45 1.79-.8 2.74-1.03.95-.23 1.93-.35 2.92-.36zm-5.65 8.905c-.22.22-.34.52-.34.83 0 .31.12.61.34.83.22.22.52.34.83.34.31 0 .61-.12.83-.34.22-.22.34-.52.34-.83 0-.31-.12-.61-.34-.83-.22-.22-.52-.34-.83-.34-.31 0-.61.12-.83.34z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.921c-3.883.645-7.75.645-11.633 0C4.728 17.323 3 15.952 3 13.839V10.161c0-2.113 1.728-3.484 2.888-3.82 3.883-.645 7.75-.645 11.633 0 1.16.336 2.888 1.707 2.888 3.82v3.678c0 2.113-1.728 3.484-2.888 3.82zm-5.521-11.801c-1.305 0-2.364 1.059-2.364 2.364s1.059 2.364 2.364 2.364 2.364-1.059 2.364-2.364-1.059-2.364-2.364-2.364z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function TikTokIconFixed() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3v10.5a4.5 4.5 0 1 1-4.5-4.5" />
      <path d="M15 3c.8 2.4 2.6 4 5 4.5" />
    </svg>
  );
}

function InstagramIconFixed() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

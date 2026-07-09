/**
 * Footer — Viajes Casal
 * Design: Dark ocean gradient, CTA final, links, social
 * Bottom section: copyright
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer role="contentinfo">
      {/* CTA Banner */}
      <div
        className="bg-ocean-gradient py-16 px-4"
        style={{ background: "linear-gradient(135deg, #003d5c 0%, #006B9A 50%, #009FE3 100%)" }}
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-2">
                Tu próxima historia comienza aquí
              </p>
              <h2 className="text-white font-extrabold leading-tight" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
                Cuéntanos tu viaje y<br />hagámoslo realidad.
              </h2>
              <p className="text-white/70 text-sm mt-3">
                Respuesta rápida y atención personalizada
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/529983921530?text=Hola,%20quiero%20planear%20mi%20viaje%20con%20Viajes%20Bumeran%20Casal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
                aria-label="Escríbenos por WhatsApp"
              >
                <WhatsAppIcon />
                Escríbenos por WhatsApp
              </a>
              <button
                onClick={() => scrollTo("#paquetes")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white border-2 border-white/40 hover:bg-white/15 transition-all duration-200"
              >
                Ver paquetes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#0a1e30] py-12 px-4">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/manus-storage/LOGOVBCASALACOLORFONDOBLANCO.jpg_49faa729.webp"
                  alt="Viajes Bumeran Casal"
                  width="36"
                  height="36"
                  className="rounded-full"
                  loading="lazy"
                />
                <div>
                  <span className="text-white font-bold text-lg leading-none block">Viajes Bumeran</span>
                  <span className="text-white/50 text-xs">Casal</span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Viajes Bumeran Casal es una agencia de viajes premium especializada en destinos de playa en México. Más de 8 años creando experiencias inolvidables para nuestros clientes.
              </p>
              {/* Social */}
              <div className="flex gap-3">
                <SocialLink href="#" label="Facebook" icon={<FacebookIcon />} />
                <SocialLink href="#" label="Instagram" icon={<InstagramIcon />} />
                <SocialLink href="https://wa.me/529983921530" label="WhatsApp" icon={<WhatsAppSmallIcon />} />
              </div>
            </div>

            {/* Destinos */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Destinos
              </h3>
              <ul className="space-y-2">
                {["Cancún", "Puerto Vallarta", "Los Cabos", "Riviera Maya", "Huatulco"].map((dest) => (
                  <li key={dest}>
                    <a
                      href="#paquetes"
                      onClick={(e) => { e.preventDefault(); scrollTo("#paquetes"); }}
                      className="text-white/60 text-sm hover:text-[#009FE3] transition-colors no-underline"
                    >
                      {dest}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servicios */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Servicios
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "Paquetes todo incluido", href: "#paquetes" },
                  { label: "Tours y actividades", href: "#tours" },
                  { label: "Viajes de luna de miel", href: "#contacto" },
                  { label: "Viajes en grupo", href: "#contacto" },
                  { label: "Cotización gratuita", href: "#contacto" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                      className="text-white/60 text-sm hover:text-[#009FE3] transition-colors no-underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Contacto
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/60 text-sm">
                  <span className="text-[#009FE3] mt-0.5">📱</span>
                  <span>+52 998 743 7557</span>
                </li>
                <li className="flex items-start gap-2 text-white/60 text-sm">
                  <span className="text-[#009FE3] mt-0.5">✉️</span>
                  <span>casal@viajesbumeran.com</span>
                </li>
                <li className="flex items-start gap-2 text-white/60 text-sm">
                  <span className="text-[#009FE3] mt-0.5">🕐</span>
                  <span>Lun–Sáb: 9:00 AM – 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs">
              © {currentYear} Viajes Casal. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors no-underline">
                Aviso de privacidad
              </a>
              <a href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors no-underline">
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#009FE3] hover:text-white transition-all duration-200 no-underline"
    >
      {icon}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function WhatsAppSmallIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

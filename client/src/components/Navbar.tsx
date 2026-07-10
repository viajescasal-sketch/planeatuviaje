/**
 * Navbar — Viajes Casal
 * Design: Transparent over hero, white/blur on scroll
 * Brand: Poppins, #009FE3, #F5A623
 */
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Paquetes", href: "#paquetes" },
    { label: "Tours", href: "#tours" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/")) {
      window.location.href = href;
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
    >
      <nav
        className="container flex items-center justify-between py-4"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
          className="flex items-center gap-2 text-decoration-none"
          aria-label="Viajes Casal - Inicio"
        >
          <span
            aria-hidden="true"
            className="grid h-10 w-10 place-items-center rounded-full bg-[#009FE3] text-sm font-extrabold text-white shadow-sm"
          >
            VB
          </span>
          <div className="flex flex-col leading-tight">
            <span
              className={`font-bold text-lg leading-none transition-colors duration-300 ${
                scrolled ? "text-[#1A2B3C]" : "text-white"
              }`}
            >
              Viajes Casal
            </span>
            <span
              className={`text-xs font-medium transition-colors duration-300 ${
                scrolled ? "text-[#009FE3]" : "text-white/80"
              }`}
            >
              Tu viaje, nuestra prioridad
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-6 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#009FE3] no-underline ${
                  scrolled ? "text-[#1A2B3C]" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>



        {/* CTA Button */}
        <a
          href="https://wa.me/529983921530?text=Hola,%20me%20interesa%20cotizar%20un%20viaje"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ background: "#F5A623", color: "#fff", boxShadow: "0 4px 16px rgba(245,166,35,0.4)" }}
          aria-label="Hablemos por WhatsApp"
        >
          <WhatsAppIcon />
          Hablemos por WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-[#1A2B3C]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/97 backdrop-blur-xl border-t border-gray-100 shadow-lg">
          <ul className="container py-4 flex flex-col gap-1 list-none m-0 p-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="block py-3 px-4 text-[#1A2B3C] font-medium text-sm rounded-lg hover:bg-blue-50 hover:text-[#009FE3] transition-colors no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://wa.me/529983921530?text=Hola,%20me%20interesa%20cotizar%20un%20viaje"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                <WhatsAppIcon />
                Hablemos por WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.498 3.094c1.356-.027 2.463-.994 2.468-2.326.005-1.338-1.119-2.433-2.479-2.433-.797 0-1.512.38-1.938.968-.426.588-.664 1.34-.664 2.134 0 1.338 1.119 2.433 2.479 2.433.067 0 .133-.003.199-.009zm-.502 4.905c-1.294 0-2.487-.512-3.368-1.346-.881-.834-1.368-1.97-1.368-3.154 0-.603.1-1.189.291-1.745.191-.556.475-1.07.85-1.524.375-.454.83-.832 1.354-1.119.524-.287 1.102-.487 1.717-.594.615-.107 1.262-.124 1.92-.05.658.074 1.315.237 1.953.485.638.248 1.247.59 1.812 1.022.565.432 1.078.955 1.528 1.56.45.605.83 1.285 1.131 2.027.301.742.52 1.541.651 2.378.131.837.17 1.705.114 2.586-.056.881-.218 1.771-.483 2.655-.265.884-.633 1.757-1.096 2.609-.463.852-1.016 1.676-1.65 2.46-.634.784-1.342 1.522-2.115 2.207-.773.685-1.605 1.31-2.485 1.869-.88.559-1.802 1.045-2.756 1.45-.954.405-1.933.733-2.923.98-.99.247-1.983.42-2.97.515-.987.095-1.96.107-2.91.035-.95-.072-1.87-.27-2.75-.587-.88-.317-1.71-.75-2.48-1.293-.77-.543-1.47-1.19-2.09-1.93-.62-.74-1.15-1.57-1.58-2.47-.43-.9-.76-1.86-.99-2.86-.23-1-.36-2.03-.39-3.07-.03-1.04.05-2.07.24-3.08.19-1.01.48-1.99.87-2.93.39-.94.88-1.83 1.46-2.65.58-.82 1.24-1.56 1.98-2.21.74-.65 1.55-1.21 2.42-1.66.87-.45 1.79-.8 2.74-1.03.95-.23 1.93-.35 2.92-.36zm-5.65 8.905c-.22.22-.34.52-.34.83 0 .31.12.61.34.83.22.22.52.34.83.34.31 0 .61-.12.83-.34.22-.22.34-.52.34-.83 0-.31-.12-.61-.34-.83-.22-.22-.52-.34-.83-.34-.31 0-.61.12-.83.34z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.921c-3.883.645-7.75.645-11.633 0C4.728 17.323 3 15.952 3 13.839V10.161c0-2.113 1.728-3.484 2.888-3.82 3.883-.645 7.75-.645 11.633 0 1.16.336 2.888 1.707 2.888 3.82v3.678c0 2.113-1.728 3.484-2.888 3.82zm-5.521-11.801c-1.305 0-2.364 1.059-2.364 2.364s1.059 2.364 2.364 2.364 2.364-1.059 2.364-2.364-1.059-2.364-2.364-2.364z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

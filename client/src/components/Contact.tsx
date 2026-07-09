/**
 * Contact — Viajes Casal
 * Design: Asymmetric editorial layout, premium feel
 * Section: Contacto
 */
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Contact() {
  const { ref, visible } = useScrollAnimation();
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, me contacto desde el sitio web de Viajes Bumeran Casal.

*Nombre:* ${form.nombre}
*Email:* ${form.email}
*Teléfono:* ${form.telefono}

*Mensaje:*
${form.mensaje}`;

    window.open(
      `https://wa.me/529983921530?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <section
      id="contacto"
      className="py-24 bg-white"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <div ref={ref} className={`slide-left ${visible ? "visible" : ""}`}>
            <span className="section-label">Estamos aquí para ti</span>
            <h2 id="contact-title" className="section-title">
              Cuéntanos tu<br />
              <span style={{ color: "#009FE3" }}>viaje soñado</span>
            </h2>
            <div className="gold-divider" />
            <p className="section-subtitle mb-8">
              Escríbenos y en menos de 2 horas te enviamos una propuesta personalizada sin ningún costo.
            </p>

            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              <ContactCard
                icon={<WhatsAppIcon />}
                title="WhatsApp"
                value="+52 998 743 7557"
                link="https://wa.me/529987437557"
                color="#25D366"
              />
              <ContactCard
                icon={<EmailIcon />}
                title="Email"
                value="casal@viajesbumeran.com"
                link="mailto:casal@viajesbumeran.com"
                color="#009FE3"
              />
              <ContactCard
                icon={<ClockIcon />}
                title="Horario de atención"
                value="Lunes a Sábado: 9:00 AM – 6:00 PM"
                color="#F5A623"
              />
            </div>

            {/* Promises */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #f0f8ff, #e8f4fd)" }}
            >
              <p className="text-sm font-bold text-[#1A2B3C] mb-3">Nuestra promesa</p>
              <ul className="space-y-2.5">
                {[
                  "Respuesta garantizada en menos de 2 horas",
                  "Cotización gratuita y sin compromiso",
                  "Atención personalizada de principio a fin",
                  "Disponibles 24/7 durante tu viaje",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#5a7080]">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "#009FE3" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`slide-right ${visible ? "visible" : ""}`} style={{ transitionDelay: "150ms" }}>
            <div
              className="bg-white rounded-3xl p-8"
              style={{ boxShadow: "0 16px 48px rgba(0,111,154,0.12)" }}
            >
              <h3 className="font-bold text-xl text-[#1A2B3C] mb-2">
                Envíanos un mensaje
              </h3>
              <p className="text-sm text-[#5a7080] mb-6">
                Te contactamos por WhatsApp en minutos.
              </p>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="font-bold text-[#1A2B3C] text-lg mb-2">¡Mensaje enviado!</h4>
                  <p className="text-[#5a7080] text-sm">
                    Te redirigimos a WhatsApp para continuar la conversación.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="c-nombre" className="vc-label">Nombre completo</label>
                    <input
                      id="c-nombre"
                      type="text"
                      className="vc-input"
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-email" className="vc-label">Email</label>
                      <input
                        id="c-email"
                        type="email"
                        className="vc-input"
                        placeholder="tu@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label htmlFor="c-tel" className="vc-label">Teléfono</label>
                      <input
                        id="c-tel"
                        type="tel"
                        className="vc-input"
                        placeholder="55 1234 5678"
                        value={form.telefono}
                        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                        autoComplete="tel"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="c-mensaje" className="vc-label">¿Cómo podemos ayudarte?</label>
                    <textarea
                      id="c-mensaje"
                      className="vc-input resize-none"
                      rows={4}
                      placeholder="Cuéntanos sobre el viaje que tienes en mente..."
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center py-4 text-base"
                  >
                    <WhatsAppIcon />
                    Enviar por WhatsApp
                  </button>
                  <p className="text-center text-xs text-[#5a7080]">
                    🔒 Tu información es confidencial
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon, title, value, link, color,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
  color: string;
}) {
  const content = (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-200">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}15`, color }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-[#5a7080] uppercase tracking-wide">{title}</p>
        <p className="font-semibold text-[#1A2B3C] text-sm">{value}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block no-underline">
        {content}
      </a>
    );
  }
  return content;
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

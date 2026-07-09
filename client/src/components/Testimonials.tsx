/**
 * Testimonials — Viajes Casal
 * Design: Editorial layout with large featured quote + grid
 * Section: Testimonios
 * Reseñas reales de Google Maps - Viajes Bumeran Casal
 */
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Anayely Bello",
    role: "Viaje de menores desde Estados Unidos",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    stars: 5,
    text: "Excelente experiencia con Paulina. Quiero agradecer profundamente a Paulina por toda su ayuda y dedicación durante nuestro viaje. Desde el primer momento estuvo pendiente de cada detalle y nos acompañó durante todo el proceso. Fue una persona muy especial para mis hijos, siempre amable, paciente y dispuesta a ayudarnos. Si estás en Estados Unidos y quieres mandar a tus pequeños de viaje para visitar a su familia o conocer nuevos lugares, Paulina es la persona indicada. ¡La recomiendo ampliamente!",
    featured: true,
  },
  {
    name: "Ara Flores",
    role: "Viaje con agente Joel",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    stars: 5,
    text: "Me encantó la atención personalizada de nuestro agente de viajes Joel, estuvo al pendiente de todo desde que salimos de casa hasta el regreso.",
    featured: false,
  },
  {
    name: "Luz Niño",
    role: "Viajero frecuente",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    stars: 5,
    text: "¡Altamente recomendados! He viajado con ellos en repetidas ocasiones y mis viajes han sido muy significativos y una grata experiencia. Además de sentirte segura al viajar individualmente. Destaco el excelente servicio y la atención al detalle. Desde todo el proceso de planeación, sus propuestas, sugerencias, y acompañamiento en el viaje y al regreso. Además del detalle inesperado que tuvieron por mi cumpleaños. He sentido un trato muy cálido.",
    featured: false,
  },
  {
    name: "Carolina José",
    role: "Viaje a Chile",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
    stars: 5,
    text: "Excelente servicio y atención. Me ayudaron a organizar mi viaje a Chile con gran profesionalismo; cuidaron cada detalle con mucha precisión. Sin duda, una experiencia totalmente recomendable.",
    featured: false,
  },
  {
    name: "Juan Manuel Alvarado Moctezuma",
    role: "Cliente satisfecho",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    stars: 5,
    text: "Excelente servicio, muy buena atención al cliente, profesionalismo, altamente recomendable.",
    featured: false,
  },
  {
    name: "Bj Ramírez",
    role: "Viajero frecuente",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    stars: 5,
    text: "Excelente servicio, la atención que tienen con cliente es fantástica, buscan que tu experiencia sea acogedora, no debes de preocuparte de nada, todo lo tiene resuelto para que solo te dediques a disfrutar las vacaciones. Ampliamente recomendable. Gracias CASAL.",
    featured: false,
  },
];

export default function Testimonials() {
  const { ref, visible } = useScrollAnimation();
  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  return (
    <section
      id="testimonios"
      className="py-24"
      style={{ background: "#F0F8FF" }}
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-14 fade-in ${visible ? "visible" : ""}`}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="section-label">Lo que dicen nuestros viajeros</span>
              <h2 id="testimonials-title" className="section-title">
                Historias reales,<br />
                <span style={{ color: "#009FE3" }}>experiencias inolvidables</span>
              </h2>
              <div className="gold-divider" />
            </div>
            <div className="flex gap-6 lg:text-right">
              {[
                { value: "+500", label: "Viajes realizados" },
                { value: "4.9/5", label: "Calificación" },
                { value: "98%", label: "Satisfacción" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-extrabold text-[#009FE3]">{s.value}</div>
                  <div className="text-xs text-[#5a7080] font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured testimonial — large editorial */}
        <div className={`mb-8 fade-in ${visible ? "visible" : ""}`} style={{ transitionDelay: "100ms" }}>
          <div
            className="relative overflow-hidden rounded-3xl p-8 lg:p-12"
            style={{ background: "linear-gradient(135deg, #006B9A 0%, #009FE3 100%)" }}
          >
            {/* Large decorative quote */}
            <div
              className="absolute top-4 right-8 text-white/10 font-serif font-bold select-none pointer-events-none"
              style={{ fontSize: "12rem", lineHeight: "1" }}
              aria-hidden="true"
            >
              "
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="stars mb-4" style={{ color: "#F5A623" }}>
                  {"★".repeat(featured.stars)}
                </div>
                <blockquote className="text-white font-medium text-xl lg:text-2xl leading-relaxed mb-6">
                  "{featured.text}"
                </blockquote>
                <footer className="flex items-center gap-4">
                  <img
                    src={featured.avatar}
                    alt={`Foto de ${featured.name}`}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                    loading="lazy"
                  />
                  <div>
                    <cite className="text-white font-bold not-italic block">{featured.name}</cite>
                    <span className="text-white/70 text-sm">{featured.role}</span>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of testimonials — 2x2 + 1 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((t, i) => (
            <blockquote
              key={t.name}
              className={`testimonial-card fade-in ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${(i + 2) * 80}ms` }}
            >
              <div className="stars mb-3" aria-label={`${t.stars} estrellas`} style={{ color: "#F5A623" }}>
                {"★".repeat(t.stars)}
              </div>
              <p className="text-sm text-[#5a7080] leading-relaxed mb-5 relative z-10">
                "{t.text}"
              </p>
              <footer className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={t.avatar}
                  alt={`Foto de ${t.name}`}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <cite className="font-semibold text-sm text-[#1A2B3C] not-italic">— {t.name}</cite>
                  <p className="text-xs text-[#009FE3] font-medium">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

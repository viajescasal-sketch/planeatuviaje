/**
 * Promotions — Viajes Casal
 * Design: Editorial luxury layout — asymmetric, aspirational
 * No coupon/marketplace feel: "exclusive curated opportunities"
 * Section: Promociones de temporada — edición Día de Muertos 2026
 * Toque estacional: noche morada + acentos cempasúchil y franja de
 * papel picado, sin romper la identidad azul/dorado de la marca.
 */
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import CountdownTimer from "./CountdownTimer";
import QuoteButton from "./QuoteButton";

type Promo = {
  badge: string;
  title: string;
  desc: string;
  price: string;
  /** Precio anterior (opcional). Solo si el proveedor lo publica. */
  oldPrice?: string;
  /** Muestra la palabra "Desde" antes del precio. */
  desde?: boolean;
  /** Ej. "6 días · Hab. cuádruple" */
  meta: string;
  img: string;
  validUntil: string;
  includes?: string[];
};

const WHATSAPP = "529983921530";
const waLink = (title: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hola, me interesa la promoción de Día de Muertos: ${title}`
  )}`;

/* Paquete estrella */
const featured: Promo = {
  badge: "🕯️ Día de Muertos · Oaxaca",
  title: "Día de Muertos en Oaxaca",
  desc: "Seis días entre altares, comparsas y panteones iluminados. Santo Domingo, Zócalo, Catedral, Monte Albán, San Bartolo Coyotepec y Teotitlán del Valle.",
  price: "$13,895",
  desde: true,
  meta: "6 días · Hab. cuádruple · Mínimo 2 personas",
  img: "/assets/muertos-oaxaca.webp",
  validUntil: "Salida única: 29 de octubre",
  includes: ["Traslados", "Hospedaje", "Guía acompañante", "Seguro turístico", "Visitas incluidas"],
};

/* Circuitos de varios días */
const circuits: Promo[] = [
  {
    badge: "Noche de Muertos",
    title: "Michoacán",
    desc: "Transportación turística, hospedaje, visitas guiadas y coordinador de grupo durante todo el viaje.",
    price: "$5,799",
    desde: true,
    meta: "3 días / 2 noches",
    img: "/assets/muertos-michoacan.webp",
    validUntil: "Del 31 de octubre al 2 de noviembre",
  },
  {
    badge: "De Tuxtla a Villahermosa",
    title: "Muertos en Chiapas",
    desc: "Traslados, hospedaje en la categoría que elijas, guía acompañante, seguro y visitas incluidas.",
    price: "$9,300",
    desde: true,
    meta: "5 días · Hab. triple",
    img: "/assets/muertos-chiapas-tuxtla.webp",
    validUntil: "Salidas diarias del 30 oct al 1 nov",
  },
  {
    badge: "Tradición en los Altos",
    title: "Chiapas Mágica",
    desc: "Tradición, color y flores en los Altos de Chiapas. Traslados, hospedaje, guía acompañante, seguro y visitas incluidas.",
    price: "$9,500",
    desde: true,
    meta: "6 días · Hab. cuádruple",
    img: "/assets/muertos-chiapas-magica.webp",
    validUntil: "Salidas diarias del 30 oct al 1 nov",
  },
  {
    badge: "Tradición poblana",
    title: "Muertos en Puebla",
    desc: "Vive la temporada de Muertos en Puebla. Traslados, hospedaje, guía acompañante, seguro y visitas incluidas.",
    price: "$11,740",
    desde: true,
    meta: "4 días · Hab. cuádruple",
    img: "/assets/muertos-puebla.webp",
    validUntil: "Salida única: 31 de octubre",
  },
];

/* Escapadas cortas */
const escapes: Promo[] = [
  {
    badge: "Pueblo Mágico",
    title: "Taxco desde CDMX",
    desc: "Recorre el Pueblo Mágico de Taxco en plena temporada de Día de Muertos.",
    price: "$4,440.50",
    meta: "Desde CDMX",
    img: "/assets/muertos-taxco.webp",
    validUntil: "2 y 3 de noviembre",
  },
  {
    badge: "La noche de las velas",
    title: "Día de Muertos en Mixquic",
    desc: "San Andrés Mixquic, famoso por su alumbrada: una de las celebraciones más emblemáticas de México.",
    price: "$2,981.50",
    meta: "Desde CDMX",
    img: "/assets/muertos-mixquic.webp",
    validUntil: "1 y 2 de noviembre",
  },
  {
    badge: "Recorrido nocturno",
    title: "Leyendas de Puebla en Tranvía",
    desc: "Recorre el centro histórico de Puebla en tranvía mientras escuchas sus leyendas más famosas.",
    price: "$1,094.50",
    meta: "En Puebla",
    img: "/assets/muertos-puebla-leyendas.webp",
    validUntil: "1 y 2 de noviembre",
  },
];

/* Paleta de temporada */
const CEMPASUCHIL = "#F5A623";
const PAPEL_PICADO = ["#F28C28", "#E4007C", "#7B2D8E", "#009FE3"];

function PriceBlock({ promo, size }: { promo: Promo; size: "lg" | "md" | "sm" }) {
  const priceClass = size === "lg" ? "text-3xl" : size === "md" ? "text-xl" : "text-lg";
  return (
    <div>
      {promo.oldPrice && (
        <span className="text-white/50 text-xs line-through">{promo.oldPrice}</span>
      )}
      {promo.desde && <span className="block text-xs font-semibold text-white/80">Desde</span>}
      <div className={`text-white font-extrabold ${priceClass}`}>
        {promo.price} <span className="text-xs font-normal text-white/70">MXN / Por persona</span>
      </div>
      <p className="text-xs font-semibold mt-1" style={{ color: CEMPASUCHIL }}>
        🗓️ {promo.validUntil}
      </p>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-xs font-semibold tracking-widest uppercase mb-2 bg-white/10 px-3 py-1 rounded-full w-fit backdrop-blur-sm"
      style={{ color: CEMPASUCHIL }}
    >
      {children}
    </span>
  );
}

export default function Promotions() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="promociones"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1b1035 0%, #2a1650 35%, #12305a 70%, #005f8a 100%)" }}
      aria-labelledby="promos-title"
    >
      {/* Brillo cálido de velas — decorativo */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-120px",
          right: "-120px",
          width: "420px",
          height: "420px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(245,166,35,0.22) 0%, rgba(245,166,35,0) 70%)",
        }}
        aria-hidden="true"
      />
      <div className="container relative">
        {/* Header — editorial style */}
        <div ref={ref} className={`mb-14 fade-in ${visible ? "visible" : ""}`}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="section-label" style={{ color: CEMPASUCHIL }}>
                🕯️ Día de Muertos 2026 · Temporada de tradición
              </span>
              <h2 id="promos-title" className="text-white font-extrabold leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
                Este Día de Muertos,<br />
                <span style={{ color: CEMPASUCHIL }}>vive nuestras tradiciones</span> de cerca
              </h2>
              <QuoteButton variant="light" className="mt-6" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white/70 text-base max-w-sm leading-relaxed lg:text-right">
                Viaja, descubre y conecta con nuestras raíces. Cupos limitados: las salidas de temporada se llenan rápido.
              </p>
              <CountdownTimer target={new Date(2026, 9, 31, 23, 59, 59)} />
            </div>
          </div>
          {/* Franja de papel picado — acento de temporada */}
          <div className="mt-6 flex w-32 h-1 rounded-full overflow-hidden" role="presentation" aria-hidden="true">
            {PAPEL_PICADO.map((c) => (
              <span key={c} className="flex-1" style={{ background: c }} />
            ))}
          </div>
        </div>

        {/* Featured promo — large editorial card */}
        <div className={`mb-8 fade-in ${visible ? "visible" : ""}`} style={{ transitionDelay: "100ms" }}>
          <div className="relative overflow-hidden rounded-2xl" style={{ minHeight: "400px" }}>
            <img
              src={featured.img}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, rgba(20,8,40,0.92) 0%, rgba(30,15,60,0.7) 50%, rgba(30,15,60,0.15) 100%)" }}
              aria-hidden="true"
            />
            <div className="relative z-10 p-8 lg:p-12 flex flex-col justify-end h-full" style={{ minHeight: "400px" }}>
              <Badge>{featured.badge}</Badge>
              <h3 className="text-white font-extrabold text-3xl lg:text-4xl mb-2">{featured.title}</h3>
              <p className="text-white/60 text-sm font-semibold mb-3">{featured.meta}</p>
              <p className="text-white/80 text-base max-w-xl mb-4 leading-relaxed">{featured.desc}</p>
              {featured.includes && (
                <ul className="flex flex-wrap gap-2 mb-6 max-w-xl">
                  {featured.includes.map((item) => (
                    <li key={item} className="text-xs text-white/90 bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                      ✓ {item}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap items-center gap-6">
                <PriceBlock promo={featured} size="lg" />
                <a
                  href={waLink(featured.title)}
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

        {/* Circuitos — 2 x 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {circuits.map((promo, i) => (
            <div
              key={promo.title}
              className={`relative overflow-hidden rounded-2xl fade-in ${visible ? "visible" : ""}`}
              style={{ minHeight: "280px", transitionDelay: `${(i + 2) * 100}ms` }}
            >
              <img
                src={promo.img}
                alt={promo.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(20,8,40,0.94) 0%, rgba(30,15,60,0.6) 55%, rgba(30,15,60,0.1) 100%)" }}
                aria-hidden="true"
              />
              <div className="relative z-10 p-6 flex flex-col justify-end h-full" style={{ minHeight: "280px" }}>
                <Badge>{promo.badge}</Badge>
                <h3 className="text-white font-bold text-xl mb-1">{promo.title}</h3>
                <p className="text-white/60 text-xs font-semibold mb-1">{promo.meta}</p>
                <p className="text-white/75 text-sm mb-4 leading-relaxed">{promo.desc}</p>
                <div className="flex items-end justify-between gap-4">
                  <PriceBlock promo={promo} size="md" />
                  <a
                    href={waLink(promo.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs px-4 py-2.5 shrink-0"
                  >
                    Consultar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Escapadas cortas */}
        <div className={`mt-14 fade-in ${visible ? "visible" : ""}`} style={{ transitionDelay: "300ms" }}>
          <div className="flex items-end justify-between flex-wrap gap-2 mb-6">
            <div>
              <span className="section-label" style={{ color: CEMPASUCHIL }}>Escapadas cortas</span>
              <h3 className="text-white font-extrabold text-2xl lg:text-3xl">Experiencias de 1 y 2 de noviembre</h3>
            </div>
            <p className="text-white/60 text-sm">Precios por persona</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {escapes.map((promo) => (
              <div key={promo.title} className="relative overflow-hidden rounded-2xl" style={{ minHeight: "300px" }}>
                <img
                  src={promo.img}
                  alt={promo.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(20,8,40,0.95) 0%, rgba(30,15,60,0.55) 60%, rgba(30,15,60,0.05) 100%)" }}
                  aria-hidden="true"
                />
                <div className="relative z-10 p-5 flex flex-col justify-end h-full" style={{ minHeight: "300px" }}>
                  <Badge>{promo.badge}</Badge>
                  <h4 className="text-white font-bold text-lg mb-1">{promo.title}</h4>
                  <p className="text-white/60 text-xs font-semibold mb-1">{promo.meta}</p>
                  <p className="text-white/75 text-sm mb-4 leading-relaxed">{promo.desc}</p>
                  <div className="flex items-end justify-between gap-3">
                    <PriceBlock promo={promo} size="sm" />
                    <a
                      href={waLink(promo.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs px-4 py-2.5 shrink-0"
                    >
                      Consultar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-white/50 text-xs leading-relaxed max-w-3xl">
          Precios en pesos mexicanos por persona, sujetos a cambio y disponibilidad al momento de reservar. La ocupación (doble, triple o cuádruple) se indica en cada paquete. El orden de las visitas puede cambiar por operación. Consulta términos y condiciones con tu Travel Partner.
        </p>
      </div>
    </section>
  );
}

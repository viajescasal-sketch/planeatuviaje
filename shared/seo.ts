/**
 * SEO compartido — Viajes Bumeran Casal (viajescasal.com)
 *
 * Fuente única para:
 *  - Datos oficiales del negocio (nombre, teléfonos, correo, RNT, horario).
 *  - Contenido de las páginas de servicios, paquetes, tours, destinos y cotización.
 *  - Metadatos (title, description, canonical) y datos estructurados Schema.org.
 *  - HTML pre-renderizado que el servidor entrega a buscadores y bots de IA
 *    (OAI-SearchBot, Bingbot, Googlebot) antes de que cargue React.
 *
 * Lo usan el servidor (server/index.ts) y las páginas de React (client/src/pages).
 * Para cambiar un dato del negocio, cámbialo aquí y se actualiza en todo el sitio.
 */
import { blogArticles, type BlogArticle } from "../client/src/blog/blogData";

/* -------------------------------------------------------------------------- */
/* Datos oficiales del negocio                                                 */
/* -------------------------------------------------------------------------- */

export const SITE_URL = "https://viajescasal.com";

export const BUSINESS = {
  name: "Viajes Bumeran Casal",
  alternateName: "Viajes Casal",
  slogan: "Tu viaje, nuestra prioridad",
  description:
    "Agencia de viajes en línea desde Cancún, México. Paquetes todo incluido, tours, circuitos y viajes internacionales con acompañamiento personalizado desde que cotizas hasta que regresas de tu viaje.",
  phones: [
    { number: "+52 998 392 1530", e164: "+529983921530", label: "Ventas y cotizaciones" },
    { number: "+52 998 763 6565", e164: "+529987636565", label: "Tu Travel Partner" },
  ],
  email: "hola@viajescasal.com",
  city: "Cancún",
  region: "Quintana Roo",
  country: "MX",
  hours: "Lunes a sábado, 9:00 a 18:00 (hora de Cancún)",
  serviceMode: "Atención 100% en línea desde Cancún (WhatsApp, teléfono y correo).",
  rnt: "0423005c22777",
  rntLabel: "Registro Nacional de Turismo (SECTUR)",
  experience: "10 años de experiencia conjunta",
  googleReviews: "https://share.google/6fFVwqjBNrqEpkL1L",
  logo: `${SITE_URL}/assets/logo-viajes-bumeran-casal.jpg`,
  image: `${SITE_URL}/assets/hero-cancun.jpg`,
  sameAs: [
    "https://www.facebook.com/share/1GjFtGYqvk/",
    "https://www.instagram.com/viaja.pau",
    "https://www.tiktok.com/@viajes_bumeran_casal",
    "https://youtube.com/@inspirateaviajar",
    "https://share.google/6fFVwqjBNrqEpkL1L",
  ],
};

export const WHATSAPP_URL = `https://wa.me/${BUSINESS.phones[0].e164.replace("+", "")}`;

/* -------------------------------------------------------------------------- */
/* Tipos                                                                       */
/* -------------------------------------------------------------------------- */

export type SeoLink = { label: string; href: string };
export type SeoItem = { name: string; text?: string; href?: string };
export type SeoSection = { id?: string; h2: string; paragraphs?: string[]; items?: SeoItem[]; links?: SeoLink[] };

export type SeoPage = {
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  image?: string;
  sections: SeoSection[];
  breadcrumb: SeoLink[];
  /** Nodos Schema.org adicionales para esta página */
  schema?: Record<string, unknown>[];
};

/* -------------------------------------------------------------------------- */
/* Servicios                                                                   */
/* -------------------------------------------------------------------------- */

const ACOMPANAMIENTO =
  "Te acompañamos de forma personalizada desde que cotizas hasta que regresas a casa.";

export const SERVICES = [
  {
    id: "acompanamiento-personalizado",
    name: "Acompañamiento personalizado de principio a fin",
    short: "Una persona real te atiende desde la cotización hasta tu regreso.",
    text:
      "No hablas con un call center: tu Travel Partner arma tu propuesta, resuelve dudas, gestiona reservaciones y te acompaña por WhatsApp antes, durante y después del viaje, con atención 24/7 mientras viajas.",
    href: "/servicios#acompanamiento-personalizado",
  },
  {
    id: "paquetes-todo-incluido",
    name: "Paquetes todo incluido",
    short: "Hotel todo incluido y, según el paquete, vuelo y traslados.",
    text:
      "Paquetes a Cancún, Riviera Maya, Puerto Vallarta y Los Cabos armados según tu ciudad de origen, fechas y presupuesto. Lo que incluye cada paquete (vuelo, hotel, traslados, alimentos) se detalla en cada propuesta. " +
      ACOMPANAMIENTO,
    href: "/paquetes",
  },
  {
    id: "tours-y-experiencias",
    name: "Tours y experiencias",
    short: "Parques, cenotes, zonas arqueológicas y actividades en el mar.",
    text:
      "Tours en Cancún, Riviera Maya, Puerto Vallarta y Los Cabos: Chichén Itzá, Xcaret, Xel-Há, Isla Mujeres, Islas Marietas, avistamiento de ballenas y más. " +
      ACOMPANAMIENTO,
    href: "/tours",
  },
  {
    id: "circuitos",
    name: "Circuitos por México",
    short: "Recorridos de varios días con traslados, hospedaje y guía.",
    text:
      "Circuitos culturales y de temporada por destinos como Oaxaca, Chiapas, Puebla, Guanajuato y la Ciudad de México, con traslados, hospedaje y visitas guiadas según cada salida. " +
      ACOMPANAMIENTO,
    href: "/servicios#circuitos",
  },
  {
    id: "viajes-internacionales",
    name: "Viajes internacionales",
    short: "Paquetes y circuitos fuera de México a tu medida.",
    text:
      "Cotizamos viajes fuera de México con vuelo, hospedaje y actividades según tu estilo y presupuesto. " +
      ACOMPANAMIENTO,
    href: "/servicios#viajes-internacionales",
  },
];

/* -------------------------------------------------------------------------- */
/* Paquetes y tours (resumen para buscadores; el detalle vive en los componentes) */
/* -------------------------------------------------------------------------- */

export const PACKAGES_SUMMARY = [
  { destino: "Cancún", nombre: "Cancún familiar desde CDMX", hotel: "Grand Oasis Cancún", duracion: "5 noches · 6 días", desde: "$12,099 MXN por persona" },
  { destino: "Cancún", nombre: "Cancún solo adultos desde Monterrey", hotel: "Excellence Playa Mujeres", duracion: "4 noches · 5 días", desde: "$20,202 MXN por persona" },
  { destino: "Riviera Maya", nombre: "Riviera Maya frente a los parques Xcaret desde CDMX", hotel: "Occidental at Xcaret Destination", duracion: "4 noches · 5 días", desde: "$10,212 MXN por persona" },
  { destino: "Puerto Vallarta", nombre: "Escapada a Puerto Vallarta desde Guadalajara", hotel: "Hard Rock Hotel Vallarta", duracion: "2 noches · 3 días", desde: "$13,098 MXN por persona" },
  { destino: "Los Cabos", nombre: "Los Cabos premium desde CDMX", hotel: "Grand Velas Los Cabos o equivalente", duracion: "4 noches · 5 días", desde: "$31,635 MXN por persona" },
  { destino: "Los Cabos", nombre: "Los Cabos bleisure desde Monterrey", hotel: "Hyatt Ziva Los Cabos", duracion: "4 noches · 5 días", desde: "$16,650 MXN por persona" },
  { destino: "Oaxaca", nombre: "Oaxaca 2x1", hotel: "Casa Bonita Hotel & Luxury Residence", duracion: "3 noches · 4 días", desde: "$7,399 MXN por 2 personas" },
];

export const TOURS_SUMMARY = [
  { destino: "Cancún", nombre: "Xoximilco", duracion: "5 horas", desde: "$2,100 MXN" },
  { destino: "Cancún", nombre: "Catamarán a Isla Mujeres", duracion: "6 horas", desde: "$2,200 MXN" },
  { destino: "Cancún", nombre: "Chichén Itzá Deluxe", duracion: "10 horas", desde: "$2,900 MXN" },
  { destino: "Riviera Maya", nombre: "Xcaret Plus", duracion: "1 día", desde: "$2,800 MXN" },
  { destino: "Riviera Maya", nombre: "Xel-Há Todo Incluido", duracion: "6 horas", desde: "$2,300 MXN" },
  { destino: "Riviera Maya", nombre: "Xplor", duracion: "5 horas", desde: "$2,500 MXN" },
  { destino: "Puerto Vallarta", nombre: "Islas Marietas", duracion: "4 horas", desde: "$1,800 MXN" },
  { destino: "Puerto Vallarta", nombre: "Rhythms of the Night", duracion: "4 horas", desde: "$2,400 MXN" },
  { destino: "Puerto Vallarta", nombre: "Tour gastronómico por el Malecón", duracion: "3 horas", desde: "$1,700 MXN" },
  { destino: "Los Cabos", nombre: "Avistamiento de ballenas", duracion: "4 horas", desde: "$1,600 MXN" },
  { destino: "Los Cabos", nombre: "El Arco + Playa del Amor", duracion: "3 horas", desde: "$950 MXN" },
  { destino: "Los Cabos", nombre: "ATV en el desierto", duracion: "3 horas", desde: "$1,950 MXN" },
];

/* -------------------------------------------------------------------------- */
/* Destinos                                                                    */
/* -------------------------------------------------------------------------- */

export const DESTINATIONS = [
  {
    slug: "cancun",
    name: "Cancún",
    image: "/assets/cancun.webp",
    title: "Paquetes y tours a Cancún",
    description:
      "Viaja a Cancún con paquetes todo incluido, tours a Isla Mujeres y Chichén Itzá, y acompañamiento personalizado desde que cotizas hasta que regresas.",
    intro:
      "Cancún es el destino de playa más completo del Caribe Mexicano: hoteles todo incluido frente al mar, playas de agua turquesa y excursiones a Isla Mujeres y a la zona arqueológica de Chichén Itzá. Somos una agencia de viajes con base en Cancún y armamos tu viaje según tu ciudad de origen, fechas y presupuesto.",
    highlights: [
      "Hoteles todo incluido para familias y opciones solo adultos en Playa Mujeres",
      "Playas familiares de aguas tranquilas en la zona hotelera",
      "Excursiones a Isla Mujeres, Xoximilco y Chichén Itzá",
      "Cercanía con la Riviera Maya y sus parques",
    ],
  },
  {
    slug: "riviera-maya",
    name: "Riviera Maya",
    image: "/assets/resort-todo-incluido.png",
    title: "Paquetes y tours a la Riviera Maya",
    description:
      "Paquetes todo incluido a la Riviera Maya y tours a Xcaret, Xel-Há y Xplor, con atención personalizada de principio a fin.",
    intro:
      "La Riviera Maya, entre Playa del Carmen y Tulum, combina resorts todo incluido con parques ecológicos, cenotes y zonas arqueológicas. Te ayudamos a elegir el hotel y los parques que mejor van con tu viaje.",
    highlights: [
      "Hoteles frente a los parques Xcaret",
      "Parques Xcaret, Xel-Há y Xplor",
      "Cenotes, ríos subterráneos y zonas arqueológicas",
      "Ideal para familias y parejas",
    ],
  },
  {
    slug: "puerto-vallarta",
    name: "Puerto Vallarta",
    image: "/assets/puerto-vallarta.webp",
    title: "Paquetes y tours a Puerto Vallarta",
    description:
      "Paquetes a Puerto Vallarta, tours a Islas Marietas y experiencias gastronómicas, con acompañamiento personalizado desde la cotización hasta tu regreso.",
    intro:
      "Puerto Vallarta, en el Pacífico mexicano, une playa, malecón, gastronomía y pueblo con encanto. Es una gran opción para escapadas de fin de semana, sobre todo desde Guadalajara y el Bajío.",
    highlights: [
      "Escapadas de fin de semana con hotel todo incluido",
      "Tour a Islas Marietas",
      "Malecón, Zona Romántica y tour gastronómico",
      "Espectáculo Rhythms of the Night",
    ],
  },
  {
    slug: "los-cabos",
    name: "Los Cabos",
    image: "/assets/los-cabos.webp",
    title: "Paquetes y tours a Los Cabos",
    description:
      "Paquetes premium a Los Cabos, avistamiento de ballenas y tour al Arco, con atención personalizada antes, durante y después de tu viaje.",
    intro:
      "Los Cabos, en Baja California Sur, es el destino de lujo del Pacífico: resorts frente al Mar de Cortés, desierto y mar en un mismo viaje. En temporada se pueden avistar ballenas.",
    highlights: [
      "Resorts premium y todo incluido frente al mar",
      "Avistamiento de ballenas en temporada",
      "El Arco y Playa del Amor",
      "Aventura en ATV por el desierto",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Utilidades                                                                  */
/* -------------------------------------------------------------------------- */

export const abs = (p: string) => (p.startsWith("http") ? p : `${SITE_URL}${p}`);

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const articlesFor = (destName: string) =>
  blogArticles.filter((a) => a.category.toLowerCase().includes(destName.toLowerCase()));

const commonLinks: SeoLink[] = [
  { label: "Paquetes", href: "/paquetes" },
  { label: "Tours", href: "/tours" },
  { label: "Servicios", href: "/servicios" },
  { label: "Cotiza tu viaje", href: "/cotizar" },
  { label: "Blog de viajes", href: "/blog" },
];

const destinationLinks: SeoLink[] = DESTINATIONS.map((d) => ({ label: d.name, href: `/destinos/${d.slug}` }));

/* -------------------------------------------------------------------------- */
/* Schema.org                                                                  */
/* -------------------------------------------------------------------------- */

export function organizationSchema() {
  return {
    "@type": ["TravelAgency", "Organization"],
    "@id": ORG_ID,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    slogan: BUSINESS.slogan,
    description: BUSINESS.description,
    url: `${SITE_URL}/`,
    logo: BUSINESS.logo,
    image: BUSINESS.image,
    email: BUSINESS.email,
    telephone: BUSINESS.phones[0].number,
    priceRange: "$$",
    currenciesAccepted: "MXN",
    knowsLanguage: ["es", "en"],
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    areaServed: [{ "@type": "Country", name: "México" }, ...DESTINATIONS.map((d) => ({ "@type": "Place", name: d.name }))],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    contactPoint: BUSINESS.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: p.number,
      contactType: p.label,
      email: BUSINESS.email,
      areaServed: "MX",
      availableLanguage: ["Spanish", "English"],
    })),
    identifier: { "@type": "PropertyValue", propertyID: BUSINESS.rntLabel, value: BUSINESS.rnt },
    sameAs: BUSINESS.sameAs,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de viaje",
      itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@id": `${SITE_URL}/servicios#${s.id}` } })),
    },
  };
}

export function serviceSchemas() {
  return SERVICES.map((s) => ({
    "@type": "Service",
    "@id": `${SITE_URL}/servicios#${s.id}`,
    name: s.name,
    serviceType: s.name,
    description: `${s.short} ${s.text}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "México" },
    url: abs(s.href),
  }));
}

function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: BUSINESS.alternateName,
    inLanguage: "es-MX",
    publisher: { "@id": ORG_ID },
  };
}

function breadcrumbSchema(items: SeoLink[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.label, item: abs(b.href) })),
  };
}

function webPageSchema(page: SeoPage) {
  return {
    "@type": "WebPage",
    "@id": `${abs(page.path)}#webpage`,
    url: abs(page.path),
    name: page.title,
    description: page.description,
    inLanguage: "es-MX",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
  };
}

export function buildJsonLd(page: SeoPage): string {
  const graph: Record<string, unknown>[] = [organizationSchema(), websiteSchema(), webPageSchema(page)];
  if (page.breadcrumb.length > 1) graph.push(breadcrumbSchema(page.breadcrumb));
  if (page.path === "/" || page.path === "/servicios") graph.push(...serviceSchemas());
  if (page.schema) graph.push(...page.schema);
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u" + "003c"); // escapa "<" dentro del <script>
}

/* -------------------------------------------------------------------------- */
/* Páginas                                                                     */
/* -------------------------------------------------------------------------- */

const HOME_CRUMB: SeoLink = { label: "Inicio", href: "/" };

const contactSection = (): SeoSection => ({
  h2: "Contacto",
  paragraphs: [
    `${BUSINESS.serviceMode} Horario de atención: ${BUSINESS.hours}. Respondemos en menos de 2 horas dentro de ese horario y te acompañamos 24/7 durante tu viaje.`,
    `WhatsApp: ${BUSINESS.phones.map((p) => p.number).join(" y ")}. Correo: ${BUSINESS.email}.`,
    `${BUSINESS.rntLabel} No. ${BUSINESS.rnt}.`,
  ],
  links: [{ label: "Cotiza tu viaje", href: "/cotizar" }],
});

function homePage(): SeoPage {
  return {
    path: "/",
    title: "Viajes Bumeran Casal — Agencia de viajes en Cancún | Paquetes, tours y circuitos",
    description:
      "Agencia de viajes en Cancún: paquetes todo incluido, tours, circuitos y viajes internacionales. Te acompañamos desde la cotización hasta tu regreso.",
    h1: "Agencia de viajes en Cancún: paquetes todo incluido, tours, circuitos y viajes internacionales",
    intro: `${BUSINESS.name} (${BUSINESS.alternateName}) es una agencia de viajes en línea con base en Cancún y ${BUSINESS.experience}. Planeamos viajes personalizados a Cancún, Riviera Maya, Puerto Vallarta, Los Cabos y otros destinos de México y el mundo. ${ACOMPANAMIENTO}`,
    sections: [
      {
        h2: "Nuestros servicios",
        items: SERVICES.map((s) => ({ name: s.name, text: s.short, href: s.href })),
      },
      {
        h2: "Destinos",
        items: DESTINATIONS.map((d) => ({ name: d.name, text: d.description, href: `/destinos/${d.slug}` })),
      },
      {
        h2: "Paquetes destacados",
        items: PACKAGES_SUMMARY.map((p) => ({ name: p.nombre, text: `${p.hotel} · ${p.duracion} · desde ${p.desde} (precio de referencia)`, href: "/paquetes" })),
      },
      {
        h2: "Cómo trabajamos",
        items: [
          { name: "1. Nos cuentas tu viaje", text: "Destino, fechas, número de personas y presupuesto, por WhatsApp o con el formulario de cotización." },
          { name: "2. Recibes tu propuesta", text: "En menos de 2 horas en horario de atención, sin costo y sin compromiso." },
          { name: "3. Reservamos por ti", text: "Gestionamos hotel, vuelos, traslados y tours según tu paquete." },
          { name: "4. Viajas acompañado", text: "Atención 24/7 durante el viaje y seguimiento hasta que regresas." },
        ],
      },
      {
        h2: "Artículos del blog",
        items: blogArticles.map((a) => ({ name: a.title, text: a.excerpt, href: `/blog/${a.slug}` })),
      },
      contactSection(),
    ],
    breadcrumb: [HOME_CRUMB],
  };
}

function servicesPage(): SeoPage {
  return {
    path: "/servicios",
    title: "Servicios de viaje | Viajes Bumeran Casal",
    description:
      "Paquetes todo incluido, tours, circuitos por México y viajes internacionales con acompañamiento personalizado desde que cotizas hasta que regresas.",
    h1: "Servicios de viaje con acompañamiento personalizado",
    intro: `En ${BUSINESS.name} no solo vendemos un paquete: ${ACOMPANAMIENTO.toLowerCase()} Estos son los servicios que ofrecemos.`,
    sections: [
      ...SERVICES.map((s) => ({
        id: s.id,
        h2: s.name,
        paragraphs: [s.short, s.text],
        links:
          s.id === "paquetes-todo-incluido"
            ? [{ label: "Ver paquetes", href: "/paquetes" }, ...destinationLinks, { label: "Cotizar paquete", href: "/cotizar" }]
            : s.id === "tours-y-experiencias"
              ? [{ label: "Ver tours", href: "/tours" }, ...destinationLinks, { label: "Cotizar tour", href: "/cotizar" }]
              : [{ label: "Cotizar", href: "/cotizar" }],
      })),
      contactSection(),
    ],
    breadcrumb: [HOME_CRUMB, { label: "Servicios", href: "/servicios" }],
  };
}

function packagesPage(): SeoPage {
  return {
    path: "/paquetes",
    title: "Paquetes todo incluido a Cancún, Riviera Maya, Puerto Vallarta y Los Cabos | Viajes Bumeran Casal",
    description:
      "Paquetes de viaje todo incluido a Cancún, Riviera Maya, Puerto Vallarta y Los Cabos. Precios de referencia; tarifa final según fechas y disponibilidad.",
    h1: "Paquetes de viaje todo incluido",
    intro:
      "Paquetes armados según tu ciudad de origen, fechas y presupuesto. Lo que incluye cada paquete (vuelo, hotel, traslados, alimentos) se indica en cada tarjeta y en tu propuesta. Los precios son de referencia por persona; la tarifa final depende de las fechas y la disponibilidad.",
    image: "/assets/resort-todo-incluido.png",
    sections: [
      ...DESTINATIONS.map((d) => ({
        h2: `Paquetes a ${d.name}`,
        items: PACKAGES_SUMMARY.filter((p) => p.destino === d.name).map((p) => ({
          name: p.nombre,
          text: `${p.hotel} · ${p.duracion} · desde ${p.desde}`,
        })),
        links: [{ label: `Más sobre ${d.name}`, href: `/destinos/${d.slug}` }],
      })),
      {
        h2: "Otros destinos",
        items: PACKAGES_SUMMARY.filter((p) => !DESTINATIONS.some((d) => d.name === p.destino)).map((p) => ({
          name: p.nombre,
          text: `${p.hotel} · ${p.duracion} · desde ${p.desde}`,
        })),
        links: [{ label: "Cotiza tu paquete", href: "/cotizar" }, { label: "Ver tours", href: "/tours" }],
      },
    ],
    breadcrumb: [HOME_CRUMB, { label: "Paquetes", href: "/paquetes" }],
    schema: [
      {
        "@type": "ItemList",
        name: "Paquetes de viaje",
        itemListElement: PACKAGES_SUMMARY.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${p.nombre} — ${p.hotel}`,
        })),
      },
    ],
  };
}

function toursPage(): SeoPage {
  return {
    path: "/tours",
    title: "Tours en Cancún, Riviera Maya, Puerto Vallarta y Los Cabos | Viajes Bumeran Casal",
    description:
      "Tours y experiencias: Chichén Itzá, Xcaret, Xel-Há, Isla Mujeres, Islas Marietas, avistamiento de ballenas y más. Cotiza gratis por WhatsApp.",
    h1: "Tours y experiencias en México",
    intro:
      "Elige tus actividades y nosotros nos encargamos de la reservación y los traslados. Precios de referencia por persona, sujetos a disponibilidad.",
    image: "/assets/catamaran-isla-mujeres.jpg",
    sections: [
      ...DESTINATIONS.map((d) => ({
        h2: `Tours en ${d.name}`,
        items: TOURS_SUMMARY.filter((t) => t.destino === d.name).map((t) => ({ name: t.nombre, text: `${t.duracion} · desde ${t.desde}` })),
        links: [{ label: `Viajar a ${d.name}`, href: `/destinos/${d.slug}` }],
      })),
      { h2: "¿Listo para reservar?", links: [{ label: "Cotiza tus tours", href: "/cotizar" }, { label: "Ver paquetes", href: "/paquetes" }] },
    ],
    breadcrumb: [HOME_CRUMB, { label: "Tours", href: "/tours" }],
  };
}

function quotePage(): SeoPage {
  return {
    path: "/cotizar",
    title: "Cotiza tu viaje gratis | Viajes Bumeran Casal",
    description:
      "Solicita tu cotización de viaje sin costo: paquetes, tours, circuitos o viajes internacionales. Respuesta en menos de 2 horas en horario de atención.",
    h1: "Cotiza tu viaje",
    intro: `Cuéntanos destino, fechas, número de personas y presupuesto. Te enviamos una propuesta personalizada sin costo en menos de 2 horas dentro de nuestro horario de atención (${BUSINESS.hours}). ${ACOMPANAMIENTO}`,
    sections: [
      {
        h2: "Cotiza por WhatsApp",
        items: BUSINESS.phones.map((p) => ({ name: p.number, text: p.label, href: `https://wa.me/${p.e164.replace("+", "")}` })),
      },
      {
        h2: "¿Qué quieres cotizar?",
        items: SERVICES.map((s) => ({ name: s.name, text: s.short, href: s.href })),
        links: destinationLinks,
      },
      contactSection(),
    ],
    breadcrumb: [HOME_CRUMB, { label: "Cotizar", href: "/cotizar" }],
  };
}

function destinationPage(d: (typeof DESTINATIONS)[number]): SeoPage {
  const pk = PACKAGES_SUMMARY.filter((p) => p.destino === d.name);
  const tr = TOURS_SUMMARY.filter((t) => t.destino === d.name);
  const arts = articlesFor(d.name);
  const sections: SeoSection[] = [
    { h2: `¿Por qué viajar a ${d.name}?`, items: d.highlights.map((h) => ({ name: h })) },
  ];
  if (pk.length)
    sections.push({
      h2: `Paquetes a ${d.name}`,
      items: pk.map((p) => ({ name: p.nombre, text: `${p.hotel} · ${p.duracion} · desde ${p.desde} (precio de referencia)` })),
      links: [{ label: "Ver todos los paquetes", href: "/paquetes" }],
    });
  if (tr.length)
    sections.push({
      h2: `Tours en ${d.name}`,
      items: tr.map((t) => ({ name: t.nombre, text: `${t.duracion} · desde ${t.desde}` })),
      links: [{ label: "Ver todos los tours", href: "/tours" }],
    });
  if (arts.length)
    sections.push({ h2: `Guías de viaje de ${d.name}`, items: arts.map((a) => ({ name: a.title, text: a.excerpt, href: `/blog/${a.slug}` })) });
  sections.push({
    h2: `Cotiza tu viaje a ${d.name}`,
    paragraphs: [`${ACOMPANAMIENTO} Respuesta en menos de 2 horas en horario de atención.`],
    links: [{ label: `Cotizar viaje a ${d.name}`, href: "/cotizar" }, ...destinationLinks.filter((l) => l.label !== d.name)],
  });
  return {
    path: `/destinos/${d.slug}`,
    title: `${d.title} | Viajes Bumeran Casal`,
    description: d.description,
    h1: `Viaja a ${d.name}`,
    intro: d.intro,
    image: d.image,
    sections,
    breadcrumb: [HOME_CRUMB, { label: d.name, href: `/destinos/${d.slug}` }],
    schema: [
      {
        "@type": "TouristDestination",
        name: d.name,
        description: d.intro,
        image: abs(d.image),
        containedInPlace: { "@type": "Country", name: "México" },
      },
    ],
  };
}

function blogListPage(): SeoPage {
  return {
    path: "/blog",
    title: "Blog de viajes | Viajes Bumeran Casal",
    description: "Guías y consejos para viajar a Cancún, Riviera Maya, Puerto Vallarta y Los Cabos.",
    h1: "Blog de viajes",
    intro: "Guías prácticas para planear tu próximo viaje de playa en México.",
    sections: [
      { h2: "Artículos", items: blogArticles.map((a) => ({ name: a.title, text: a.excerpt, href: `/blog/${a.slug}` })) },
      { h2: "Planea tu viaje", links: [...destinationLinks, ...commonLinks.filter((l) => l.href !== "/blog")] },
    ],
    breadcrumb: [HOME_CRUMB, { label: "Blog", href: "/blog" }],
  };
}

function blogArticlePage(a: BlogArticle): SeoPage {
  const dest = DESTINATIONS.find((d) => a.category.toLowerCase().includes(d.name.toLowerCase()));
  const sections: SeoSection[] = a.sections.map((s) => ({
    id: s.id,
    h2: s.title,
    paragraphs: [...s.paragraphs, ...(s.tip ? [`Consejo: ${s.tip}`] : [])],
    items: s.bullets?.map((b) => ({ name: b })),
  }));
  sections.push({
    h2: "Planea tu viaje con nosotros",
    paragraphs: [ACOMPANAMIENTO],
    links: [
      ...(dest ? [{ label: `Paquetes y tours a ${dest.name}`, href: `/destinos/${dest.slug}` }] : destinationLinks),
      { label: "Cotiza tu viaje", href: "/cotizar" },
      { label: "Ver paquetes", href: "/paquetes" },
    ],
  });
  return {
    path: `/blog/${a.slug}`,
    title: `${a.seoTitle} | Viajes Casal`,
    description: a.description,
    h1: a.title,
    intro: a.excerpt,
    image: a.image,
    sections,
    breadcrumb: [HOME_CRUMB, { label: "Blog", href: "/blog" }, { label: a.title, href: `/blog/${a.slug}` }],
    schema: [
      {
        "@type": "BlogPosting",
        headline: a.title,
        description: a.description,
        image: a.image,
        datePublished: a.isoDate,
        dateModified: a.isoDate,
        inLanguage: "es-MX",
        mainEntityOfPage: abs(`/blog/${a.slug}`),
        author: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

function legalPage(path: string, h1: string): SeoPage {
  return {
    path,
    title: `${h1} | Viajes Bumeran Casal`,
    description: `${h1} de ${BUSINESS.name}, agencia de viajes en línea desde Cancún.`,
    h1,
    intro: `${h1} de ${BUSINESS.name}. ${BUSINESS.rntLabel} No. ${BUSINESS.rnt}. Contacto: ${BUSINESS.email}.`,
    sections: [],
    breadcrumb: [HOME_CRUMB, { label: h1, href: path }],
  };
}

/** Todas las páginas indexables, en orden de importancia (sitemap, llms.txt). */
export function allPages(): SeoPage[] {
  return [
    homePage(),
    servicesPage(),
    packagesPage(),
    toursPage(),
    ...DESTINATIONS.map(destinationPage),
    quotePage(),
    blogListPage(),
    ...blogArticles.map(blogArticlePage),
    legalPage("/aviso-de-privacidad", "Aviso de privacidad"),
    legalPage("/terminos-y-condiciones", "Términos y condiciones"),
  ];
}

/** Normaliza una ruta: sin barra final y sin prefijo /en (el contenido en inglés es una traducción). */
export function normalizePath(pathname: string): string {
  let p = pathname.split("?")[0].split("#")[0] || "/";
  if (p.length > 1 && p.endsWith("/")) p = p.replace(/\/+$/, "");
  if (p === "/en") return "/";
  if (p.startsWith("/en/")) p = p.slice(3);
  return p || "/";
}

export function getPage(pathname: string): SeoPage | undefined {
  const p = normalizePath(pathname);
  return allPages().find((pg) => pg.path === p);
}

/* -------------------------------------------------------------------------- */
/* HTML pre-renderizado                                                        */
/* -------------------------------------------------------------------------- */

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const link = (l: SeoLink) => {
  const ext = l.href.startsWith("http");
  return `<a href="${esc(l.href)}"${ext ? ' rel="noopener" target="_blank"' : ""}>${esc(l.label)}</a>`;
};

export function renderPageHtml(page: SeoPage): string {
  const nav = [{ label: "Inicio", href: "/" }, ...commonLinks, ...destinationLinks].map(link).join(" · ");
  const crumbs = page.breadcrumb.length > 1 ? `<nav aria-label="Ruta">${page.breadcrumb.map(link).join(" › ")}</nav>` : "";
  const sections = page.sections
    .map((s) => {
      const ps = (s.paragraphs || []).map((p) => `<p>${esc(p)}</p>`).join("");
      const items = s.items?.length
        ? `<ul>${s.items
            .map((i) => `<li>${i.href ? link({ label: i.name, href: i.href }) : `<strong>${esc(i.name)}</strong>`}${i.text ? ` — ${esc(i.text)}` : ""}</li>`)
            .join("")}</ul>`
        : "";
      const links = s.links?.length ? `<p>${s.links.map(link).join(" · ")}</p>` : "";
      return `<section${s.id ? ` id="${esc(s.id)}"` : ""}><h2>${esc(s.h2)}</h2>${ps}${items}${links}</section>`;
    })
    .join("");
  const contact = `<footer><p><strong>${esc(BUSINESS.name)}</strong> — ${esc(BUSINESS.serviceMode)} ${esc(BUSINESS.hours)}. WhatsApp ${BUSINESS.phones
    .map((p) => `<a href="https://wa.me/${p.e164.replace("+", "")}">${esc(p.number)}</a>`)
    .join(" / ")} · <a href="mailto:${esc(BUSINESS.email)}">${esc(BUSINESS.email)}</a> · ${esc(BUSINESS.rntLabel)} No. ${esc(BUSINESS.rnt)}</p><p>${[
    ...commonLinks,
    { label: "Aviso de privacidad", href: "/aviso-de-privacidad" },
    { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
  ]
    .map(link)
    .join(" · ")}</p></footer>`;
  return `<div id="seo-prerender" style="max-width:960px;margin:0 auto;padding:24px;font-family:system-ui,sans-serif;line-height:1.5;color:#1A2B3C"><header><p><a href="/"><strong>${esc(
    BUSINESS.alternateName,
  )}</strong></a></p><nav aria-label="Principal">${nav}</nav></header>${crumbs}<main><h1>${esc(page.h1)}</h1><p>${esc(page.intro)}</p>${sections}</main>${contact}</div>`;
}

/* -------------------------------------------------------------------------- */
/* sitemap.xml y llms.txt                                                      */
/* -------------------------------------------------------------------------- */

export function buildSitemap(today = new Date().toISOString().slice(0, 10)): string {
  const articleDate = new Map(blogArticles.map((a) => [`/blog/${a.slug}`, a.isoDate.slice(0, 10)]));
  const urls = allPages()
    .map((p) => {
      const pr = p.path === "/" ? "1.0" : p.path.startsWith("/blog/") || p.path.startsWith("/aviso") || p.path.startsWith("/termin") ? "0.6" : "0.8";
      return `  <url>\n    <loc>${abs(p.path)}</loc>\n    <lastmod>${articleDate.get(p.path) || today}</lastmod>\n    <priority>${pr}</priority>\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function buildLlmsTxt(): string {
  const lines = [
    `# ${BUSINESS.name} (${BUSINESS.alternateName})`,
    "",
    `> ${BUSINESS.description}`,
    "",
    `- Modalidad: ${BUSINESS.serviceMode}`,
    `- Horario: ${BUSINESS.hours}. Respuesta en menos de 2 horas dentro del horario; atención 24/7 durante el viaje.`,
    `- WhatsApp: ${BUSINESS.phones.map((p) => `${p.number} (${p.label})`).join("; ")}`,
    `- Correo: ${BUSINESS.email}`,
    `- ${BUSINESS.rntLabel}: ${BUSINESS.rnt}`,
    `- Experiencia: ${BUSINESS.experience}`,
    `- Reseñas en Google: ${BUSINESS.googleReviews}`,
    "",
    "## Servicios",
    ...SERVICES.map((s) => `- [${s.name}](${abs(s.href)}): ${s.short}`),
    "",
    "## Destinos",
    ...DESTINATIONS.map((d) => `- [${d.name}](${abs(`/destinos/${d.slug}`)}): ${d.description}`),
    "",
    "## Páginas principales",
    `- [Paquetes](${abs("/paquetes")})`,
    `- [Tours](${abs("/tours")})`,
    `- [Cotiza tu viaje](${abs("/cotizar")})`,
    "",
    "## Blog",
    ...blogArticles.map((a) => `- [${a.title}](${abs(`/blog/${a.slug}`)}): ${a.excerpt}`),
    "",
  ];
  return lines.join("\n");
}

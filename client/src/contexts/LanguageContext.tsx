import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "es" | "en";
type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void };
const LanguageContext = createContext<LanguageContextValue>({ language: "es", setLanguage: () => undefined });

const en: Record<string, string> = {
  "Inicio":"Home", "Beneficios":"Benefits", "Paquetes":"Packages", "Tours":"Tours", "Testimonios":"Testimonials", "Blog":"Blog", "Contacto":"Contact",
  "Tu viaje, nuestra prioridad":"Your journey, our priority", "Hablemos por WhatsApp":"Chat with us on WhatsApp", "Saltar al contenido principal":"Skip to main content",
  "VIAJES PREMIUM EN MÉXICO":"PREMIUM TRAVEL IN MEXICO", "Nosotros nos encargamos de todo.":"We take care of everything.", "Tú solo disfruta.":"You just enjoy it.",
  "Ver paquetes":"View packages", "Solicitar cotización":"Request a quote", "Cotizar":"Get a quote", "Consultar":"Learn more", "Consultar disponibilidad":"Check availability",
  "Paquetes turísticos premium":"Premium travel packages", "Experiencias diseñadas para ti":"Experiences designed for you", "Desde":"From", "/ Por persona":"/ Per person", "MXN / Por persona":"MXN / Per person",
  "Todos los precios son por persona. Cotización sin costo y sin compromiso.":"All prices are per person. Free quote with no obligation.",
  "Tours destacados":"Featured tours", "Descubre experiencias inolvidables":"Discover unforgettable experiences", "Ver todos los tours":"View all tours",
  "¿Cómo funciona?":"How does it work?", "Viajar con nosotros es muy fácil":"Traveling with us is easy", "Lo que dicen nuestros viajeros":"What our travelers say",
  "Preguntas frecuentes":"Frequently asked questions", "Resolvemos tus dudas":"We answer your questions", "¿Listo para planear tu próximo viaje?":"Ready to plan your next trip?",
  "Nombre completo":"Full name", "Número de WhatsApp":"WhatsApp number", "Correo electrónico":"Email address", "Destino":"Destination", "Ciudad de salida":"Departure city",
  "Fecha de salida":"Departure date", "Fecha de regreso":"Return date", "Mis fechas son flexibles.":"My dates are flexible.", "Adultos":"Adults", "Niños":"Children", "Bebés (0-1 años)":"Infants (0-1 years)",
  "¿Qué deseas cotizar?":"What would you like a quote for?", "Paquete (Vuelo + Hotel)":"Package (Flight + Hotel)", "Solo hotel":"Hotel only", "Solo vuelo":"Flight only",
  "Traslados":"Transfers", "Renta de auto":"Car rental", "Crucero":"Cruise", "Seleccionar...":"Select...", "Otro":"Other", "Otra":"Other",
  "Presupuesto aproximado":"Approximate budget", "¿En qué etapa te encuentras?":"What stage are you at?", "Tipo de viaje":"Type of trip", "Servicios adicionales":"Additional services",
  "Comentarios adicionales":"Additional comments", "¿Cómo prefieres recibir tu cotización?":"How would you like to receive your quote?", "Llamada telefónica":"Phone call",
  "Solicitar cotización por WhatsApp":"Request quote via WhatsApp", "Cotización personalizada":"Personalized quote", "Cuéntanos sobre tu viaje":"Tell us about your trip",
  "Datos del cliente":"Customer information", "Información del viaje":"Trip information", "Viajeros":"Travelers", "Presupuesto y prioridad":"Budget and priority", "Preferencias adicionales":"Additional preferences",
  "¿Cómo podemos ayudarte? ✈️":"How can we help you? ✈️", "Elige una opción y te ayudamos a dar el siguiente paso.":"Choose an option and we'll help you take the next step.",
  "Hablar con mi Travel Partner":"Talk to my Travel Partner", "Recibe atención personal por WhatsApp":"Get personal assistance on WhatsApp",
  "Crear mi cotización personalizada":"Create my personalized quote", "Comparte fechas, viajeros y presupuesto":"Share dates, travelers and budget",
  "Resolver una duda rápida":"Get a quick answer", "Consulta destinos, reservas, pagos y cambios":"Ask about destinations, bookings, payments and changes",
  "¿Sobre qué tienes dudas?":"What do you have questions about?", "Destinos":"Destinations", "Precios y paquetes":"Prices and packages", "Reservas y disponibilidad":"Bookings and availability",
  "Cambios y cancelaciones":"Changes and cancellations", "Pagos y seguridad":"Payments and security", "Menú principal":"Main menu", "Categorías":"Categories", "Preguntas":"Questions",
  "La información puede variar según proveedor, fecha y disponibilidad.":"Information may vary by provider, date and availability.",
  "Solicitar disponibilidad por WhatsApp":"Request availability via WhatsApp", "Fecha del tour":"Tour date", "¿Qué tour te interesa?":"Which tour are you interested in?",
  "¿Necesitas transporte al tour?":"Do you need transportation to the tour?", "Sí":"Yes", "No":"No", "No estoy seguro":"I'm not sure",
  "Nombre (opcional)":"Name (optional)", "Quiero recibir novedades":"I want to receive updates", "Aviso de Privacidad":"Privacy Notice",
  "Recibe guías, promociones y consejos para viajar mejor":"Receive guides, promotions and tips to travel better", "Buscar destinos, playas o consejos...":"Search destinations, beaches or tips...",
  "Leer artículo":"Read article", "Volver al blog":"Back to blog", "Artículos relacionados":"Related articles", "Compartir":"Share", "Cotizar por WhatsApp":"Get a quote on WhatsApp"
};

const originals = new WeakMap<Node, string>();
const attrOriginals = new WeakMap<Element, Record<string, string>>();

function translateTree(language: Language) {
  document.documentElement.lang = language;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName || "")) continue;
    if (!originals.has(node)) originals.set(node, node.nodeValue || "");
    const original = originals.get(node) || "";
    const trimmed = original.trim();
    const translated = language === "en" ? en[trimmed] : undefined;
    node.nodeValue = translated ? original.replace(trimmed, translated) : original;
  }
  document.querySelectorAll("[placeholder],[aria-label],[title]").forEach((element) => {
    if (!attrOriginals.has(element)) {
      const saved: Record<string,string> = {};
      for (const attr of ["placeholder","aria-label","title"]) if (element.hasAttribute(attr)) saved[attr] = element.getAttribute(attr) || "";
      attrOriginals.set(element, saved);
    }
    const saved = attrOriginals.get(element)!;
    Object.entries(saved).forEach(([attr,value]) => element.setAttribute(attr, language === "en" ? (en[value] || value) : value));
  });
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathLanguage: Language = window.location.pathname.includes("/planeatuviaje/en") ? "en" : "es";
  const [language, updateLanguage] = useState<Language>(pathLanguage || (localStorage.getItem("vc-language") as Language) || "es");
  const setLanguage = (next: Language) => {
    localStorage.setItem("vc-language", next);
    let path = window.location.pathname;
    if (next === "en" && !path.includes("/planeatuviaje/en")) path = path.replace("/planeatuviaje", "/planeatuviaje/en");
    if (next === "es") path = path.replace("/planeatuviaje/en", "/planeatuviaje");
    window.history.replaceState({}, "", path + window.location.search + window.location.hash);
    updateLanguage(next);
  };
  useEffect(() => {
    const apply = () => translateTree(language);
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.body, { childList: true, subtree: true });
    document.title = language === "en" ? "Viajes Casal | Premium travel in Mexico" : "Viajes Casal | Viajes premium en México";
    document.querySelector('meta[name="description"]')?.setAttribute("content", language === "en" ? "Personalized travel packages, hotels, flights and tours in Mexico with expert assistance." : "Paquetes, hoteles, vuelos y tours personalizados en México con asesoría experta.");
    return () => observer.disconnect();
  }, [language]);
  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);

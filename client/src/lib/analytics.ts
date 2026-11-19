/**
 * Medición de clics a WhatsApp en GA4.
 *
 * Evento: whatsapp_click
 * La fuente / medio / campaña / contenido (UTM) NO se envían aquí: GA4 ya los
 * toma de la URL de aterrizaje y los asocia a la sesión, así que en los
 * reportes el evento llega con "Fuente de la sesión", "Campaña de la sesión"
 * y "Contenido del anuncio manual de la sesión" (utm_content).
 */

type GtagFn = (command: "event", eventName: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

const EVENT_NAME = "whatsapp_click";

/** Enlaces de contacto: wa.me/5299... o api.whatsapp.com/send?phone=... (no los de "compartir"). */
function parseWhatsAppUrl(href: string): { phone: string } | null {
  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return null;
  }

  if (url.hostname === "wa.me" || url.hostname === "www.wa.me") {
    const phone = url.pathname.replace(/\D/g, "");
    return phone ? { phone } : null; // wa.me/?text=... es "compartir", no cuenta
  }

  if (url.hostname === "api.whatsapp.com" || url.hostname === "web.whatsapp.com") {
    const phone = (url.searchParams.get("phone") || "").replace(/\D/g, "");
    return phone ? { phone } : null;
  }

  return null;
}

/** Dónde del sitio se hizo clic (para saber qué botón convierte). */
function locationOf(el: Element): string {
  const tagged = el.closest("[data-wa-location]");
  if (tagged) return tagged.getAttribute("data-wa-location") || "other";
  if (el.closest("footer")) return "footer";
  if (el.closest("header, nav")) return "navbar";
  const section = el.closest("section[id]");
  if (section) return section.id;
  return "other";
}

/** Registra el clic. Usar directamente donde se abre WhatsApp con window.open. */
export function trackWhatsAppClick(location: string, phone?: string): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", EVENT_NAME, {
    link_location: location,
    // últimos 4 dígitos: distingue ...1530 (ventas) de ...6565 (Travel Partner / bot)
    whatsapp_number: phone ? phone.slice(-4) : undefined,
    page_path: window.location.pathname,
  });
}

/** Escucha todos los <a> que apuntan a WhatsApp, sin tocar cada componente. */
export function initWhatsAppTracking(): void {
  if (typeof document === "undefined") return;

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const parsed = parseWhatsAppUrl(anchor.getAttribute("href") || "");
      if (!parsed) return;

      trackWhatsAppClick(locationOf(anchor), parsed.phone);
    },
    true
  );
}

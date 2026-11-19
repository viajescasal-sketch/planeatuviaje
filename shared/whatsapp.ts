/**
 * Número de WhatsApp del sitio (el del bot de Viajes Casal).
 * Para cambiarlo en TODOS los botones y enlaces del sitio, edita solo esta línea.
 */
export const WHATSAPP_PHONE = "529987636565";
export const WHATSAPP_PHONE_DISPLAY = "+52 998 763 6565";

/** Enlace a WhatsApp con mensaje prellenado opcional. */
export const waLink = (text?: string): string =>
  `https://wa.me/${WHATSAPP_PHONE}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

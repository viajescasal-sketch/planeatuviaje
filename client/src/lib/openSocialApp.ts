import type { MouseEvent } from "react";

export type SocialApp = "instagram" | "facebook" | "tiktok" | "youtube";

/** Direcciones web de cada red (sirven de respaldo si la app no está instalada). */
export const SOCIAL_URLS: Record<SocialApp, string> = {
  instagram: "https://www.instagram.com/viaja.pau/",
  facebook: "https://www.facebook.com/share/1GjFtGYqvk/",
  tiktok: "https://www.tiktok.com/@viajes_bumeran_casal",
  youtube: "https://www.youtube.com/@inspirateaviajar",
};

/**
 * Android: enlace "intent" que abre la app y, si no está instalada,
 * cae solo a la dirección web (S.browser_fallback_url).
 */
function androidIntent(app: SocialApp): string {
  const web = SOCIAL_URLS[app];
  const fallback = `S.browser_fallback_url=${encodeURIComponent(web)}`;
  switch (app) {
    case "instagram":
      return `intent://instagram.com/_u/viaja.pau/#Intent;package=com.instagram.android;scheme=https;${fallback};end`;
    case "facebook":
      return `intent://facewebmodal/f?href=${encodeURIComponent(web)}#Intent;package=com.facebook.katana;scheme=fb;${fallback};end`;
    case "tiktok":
      return `intent://www.tiktok.com/@viajes_bumeran_casal#Intent;package=com.zhiliaoapp.musically;scheme=https;${fallback};end`;
    case "youtube":
      return `intent://www.youtube.com/@inspirateaviajar#Intent;package=com.google.android.youtube;scheme=https;${fallback};end`;
  }
}

/**
 * Para usar en onClick de los enlaces de redes sociales.
 * - Android: abre la app con un intent (si no hay app, abre la web).
 * - iPhone/iPad: navega en la misma pestaña; iOS abre la app con el enlace universal
 *   (con target="_blank" iOS suele abrir solo la web).
 * - Computadora y navegadores dentro de otras apps: no cambia nada (abre la web).
 */
export function openSocialApp(e: MouseEvent<HTMLAnchorElement>, app: SocialApp): void {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  if (typeof navigator === "undefined") return;
  const ua = navigator.userAgent;
  if (/FBAN|FBAV|Instagram|TikTok|musical_ly|Line\//i.test(ua)) return;
  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (isAndroid) {
    e.preventDefault();
    window.location.href = androidIntent(app);
  } else if (isIOS) {
    e.preventDefault();
    window.location.href = SOCIAL_URLS[app];
  }
}

import { useEffect } from "react";
import { abs, type SeoPage } from "@shared/seo";

/**
 * Actualiza título, descripción, canonical y Open Graph al navegar dentro de la app.
 * (El servidor ya los entrega correctos en la primera carga; esto cubre la navegación interna.)
 */
export function useSeo(page: SeoPage | undefined) {
  useEffect(() => {
    if (!page) return;
    document.title = page.title;
    const setMeta = (selector: string, attr: "name" | "property", key: string, value: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.content = value;
    };
    setMeta('meta[name="description"]', "name", "description", page.description);
    setMeta('meta[property="og:title"]', "property", "og:title", page.title);
    setMeta('meta[property="og:description"]', "property", "og:description", page.description);
    setMeta('meta[property="og:url"]', "property", "og:url", abs(page.path));
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = abs(page.path);
  }, [page]);
}

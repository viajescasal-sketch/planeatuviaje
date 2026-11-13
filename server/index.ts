import express from "express";
import fs from "fs";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import {
  SITE_URL,
  abs,
  buildJsonLd,
  buildLlmsTxt,
  buildSitemap,
  getPage,
  renderPageHtml,
  type SeoPage,
} from "../shared/seo";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CANONICAL_HOST = new URL(SITE_URL).host; // viajescasal.com

const escAttr = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/** Inserta título, descripción, canonical, Open Graph, Schema.org y contenido pre-renderizado. */
function renderHtml(template: string, page: SeoPage | undefined, requestPath: string): string {
  let html = template;

  if (!page) {
    // Página inexistente: noindex y sin canonical (el servidor responde 404).
    return html
      .replace(/<title>[\s\S]*?<\/title>/, "<title>Página no encontrada | Viajes Bumeran Casal</title>")
      .replace(/<link rel="canonical"[^>]*>/, '<meta name="robots" content="noindex" />')
      .replace(/<script type="application\/ld\+json" id="ld-faq">[\s\S]*?<\/script>/, "");
  }

  const url = abs(page.path);
  const image = abs(page.image || "/assets/hero-cancun.jpg");
  const t = escAttr(page.title);
  const d = escAttr(page.description);

  html = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${d}" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${t}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${d}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${image}" />`)
    .replace(/<meta property="og:type"[^>]*>/, `<meta property="og:type" content="${page.path.startsWith("/blog/") ? "article" : "website"}" />`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${t}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${d}" />`)
    .replace(/<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${image}" />`)
    .replace(
      /<script type="application\/ld\+json" id="ld-org">[\s\S]*?<\/script>/,
      `<script type="application/ld+json" id="ld-org">${buildJsonLd(page)}</script>`,
    );

  // Las preguntas frecuentes solo existen en la página de inicio.
  if (page.path !== "/") html = html.replace(/<script type="application\/ld\+json" id="ld-faq">[\s\S]*?<\/script>/, "");

  // Versión en inglés: misma página, se traduce en el navegador.
  if (requestPath === "/en" || requestPath.startsWith("/en/")) html = html.replace('<html lang="es">', '<html lang="en">');

  return html.replace('<div id="root"></div>', `<div id="root">${renderPageHtml(page)}</div>`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  app.set("trust proxy", true);

  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // 1) Un solo dominio: www → sin www (301).
  app.use((req, res, next) => {
    const host = String(req.headers["x-forwarded-host"] || req.headers.host || "").split(",")[0].trim().toLowerCase();
    if (host.startsWith("www.")) {
      return res.redirect(301, `${SITE_URL}${req.originalUrl}`);
    }
    next();
  });

  // 2) sitemap.xml y llms.txt generados a partir de shared/seo.ts.
  app.get("/sitemap.xml", (_req, res) => {
    res.type("application/xml").set("Cache-Control", "public, max-age=3600").send(buildSitemap());
  });
  app.get("/llms.txt", (_req, res) => {
    res.type("text/plain; charset=utf-8").set("Cache-Control", "public, max-age=3600").send(buildLlmsTxt());
  });

  // 3) Archivos estáticos (sin servir index.html automáticamente).
  app.use(express.static(staticPath, { index: false }));

  // 4) Barra final → sin barra (301), conservando la consulta.
  app.use((req, res, next) => {
    if (req.method === "GET" && req.path.length > 1 && req.path.endsWith("/")) {
      const q = req.originalUrl.slice(req.path.length);
      return res.redirect(301, req.path.replace(/\/+$/, "") + q);
    }
    next();
  });

  let template = "";
  const loadTemplate = () => {
    if (!template || process.env.NODE_ENV !== "production") {
      template = fs.readFileSync(path.join(staticPath, "index.html"), "utf-8");
    }
    return template;
  };

  // 5) Rutas de la app: HTML con SEO por página; 404 real para rutas inexistentes.
  app.get("*", (req, res) => {
    const page = getPage(req.path);
    const html = renderHtml(loadTemplate(), page, req.path);
    res
      .status(page ? 200 : 404)
      .type("html")
      .set("Cache-Control", "public, max-age=300")
      .send(html);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/ (canonical host: ${CANONICAL_HOST})`);
  });
}

startServer().catch(console.error);

# Cómo publicar un artículo nuevo

1. Abre `client/src/blog/blogData.ts`.
2. Copia uno de los objetos dentro de `blogArticles`.
3. Cambia `slug`, categoría, título, SEO, descripción, imagen, ALT, fecha, tiempo de lectura y secciones.
4. El `slug` debe usar minúsculas y guiones, por ejemplo `guia-isla-mujeres-2026`.
5. Usa una imagen optimizada de Unsplash o Pexels, sin texto incrustado y con un ALT descriptivo.
6. Añade la nueva URL a `client/public/sitemap.xml`.
7. Publica el cambio y espera a que GitHub Pages termine en verde.

La portada, buscador, filtros, artículos relacionados, SEO, botones para compartir y CTA se generan automáticamente desde `blogData.ts`.

## Suscripción pendiente

Configura `VITE_NEWSLETTER_ENDPOINT` en GitHub Actions o en el entorno de compilación con un endpoint seguro de Brevo, Mailchimp o MailerLite. El endpoint debe recibir JSON con `name`, `email`, `consent` y `source`. No coloques claves privadas en el frontend.

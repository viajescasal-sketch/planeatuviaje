/**
 * ExploreLinks — enlaces internos de la página de inicio hacia destinos, servicios y cotización.
 */
import { DESTINATIONS, SERVICES } from "@shared/seo";

export default function ExploreLinks() {
  return (
    <section id="destinos" aria-labelledby="destinos-title" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <span className="section-label">Planea tu viaje</span>
        <h2 id="destinos-title" className="section-title">
          Explora por destino <span style={{ color: "#009FE3" }}>o por servicio</span>
        </h2>
        <div className="gold-divider" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {DESTINATIONS.map((d) => (
            <a
              key={d.slug}
              href={`/destinos/${d.slug}`}
              className="group relative overflow-hidden rounded-2xl h-40 shadow-sm"
            >
              <img src={d.image} alt={`Viajar a ${d.name}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-3 left-4 text-lg font-extrabold text-white">{d.name}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={s.href}
              className="rounded-full border border-[#009FE3] px-4 py-1.5 text-sm font-semibold text-[#009FE3] hover:bg-[#009FE3] hover:text-white transition-colors"
            >
              {s.name}
            </a>
          ))}
          <a href="/cotizar" className="rounded-full bg-[#009FE3] px-4 py-1.5 text-sm font-semibold text-white hover:opacity-90">
            Cotiza tu viaje
          </a>
        </div>
      </div>
    </section>
  );
}

/** Bloque al final de cada artículo del blog: lleva al destino relacionado y a cotizar. */
export function ArticleCta({ category }: { category: string }) {
  const dest = DESTINATIONS.find((d) => category.toLowerCase().includes(d.name.toLowerCase()));
  return (
    <aside className="mt-10 rounded-2xl border border-[#dcebf3] bg-white p-6">
      <p className="text-lg font-extrabold text-[#1A2B3C]">Planea tu viaje con nosotros</p>
      <p className="mt-1 text-[#496575]">Te acompañamos de forma personalizada desde que cotizas hasta que regresas a casa.</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {dest && (
          <a href={`/destinos/${dest.slug}`} className="rounded-full border border-[#009FE3] px-4 py-1.5 text-sm font-semibold text-[#009FE3] hover:bg-[#009FE3] hover:text-white transition-colors">
            Paquetes y tours a {dest.name}
          </a>
        )}
        <a href="/paquetes" className="rounded-full border border-[#009FE3] px-4 py-1.5 text-sm font-semibold text-[#009FE3] hover:bg-[#009FE3] hover:text-white transition-colors">
          Ver paquetes
        </a>
        <a href="/cotizar" className="rounded-full bg-[#009FE3] px-4 py-1.5 text-sm font-semibold text-white hover:opacity-90">
          Cotiza tu viaje
        </a>
      </div>
    </aside>
  );
}

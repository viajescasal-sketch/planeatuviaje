/**
 * SeoLayout — plantilla para las páginas de servicios, paquetes, tours, destinos y cotización.
 * Toma el contenido de shared/seo.ts (la misma fuente que ven los buscadores) y lo presenta
 * con el estilo del sitio. `children` permite insertar componentes interactivos
 * (carrusel de paquetes, tours, formulario de cotización).
 */
import type { ReactNode } from "react";
import { BUSINESS, DESTINATIONS, WHATSAPP_URL, type SeoLink, type SeoPage, type SeoSection } from "@shared/seo";
import { useSeo } from "@/hooks/useSeo";

const isExternal = (href: string) => href.startsWith("http");

function SmartLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return isExternal(href) ? (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

const NAV: SeoLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Paquetes", href: "/paquetes" },
  { label: "Tours", href: "/tours" },
  { label: "Blog", href: "/blog" },
];

export function SeoSections({ sections }: { sections: SeoSection[] }) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.h2} id={s.id} className="py-8 border-t border-gray-100 scroll-mt-24">
          <h2 className="text-2xl font-extrabold text-[#1A2B3C] mb-3">{s.h2}</h2>
          {s.paragraphs?.map((p) => (
            <p key={p} className="text-[#5a7080] leading-relaxed mb-3">
              {p}
            </p>
          ))}
          {s.items && s.items.length > 0 && (
            <ul className="grid gap-3 sm:grid-cols-2 mt-2">
              {s.items.map((i) => (
                <li key={i.name} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  {i.href ? (
                    <SmartLink href={i.href} className="font-bold text-[#009FE3] hover:underline">
                      {i.name}
                    </SmartLink>
                  ) : (
                    <span className="font-bold text-[#1A2B3C]">{i.name}</span>
                  )}
                  {i.text && <p className="text-sm text-[#5a7080] mt-1">{i.text}</p>}
                </li>
              ))}
            </ul>
          )}
          {s.links && s.links.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {s.links.map((l) => (
                <SmartLink
                  key={l.href + l.label}
                  href={l.href}
                  className="rounded-full border border-[#009FE3] px-4 py-1.5 text-sm font-semibold text-[#009FE3] hover:bg-[#009FE3] hover:text-white transition-colors"
                >
                  {l.label}
                </SmartLink>
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  );
}

export default function SeoLayout({
  page,
  children,
  sectionsAfter = true,
}: {
  page: SeoPage;
  children?: ReactNode;
  /** true: el contenido interactivo va antes de las secciones de texto */
  sectionsAfter?: boolean;
}) {
  useSeo(page);
  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3">
          <a href="/" className="font-extrabold text-[#1A2B3C]">
            {BUSINESS.alternateName}
          </a>
          <nav aria-label="Principal" className="flex flex-wrap gap-4 text-sm font-medium text-[#1A2B3C]">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[#009FE3]">
                {l.label}
              </a>
            ))}
            <a href="/cotizar" className="rounded-full bg-[#009FE3] px-4 py-1 text-white hover:opacity-90">
              Cotizar
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {page.breadcrumb.length > 1 && (
          <nav aria-label="Ruta" className="text-xs text-[#5a7080] mb-4">
            {page.breadcrumb.map((b, i) => (
              <span key={b.href}>
                {i > 0 && " › "}
                <a href={b.href} className="hover:underline">
                  {b.label}
                </a>
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A2B3C] mb-3">{page.h1}</h1>
        <p className="text-lg text-[#5a7080] max-w-3xl leading-relaxed mb-6">{page.intro}</p>
        <div className="flex flex-wrap gap-3 mb-6">
          <a href="/cotizar" className="rounded-full bg-[#009FE3] px-5 py-2.5 font-bold text-white hover:opacity-90">
            Cotiza tu viaje
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-5 py-2.5 font-bold text-white hover:opacity-90"
          >
            WhatsApp {BUSINESS.phones[0].number}
          </a>
        </div>

        {sectionsAfter && children}
        <SeoSections sections={page.sections} />
        {!sectionsAfter && children}
      </main>

      <footer className="bg-[#1A2B3C] text-white/80 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-3">
          <div>
            <p className="font-bold text-white">{BUSINESS.name}</p>
            <p className="mt-2">{BUSINESS.serviceMode}</p>
            <p className="mt-1">{BUSINESS.hours}</p>
            <p className="mt-1">
              {BUSINESS.rntLabel} No. {BUSINESS.rnt}
            </p>
          </div>
          <div>
            <p className="font-bold text-white">Destinos</p>
            <ul className="mt-2 space-y-1">
              {DESTINATIONS.map((d) => (
                <li key={d.slug}>
                  <a href={`/destinos/${d.slug}`} className="hover:text-white">
                    {d.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-white">Contacto</p>
            <ul className="mt-2 space-y-1">
              {BUSINESS.phones.map((p) => (
                <li key={p.e164}>
                  <a href={`https://wa.me/${p.e164.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    WhatsApp {p.number}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-white">
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a href="/aviso-de-privacidad" className="hover:text-white">
                  Aviso de privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

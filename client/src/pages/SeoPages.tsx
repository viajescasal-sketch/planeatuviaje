/**
 * Páginas con URL propia para buscadores y ChatGPT:
 * /servicios, /paquetes, /tours, /destinos/:slug y /cotizar.
 * El texto viene de shared/seo.ts (el mismo que el servidor pre-renderiza).
 */
import { useMemo } from "react";
import { useRoute } from "wouter";
import { getPage } from "@shared/seo";
import SeoLayout from "@/components/SeoLayout";
import Packages from "@/components/Packages";
import Tours from "@/components/Tours";
import CrmQuoteForm from "@/components/CrmQuoteForm";
import NotFound from "@/pages/NotFound";

export function ServicesPage() {
  const page = useMemo(() => getPage("/servicios")!, []);
  return <SeoLayout page={page} />;
}

export function PackagesPage() {
  const page = useMemo(() => getPage("/paquetes")!, []);
  return (
    <SeoLayout page={page}>
      <div className="-mx-4">
        <Packages />
      </div>
    </SeoLayout>
  );
}

export function ToursPage() {
  const page = useMemo(() => getPage("/tours")!, []);
  return (
    <SeoLayout page={page}>
      <div className="-mx-4">
        <Tours />
      </div>
    </SeoLayout>
  );
}

export function DestinationPage() {
  const [, params] = useRoute<{ slug: string }>("/destinos/:slug");
  const [, paramsEn] = useRoute<{ slug: string }>("/en/destinos/:slug");
  const slug = params?.slug || paramsEn?.slug || "";
  const page = useMemo(() => getPage(`/destinos/${slug}`), [slug]);
  if (!page) return <NotFound />;
  return <SeoLayout page={page} />;
}

export function QuotePage() {
  const page = useMemo(() => getPage("/cotizar")!, []);
  return (
    <SeoLayout page={page}>
      <section className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-2xl font-extrabold text-[#1A2B3C] mb-3">Formulario de cotización</h2>
        <CrmQuoteForm origen="pagina-cotizar" />
      </section>
    </SeoLayout>
  );
}

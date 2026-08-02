import { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import { blogArticles, getArticle } from "@/blog/blogData";
import NewsletterForm from "./NewsletterForm";
import QuoteModal from "./QuoteModal";

const whatsApp = "https://wa.me/529983921530?text=";

export default function BlogArticle() {
  const [, params] = useRoute("/blog/:slug");
  const article = getArticle(params?.slug || "");
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    if (!article) return;
    document.title = `${article.seoTitle} | Viajes Casal`;
    const setMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) { element = document.createElement("meta"); element.setAttribute(property ? "property" : "name", name); document.head.appendChild(element); }
      element.content = content;
    };
    setMeta("description", article.description); setMeta("keywords", article.keyword);
    setMeta("og:title", article.seoTitle, true); setMeta("og:description", article.description, true); setMeta("og:image", article.image, true); setMeta("og:type", "article", true);
    setMeta("twitter:card", "summary_large_image"); setMeta("twitter:title", article.seoTitle); setMeta("twitter:description", article.description); setMeta("twitter:image", article.image);
    const canonicalUrl = `${window.location.origin}/blog/${article.slug}`;
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); } canonical.href = canonicalUrl;
    const script = document.createElement("script"); script.type = "application/ld+json"; script.id = "blog-posting-schema"; script.text = JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: article.seoTitle, description: article.description, image: article.image, datePublished: "2026-07-10", author: { "@type": "Organization", name: "Viajes Casal" }, publisher: { "@type": "Organization", name: "Viajes Casal" }, mainEntityOfPage: canonicalUrl, keywords: article.keyword });
    document.getElementById(script.id)?.remove(); document.head.appendChild(script);
    return () => { script.remove(); };
  }, [article]);

  if (!article) return <main className="grid min-h-screen place-items-center bg-[#f6fafc] p-6 text-center"><div><h1 className="text-3xl font-bold text-[#1A2B3C]">Artículo no encontrado</h1><Link href="/blog" className="mt-4 inline-block font-bold text-[#007e88]">Volver al blog</Link></div></main>;
  const current = blogArticles.findIndex((item) => item.slug === article.slug);
  const previous = blogArticles[(current - 1 + blogArticles.length) % blogArticles.length];
  const next = blogArticles[(current + 1) % blogArticles.length];
  const related = blogArticles.filter((item) => item.slug !== article.slug).slice(0, 3);
  const quoteMessage = encodeURIComponent(`Hola, leí el artículo "${article.title}" y quiero una cotización personalizada.`);
  const shareUrl = encodeURIComponent(`${window.location.origin}/blog/${article.slug}`);

  return <main className="min-h-screen bg-white pb-20">
    <header className="relative isolate min-h-[520px] overflow-hidden px-4 pb-20 pt-8 text-white sm:min-h-[620px]" style={{ backgroundImage: `url(${article.image})`, backgroundPosition: "center", backgroundSize: "cover" }}><div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#002c59]/90 via-[#003F7D]/75 to-[#001d3a]/95" /><div className="absolute inset-0 -z-10 opacity-40" style={{ background: "radial-gradient(circle at 75% 20%, rgba(0,184,200,.7), transparent 42%)" }} /><div className="container"><div className="flex flex-wrap items-center justify-between gap-3"><Link href="/blog" className="text-sm font-bold text-white/85 hover:text-white">← Volver al blog</Link><a href="/" className="text-sm font-bold text-white/85 hover:text-white">Viajes Casal</a></div><div className="mx-auto mt-28 max-w-4xl text-center"><span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-bold text-[#b8fffb] backdrop-blur-md">{article.category}</span><h1 className="mt-7 text-3xl font-extrabold leading-tight drop-shadow-lg sm:text-6xl" style={{ color: "#FFFFFF" }}>{article.title}</h1><div className="mt-6 flex justify-center gap-4 text-sm text-white/85"><span>{article.date}</span><span>•</span><span>{article.readingTime} de lectura</span></div></div></div></header>
    <div className="container">
      <div className="mx-auto grid max-w-6xl gap-10 py-12 lg:grid-cols-[240px_minmax(0,1fr)]"><aside className="lg:sticky lg:top-24 lg:self-start"><div className="rounded-2xl border border-[#dcebf3] bg-[#f6fafc] p-5"><p className="font-bold text-[#1A2B3C]">En este artículo</p><nav className="mt-3 space-y-2">{article.sections.map((section) => <a key={section.id} href={`#${section.id}`} className="block text-xs leading-relaxed text-[#5a7080] hover:text-[#007e88]">{section.title}</a>)}</nav></div></aside>
        <article className="min-w-0"><p className="text-lg leading-8 text-[#496575]">{article.description}</p>{article.sections.map((section, index) => <section id={section.id} key={section.id} className="scroll-mt-24 border-b border-[#e5eff4] py-8 first:pt-6"><h2 className="text-2xl font-bold leading-snug text-[#1A2B3C] sm:text-3xl">{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 leading-8 text-[#496575]">{paragraph}</p>)}{section.bullets && <ul className="mt-5 space-y-2">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-[#496575]"><span className="text-[#00B8C8]">✓</span>{bullet}</li>)}</ul>}{section.tip && <div className="mt-6 rounded-2xl border-l-4 border-[#FF6F61] bg-[#fff4f2] p-5"><p className="text-xs font-bold uppercase tracking-wider text-[#b7463c]">Consejo de Viajes Casal</p><p className="mt-2 text-sm leading-7 text-[#5b4a48]">{section.tip}</p></div>}{index === 1 && <div className="mt-8 rounded-3xl bg-[#e8f8f8] p-6"><h3 className="text-xl font-bold text-[#003F7D]">¿Quieres opciones para tus fechas?</h3><p className="mt-2 text-sm text-[#496575]">Permítenos comparar alternativas según tu presupuesto y tipo de viaje.</p><div className="mt-4 flex flex-wrap gap-3"><a href={`${whatsApp}${quoteMessage}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Cotizar por WhatsApp</a><button type="button" onClick={() => setQuoteOpen(true)} className="btn-secondary">Solicitar cotización</button></div></div>}</section>)}
          <div className="mt-8 rounded-3xl bg-gradient-to-br from-[#003F7D] to-[#00B8C8] p-7 text-white"><h2 className="text-2xl font-bold" style={{ color: "#FFFFFF" }}>Planeemos tu próxima experiencia</h2><p className="mt-2 text-sm text-white/80">Cuéntanos tus fechas, viajeros y presupuesto para preparar una propuesta personalizada.</p><div className="mt-5 flex flex-wrap gap-3"><a href={`${whatsApp}${quoteMessage}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white">Cotizar por WhatsApp</a><button type="button" onClick={() => setQuoteOpen(true)} className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#003F7D]">Solicitar cotización</button></div></div>
          <div className="mt-8 flex flex-wrap items-center gap-3"><span className="text-sm font-bold text-[#1A2B3C]">Compartir:</span><a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#eef6fa] px-4 py-2 text-xs font-bold text-[#003F7D]">Facebook</a><a href={`https://wa.me/?text=${encodeURIComponent(article.title)}%20${shareUrl}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#e9f9ef] px-4 py-2 text-xs font-bold text-[#128c47]">WhatsApp</a><button onClick={() => navigator.clipboard.writeText(decodeURIComponent(shareUrl))} className="rounded-full bg-[#f4f4f4] px-4 py-2 text-xs font-bold text-[#496575]">Copiar enlace</button></div>
        </article></div>
      <section className="mx-auto max-w-6xl border-t border-[#dcebf3] py-12"><h2 className="text-2xl font-bold text-[#1A2B3C]">Artículos relacionados</h2><div className="mt-6 grid gap-5 md:grid-cols-3">{related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="overflow-hidden rounded-2xl border border-[#dcebf3] bg-white transition hover:shadow-lg"><img src={item.image} alt={item.imageAlt} width="500" height="300" loading="lazy" className="h-36 w-full object-cover" /><div className="p-4"><span className="text-xs font-bold text-[#00B8C8]">{item.category}</span><h3 className="mt-2 font-bold leading-snug text-[#1A2B3C]">{item.title}</h3></div></Link>)}</div><div className="mt-8 grid gap-3 sm:grid-cols-2"><Link href={`/blog/${previous.slug}`} className="rounded-2xl bg-[#f6fafc] p-5 text-sm font-bold text-[#003F7D]">← {previous.title}</Link><Link href={`/blog/${next.slug}`} className="rounded-2xl bg-[#f6fafc] p-5 text-right text-sm font-bold text-[#003F7D]">{next.title} →</Link></div></section>
      <div className="mx-auto max-w-5xl"><NewsletterForm /></div>
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  </main>;
}

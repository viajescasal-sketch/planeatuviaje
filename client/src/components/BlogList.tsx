import { useMemo, useState } from "react";
import { Link } from "wouter";
import { blogArticles, blogCategories } from "@/blog/blogData";
import NewsletterForm from "./NewsletterForm";

export default function BlogList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const filtered = useMemo(() => blogArticles.filter((article) => {
    const matchesCategory = category === "Todos" || article.category === category;
    const text = `${article.title} ${article.excerpt} ${article.category} ${article.keyword}`.toLowerCase();
    return matchesCategory && text.includes(query.trim().toLowerCase());
  }), [query, category]);

  return <main className="min-h-screen pb-20" style={{ background: "radial-gradient(circle at 10% 18%, rgba(0,184,200,.10), transparent 28%), linear-gradient(180deg, #f8fcfe 0%, #edf6fa 100%)" }}>
    <header className="relative isolate overflow-hidden px-4 pb-14 pt-10 text-white" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=75&fm=webp)", backgroundPosition: "center 45%", backgroundSize: "cover" }}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#002c59]/95 via-[#003F7D]/82 to-[#00B8C8]/45" /><div className="container"><a href="/planeatuviaje/" className="text-sm font-semibold text-white/85 hover:text-white">← Volver a Viajes Casal</a><div className="mt-9 max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8fffb]">Blog Viajes Casal</p><h1 className="mt-3 text-3xl font-extrabold leading-tight drop-shadow-lg sm:text-5xl" style={{ color: "#FFFFFF" }}>Viaja mejor desde la planeación</h1><p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">Guías claras, comparaciones honestas y consejos prácticos para elegir destinos, cuidar tu presupuesto y disfrutar cada etapa del viaje.</p></div>
        <div className="mt-6 max-w-2xl"><label htmlFor="blog-search" className="sr-only">Buscar artículos</label><div className="flex items-center rounded-2xl bg-white p-1.5 shadow-xl"><svg className="ml-3 text-[#5a7080]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><input id="blog-search" value={query} onChange={(e) => setQuery(e.target.value)} className="min-w-0 flex-1 px-3 py-2 text-sm text-[#1A2B3C] outline-none" placeholder="Buscar destinos, playas o consejos..." /></div></div>
      </div>
    </header>
    <div className="container pt-6">
      <div className="flex gap-2 overflow-x-auto rounded-2xl border border-[#dcebf3] bg-white p-3 shadow-md" aria-label="Filtrar artículos">{blogCategories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition ${category === item ? "bg-[#00B8C8] text-white" : "bg-[#eef6fa] text-[#496575] hover:bg-[#dff3f5]"}`}>{item}</button>)}</div>
      <section className="py-12" aria-labelledby="articles-title"><div className="mb-7 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#00B8C8]">Explora y aprende</p><h2 id="articles-title" className="mt-2 text-3xl font-bold text-[#1A2B3C]">Artículos recientes</h2></div><span className="text-sm text-[#5a7080]">{filtered.length} resultado{filtered.length === 1 ? "" : "s"}</span></div>
        {filtered.length ? <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtered.map((article) => <article key={article.slug} className="group overflow-hidden rounded-3xl border border-[#dcebf3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><Link href={`/blog/${article.slug}`}><img src={article.image} alt={article.imageAlt} width="700" height="460" loading="lazy" className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" /></Link><div className="p-6"><div className="flex items-center justify-between gap-3"><span className="rounded-full bg-[#e4f8f8] px-3 py-1 text-xs font-bold text-[#007e88]">{article.category}</span><span className="text-xs text-[#6b7f8d]">{article.readingTime} de lectura</span></div><h3 className="mt-4 text-xl font-bold leading-snug text-[#1A2B3C]"><Link href={`/blog/${article.slug}`} className="hover:text-[#007e88]">{article.title}</Link></h3><p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#5a7080]">{article.excerpt}</p><Link href={`/blog/${article.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#003F7D] hover:text-[#00B8C8]">Leer artículo <span aria-hidden="true">→</span></Link></div></article>)}</div> : <div className="rounded-3xl border border-dashed border-[#b9dbe9] bg-white p-12 text-center"><h3 className="font-bold text-[#1A2B3C]">No encontramos artículos</h3><p className="mt-2 text-sm text-[#5a7080]">Prueba otra búsqueda o categoría.</p></div>}
      </section>
      <NewsletterForm />
    </div>
  </main>;
}

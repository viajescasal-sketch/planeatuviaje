/**
 * BlogPost — Viajes Casal
 * Design: Artículo individual con contenido, imagen y CTA
 * Section: Artículos de Blog
 */
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface BlogPostProps {
  title: string;
  date: string;
  readTime: string;
  image: string;
  content: React.ReactNode;
  slug: string;
}

export default function BlogPost({ title, date, readTime, image, content, slug }: BlogPostProps) {
  const { ref, visible } = useScrollAnimation();

  return (
    <article className="py-12 px-4 bg-white">
      <div className="container max-w-3xl">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4 text-sm text-[#999]">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime} lectura</span>
          </div>
          <h1 className="text-[#1A2B3C] font-extrabold leading-tight mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            {title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-96 object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-[#333] leading-relaxed space-y-6">
            {content}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#009FE3] to-[#006B9A] rounded-2xl p-8 text-center">
          <h3 className="text-white font-bold text-2xl mb-3">
            ¿Listo para tu próximo viaje?
          </h3>
          <p className="text-white/90 mb-6">
            En Viajes Casal armamos tu paquete perfecto. Cotiza ahora y comienza a soñar.
          </p>
          <a
            href="https://wa.me/529983921530?text=Hola,%20vi%20tu%20blog%20y%20quiero%20cotizar%20un%20viaje"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base bg-[#F5A623] text-white hover:bg-[#E89A1A] transition-all duration-200"
          >
            <span>💬</span>
            Solicitar Cotización por WhatsApp
          </a>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-[#009FE3] font-semibold hover:text-[#006B9A] transition-colors"
          >
            <span>←</span>
            Volver al Blog
          </a>
        </div>
      </div>
    </article>
  );
}

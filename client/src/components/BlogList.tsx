/**
 * BlogList — Viajes Casal
 * Design: Grid de artículos con preview, imagen, título, descripción y CTA
 * Section: Blog
 */
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Las 5 Mejores Playas de Cancún para Familias en 2026",
    excerpt: "Descubre las playas más seguras y tranquilas de Cancún, perfectas para viajar con niños. Aguas cristalinas, servicios cercanos y diversión garantizada.",
    image: "/planeatuviaje/assets/cancun.png",
    date: "9 de julio, 2026",
    readTime: "5 min",
    slug: "mejores-playas-cancun-familias"
  },
  {
    id: "2",
    title: "Qué Hacer en Puerto Vallarta: Guía de Viaje para Tu Primera Vez",
    excerpt: "Tu primer viaje a Puerto Vallarta merece ser perfecto. Descubre el Malecón, playas escondidas, liberación de tortugas marinas y experiencias inolvidables.",
    image: "/planeatuviaje/assets/puerto-vallarta.png",
    date: "9 de julio, 2026",
    readTime: "6 min",
    slug: "que-hacer-puerto-vallarta-guia"
  },
  {
    id: "3",
    title: "Cómo Viajar a Los Cabos con Poco Presupuesto en 2026",
    excerpt: "Desmitificamos el mito de que Los Cabos es solo para millonarios. Aprende los secretos de experto para disfrutar del Mar de Cortés sin quebrar el cochinito.",
    image: "/planeatuviaje/assets/los-cabos.png",
    date: "9 de julio, 2026",
    readTime: "7 min",
    slug: "viajar-los-cabos-poco-presupuesto"
  },
  {
    id: "4",
    title: "Cómo Planear un Viaje a la Playa por Primera Vez: Guía Paso a Paso",
    excerpt: "¿Es tu primera vez organizando vacaciones? Te enseñamos cómo planear un viaje a la playa sin cometer errores costosos. Paso a paso, sin estrés.",
    image: "/planeatuviaje/assets/familia-playa.png",
    date: "9 de julio, 2026",
    readTime: "8 min",
    slug: "como-planear-viaje-playa-primera-vez"
  },
  {
    id: "5",
    title: "Paquetes Todo Incluido vs. Viajar por Separado: ¿Cuál Conviene Más?",
    excerpt: "Analizamos los números: ¿Es realmente más caro un paquete todo incluido? Descubre por qué muchas veces es la opción más económica y segura.",
    image: "/planeatuviaje/assets/resort-todo-incluido.png",
    date: "9 de julio, 2026",
    readTime: "6 min",
    slug: "paquetes-todo-incluido-vs-viajar-separado"
  }
];

export default function BlogList() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="blog" className="py-20 px-4 bg-white" ref={ref}>
      <div className="container">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#009FE3] mb-3 bg-blue-50 px-4 py-1.5 rounded-full">
            ✍️ Artículos & Guías
          </span>
          <h2 className="text-[#1A2B3C] font-extrabold leading-tight mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
            Blog de Viajes Premium
          </h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            Consejos, guías y tips de experto para planear tu próximo viaje a las mejores playas de México.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: visible ? `${index * 100}ms` : "0ms"
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 bg-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-3 text-sm text-[#999]">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} lectura</span>
                </div>

                {/* Title */}
                <h3 className="text-[#1A2B3C] font-bold text-lg leading-tight mb-3 group-hover:text-[#009FE3] transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#666] text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                {/* CTA */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a
                    href={`/blog/${post.slug}`}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-full font-semibold text-sm text-white bg-[#009FE3] hover:bg-[#006B9A] transition-all duration-200"
                  >
                    Leer Artículo
                  </a>
                  <a
                    href="https://wa.me/529983921530?text=Hola,%20me%20interes%C3%B3%20tu%20blog%20y%20quiero%20cotizar%20un%20viaje"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-full font-semibold text-sm text-[#009FE3] border-2 border-[#009FE3] hover:bg-[#009FE3] hover:text-white transition-all duration-200"
                  >
                    Cotizar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

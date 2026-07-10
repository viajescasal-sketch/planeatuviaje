/**
 * Blog: Qué Hacer en Puerto Vallarta: Guía de Viaje para Tu Primera Vez
 */
import BlogPost from "../components/BlogPost";

export default function BlogPuertoVallarta() {
  return (
    <BlogPost
      title="Qué Hacer en Puerto Vallarta: Guía de Viaje para Tu Primera Vez"
      date="9 de julio, 2026"
      readTime="6 min"
      image="/planeatuviaje/assets/puerto-vallarta.png"
      slug="que-hacer-puerto-vallarta-guia"
      content={
        <>
          <p>
            Puerto Vallarta es un destino mágico que combina la calidez de un pueblo tradicional mexicano con la belleza del Océano Pacífico. Si es la primera vez que visitas esta costa de Jalisco, es normal sentirse abrumado con tantas opciones de tours y playas.
          </p>
          <p>
            Para ayudarte a organizar tu itinerario sin estrés, hemos preparado esta guía de viaje con lo que sí o sí tienes que hacer en Puerto Vallarta.
          </p>

          <h2 className="text-[#1A2B3C] font-bold text-2xl mt-8 mb-4">1. Caminar por el pintoresco Malecón</h2>
          <p>
            Tu viaje debe comenzar aquí. El Malecón de Puerto Vallarta es un andador peatonal lleno de esculturas de bronce, tiendas de artesanías, restaurantes frente al mar y los famosos Voladores de Papantla. Caminar por aquí al atardecer te regalará una de las postales más hermosas de tu vida.
          </p>

          <h2 className="text-[#1A2B3C] font-bold text-2xl mt-8 mb-4">2. Una escapada a las Playas del Sur (Mismaloya y Las Animas)</h2>
          <p>
            Si buscas playas con aguas tranquilas rodeadas de selva verde, dirígete al sur de la bahía. Desde la playa de Mismaloya o el muelle de Boca de Tomatlán, puedes tomar una "panga" (lancha local) para visitar playas accesibles únicamente por mar, como Las Ánimas o Quimixto.
          </p>

          <h2 className="text-[#1A2B3C] font-bold text-2xl mt-8 mb-4">3. Liberación de tortugas marinas (Una experiencia inolvidable)</h2>
          <p>
            Si viajas entre los meses de julio y diciembre, tienes una oportunidad única. Diversos campamentos tortugueros en la zona hotelera y playas cercanas permiten a los turistas participar de forma gratuita o mediante donativos en la liberación de crías de tortuga marina al atardecer. Es una actividad educativa perfecta para compartir en familia o pareja.
          </p>

          <div className="bg-blue-50 border-l-4 border-[#009FE3] p-6 my-8 rounded">
            <p className="font-semibold text-[#1A2B3C] mb-2">🌊 Experiencia Única:</p>
            <p>
              La liberación de tortugas es una de las experiencias más emocionantes que puedes vivir en Puerto Vallarta. Ver a los pequeños tortuguitos corriendo hacia el océano es mágico.
            </p>
          </div>

          <h2 className="text-[#1A2B3C] font-bold text-2xl mt-8 mb-4">4. Explorar la Zona Romántica</h2>
          <p>
            Este barrio bohemio es perfecto para cenar en restaurantes locales, comprar artesanías auténticas y disfrutar del ambiente relajado de Puerto Vallarta. Las calles empedradas y las galerías de arte te transportarán a otro mundo.
          </p>

          <h2 className="text-[#1A2B3C] font-bold text-2xl mt-8 mb-4">5. Tours de aventura en la selva</h2>
          <p>
            Desde canopy tours hasta paseos a caballo en la selva, Puerto Vallarta ofrece adrenalina para los aventureros. También puedes hacer snorkel en arrecifes cercanos o buceo si tienes certificación.
          </p>

          <h2 className="text-[#1A2B3C] font-bold text-2xl mt-8 mb-4">Lo que debes saber</h2>
          <ul className="list-disc list-inside space-y-2 text-[#333]">
            <li>El clima es cálido todo el año, pero la temporada de lluvias es de junio a octubre</li>
            <li>La moneda es el peso mexicano, pero aceptan dólares en muchos lugares</li>
            <li>El transporte local es económico (camiones y taxis)</li>
            <li>La gastronomía local es excelente: prueba los ceviches y los mariscos frescos</li>
            <li>La seguridad es buena en zonas turísticas</li>
          </ul>

          <p className="mt-8 text-lg font-semibold text-[#1A2B3C]">
            Planear tu primer viaje al Pacífico no tiene por qué ser confuso. En Viajes Casal te acompañamos paso a paso seleccionando el hotel ideal en la Zona Romántica o la Marina, garantizando asistencia total antes y durante tu estancia.
          </p>
        </>
      }
    />
  );
}

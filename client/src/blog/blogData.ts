export type BlogSection = { id: string; title: string; paragraphs: string[]; bullets?: string[]; tip?: string };
export type BlogArticle = {
  slug: string; category: string; title: string; seoTitle: string; keyword: string;
  description: string; excerpt: string; image: string; imageAlt: string;
  date: string; readingTime: string; sections: BlogSection[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "mejores-playas-cancun-familias", category: "Cancún",
    title: "Las 5 mejores playas de Cancún para familias en 2026",
    seoTitle: "Las 5 Mejores Playas de Cancún para Familias en 2026 (Sin Preocupaciones)",
    keyword: "mejores playas de Cancún para familias",
    description: "Descubre cuáles son las mejores playas de Cancún para ir con niños, con aguas tranquilas tipo alberca y cómo visitarlas sin complicaciones.",
    excerpt: "Playas familiares, servicios cercanos y consejos prácticos para disfrutar Cancún con niños.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=75&fm=webp",
    imageAlt: "Playa de arena blanca y agua turquesa en Cancún para disfrutar en familia", date: "10 de julio de 2026", readingTime: "6 min",
    sections: [
      { id: "antes-de-ir", title: "Antes de elegir una playa familiar", paragraphs: ["Planear un viaje al Caribe mexicano con niños suele traer preguntas sobre oleaje, servicios y acceso. Las condiciones del mar pueden cambiar, por lo que conviene revisar las banderas de seguridad y las indicaciones de Protección Civil el mismo día de la visita.", "La zona norte de la Zona Hotelera suele ofrecer áreas más resguardadas. Aun así, ningún punto debe considerarse completamente libre de oleaje, sargazo u otros cambios naturales."] },
      { id: "playa-langosta", title: "1. Playa Langosta", paragraphs: ["En el kilómetro 5 de la Zona Hotelera, Playa Langosta es popular entre familias por sus zonas poco profundas, baños públicos y restaurantes cercanos. La supervisión de los menores sigue siendo indispensable."], tip: "Llega temprano en temporada alta: el estacionamiento y las palapas disponibles pueden ocuparse rápidamente." },
      { id: "playa-tortugas", title: "2. Playa Tortugas", paragraphs: ["Su ambiente activo, muelle y conexiones hacia Isla Mujeres la convierten en una alternativa práctica. Consulta reportes recientes sobre viento, oleaje y presencia estacional de sargazo antes de nadar."] },
      { id: "las-perlas", title: "3. Playa Las Perlas", paragraphs: ["Es una playa pública compacta cerca del inicio de la Zona Hotelera. Su tamaño facilita mantenerse cerca del grupo y dispone de servicios básicos; la disponibilidad de sombra no está garantizada."] },
      { id: "otras-opciones", title: "4. Playa Caracol y 5. Playa Forum en horario tranquilo", paragraphs: ["Playa Caracol puede resultar cómoda por su ubicación y accesos. Playa Forum suele tener mayor actividad, pero durante las primeras horas puede ofrecer una experiencia más tranquila. Verifica siempre las condiciones del día."] },
    ],
  },
  {
    slug: "que-hacer-puerto-vallarta-guia", category: "Puerto Vallarta",
    title: "Qué hacer en Puerto Vallarta: guía para tu primera vez", seoTitle: "Qué Hacer en Puerto Vallarta: Guía de Viaje para Tu Primera Vez",
    keyword: "qué hacer en Puerto Vallarta", description: "¿Viajas por primera vez a Puerto Vallarta? Sigue esta guía práctica con actividades, playas y consejos para organizar una experiencia memorable.",
    excerpt: "Malecón, playas del sur y experiencias responsables para organizar tu primera visita.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=75&fm=webp",
    imageAlt: "Costa tropical del Pacífico mexicano cerca de Puerto Vallarta", date: "9 de julio de 2026", readingTime: "6 min",
    sections: [
      { id: "malecon", title: "Camina por el Malecón", paragraphs: ["Comienza con un paseo por el Malecón: encontrarás esculturas, artesanías, restaurantes y vistas al Pacífico. Al atardecer el ambiente es especialmente agradable, aunque conviene considerar calor y afluencia según la temporada."] },
      { id: "playas-sur", title: "Explora las playas del sur", paragraphs: ["Mismaloya y Boca de Tomatlán son puntos habituales para continuar en lancha hacia Las Ánimas o Quimixto. El servicio, horarios y condiciones del mar dependen de operadores y clima; confirma todo antes de salir."], tip: "Lleva efectivo, protector solar amigable con el ambiente y acuerda por adelantado horario y costo del regreso." },
      { id: "tortugas", title: "Participación responsable con tortugas", paragraphs: ["Algunos campamentos realizan actividades de conservación en ciertos periodos del año. Fechas, cuotas o donativos cambian; consulta directamente con organizaciones autorizadas y evita proveedores que permitan manipulación inadecuada de fauna."] },
      { id: "zona", title: "Elige la zona adecuada para hospedarte", paragraphs: ["La Zona Romántica favorece recorridos a pie y vida local; Marina Vallarta ofrece hoteles y acceso práctico al aeropuerto. La mejor opción depende de tu itinerario, movilidad y tipo de viaje."] },
    ],
  },
  {
    slug: "viajar-los-cabos-poco-presupuesto", category: "Los Cabos",
    title: "Cómo viajar a Los Cabos con poco presupuesto en 2026", seoTitle: "Cómo Viajar a Los Cabos con Poco Presupuesto en 2026",
    keyword: "viajar a Los Cabos con poco presupuesto", description: "Descubre estrategias para visitar Los Cabos cuidando el presupuesto: zonas convenientes, playas públicas y decisiones prácticas de ahorro.",
    excerpt: "Consejos realistas para ajustar hospedaje, transporte y actividades sin renunciar al destino.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=75&fm=webp",
    imageAlt: "Formaciones rocosas y mar azul en la costa de Los Cabos", date: "8 de julio de 2026", readingTime: "6 min",
    sections: [
      { id: "temporada", title: "Compara temporadas y fechas", paragraphs: ["Las tarifas pueden bajar en periodos de menor demanda, pero el precio final depende de vuelos, disponibilidad y condiciones climáticas. Compara varias fechas y revisa políticas de cambio antes de reservar."] },
      { id: "zonas", title: "Hospédate en zonas estratégicas", paragraphs: ["El centro de Cabo San Lucas y San José del Cabo ofrecen hoteles de distintas categorías, restaurantes locales y acceso a transporte. Evalúa el costo total, no solo la tarifa por noche."] },
      { id: "playas", title: "Disfruta playas públicas con precaución", paragraphs: ["El Médano, Chileno y Santa María son referencias frecuentes, pero las condiciones para nadar cambian. Respeta banderas, oleaje e indicaciones oficiales; algunas playas de la región no son aptas para nadar."], tip: "Para visitar el Arco, compara lanchas colectivas y tours. Confirma chalecos, seguros, duración y precio total antes de contratar." },
      { id: "presupuesto", title: "Arma un presupuesto completo", paragraphs: ["Incluye equipaje, traslados, alimentos, impuestos locales y actividades. Una cotización integral facilita comparar opciones con criterios equivalentes."] },
    ],
  },
  {
    slug: "como-planear-viaje-playa-primera-vez", category: "Consejos para viajar",
    title: "Cómo planear un viaje a la playa por primera vez", seoTitle: "Cómo Planear un Viaje a la Playa por Primera Vez (Guía Sin Errores)",
    keyword: "cómo planear un viaje a la playa por primera vez", description: "¿Es tu primera vez organizando vacaciones? Aprende a planear un viaje a la playa paso a paso y evita errores frecuentes.",
    excerpt: "Una guía clara para elegir destino, comparar paquetes y entender qué incluye cada reserva.",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1400&q=75&fm=webp",
    imageAlt: "Viajeros contemplando una playa tropical durante sus primeras vacaciones", date: "7 de julio de 2026", readingTime: "7 min",
    sections: [
      { id: "destino", title: "1. Elige el destino según tu plan", paragraphs: ["Define quién viaja, ritmo, intereses y presupuesto. Cancún combina playas y parques; Puerto Vallarta ofrece ambiente tradicional; Los Cabos destaca por paisajes desérticos. Ningún destino es universalmente mejor."] },
      { id: "integrado", title: "2. Compara soluciones integradas", paragraphs: ["Vuelo, hotel y traslados pueden contratarse juntos o separados. Compara el costo total y las condiciones; un paquete no siempre es más barato, pero puede simplificar coordinación y soporte."] },
      { id: "hospedaje", title: "3. Revisa qué incluye el hospedaje", paragraphs: ["Compara todo incluido, desayuno o solo alojamiento según cuánto tiempo pasarás en el hotel. Revisa restaurantes, horarios, restricciones, impuestos y cargos adicionales."], tip: "Guarda confirmaciones, políticas y teléfonos de asistencia. Verifica que nombres y fechas coincidan con los documentos de cada viajero." },
      { id: "respaldo", title: "4. Valora el acompañamiento", paragraphs: ["Una agencia puede ayudarte a comparar alternativas y gestionar incidencias dentro del alcance del servicio contratado. Confirma por escrito horarios, canales de soporte y responsabilidades."] },
    ],
  },
  {
    slug: "paquetes-todo-incluido-vs-viajar-separado", category: "Paquetes",
    title: "Paquetes todo incluido vs. viajar por separado", seoTitle: "Paquetes Todo Incluido vs. Viajar por Separado: ¿Cuál Conviene Más?",
    keyword: "paquetes todo incluido vs viajar por separado", description: "Comparamos paquetes todo incluido y reservas separadas para ayudarte a evaluar precio, cargos, tiempo y flexibilidad.",
    excerpt: "Una comparación transparente entre precio total, flexibilidad, tiempo de planeación y soporte.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=75&fm=webp",
    imageAlt: "Resort frente al mar representando un paquete de vacaciones todo incluido", date: "6 de julio de 2026", readingTime: "7 min",
    sections: [
      { id: "precio", title: "El precio debe compararse en igualdad de condiciones", paragraphs: ["Agencias expertas pueden acceder a tarifas empaquetadas, pero el resultado varía por fecha, inventario y proveedor. Compara equipaje, impuestos, traslados, alimentos y políticas, no solo el precio destacado."] },
      { id: "costos", title: "Revisa los costos que suelen quedar fuera", paragraphs: ["Al comprar por separado considera equipaje, impuestos hoteleros, saneamiento ambiental, asientos, traslados y posibles comisiones. En un paquete, confirma también por escrito qué está incluido y qué se paga en destino."], bullets: ["Equipaje y selección de asiento", "Impuestos y cargos locales", "Traslados aeropuerto-hotel", "Políticas de cambio y cancelación"] },
      { id: "tiempo", title: "Tiempo, flexibilidad y tranquilidad", paragraphs: ["Reservar por separado ofrece control sobre cada componente. Un paquete puede reducir coordinación y facilitar un punto de contacto. La elección depende de cuánto tiempo quieras dedicar y cuánta flexibilidad necesites."], tip: "Pide dos escenarios comparables: paquete integral y componentes separados. Así podrás decidir con datos vigentes para tus fechas." },
      { id: "veredicto", title: "¿Cuál conviene más?", paragraphs: ["No existe una respuesta única. El paquete suele convenir a quien prioriza sencillez; la reserva separada puede funcionar para itinerarios muy específicos. Una cotización transparente debe mostrar inclusiones, exclusiones y condiciones."] },
    ],
  },
];

export const blogCategories = ["Todos", "Cancún", "Puerto Vallarta", "Los Cabos", "Consejos para viajar", "Paquetes"];
export const getArticle = (slug: string) => blogArticles.find((article) => article.slug === slug);

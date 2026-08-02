import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "es" | "en";
type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void };
const LanguageContext = createContext<LanguageContextValue>({ language: "es", setLanguage: () => undefined });

const en: Record<string, string> = {
  "Inicio":"Home", "Beneficios":"Benefits", "Paquetes":"Packages", "Tours":"Tours", "Testimonios":"Testimonials", "Blog":"Blog", "Contacto":"Contact",
  "Tu viaje, nuestra prioridad":"Your journey, our priority", "Hablemos por WhatsApp":"Chat with us on WhatsApp", "Saltar al contenido principal":"Skip to main content",
  "VIAJES PREMIUM EN MÉXICO":"PREMIUM TRAVEL IN MEXICO", "Nosotros nos encargamos de todo.":"We take care of everything.", "Tú solo disfruta.":"You just enjoy it.",
  "Ver paquetes":"View packages", "Solicitar cotización":"Request a quote", "Cotizar":"Get a quote", "Consultar":"Learn more", "Consultar disponibilidad":"Check availability",
  "Paquetes turísticos premium":"Premium travel packages", "Experiencias diseñadas para ti":"Experiences designed for you", "Desde":"From", "/ Por persona":"/ Per person", "MXN / Por persona":"MXN / Per person",
  "Todos los precios son por persona. Cotización sin costo y sin compromiso.":"All prices are per person. Free quote with no obligation.",
  "Tours destacados":"Featured tours", "Descubre experiencias inolvidables":"Discover unforgettable experiences", "Ver todos los tours":"View all tours",
  "¿Cómo funciona?":"How does it work?", "Viajar con nosotros es muy fácil":"Traveling with us is easy", "Lo que dicen nuestros viajeros":"What our travelers say",
  "Preguntas frecuentes":"Frequently asked questions", "Resolvemos tus dudas":"We answer your questions", "¿Listo para planear tu próximo viaje?":"Ready to plan your next trip?",
  "Nombre completo":"Full name", "Número de WhatsApp":"WhatsApp number", "Correo electrónico":"Email address", "Destino":"Destination", "Ciudad de salida":"Departure city",
  "Fecha de salida":"Departure date", "Fecha de regreso":"Return date", "Mis fechas son flexibles.":"My dates are flexible.", "Adultos":"Adults", "Niños":"Children", "Bebés (0-1 años)":"Infants (0-1 years)",
  "¿Qué deseas cotizar?":"What would you like a quote for?", "Paquete (Vuelo + Hotel)":"Package (Flight + Hotel)", "Solo hotel":"Hotel only", "Solo vuelo":"Flight only",
  "Traslados":"Transfers", "Renta de auto":"Car rental", "Crucero":"Cruise", "Seleccionar...":"Select...", "Otro":"Other", "Otra":"Other",
  "Presupuesto aproximado":"Approximate budget", "¿En qué etapa te encuentras?":"What stage are you at?", "Tipo de viaje":"Type of trip", "Servicios adicionales":"Additional services",
  "Comentarios adicionales":"Additional comments", "¿Cómo prefieres recibir tu cotización?":"How would you like to receive your quote?", "Llamada telefónica":"Phone call",
  "Solicitar cotización por WhatsApp":"Request quote via WhatsApp", "Cotización personalizada":"Personalized quote", "Cuéntanos sobre tu viaje":"Tell us about your trip",
  "Datos del cliente":"Customer information", "Información del viaje":"Trip information", "Viajeros":"Travelers", "Presupuesto y prioridad":"Budget and priority", "Preferencias adicionales":"Additional preferences",
  "¿Cómo podemos ayudarte? ✈️":"How can we help you? ✈️", "Elige una opción y te ayudamos a dar el siguiente paso.":"Choose an option and we'll help you take the next step.",
  "Hablar con mi Travel Partner":"Talk to my Travel Partner", "Recibe atención personal por WhatsApp":"Get personal assistance on WhatsApp",
  "Crear mi cotización personalizada":"Create my personalized quote", "Comparte fechas, viajeros y presupuesto":"Share dates, travelers and budget",
  "Resolver una duda rápida":"Get a quick answer", "Consulta destinos, reservas, pagos y cambios":"Ask about destinations, bookings, payments and changes",
  "¿Sobre qué tienes dudas?":"What do you have questions about?", "Destinos":"Destinations", "Precios y paquetes":"Prices and packages", "Reservas y disponibilidad":"Bookings and availability",
  "Cambios y cancelaciones":"Changes and cancellations", "Pagos y seguridad":"Payments and security", "Menú principal":"Main menu", "Categorías":"Categories", "Preguntas":"Questions",
  "La información puede variar según proveedor, fecha y disponibilidad.":"Information may vary by provider, date and availability.",
  "Solicitar disponibilidad por WhatsApp":"Request availability via WhatsApp", "Fecha del tour":"Tour date", "¿Qué tour te interesa?":"Which tour are you interested in?",
  "¿Necesitas transporte al tour?":"Do you need transportation to the tour?", "Sí":"Yes", "No":"No", "No estoy seguro":"I'm not sure",
  "Nombre (opcional)":"Name (optional)", "Quiero recibir novedades":"I want to receive updates", "Aviso de Privacidad":"Privacy Notice",
  "Recibe guías, promociones y consejos para viajar mejor":"Receive guides, promotions and tips to travel better", "Buscar destinos, playas o consejos...":"Search destinations, beaches or tips...",
  "Leer artículo":"Read article", "Volver al blog":"Back to blog", "Artículos relacionados":"Related articles", "Compartir":"Share", "Cotizar por WhatsApp":"Get a quote on WhatsApp",
  "Planificamos viajes personalizados a los mejores destinos de México para que vivas experiencias únicas, sin estrés y sin perder tiempo en los detalles.":"We plan personalized trips to Mexico's best destinations so you can enjoy unique experiences without stress or wasting time on the details.",
  "+500 viajes realizados":"500+ trips planned", "Atención 24/7":"24/7 assistance", "Viajeros felices":"Happy travelers", "Agencia verificada":"Verified agency",
  "Por qué elegirnos":"Why choose us", "Viaja tranquilo, nosotros cuidamos cada detalle":"Travel with peace of mind; we take care of every detail",
  "Atención personalizada":"Personalized service", "Tu viaje es único. Creamos una experiencia diseñada especialmente para ti.":"Your trip is unique. We create an experience designed especially for you.",
  "Mejores precios":"Best prices", "Comparamos opciones para ofrecerte el mejor valor sin sacrificar calidad.":"We compare options to offer you the best value without sacrificing quality.",
  "Soporte 24/7":"24/7 support", "Estamos contigo antes, durante y después de tu viaje.":"We are with you before, during and after your trip.",
  "Experiencia y confianza":"Experience and trust", "Más de 8 años creando viajes inolvidables para cientos de viajeros.":"Over 8 years creating unforgettable trips for hundreds of travelers.",
  "Oportunidades exclusivas":"Exclusive offers", "Promociones del mes":"Offers of the month", "Ofertas seleccionadas para que viajes más y gastes menos.":"Handpicked offers so you can travel more and spend less.",
  "Válido hasta fin de mes":"Valid through the end of the month", "Cupos limitados":"Limited availability", "Oferta especial":"Special offer",
  "Cada paquete incluye vuelo, hotel cinco estrellas y experiencias curadas por nuestro equipo.":"Each package includes flights, a five-star hotel and experiences curated by our team.",
  "5 noches · 6 días":"5 nights · 6 days", "4 noches · 5 días":"4 nights · 5 days", "2 personas":"2 travelers",
  "Vuelo redondo desde CDMX":"Round-trip flight from Mexico City", "Hotel todo incluido frente al mar":"All-inclusive beachfront hotel", "Desayunos y cenas gourmet":"Gourmet breakfasts and dinners",
  "Traslados aeropuerto-hotel":"Airport-hotel transfers", "Tour de snorkel en Isla Mujeres":"Isla Mujeres snorkeling tour", "Suite superior vista al mar":"Superior ocean-view suite",
  "Desayunos incluidos":"Breakfast included", "Tour gastronómico por el Malecón":"Malecón food tour", "Suite con vista al Mar de Cortés":"Sea of Cortez-view suite",
  "Desayunos y cenas incluidas":"Breakfast and dinner included", "Tour al Arco de Los Cabos":"Tour to the Arch of Los Cabos",
  "El Caribe Mexicano":"The Mexican Caribbean", "El Pacífico Romántico":"The Romantic Pacific", "Donde el Desierto Abraza el Mar":"Where the Desert Meets the Sea",
  "Inspírate":"Get inspired", "Experiencias que recordarás siempre":"Experiences you'll always remember",
  "Actividades únicas seleccionadas para complementar tu viaje y crear recuerdos que duran toda la vida.":"Unique activities selected to complement your trip and create lifelong memories.",
  "Todos":"All", "Naturaleza":"Nature", "Cultura":"Culture", "Aventura":"Adventure", "Gastronomía":"Food", "Romance":"Romance",
  "2 días":"2 days", "1 día":"1 day", "4 horas":"4 hours", "3 horas":"3 hours",
  "Los parques acuáticos y culturales más emblemáticos de la Riviera Maya.":"The Riviera Maya's most iconic water and cultural parks.",
  "Descubre una de las maravillas del mundo y refréscate en un cenote sagrado.":"Discover one of the wonders of the world and cool off in a sacred cenote.",
  "Observa ballenas jorobadas en su hábitat natural en el Mar de Cortés.":"See humpback whales in their natural habitat in the Sea of Cortez.",
  "Saborea los mejores tacos, mariscos y cócteles del centro histórico.":"Enjoy the best tacos, seafood and cocktails in the historic center.",
  "Explora los arrecifes de coral más coloridos del Caribe mexicano.":"Explore the Mexican Caribbean's most colorful coral reefs.",
  "Navega al atardecer con cóctel de bienvenida y música en vivo.":"Sail at sunset with a welcome cocktail and live music.",
  "Así trabajamos contigo":"How we work with you", "Tu viaje en":"Your trip in", "4 simples pasos":"4 simple steps",
  "Un proceso sencillo y transparente para que solo te preocupes por disfrutar.":"A simple, transparent process so all you have to do is enjoy.",
  "Cuéntanos tu idea":"Tell us your idea", "Nos cuentas tu idea de viaje, presupuesto y todo lo que sueñas vivir. Sin formularios complicados.":"Tell us your travel idea, budget and everything you dream of experiencing. No complicated forms.",
  "Diseñamos tu viaje":"We design your trip", "Creamos tu itinerario 100% personalizado con las mejores opciones de hoteles, vuelos y experiencias.":"We create a fully personalized itinerary with the best hotels, flights and experiences.",
  "Tú eliges":"You choose", "Nos encargamos de todo: reservas, coordinación y cada detalle para que no tengas que preocuparte.":"We take care of bookings, coordination and every detail so you don't have to worry.",
  "¡Disfruta!":"Enjoy!", "Tú solo disfrutas. Nosotros estamos contigo en cada paso del camino, disponibles 24/7.":"You simply enjoy. We are with you every step of the way, available 24/7.",
  "Comenzar a planear":"Start planning", "Calificación":"Rating", "Años":"Years", "Satisfacción":"Satisfaction",
  "Historias reales":"Real stories", "Viajeros felices, experiencias inolvidables":"Happy travelers, unforgettable experiences",
  "Estamos aquí para ti":"We're here for you", "Cuéntanos tu":"Tell us about your", "viaje soñado":"dream trip",
  "Escríbenos y en menos de 2 horas te enviamos una propuesta personalizada sin ningún costo.":"Write to us and we'll send you a free personalized proposal in under two hours.",
  "Horario de atención":"Business hours", "Lunes a Sábado: 9:00 AM – 6:00 PM":"Monday to Saturday: 9:00 AM – 6:00 PM",
  "Cotización gratuita y sin compromiso":"Free, no-obligation quote", "Atención personalizada de principio a fin":"Personalized service from start to finish", "Disponibles 24/7 durante tu viaje":"Available 24/7 during your trip",
  "Envíanos un mensaje":"Send us a message", "¡Mensaje enviado!":"Message sent!", "Te redirigimos a WhatsApp para continuar la conversación.":"We're redirecting you to WhatsApp to continue the conversation.",
  "Teléfono":"Phone", "Cuéntanos sobre el viaje que tienes en mente...":"Tell us about the trip you have in mind...", "Enviar por WhatsApp":"Send via WhatsApp", "🔒 Tu información es confidencial":"🔒 Your information is confidential",
  "¿Cómo funciona el proceso de cotización?":"How does the quote process work?", "¿Los precios incluyen vuelo y hotel?":"Do prices include flights and hotel?",
  "¿Cuánto tiempo de anticipación necesito para reservar?":"How far in advance should I book?", "¿Qué formas de pago aceptan?":"What payment methods do you accept?",
  "¿Qué pasa si necesito cancelar o cambiar mi viaje?":"What if I need to cancel or change my trip?", "¿Trabajan solo con destinos en México?":"Do you only work with destinations in Mexico?", "¿Ofrecen seguro de viaje?":"Do you offer travel insurance?",
  "Completa los datos y un asesor comenzará tu propuesta de inmediato.":"Complete the details and an advisor will begin your proposal right away.", "¿Con quién tendremos el gusto de hablar?":"Who will we have the pleasure of assisting?",
  "Los datos esenciales para buscar opciones reales.":"The essential details for finding real options.", "Indica cuántas personas viajarán.":"Tell us how many people are traveling.",
  "¿Qué destino tienes en mente?":"What destination do you have in mind?", "¿Cuáles son las edades de los niños?":"What are the children's ages?", "¿Ya tienes algún hotel en mente?":"Do you already have a hotel in mind?",
  "¿En qué hotel te hospedarás?":"Which hotel will you be staying at?", "Disponibilidad de tours":"Tour availability", "Solicitar información":"Request information", "Completa estos datos en menos de un minuto.":"Complete these details in under a minute.",
  "Información del tour":"Tour information", "🔒 Tu información es confidencial y solo se utilizará para preparar tu cotización.":"🔒 Your information is confidential and will only be used to prepare your quote.",
  "🔒 Usaremos tus datos únicamente para verificar disponibilidad y cotizar.":"🔒 We will only use your information to check availability and prepare a quote.",
  "Pareja":"Couple", "Familia":"Family", "Amigos":"Friends", "Luna de miel":"Honeymoon", "Cumpleaños":"Birthday", "Negocios":"Business", "Viajo solo":"Solo traveler",
  "Seguro de viaje":"Travel insurance", "Prefiero recibir recomendaciones":"I prefer recommendations", "Solo estoy investigando opciones.":"I'm just researching options.", "Estoy comparando precios.":"I'm comparing prices.", "Quiero viajar en los próximos 3 meses.":"I want to travel within the next 3 months.", "Quiero reservar esta semana.":"I want to book this week.", "Quiero reservar hoy.":"I want to book today."
  ,"Beneficios de Viajes Casal":"Viajes Casal benefits", "Ahorra tiempo":"Save time", "No pierdas horas buscando, nosotros lo hacemos por ti.":"Don't spend hours searching; we do it for you.",
  "Viaja seguro":"Travel safely", "Te acompañamos antes, durante y después de tu viaje.":"We support you before, during and after your trip.", "100% personalizado":"100% personalized",
  "Cada viaje se diseña según tu estilo y presupuesto.":"Every trip is designed around your style and budget.", "Experiencias únicas":"Unique experiences", "Acceso a lugares, hoteles y experiencias que marcan.":"Access to memorable places, hotels and experiences.",
  "Atención cercana":"Personal service", "Estamos contigo en cada paso del camino.":"We are with you every step of the way.", "Viajes realizados":"Trips planned", "Historias reales,":"Real stories,", "experiencias inolvidables":"unforgettable experiences",
  "✦ Resolvemos tus dudas":"✦ We answer your questions", "Preguntas Frecuentes":"Frequently Asked Questions", "¿Tienes alguna pregunta? Aquí encontrarás las respuestas más comunes.":"Have a question? Find answers to the most common questions here.",
  "¿Tienes más preguntas?":"Still have questions?", "Escríbenos directamente y te respondemos en minutos.":"Message us directly and we'll reply within minutes.", "Pregúntanos por WhatsApp":"Ask us on WhatsApp",
  "Es muy sencillo. Nos contactas por WhatsApp o llenas el formulario de cotización con los detalles de tu viaje (destino, fechas, número de personas y presupuesto). En menos de 2 horas te enviamos una propuesta personalizada sin ningún costo.":"It's simple. Contact us on WhatsApp or complete the quote form with your destination, dates, number of travelers and budget. We'll send you a free personalized proposal in under two hours.",
  "Sí, todos nuestros paquetes incluyen vuelo redondo y hospedaje. Dependiendo del paquete también pueden incluir traslados, desayunos, cenas y actividades. Siempre especificamos claramente qué está incluido en cada propuesta.":"Yes, our packages include round-trip flights and accommodation. Depending on the package, they may also include transfers, meals and activities. We always clearly specify what is included in each proposal.",
  "Recomendamos reservar con al menos 4-6 semanas de anticipación para obtener los mejores precios. Sin embargo, también manejamos viajes de última hora y hacemos lo posible por conseguirte la mejor opción disponible.":"We recommend booking at least 4–6 weeks in advance for better options. We can also assist with last-minute trips and will look for the best available alternative.",
  "Aceptamos transferencia bancaria, depósito, tarjeta de crédito/débito y pagos en efectivo. También ofrecemos planes de pago en mensualidades sin intereses para facilitar tu viaje.":"Payment methods may include bank transfer, deposit, credit or debit card and cash. Available installment plans depend on the provider and bank.",
  "Entendemos que los planes pueden cambiar. Tenemos políticas flexibles de cancelación y cambios. Te asesoramos sobre las mejores opciones según las políticas de aerolíneas y hoteles para minimizar cualquier penalización.":"We understand plans can change. We will guide you through the available options according to airline and hotel policies and help minimize possible penalties.",
  "Principalmente nos especializamos en destinos nacionales como Cancún, Puerto Vallarta, Los Cabos, Riviera Maya y Huatulco. Sin embargo, también podemos organizar viajes internacionales a destinos populares como Estados Unidos, Europa y el Caribe.":"We mainly specialize in Mexican destinations such as Cancún, Puerto Vallarta, Los Cabos, Riviera Maya and Huatulco. We can also arrange international travel to destinations such as the United States, Europe and the Caribbean.",
  "Sí, recomendamos y podemos incluir seguro de viaje en todos nuestros paquetes. El seguro cubre emergencias médicas, cancelaciones y pérdida de equipaje. Es una inversión pequeña que te da mucha tranquilidad.":"Yes, we recommend travel insurance and can include it in your package. Coverage varies by policy and may include medical emergencies, cancellations and lost luggage.",
  "¿Tienen atención durante el viaje si surge algún problema?":"Do you provide assistance if a problem arises during the trip?", "¡Absolutamente! Nuestro servicio no termina cuando abordas el avión. Tenemos atención por WhatsApp las 24 horas durante tu viaje para resolver cualquier inconveniente que pueda surgir.":"Absolutely. Our service doesn't end when you board the plane. We provide 24/7 WhatsApp assistance during your trip to help with unexpected issues.",
  "Tu próxima historia comienza aquí":"Your next story starts here", "Cuéntanos tu viaje y":"Tell us about your trip and", "hagámoslo realidad.":"let's make it happen.", "Respuesta rápida y atención personalizada":"Fast response and personalized service",
  "Escríbenos por WhatsApp":"Message us on WhatsApp", "Viajes Bumeran Casal es una agencia de viajes premium especializada en destinos de playa en México. Más de 8 años creando experiencias inolvidables para nuestros clientes.":"Viajes Bumeran Casal is a premium travel agency specializing in beach destinations in Mexico, with over 8 years creating unforgettable experiences for our clients.",
  "Servicios":"Services", "Paquetes todo incluido":"All-inclusive packages", "Tours y actividades":"Tours and activities", "Viajes de luna de miel":"Honeymoon travel", "Viajes en grupo":"Group travel", "Cotización gratuita":"Free quote",
  "Lun–Sáb: 9:00 AM – 6:00 PM":"Mon–Sat: 9:00 AM – 6:00 PM", "Todos los derechos reservados.":"All rights reserved.", "Aviso de privacidad":"Privacy notice", "Términos y condiciones":"Terms and conditions",
  "Oferta Exclusiva · Julio":"Exclusive Offer · July", "Cancún Todo Incluido":"Cancún All-Inclusive", "Cinco noches en un resort frente al mar con servicio de primera. Vuelo redondo incluido desde Ciudad de México.":"Five nights at a beachfront resort with first-class service. Round-trip flight from Mexico City included.",
  "Disponible hasta el 31 de julio":"Available through July 31", "Escapada Romántica":"Romantic Getaway", "Cuatro noches en suite con vista al Pacífico. Cena privada en la playa incluida para dos.":"Four nights in a Pacific-view suite. Private beach dinner for two included.",
  "Disponible hasta el 25 de julio":"Available through July 25", "Aventura de Lujo":"Luxury Adventure", "Tres noches con experiencias únicas: snorkel, kayak y tour al Arco. Hotel boutique de lujo incluido.":"Three nights with unique experiences: snorkeling, kayaking and a tour to the Arch. Luxury boutique hotel included.",
  "Disponible hasta el 28 de julio":"Available through July 28", "Más Solicitado":"Most Requested", "Aventura Premium":"Premium Adventure", "días":"days", "horas":"hours", "minutos":"minutes", "segundos":"seconds",
  "✦ Viajes Premium en México":"✦ Premium Travel in Mexico", "Síguenos en Facebook":"Follow us on Facebook", "Síguenos en TikTok":"Follow us on TikTok", "Síguenos en Instagram":"Follow us on Instagram", "Síguenos en YouTube":"Follow us on YouTube",
  "Sección principal":"Main section", "Navegación principal":"Main navigation", "Abrir menú":"Open menu", "Cerrar menú":"Close menu", "Viajes Casal - Inicio":"Viajes Casal - Home",
  "Nombre":"Name", "Mensaje":"Message", "Escribe tu nombre":"Enter your name", "Escribe tu correo":"Enter your email", "Escribe tu teléfono":"Enter your phone number",
  "Página no encontrada":"Page not found", "Volver al inicio":"Return home", "Nosotros nos encargamos":"We take care", "de todo.":"of everything.",
  "Nuestros Destinos":"Our Destinations", "Paquetes Turísticos":"Travel Packages", "Premium":"Premium", "Tours &":"Tours &", "Experiencias":"Experiences",
  "Tu viaje en":"Your trip in", "simples pasos":"simple steps", "Cuéntanos tu":"Tell us about your", "Historias reales,":"Real stories,", "Cuéntanos tu viaje y":"Tell us about your trip and", "hagámoslo realidad.":"let's make it happen.",
  "de este mes":"this month", "Cupos limitados. Cada propuesta está seleccionada por nuestro equipo para ofrecerte la mejor experiencia al mejor valor.":"Limited availability. Each offer is selected by our team to provide the best experience and value.",
  "Paquete Cancún":"Cancún package", "Paquete Puerto Vallarta":"Puerto Vallarta package", "Paquete Los Cabos":"Los Cabos package",
  "Solicitar cotización para Cancún":"Request a quote for Cancún", "Solicitar cotización para Puerto Vallarta":"Request a quote for Puerto Vallarta", "Solicitar cotización para Los Cabos":"Request a quote for Los Cabos",
  "Cotizar Xcaret + Xel-Há":"Get a quote for Xcaret + Xel-Há", "Cotizar Chichén Itzá + Cenote":"Get a quote for Chichén Itzá + Cenote", "Cotizar Avistamiento de Ballenas":"Get a whale-watching quote", "Cotizar Tour Gastronómico Malecón":"Get a Malecón food-tour quote", "Cotizar Sunset Cruise en Catamarán":"Get a sunset catamaran cruise quote",
  "Visita la maravilla del mundo maya y nada en un cenote sagrado.":"Visit a wonder of the Maya world and swim in a sacred cenote.", "Avistamiento de Ballenas":"Whale Watching", "Tour Gastronómico Malecón":"Malecón Food Tour", "Sunset Cruise en Catamarán":"Sunset Catamaran Cruise",
  "Descubre los mejores sabores de la cocina jalisciense junto al mar.":"Discover the best flavors of Jalisco cuisine by the sea.",
  "Respuesta garantizada en menos de 2 horas":"Guaranteed response in under two hours", "Te contactamos por WhatsApp en minutos.":"We'll contact you on WhatsApp within minutes.", "Tu nombre":"Your name", "¿Cómo podemos ayudarte?":"How can we help you?",
  "Viajes Casal. Todos los derechos reservados.":"Viajes Casal. All rights reserved.", "Abrir asistente por WhatsApp":"Open WhatsApp assistant", "Cerrar asistente":"Close assistant", "Cerrar formulario":"Close form",
  "Ver Paquetes":"View packages", "4.9/5 en Google":"4.9/5 on Google", "Agencia certificada":"Certified agency", "Explorar":"Explore",
  "Oportunidades exclusivas de este mes":"Exclusive offers this month", "Oportunidades":"Exclusive", "exclusivas de este mes":"offers this month", "Julio 2026":"July 2026", "⏱️ Termina en:":"⏱️ Ends in:", "hrs":"hrs", "min":"min", "seg":"sec",
  "Vista de Cancún":"View of Cancún", "Vista de Puerto Vallarta":"View of Puerto Vallarta", "Vista de Los Cabos":"View of Los Cabos",
  "Snorkel en Isla Mujeres":"Isla Mujeres Snorkeling", "Cotizar Snorkel en Isla Mujeres":"Get an Isla Mujeres snorkeling quote", "6 horas":"6 hours",
  "Hablamos":"Let's talk", "Reservamos y organizamos":"We book and organize", "Comenzar ahora":"Start now", "Pareja disfrutando de una playa de lujo":"Couple enjoying a luxury beach", "Viajes":"Trips",
  "Nuestra promesa":"Our promise", "Escribe tu nombre":"Enter your name", "tu@email.com":"you@email.com",
  "Ej. María González":"E.g. Maria Gonzalez", "Nombre del hotel (opcional)":"Hotel name (optional)", "Cuéntanos cualquier detalle importante para ayudarte a encontrar la mejor opción.":"Tell us any important details that will help us find the best option for you.",
  "Menos de $10,000 MXN":"Under $10,000 MXN", "Más de $30,000 MXN":"Over $30,000 MXN", "💍 Luna de miel":"💍 Honeymoon", "🎂 Cumpleaños":"🎂 Birthday",
  "Playa del Carmen":"Playa del Carmen", "Ciudad de México":"Mexico City",
  "¿Cuál es la mejor temporada para viajar?":"What is the best time to travel?", "¿Qué documentos necesito?":"What documents do I need?", "¿Qué actividades puedo hacer?":"What activities can I do?", "Quiero conocer otro destino":"I want to explore another destination",
  "¿Cuánto cuesta un paquete?":"How much does a package cost?", "¿Qué puede incluir mi paquete?":"What can my package include?", "¿Tienen promociones o meses sin intereses?":"Do you have promotions or interest-free installments?",
  "¿Cómo hago una reservación?":"How do I make a booking?", "¿Con cuánto tiempo debo reservar?":"How far in advance should I book?", "¿Puedo apartar con un anticipo?":"Can I reserve with a deposit?", "¿Hay disponibilidad para mis fechas?":"Is there availability for my dates?",
  "¿Puedo cambiar fechas o cancelar?":"Can I change dates or cancel?", "¿Cómo funcionan los reembolsos?":"How do refunds work?", "¿Qué pasa si la aerolínea modifica mi vuelo?":"What happens if the airline changes my flight?", "¿Qué métodos de pago aceptan?":"What payment methods do you accept?", "¿Es seguro reservar en línea?":"Is it safe to book online?", "¿Pueden emitir factura?":"Can you issue an invoice?",
  "Depende del destino y de lo que quieras vivir: clima, presupuesto, actividades o menor afluencia. En Cancún y Riviera Maya, por ejemplo, las condiciones cambian durante el año. Cuéntanos tus fechas y prioridades para recomendarte una opción adecuada, sin prometer condiciones climáticas.":"It depends on the destination and what matters most to you: weather, budget, activities or fewer crowds. Conditions in Cancún and Riviera Maya vary throughout the year. Share your dates and priorities so we can recommend suitable options without guaranteeing weather conditions.",
  "Para viajes nacionales normalmente se solicita identificación oficial; los menores pueden requerir documentos adicionales. Para viajes internacionales, pasaporte, visas y permisos dependen del país y del perfil del viajero. Verifica siempre los requisitos oficiales vigentes antes de reservar.":"Domestic travel normally requires official identification, and minors may need additional documents. For international travel, passport, visa and permit requirements depend on the country and traveler. Always check current official requirements before booking.",
  "Podemos ayudarte con parques, tours culturales, playas, actividades acuáticas, gastronomía y experiencias para parejas o familias. Las opciones y disponibilidad cambian según destino y fecha.":"We can help with parks, cultural tours, beaches, water activities, food experiences and options for couples or families. Availability varies by destination and date.",
  "¡Excelente! 🌎 Dinos qué tipo de viaje imaginas, tus fechas y presupuesto. Tu Travel Partner puede proponerte destinos que encajen contigo.":"Excellent! 🌎 Tell us what kind of trip you imagine, your dates and budget. Your Travel Partner can suggest destinations that fit you.",
  "El precio cambia según destino, fechas, ciudad de salida, hotel y número de viajeros. Para darte una cifra útil necesitamos esos datos; puedes completar la cotización personalizada en menos de dos minutos.":"Price varies by destination, dates, departure city, hotel and number of travelers. We need those details to provide a useful estimate; you can complete the personalized quote in under two minutes.",
  "Según la opción elegida puede incluir vuelos, hospedaje, traslados, tours, seguro o renta de auto. Antes de reservar te indicaremos claramente qué está incluido y qué se paga por separado.":"Depending on your selection, it may include flights, accommodation, transfers, tours, insurance or car rental. Before booking, we will clearly explain what is included and what is paid separately.",
  "Las promociones y formas de pago dependen del proveedor, banco y vigencia. Tu Travel Partner revisará alternativas disponibles al momento de cotizar, sin garantizar descuentos hasta confirmar la reserva.":"Promotions and payment options depend on the provider, bank and validity period. Your Travel Partner will review available alternatives when quoting; discounts are not guaranteed until the booking is confirmed.",
  "Primero preparamos una propuesta con tus datos. Cuando elijas una opción, confirmamos disponibilidad y condiciones, te compartimos el proceso de pago y emitimos tus comprobantes después de la confirmación.":"First, we prepare a proposal using your details. Once you choose an option, we confirm availability and conditions, share payment instructions and issue your documents after confirmation.",
  "Cuanto antes, mayor suele ser la variedad de opciones, especialmente en vacaciones y puentes. Aun así, podemos revisar viajes próximos; la disponibilidad se confirma en tiempo real.":"The earlier you book, the more options are usually available, especially during holidays. We can also check upcoming travel; availability is confirmed in real time.",
  "Algunos proveedores permiten anticipos y otros requieren pago total. El monto, fechas límite y condiciones se confirman para la opción seleccionada antes de realizar cualquier pago.":"Some providers accept deposits while others require full payment. The amount, deadlines and conditions are confirmed for your selected option before any payment is made.",
  "La disponibilidad cambia constantemente. Escríbenos tus fechas, viajeros y destino para revisarla con los proveedores y darte una respuesta actualizada.":"Availability changes constantly. Send us your dates, number of travelers and destination so we can check with providers and give you an up-to-date answer.",
  "Ingresa tu nombre completo":"Enter your full name", "Ingresa un WhatsApp válido de al menos 10 dígitos":"Enter a valid WhatsApp number with at least 10 digits", "Ingresa un correo válido":"Enter a valid email address", "Selecciona qué deseas cotizar":"Select what you would like a quote for", "Selecciona un destino":"Select a destination", "Escribe el destino":"Enter the destination", "Selecciona la ciudad de salida":"Select the departure city", "Escribe la ciudad de salida":"Enter the departure city", "Selecciona la fecha de salida":"Select a departure date", "Selecciona la fecha de regreso":"Select a return date", "La fecha de regreso debe ser posterior a la salida":"The return date must be after the departure date", "Debe viajar al menos un adulto":"At least one adult must travel", "Indica las edades de los niños":"Enter the children's ages", "Selecciona un presupuesto":"Select a budget", "Selecciona la etapa de compra":"Select your booking stage",
  "Escribe ciudad, país o región":"Enter a city, country or region", "Escribe la ciudad":"Enter the city", "Ej. 4, 7 y 12 años":"E.g. 4, 7 and 12 years old", "Nombre del hotel (opcional)":"Hotel name (optional)", "No proporcionado":"Not provided", "No aplica":"Not applicable", "No especificado":"Not specified", "Sin hotel definido":"No hotel selected", "Ninguno":"None", "Sin comentarios adicionales":"No additional comments",
  "Depende de las políticas de la tarifa, aerolínea, hotel y proveedor contratado. Revisaremos tu reserva y te explicaremos penalizaciones, diferencias de tarifa y alternativas antes de solicitar cualquier cambio.":"It depends on the policies of the fare, airline, hotel and provider. We will review your booking and explain penalties, fare differences and alternatives before requesting any change.",
  "Los plazos y la elegibilidad dependen de las condiciones contratadas y del proveedor. No podemos prometer un reembolso sin revisar tu caso; un Travel Partner puede orientarte con tu número de reserva.":"Timing and eligibility depend on the booked conditions and provider. We cannot promise a refund without reviewing your case; a Travel Partner can assist using your booking number.",
  "Conserva el aviso recibido y contáctanos. Revisaremos las alternativas ofrecidas por la aerolínea y las condiciones de los demás servicios de tu viaje.":"Keep the notice you received and contact us. We will review the alternatives offered by the airline and the conditions of your other travel services.",
  "Las opciones pueden incluir transferencia, tarjeta u otros medios autorizados según el proveedor. Antes de pagar recibirás instrucciones claras; nunca compartas contraseñas ni códigos de seguridad.":"Options may include bank transfer, card or other authorized methods depending on the provider. You will receive clear instructions before paying; never share passwords or security codes.",
  "Sí, siempre que verifiques la identidad del asesor, los datos de pago y las condiciones de la reserva. Te entregaremos confirmaciones y comprobantes correspondientes al servicio contratado.":"Yes, as long as you verify the advisor's identity, payment details and booking conditions. We will provide confirmations and receipts for the booked services.",
  "La facturación depende del servicio y proveedor. Solicítala desde el inicio y comparte tus datos fiscales vigentes para que podamos confirmar el procedimiento y los plazos aplicables.":"Invoicing depends on the service and provider. Request it from the start and share your current tax information so we can confirm the applicable process and deadlines."
};

const originals = new WeakMap<Node, string>();
const attrOriginals = new WeakMap<Element, Record<string, string>>();

function translateTree(language: Language) {
  document.documentElement.lang = language;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName || "")) continue;
    if (!originals.has(node)) originals.set(node, node.nodeValue || "");
    const original = originals.get(node) || "";
    const trimmed = original.trim();
    const translated = language === "en" ? en[trimmed] : undefined;
    node.nodeValue = translated ? original.replace(trimmed, translated) : original;
  }
  document.querySelectorAll("[placeholder],[aria-label],[title]").forEach((element) => {
    if (!attrOriginals.has(element)) {
      const saved: Record<string,string> = {};
      for (const attr of ["placeholder","aria-label","title"]) if (element.hasAttribute(attr)) saved[attr] = element.getAttribute(attr) || "";
      attrOriginals.set(element, saved);
    }
    const saved = attrOriginals.get(element)!;
    Object.entries(saved).forEach(([attr,value]) => element.setAttribute(attr, language === "en" ? (en[value] || value) : value));
  });
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathLanguage: Language = window.location.pathname.startsWith("/en") ? "en" : "es";
  const [language, updateLanguage] = useState<Language>(pathLanguage || (localStorage.getItem("vc-language") as Language) || "es");
  const setLanguage = (next: Language) => {
    localStorage.setItem("vc-language", next);
    let path = window.location.pathname;
    if (next === "en" && !path.startsWith("/en")) path = "/en" + (path === "/" ? "" : path);
    if (next === "es") path = path.replace(/^\/en/, "") || "/";
    window.history.replaceState({}, "", path + window.location.search + window.location.hash);
    updateLanguage(next);
  };
  useEffect(() => {
    const apply = () => translateTree(language);
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.body, { childList: true, subtree: true });
    document.title = language === "en" ? "Viajes Casal | Premium travel in Mexico" : "Viajes Casal | Viajes premium en México";
    document.querySelector('meta[name="description"]')?.setAttribute("content", language === "en" ? "Personalized travel packages, hotels, flights and tours in Mexico with expert assistance." : "Paquetes, hoteles, vuelos y tours personalizados en México con asesoría experta.");
    return () => observer.disconnect();
  }, [language]);
  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);

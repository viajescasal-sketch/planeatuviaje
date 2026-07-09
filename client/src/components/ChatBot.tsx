/**
 * ChatBot — Viajes Casal
 * Chatbot conversacional con FAQs integradas
 * Redirige a WhatsApp Travel Partner cuando no puede responder
 */
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  type: "user" | "bot";
  text: string;
  options?: Option[];
}

interface Option {
  label: string;
  action: "menu" | "faq" | "whatsapp" | "submenu";
  value?: string;
  submenu?: Option[];
}

const chatbotData = {
  mainMenu: [
    { label: "🏝️ Destinos", action: "submenu" as const, value: "destinos", submenu: [
      { label: "¿Qué destinos ofrecen?", action: "faq" as const, value: "faq1" },
      { label: "¿Tienen viajes internacionales?", action: "faq" as const, value: "faq2" },
      { label: "Volver al menú", action: "menu" as const },
    ]},
    { label: "💲 Precios y promociones", action: "submenu" as const, value: "precios", submenu: [
      { label: "¿Cuánto cuesta viajar a Cancún?", action: "faq" as const, value: "faq5" },
      { label: "¿Los precios son por persona?", action: "faq" as const, value: "faq6" },
      { label: "¿Tienen promociones?", action: "faq" as const, value: "faq8" },
      { label: "Volver al menú", action: "menu" as const },
    ]},
    { label: "📅 Reservar un viaje", action: "submenu" as const, value: "reservar", submenu: [
      { label: "¿Cómo reservo?", action: "faq" as const, value: "faq11" },
      { label: "¿Hay disponibilidad?", action: "faq" as const, value: "faq9" },
      { label: "¿Qué necesito para reservar?", action: "faq" as const, value: "faq12" },
      { label: "Volver al menú", action: "menu" as const },
    ]},
    { label: "💳 Formas de pago", action: "submenu" as const, value: "pago", submenu: [
      { label: "¿Cómo puedo pagar?", action: "faq" as const, value: "faq14" },
      { label: "¿Puedo pagar a meses?", action: "faq" as const, value: "faq15" },
      { label: "¿Puedo pagar poco a poco?", action: "faq" as const, value: "faq16" },
      { label: "Volver al menú", action: "menu" as const },
    ]},
    { label: "❓ Cambios y cancelaciones", action: "submenu" as const, value: "cambios", submenu: [
      { label: "¿Puedo cancelar?", action: "faq" as const, value: "faq17" },
      { label: "¿Puedo cambiar la fecha?", action: "faq" as const, value: "faq18" },
      { label: "Volver al menú", action: "menu" as const },
    ]},
    { label: "🧳 Antes de viajar", action: "submenu" as const, value: "antes", submenu: [
      { label: "¿Necesito pasaporte?", action: "faq" as const, value: "faq19" },
      { label: "¿Pueden ayudarme con tours?", action: "faq" as const, value: "faq20" },
      { label: "¿Incluyen transporte aeropuerto-hotel?", action: "faq" as const, value: "faq21" },
      { label: "Volver al menú", action: "menu" as const },
    ]},
    { label: "📞 Hablar con un asesor", action: "whatsapp" as const },
  ],
  faqs: {
    faq1: {
      q: "¿Qué destinos ofrecen?",
      a: "Trabajamos con destinos nacionales e internacionales. Entre los más solicitados están Cancún, Riviera Maya, Los Cabos, Puerto Vallarta, Mazatlán, Huatulco, Puerto Escondido y muchos más. También contamos con opciones internacionales.",
    },
    faq2: {
      q: "¿Tienen viajes internacionales?",
      a: "Sí. También ofrecemos paquetes internacionales con vuelos, hoteles, traslados y actividades.",
    },
    faq5: {
      q: "¿Cuánto cuesta viajar a Cancún?",
      a: "El precio depende de la fecha, ciudad de salida, hotel y número de viajeros. Podemos mostrarte opciones desde diferentes presupuestos.",
    },
    faq6: {
      q: "¿Los precios son por persona?",
      a: "La mayoría de nuestras promociones se publican por persona en ocupación doble. Siempre indicamos cómo está calculado el precio.",
    },
    faq8: {
      q: "¿Tienen promociones?",
      a: "Sí. Actualizamos promociones constantemente. Pregunta por nuestras ofertas vigentes para el destino que deseas.",
    },
    faq9: {
      q: "¿Hay disponibilidad?",
      a: "La disponibilidad cambia constantemente. Podemos revisarla en tiempo real antes de reservar.",
    },
    faq11: {
      q: "¿Cómo reservo?",
      a: "El proceso es sencillo: 1. Elegimos tu paquete. 2. Confirmamos disponibilidad. 3. Realizas el pago. 4. Recibes tu confirmación.",
    },
    faq12: {
      q: "¿Qué necesito para reservar?",
      a: "Normalmente necesitamos: Nombre completo, Fecha de nacimiento, Ciudad de salida, Número de viajeros, Fechas del viaje.",
    },
    faq14: {
      q: "¿Cómo puedo pagar?",
      a: "Aceptamos transferencias bancarias y otros métodos de pago según el proveedor. Nuestro asesor te indicará las opciones disponibles.",
    },
    faq15: {
      q: "¿Puedo pagar a meses?",
      a: "Algunas promociones permiten pagos a meses con tarjetas participantes. Consulta la disponibilidad para tu viaje.",
    },
    faq16: {
      q: "¿Puedo pagar poco a poco?",
      a: "Sí, muchos viajes permiten anticipos y pagos parciales antes de la fecha límite.",
    },
    faq17: {
      q: "¿Puedo cancelar?",
      a: "Depende de las políticas del hotel, aerolínea y proveedor. Antes de reservar siempre te informamos las condiciones aplicables.",
    },
    faq18: {
      q: "¿Puedo cambiar la fecha?",
      a: "En algunos casos sí, aunque podrían aplicarse cargos o diferencias tarifarias.",
    },
    faq19: {
      q: "¿Necesito pasaporte?",
      a: "Depende del destino. Te informaremos los requisitos antes de confirmar tu reserva.",
    },
    faq20: {
      q: "¿Pueden ayudarme con tours?",
      a: "Sí. También ofrecemos tours, actividades, traslados y renta de autos.",
    },
    faq21: {
      q: "¿Incluyen transporte aeropuerto-hotel?",
      a: "Muchos paquetes incluyen traslados. Si no están incluidos, podemos agregarlos.",
    },
  },
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "👋 ¡Hola! ¿En qué puedo ayudarte?",
      options: chatbotData.mainMenu,
    },
  ]);
  const [currentMenu, setCurrentMenu] = useState<Option[]>(chatbotData.mainMenu);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOptionClick = (option: Option) => {
    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: option.label,
    };
    setMessages((prev) => [...prev, userMessage]);

    if (option.action === "menu") {
      // Volver al menú principal
      setCurrentMenu(chatbotData.mainMenu);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: "👋 ¿En qué puedo ayudarte?",
        options: chatbotData.mainMenu,
      };
      setMessages((prev) => [...prev, botMessage]);
    } else if (option.action === "submenu" && option.submenu) {
      // Mostrar submenu
      setCurrentMenu(option.submenu);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: `Aquí están las opciones de ${option.label}:`,
        options: option.submenu,
      };
      setMessages((prev) => [...prev, botMessage]);
    } else if (option.action === "faq" && option.value) {
      // Mostrar respuesta FAQ
      const faq = chatbotData.faqs[option.value as keyof typeof chatbotData.faqs];
      if (faq) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          text: faq.a,
          options: [
            { label: "⬅️ Volver", action: "menu" as const },
            { label: "📞 Hablar con asesor", action: "whatsapp" as const },
          ],
        };
        setMessages((prev) => [...prev, botMessage]);
      }
    } else if (option.action === "whatsapp") {
      // Redirigir a WhatsApp Travel Partner
      const msg = `Hola, me gustaría hablar con un asesor de Viajes Casal. Tengo preguntas sobre mis viajes.`;
      window.open(
        `https://wa.me/529983921530?text=${encodeURIComponent(msg)}`,
        "_blank",
        "noopener,noreferrer"
      );
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: "Te estamos conectando con nuestro equipo por WhatsApp. ¡Gracias por tu interés! 😊",
        options: [{ label: "Volver al menú", action: "menu" as const }],
      };
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        style={{ background: "#009FE3" }}
        aria-label="Abrir chat"
        title="Chatea con nosotros"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      </button>

      {/* Modal del chat */}
      {isOpen && (
        <div className="fixed bottom-32 right-6 z-40 w-96 max-w-[calc(100vw-32px)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#009FE3] to-[#006B9A] p-4 flex items-center justify-between">
            <div>
              <h3 className="text-white font-bold">Viajes Casal</h3>
              <p className="text-white/80 text-xs">Responde en minutos</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded-lg transition-colors"
              aria-label="Cerrar chat"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50" style={{ maxHeight: "400px" }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.type === "user"
                      ? "bg-[#009FE3] text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {messages[messages.length - 1]?.options && (
              <div className="space-y-2 mt-4">
                {messages[messages.length - 1].options!.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option)}
                    className="w-full text-left px-3 py-2 text-sm bg-white border border-[#009FE3] text-[#009FE3] rounded-lg hover:bg-[#009FE3]/10 transition-colors font-medium"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
    </>
  );
}

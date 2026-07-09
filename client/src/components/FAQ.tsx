/**
 * FAQ — Viajes Casal
 * Design: Accordion FAQ with smooth animations
 * Section: Preguntas frecuentes
 */
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const faqs = [
  {
    q: "¿Cómo funciona el proceso de cotización?",
    a: "Es muy sencillo. Nos contactas por WhatsApp o llenas el formulario de cotización con los detalles de tu viaje (destino, fechas, número de personas y presupuesto). En menos de 2 horas te enviamos una propuesta personalizada sin ningún costo.",
  },
  {
    q: "¿Los precios incluyen vuelo y hotel?",
    a: "Sí, todos nuestros paquetes incluyen vuelo redondo y hospedaje. Dependiendo del paquete también pueden incluir traslados, desayunos, cenas y actividades. Siempre especificamos claramente qué está incluido en cada propuesta.",
  },
  {
    q: "¿Cuánto tiempo de anticipación necesito para reservar?",
    a: "Recomendamos reservar con al menos 4-6 semanas de anticipación para obtener los mejores precios. Sin embargo, también manejamos viajes de última hora y hacemos lo posible por conseguirte la mejor opción disponible.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "Aceptamos transferencia bancaria, depósito, tarjeta de crédito/débito y pagos en efectivo. También ofrecemos planes de pago en mensualidades sin intereses para facilitar tu viaje.",
  },
  {
    q: "¿Qué pasa si necesito cancelar o cambiar mi viaje?",
    a: "Entendemos que los planes pueden cambiar. Tenemos políticas flexibles de cancelación y cambios. Te asesoramos sobre las mejores opciones según las políticas de aerolíneas y hoteles para minimizar cualquier penalización.",
  },
  {
    q: "¿Trabajan solo con destinos en México?",
    a: "Principalmente nos especializamos en destinos nacionales como Cancún, Puerto Vallarta, Los Cabos, Riviera Maya y Huatulco. Sin embargo, también podemos organizar viajes internacionales a destinos populares como Estados Unidos, Europa y el Caribe.",
  },
  {
    q: "¿Ofrecen seguro de viaje?",
    a: "Sí, recomendamos y podemos incluir seguro de viaje en todos nuestros paquetes. El seguro cubre emergencias médicas, cancelaciones y pérdida de equipaje. Es una inversión pequeña que te da mucha tranquilidad.",
  },
  {
    q: "¿Tienen atención durante el viaje si surge algún problema?",
    a: "¡Absolutamente! Nuestro servicio no termina cuando abordas el avión. Tenemos atención por WhatsApp las 24 horas durante tu viaje para resolver cualquier inconveniente que pueda surgir.",
  },
];

export default function FAQ() {
  const { ref, visible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-white"
      aria-labelledby="faq-title"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div
            ref={ref}
            className={`text-center mb-12 fade-in ${visible ? "visible" : ""}`}
          >
            <span className="section-label">✦ Resolvemos tus dudas</span>
            <h2 id="faq-title" className="section-title">
              Preguntas Frecuentes
            </h2>
            <div className="gold-divider mx-auto" />
            <p className="section-subtitle mx-auto">
              ¿Tienes alguna pregunta? Aquí encontrarás las respuestas más comunes.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className={`space-y-3 fade-in ${visible ? "visible" : ""}`} style={{ transitionDelay: "150ms" }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span>{faq.q}</span>
                  <ChevronIcon open={openIndex === i} />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`faq-answer ${openIndex === i ? "open" : ""}`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className={`text-center mt-12 p-8 bg-light-blue rounded-2xl fade-in ${visible ? "visible" : ""}`} style={{ transitionDelay: "300ms" }}>
            <h3 className="font-bold text-lg text-[#1A2B3C] mb-2">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-sm text-[#5a7080] mb-5">
              Escríbenos directamente y te respondemos en minutos.
            </p>
            <a
              href="https://wa.me/529983921530?text=Hola,%20tengo%20una%20pregunta%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
            >
              <WhatsAppIcon />
              Pregúntanos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#009FE3"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 300ms cubic-bezier(0.23,1,0.32,1)",
        flexShrink: 0,
      }}
    >
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

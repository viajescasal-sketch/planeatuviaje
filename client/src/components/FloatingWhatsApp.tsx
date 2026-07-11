import { useState } from "react";
import QuoteModal from "./QuoteModal";

type View = "home" | "categories" | "questions" | "answer";
type Faq = { question: string; answer: string };
type Category = { name: string; emoji: string; items: Faq[] };

const PHONE = "529983921530";
const categories: Category[] = [
  { name: "Destinos", emoji: "🏝️", items: [
    { question: "¿Cuál es la mejor temporada para viajar?", answer: "Depende del destino y de lo que quieras vivir: clima, presupuesto, actividades o menor afluencia. En Cancún y Riviera Maya, por ejemplo, las condiciones cambian durante el año. Cuéntanos tus fechas y prioridades para recomendarte una opción adecuada, sin prometer condiciones climáticas." },
    { question: "¿Qué documentos necesito?", answer: "Para viajes nacionales normalmente se solicita identificación oficial; los menores pueden requerir documentos adicionales. Para viajes internacionales, pasaporte, visas y permisos dependen del país y del perfil del viajero. Verifica siempre los requisitos oficiales vigentes antes de reservar." },
    { question: "¿Qué actividades puedo hacer?", answer: "Podemos ayudarte con parques, tours culturales, playas, actividades acuáticas, gastronomía y experiencias para parejas o familias. Las opciones y disponibilidad cambian según destino y fecha." },
    { question: "Quiero conocer otro destino", answer: "¡Excelente! 🌎 Dinos qué tipo de viaje imaginas, tus fechas y presupuesto. Tu Travel Partner puede proponerte destinos que encajen contigo." },
  ]},
  { name: "Precios y paquetes", emoji: "💰", items: [
    { question: "¿Cuánto cuesta un paquete?", answer: "El precio cambia según destino, fechas, ciudad de salida, hotel y número de viajeros. Para darte una cifra útil necesitamos esos datos; puedes completar la cotización personalizada en menos de dos minutos." },
    { question: "¿Qué puede incluir mi paquete?", answer: "Según la opción elegida puede incluir vuelos, hospedaje, traslados, tours, seguro o renta de auto. Antes de reservar te indicaremos claramente qué está incluido y qué se paga por separado." },
    { question: "¿Tienen promociones o meses sin intereses?", answer: "Las promociones y formas de pago dependen del proveedor, banco y vigencia. Tu Travel Partner revisará alternativas disponibles al momento de cotizar, sin garantizar descuentos hasta confirmar la reserva." },
  ]},
  { name: "Reservas y disponibilidad", emoji: "📅", items: [
    { question: "¿Cómo hago una reservación?", answer: "Primero preparamos una propuesta con tus datos. Cuando elijas una opción, confirmamos disponibilidad y condiciones, te compartimos el proceso de pago y emitimos tus comprobantes después de la confirmación." },
    { question: "¿Con cuánto tiempo debo reservar?", answer: "Cuanto antes, mayor suele ser la variedad de opciones, especialmente en vacaciones y puentes. Aun así, podemos revisar viajes próximos; la disponibilidad se confirma en tiempo real." },
    { question: "¿Puedo apartar con un anticipo?", answer: "Algunos proveedores permiten anticipos y otros requieren pago total. El monto, fechas límite y condiciones se confirman para la opción seleccionada antes de realizar cualquier pago." },
    { question: "¿Hay disponibilidad para mis fechas?", answer: "La disponibilidad cambia constantemente. Escríbenos tus fechas, viajeros y destino para revisarla con los proveedores y darte una respuesta actualizada." },
  ]},
  { name: "Cambios y cancelaciones", emoji: "🔄", items: [
    { question: "¿Puedo cambiar fechas o cancelar?", answer: "Depende de las políticas de la tarifa, aerolínea, hotel y proveedor contratado. Revisaremos tu reserva y te explicaremos penalizaciones, diferencias de tarifa y alternativas antes de solicitar cualquier cambio." },
    { question: "¿Cómo funcionan los reembolsos?", answer: "Los plazos y la elegibilidad dependen de las condiciones contratadas y del proveedor. No podemos prometer un reembolso sin revisar tu caso; un Travel Partner puede orientarte con tu número de reserva." },
    { question: "¿Qué pasa si la aerolínea modifica mi vuelo?", answer: "Conserva el aviso recibido y contáctanos. Revisaremos las alternativas ofrecidas por la aerolínea y las condiciones de los demás servicios de tu viaje." },
  ]},
  { name: "Pagos y seguridad", emoji: "🔐", items: [
    { question: "¿Qué métodos de pago aceptan?", answer: "Las opciones pueden incluir transferencia, tarjeta u otros medios autorizados según el proveedor. Antes de pagar recibirás instrucciones claras; nunca compartas contraseñas ni códigos de seguridad." },
    { question: "¿Es seguro reservar en línea?", answer: "Sí, siempre que verifiques la identidad del asesor, los datos de pago y las condiciones de la reserva. Te entregaremos confirmaciones y comprobantes correspondientes al servicio contratado." },
    { question: "¿Pueden emitir factura?", answer: "La facturación depende del servicio y proveedor. Solicítala desde el inicio y comparte tus datos fiscales vigentes para que podamos confirmar el procedimiento y los plazos aplicables." },
  ]},
];

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [view, setView] = useState<View>("home");
  const [category, setCategory] = useState<Category | null>(null);
  const [faq, setFaq] = useState<Faq | null>(null);

  const whatsapp = (text: string) => window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  const reset = () => { setView("home"); setCategory(null); setFaq(null); };

  return <>
    {open && <aside className="fixed bottom-24 right-4 z-[90] flex max-h-[72vh] w-[calc(100vw-2rem)] max-w-[390px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl sm:right-6" role="dialog" aria-label="Asistente de Viajes Casal">
      <header className="flex items-start justify-between bg-gradient-to-r from-[#003F7D] to-[#009FE3] px-5 py-4 text-white">
        <div><p className="text-xs font-semibold uppercase tracking-widest text-cyan-100">Viajes Casal</p><h2 className="mt-1 text-lg font-bold">¿Cómo podemos ayudarte? ✈️</h2></div>
        <button onClick={() => setOpen(false)} className="rounded-full p-1.5 hover:bg-white/20" aria-label="Cerrar asistente">✕</button>
      </header>
      <div className="overflow-y-auto p-4">
        {view === "home" && <div className="space-y-3">
          <p className="mb-4 text-sm text-slate-600">Elige una opción y te ayudamos a dar el siguiente paso.</p>
          <Action emoji="💬" title="Hablar con mi Travel Partner" subtitle="Recibe atención personal por WhatsApp" onClick={() => whatsapp("¡Hola! 👋 Quiero hablar con mi Travel Partner para recibir asesoría sobre mi próximo viaje.")} />
          <Action emoji="✨" title="Crear mi cotización personalizada" subtitle="Comparte fechas, viajeros y presupuesto" onClick={() => { setOpen(false); setQuoteOpen(true); }} />
          <Action emoji="❓" title="Resolver una duda rápida" subtitle="Consulta destinos, reservas, pagos y cambios" onClick={() => setView("categories")} />
        </div>}
        {view === "categories" && <div><Back onClick={reset} label="Menú principal"/><h3 className="mb-3 font-bold text-slate-800">¿Sobre qué tienes dudas?</h3><div className="grid grid-cols-1 gap-2">{categories.map(c => <button key={c.name} onClick={() => { setCategory(c); setView("questions"); }} className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3 text-left font-semibold text-slate-700 transition hover:border-cyan-400 hover:bg-cyan-50"><span className="text-2xl">{c.emoji}</span>{c.name}<span className="ml-auto">›</span></button>)}</div></div>}
        {view === "questions" && category && <div><Back onClick={() => setView("categories")} label="Categorías"/><h3 className="mb-3 font-bold text-slate-800">{category.emoji} {category.name}</h3><div className="space-y-2">{category.items.map(item => <button key={item.question} onClick={() => { setFaq(item); setView("answer"); }} className="w-full rounded-2xl border border-slate-200 p-3 text-left text-sm font-medium text-slate-700 transition hover:border-cyan-400 hover:bg-cyan-50">{item.question}<span className="float-right">›</span></button>)}</div></div>}
        {view === "answer" && faq && <div><Back onClick={() => setView("questions")} label="Preguntas"/><h3 className="mb-3 text-base font-bold text-[#003F7D]">{faq.question}</h3><div className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">{faq.answer}</div><button onClick={() => whatsapp(`¡Hola! 👋 Leí la respuesta sobre: “${faq.question}”. Me gustaría recibir ayuda personalizada.`)} className="mt-4 w-full rounded-2xl bg-[#25D366] px-4 py-3 font-bold text-white shadow transition hover:bg-[#1fb85a]">💬 Hablar con mi Travel Partner</button></div>}
      </div>
      {view !== "home" && <footer className="border-t border-slate-100 px-4 py-3 text-center text-xs text-slate-500">La información puede variar según proveedor, fecha y disponibilidad.</footer>}
    </aside>}

    <button onClick={() => { if (open) reset(); setOpen(!open); }} className="whatsapp-float" aria-label={open ? "Cerrar asistente" : "Abrir asistente por WhatsApp"} aria-expanded={open}>
      <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(37,211,102,0.4)", animationDuration: "2s" }} aria-hidden="true" />
      <WhatsAppIcon />
    </button>
    <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
  </>;
}

function Action({ emoji, title, subtitle, onClick }: { emoji: string; title: string; subtitle: string; onClick: () => void }) {
  return <button onClick={onClick} className="group flex w-full items-center gap-3 rounded-2xl border border-slate-200 p-3.5 text-left transition hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-50 hover:shadow-md"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-2xl group-hover:bg-white">{emoji}</span><span><strong className="block text-sm text-slate-800">{title}</strong><small className="mt-0.5 block text-xs text-slate-500">{subtitle}</small></span><span className="ml-auto text-xl text-cyan-600">›</span></button>;
}
function Back({ onClick, label }: { onClick: () => void; label: string }) { return <button onClick={onClick} className="mb-3 text-xs font-semibold text-[#007EA8] hover:underline">← {label}</button>; }
function WhatsAppIcon() { return <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true" className="relative z-10"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>; }

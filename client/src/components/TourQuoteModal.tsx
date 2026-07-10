import { useEffect, useRef, useState } from "react";

interface TourQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTour?: string;
}

type TourForm = {
  nombre: string;
  whatsapp: string;
  email: string;
  tour: string;
  otroTour: string;
  fecha: string;
  adultos: string;
  ninos: string;
  edadesNinos: string;
  hotel: string;
  transporte: string;
  etapa: string;
  comentarios: string;
};

const tours = ["Xcaret", "Xel-Há", "Xplor", "Xenses", "Isla Mujeres", "Chichén Itzá", "Tulum", "ATV", "Nado con delfines", "Otro"];
const etapas = ["Solo quiero conocer el precio.", "Estoy comparando opciones.", "Quiero reservar esta semana.", "Quiero reservar hoy."];
const initialForm = (tour = ""): TourForm => ({ nombre: "", whatsapp: "", email: "", tour, otroTour: "", fecha: "", adultos: "2", ninos: "0", edadesNinos: "", hotel: "", transporte: "No estoy seguro", etapa: "", comentarios: "" });

function normalizeTour(value: string) {
  const lower = value.toLowerCase();
  if (lower.includes("xcaret")) return "Xcaret";
  if (lower.includes("xel-há") || lower.includes("xel-h")) return "Xel-Há";
  if (lower.includes("isla mujeres") || lower.includes("snorkel")) return "Isla Mujeres";
  if (lower.includes("chich")) return "Chichén Itzá";
  if (lower.includes("tulum")) return "Tulum";
  return "";
}

export default function TourQuoteModal({ isOpen, onClose, defaultTour = "" }: TourQuoteModalProps) {
  const [form, setForm] = useState<TourForm>(() => initialForm(normalizeTour(defaultTour)));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const firstInputRef = useRef<HTMLInputElement>(null);
  const minDate = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    if (isOpen) {
      setForm((current) => ({ ...current, tour: normalizeTour(defaultTour) || current.tour }));
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen, defaultTour]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    if (isOpen) window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [isOpen, onClose]);

  const update = <K extends keyof TourForm>(field: K, value: TourForm[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: "" }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.nombre.trim()) next.nombre = "Ingresa tu nombre completo";
    if (form.whatsapp.replace(/\D/g, "").length < 10) next.whatsapp = "Ingresa un WhatsApp válido de al menos 10 dígitos";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Ingresa un correo válido";
    if (!form.tour) next.tour = "Selecciona un tour";
    if (form.tour === "Otro" && !form.otroTour.trim()) next.otroTour = "Escribe el nombre del tour";
    if (!form.fecha) next.fecha = "Selecciona la fecha del tour";
    if (!form.adultos || Number(form.adultos) < 1) next.adultos = "Debe asistir al menos un adulto";
    if (Number(form.ninos) > 0 && !form.edadesNinos.trim()) next.edadesNinos = "Indica las edades de los niños";
    if (!form.etapa) next.etapa = "Selecciona la etapa de compra";
    return next;
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      document.getElementById(`t-${Object.keys(nextErrors)[0]}`)?.focus();
      return;
    }
    const tour = form.tour === "Otro" ? form.otroTour : form.tour;
    const message = `Hola, quiero verificar disponibilidad y cotizar un tour con Viajes Bumeran Casal.

*DATOS DEL CLIENTE*
• Nombre: ${form.nombre}
• WhatsApp: ${form.whatsapp}
• Correo: ${form.email || "No proporcionado"}

*INFORMACIÓN DEL TOUR*
• Tour: ${tour}
• Fecha: ${form.fecha}
• Adultos: ${form.adultos}
• Niños: ${form.ninos}
• Edades de los niños: ${Number(form.ninos) > 0 ? form.edadesNinos : "No aplica"}
• Hotel: ${form.hotel || "Aún no definido"}
• ¿Necesita transporte?: ${form.transporte}
• Etapa de compra: ${form.etapa}
• Comentarios: ${form.comentarios || "Sin comentarios adicionales"}`;
    window.open(`https://wa.me/529983921530?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setForm(initialForm());
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return <div className="modal-overlay" onClick={(event) => event.target === event.currentTarget && onClose()} role="dialog" aria-modal="true" aria-labelledby="tour-modal-title">
    <div className="modal-content tour-quote-modal-content">
      <div className="mb-5 flex items-start justify-between">
        <div><p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#009FE3]">Disponibilidad de tours</p><h2 id="tour-modal-title" className="text-2xl font-bold text-[#1A2B3C]">Solicitar información</h2><p className="mt-1 text-sm text-[#5a7080]">Completa estos datos en menos de un minuto.</p></div>
        <button onClick={onClose} className="ml-3 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700" aria-label="Cerrar formulario"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg></button>
      </div>
      <form onSubmit={submit} noValidate className="space-y-5">
        <section><h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#006B9A]">Datos del cliente</h3><div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Nombre completo" required error={errors.nombre} wide><input ref={firstInputRef} id="t-nombre" className={inputClass(errors.nombre)} value={form.nombre} onChange={(e) => update("nombre", e.target.value)} placeholder="Ej. María González" autoComplete="name" /></Field>
          <Field label="Número de WhatsApp" required error={errors.whatsapp}><input id="t-whatsapp" type="tel" inputMode="tel" className={inputClass(errors.whatsapp)} value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} placeholder="Ej. 998 123 4567" autoComplete="tel" /></Field>
          <Field label="Correo electrónico" error={errors.email}><input id="t-email" type="email" className={inputClass(errors.email)} value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="nombre@correo.com" autoComplete="email" /></Field>
        </div></section>
        <section className="border-t border-[#dcebf3] pt-5"><h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#006B9A]">Información del tour</h3><div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="¿Qué tour te interesa?" required error={errors.tour}><select id="t-tour" className={inputClass(errors.tour)} value={form.tour} onChange={(e) => update("tour", e.target.value)}><option value="">Seleccionar...</option>{tours.map(option)}</select></Field>
          <Field label="Fecha del tour" required error={errors.fecha}><input id="t-fecha" type="date" min={minDate} className={inputClass(errors.fecha)} value={form.fecha} onChange={(e) => update("fecha", e.target.value)} /></Field>
          {form.tour === "Otro" && <Field label="Nombre del tour" required error={errors.otroTour} wide><input id="t-otroTour" className={inputClass(errors.otroTour)} value={form.otroTour} onChange={(e) => update("otroTour", e.target.value)} placeholder="Escribe el tour o actividad" /></Field>}
          <Field label="Adultos" required error={errors.adultos}><input id="t-adultos" type="number" min="1" max="30" className={inputClass(errors.adultos)} value={form.adultos} onChange={(e) => update("adultos", e.target.value)} /></Field>
          <Field label="Niños"><input id="t-ninos" type="number" min="0" max="20" className="vc-input" value={form.ninos} onChange={(e) => update("ninos", e.target.value)} /></Field>
          {Number(form.ninos) > 0 && <Field label="¿Cuáles son las edades de los niños?" required error={errors.edadesNinos} wide><input id="t-edadesNinos" className={inputClass(errors.edadesNinos)} value={form.edadesNinos} onChange={(e) => update("edadesNinos", e.target.value)} placeholder="Ej. 5 y 9 años" /></Field>}
          <Field label="¿En qué hotel te hospedarás?" wide><input id="t-hotel" className="vc-input" value={form.hotel} onChange={(e) => update("hotel", e.target.value)} placeholder="Ej. Riu Palace, Hard Rock, Airbnb o Aún no lo sé." /></Field>
          <Field label="¿Necesitas transporte al tour?"><select id="t-transporte" className="vc-input" value={form.transporte} onChange={(e) => update("transporte", e.target.value)}>{["Sí", "No", "No estoy seguro"].map(option)}</select></Field>
          <Field label="¿En qué etapa te encuentras?" required error={errors.etapa}><select id="t-etapa" className={inputClass(errors.etapa)} value={form.etapa} onChange={(e) => update("etapa", e.target.value)}><option value="">Seleccionar...</option>{etapas.map(option)}</select></Field>
          <Field label="Comentarios adicionales" wide><textarea id="t-comentarios" rows={3} className="vc-input resize-none" value={form.comentarios} onChange={(e) => update("comentarios", e.target.value)} placeholder="Cuéntanos cualquier detalle importante para ayudarte a encontrar la mejor opción." /></Field>
        </div></section>
        <button type="submit" className="btn-whatsapp w-full justify-center py-4 text-base"><WhatsAppIcon />Solicitar disponibilidad por WhatsApp</button>
        <p className="text-center text-xs text-[#5a7080]">🔒 Usaremos tus datos únicamente para verificar disponibilidad y cotizar.</p>
      </form>
    </div>
  </div>;
}

function Field({ label, required, error, wide, children }: { label: string; required?: boolean; error?: string; wide?: boolean; children: React.ReactNode }) {
  return <div className={wide ? "sm:col-span-2" : ""}><label className="vc-label">{label}{required && <span className="text-red-500"> *</span>}</label>{children}{error && <p className="mt-1 text-xs text-red-500">{error}</p>}</div>;
}
function option(value: string) { return <option key={value} value={value}>{value}</option>; }
function inputClass(error?: string) { return `vc-input ${error ? "border-red-400" : ""}`; }
function WhatsAppIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>; }

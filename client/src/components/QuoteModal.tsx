import { useEffect, useRef, useState } from "react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDestino?: string;
}

type FormState = {
  nombre: string;
  whatsapp: string;
  email: string;
  cotizacion: string;
  destino: string;
  otroDestino: string;
  ciudadSalida: string;
  otraCiudad: string;
  fechaSalida: string;
  fechaRegreso: string;
  fechasFlexibles: boolean;
  adultos: string;
  ninos: string;
  edadesNinos: string;
  bebes: string;
  presupuesto: string;
  etapa: string;
  tipoViaje: string;
  hotel: string;
  servicios: string[];
  comentarios: string;
  metodo: string;
};

const initialForm = (destino = ""): FormState => ({
  nombre: "", whatsapp: "", email: "", cotizacion: "", destino,
  otroDestino: "", ciudadSalida: "", otraCiudad: "", fechaSalida: "",
  fechaRegreso: "", fechasFlexibles: false, adultos: "2", ninos: "0",
  edadesNinos: "", bebes: "0", presupuesto: "", etapa: "", tipoViaje: "",
  hotel: "", servicios: [], comentarios: "", metodo: "WhatsApp",
});

const cotizaciones = ["Paquete (Vuelo + Hotel)", "Solo hotel", "Solo vuelo", "Tours", "Traslados", "Renta de auto", "Crucero"];
const destinos = ["Cancún", "Riviera Maya", "Playa del Carmen", "Puerto Vallarta", "Los Cabos", "Huatulco", "Ixtapa-Zihuatanejo", "Mazatlán", "Ciudad de México", "Otro"];
const ciudades = ["Ciudad de México", "Monterrey", "Guadalajara", "Querétaro", "Cancún", "Otra"];
const presupuestos = ["Menos de $10,000 MXN", "$10,000 – $15,000 MXN", "$15,000 – $20,000 MXN", "$20,000 – $30,000 MXN", "Más de $30,000 MXN", "Prefiero recibir recomendaciones"];
const etapas = ["Solo estoy investigando opciones.", "Estoy comparando precios.", "Quiero viajar en los próximos 3 meses.", "Quiero reservar esta semana.", "Quiero reservar hoy."];
const tiposViaje = ["❤️ Pareja", "👨‍👩‍👧‍👦 Familia", "🎉 Amigos", "💍 Luna de miel", "🎂 Cumpleaños", "💼 Negocios", "✈️ Viajo solo"];
const serviciosDisponibles = ["Traslados", "Tours", "Seguro de viaje", "Renta de auto"];

export default function QuoteModal({ isOpen, onClose, defaultDestino = "" }: QuoteModalProps) {
  const [form, setForm] = useState<FormState>(() => initialForm(defaultDestino));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const firstInputRef = useRef<HTMLInputElement>(null);
  const incluyeVuelo = form.cotizacion === "Paquete (Vuelo + Hotel)" || form.cotizacion === "Solo vuelo";
  const minDate = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    if (isOpen) {
      setForm((current) => ({ ...current, destino: defaultDestino || current.destino }));
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen, defaultDestino]);

  useEffect(() => {
    const closeWithEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    if (isOpen) window.addEventListener("keydown", closeWithEscape);
    return () => window.removeEventListener("keydown", closeWithEscape);
  }, [isOpen, onClose]);

  const update = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: "" }));
  };

  const toggleService = (service: string) => {
    update("servicios", form.servicios.includes(service)
      ? form.servicios.filter((item) => item !== service)
      : [...form.servicios, service]);
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.nombre.trim()) next.nombre = "Ingresa tu nombre completo";
    if (form.whatsapp.replace(/\D/g, "").length < 10) next.whatsapp = "Ingresa un WhatsApp válido de al menos 10 dígitos";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Ingresa un correo válido";
    if (!form.cotizacion) next.cotizacion = "Selecciona qué deseas cotizar";
    if (!form.destino) next.destino = "Selecciona un destino";
    if (form.destino === "Otro" && !form.otroDestino.trim()) next.otroDestino = "Escribe el destino";
    if (incluyeVuelo && !form.ciudadSalida) next.ciudadSalida = "Selecciona la ciudad de salida";
    if (incluyeVuelo && form.ciudadSalida === "Otra" && !form.otraCiudad.trim()) next.otraCiudad = "Escribe la ciudad de salida";
    if (!form.fechaSalida) next.fechaSalida = "Selecciona la fecha de salida";
    if (!form.fechaRegreso) next.fechaRegreso = "Selecciona la fecha de regreso";
    if (form.fechaSalida && form.fechaRegreso && form.fechaRegreso < form.fechaSalida) next.fechaRegreso = "La fecha de regreso debe ser posterior a la salida";
    if (!form.adultos || Number(form.adultos) < 1) next.adultos = "Debe viajar al menos un adulto";
    if (Number(form.ninos) > 0 && !form.edadesNinos.trim()) next.edadesNinos = "Indica las edades de los niños";
    if (!form.presupuesto) next.presupuesto = "Selecciona un presupuesto";
    if (!form.etapa) next.etapa = "Selecciona la etapa de compra";
    return next;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      document.getElementById(`q-${Object.keys(nextErrors)[0]}`)?.focus();
      return;
    }

    const destinoFinal = form.destino === "Otro" ? form.otroDestino : form.destino;
    const ciudadFinal = !incluyeVuelo ? "No aplica" : form.ciudadSalida === "Otra" ? form.otraCiudad : form.ciudadSalida;
    const message = `Hola, solicito una cotización personalizada con Viajes Bumeran Casal.

*DATOS DEL CLIENTE*
• Nombre: ${form.nombre}
• WhatsApp: ${form.whatsapp}
• Correo: ${form.email || "No proporcionado"}

*INFORMACIÓN DEL VIAJE*
• Tipo de cotización: ${form.cotizacion}
• Destino: ${destinoFinal}
• Ciudad de salida: ${ciudadFinal}
• Fecha de salida: ${form.fechaSalida}
• Fecha de regreso: ${form.fechaRegreso}
• Fechas flexibles: ${form.fechasFlexibles ? "Sí" : "No"}

*VIAJEROS*
• Adultos: ${form.adultos}
• Niños: ${form.ninos}
• Edades de los niños: ${Number(form.ninos) > 0 ? form.edadesNinos : "No aplica"}
• Bebés (0-1 años): ${form.bebes}

*PREFERENCIAS*
• Presupuesto: ${form.presupuesto}
• Etapa de compra: ${form.etapa}
• Tipo de viaje: ${form.tipoViaje || "No especificado"}
• Hotel deseado: ${form.hotel || "Sin hotel definido"}
• Servicios adicionales: ${form.servicios.length ? form.servicios.join(", ") : "Ninguno"}
• Comentarios: ${form.comentarios || "Sin comentarios adicionales"}
• Método preferido: ${form.metodo}`;

    window.open(`https://wa.me/529983921530?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setForm(initialForm());
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={(event) => event.target === event.currentTarget && onClose()} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content quote-modal-content">
        <div className="sticky top-0 z-10 -mx-2 -mt-2 mb-6 flex items-start justify-between bg-white/95 px-2 pt-2 backdrop-blur-sm">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#009FE3]">Cotización personalizada</p>
            <h2 id="modal-title" className="mb-1 text-2xl font-bold text-[#1A2B3C]">Cuéntanos sobre tu viaje</h2>
            <p className="text-sm text-[#5a7080]">Completa los datos y un asesor comenzará tu propuesta de inmediato.</p>
          </div>
          <button onClick={onClose} className="ml-3 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700" aria-label="Cerrar formulario">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-7">
          <FormSection title="Datos del cliente" subtitle="¿Con quién tendremos el gusto de hablar?">
            <Field label="Nombre completo" required error={errors.nombre} className="sm:col-span-2">
              <input ref={firstInputRef} id="q-nombre" className={inputClass(errors.nombre)} value={form.nombre} onChange={(e) => update("nombre", e.target.value)} placeholder="Ej. María González" autoComplete="name" />
            </Field>
            <Field label="Número de WhatsApp" required error={errors.whatsapp}>
              <input id="q-whatsapp" type="tel" inputMode="tel" className={inputClass(errors.whatsapp)} value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} placeholder="Ej. 998 123 4567" autoComplete="tel" />
            </Field>
            <Field label="Correo electrónico" error={errors.email}>
              <input id="q-email" type="email" className={inputClass(errors.email)} value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="nombre@correo.com" autoComplete="email" />
            </Field>
          </FormSection>

          <FormSection title="Información del viaje" subtitle="Los datos esenciales para buscar opciones reales.">
            <Field label="¿Qué deseas cotizar?" required error={errors.cotizacion}>
              <select id="q-cotizacion" className={inputClass(errors.cotizacion)} value={form.cotizacion} onChange={(e) => update("cotizacion", e.target.value)}><option value="">Seleccionar...</option>{cotizaciones.map(option)}</select>
            </Field>
            <Field label="Destino" required error={errors.destino}>
              <select id="q-destino" className={inputClass(errors.destino)} value={form.destino} onChange={(e) => update("destino", e.target.value)}><option value="">Seleccionar...</option>{destinos.map(option)}</select>
            </Field>
            {form.destino === "Otro" && <Field label="¿Qué destino tienes en mente?" required error={errors.otroDestino} className="sm:col-span-2"><input id="q-otroDestino" className={inputClass(errors.otroDestino)} value={form.otroDestino} onChange={(e) => update("otroDestino", e.target.value)} placeholder="Escribe ciudad, país o región" /></Field>}
            {incluyeVuelo && <>
              <Field label="Ciudad de salida" required error={errors.ciudadSalida}><select id="q-ciudadSalida" className={inputClass(errors.ciudadSalida)} value={form.ciudadSalida} onChange={(e) => update("ciudadSalida", e.target.value)}><option value="">Seleccionar...</option>{ciudades.map(option)}</select></Field>
              {form.ciudadSalida === "Otra" && <Field label="Otra ciudad de salida" required error={errors.otraCiudad}><input id="q-otraCiudad" className={inputClass(errors.otraCiudad)} value={form.otraCiudad} onChange={(e) => update("otraCiudad", e.target.value)} placeholder="Escribe la ciudad" /></Field>}
            </>}
            <Field label="Fecha de salida" required error={errors.fechaSalida}><input id="q-fechaSalida" type="date" min={minDate} className={inputClass(errors.fechaSalida)} value={form.fechaSalida} onChange={(e) => update("fechaSalida", e.target.value)} /></Field>
            <Field label="Fecha de regreso" required error={errors.fechaRegreso}><input id="q-fechaRegreso" type="date" min={form.fechaSalida || minDate} className={inputClass(errors.fechaRegreso)} value={form.fechaRegreso} onChange={(e) => update("fechaRegreso", e.target.value)} /></Field>
            <label className="sm:col-span-2 flex cursor-pointer items-center gap-3 rounded-xl border border-[#d0e4ef] bg-[#f8fbfe] p-3 text-sm text-[#1A2B3C]"><input type="checkbox" className="h-4 w-4 accent-[#009FE3]" checked={form.fechasFlexibles} onChange={(e) => update("fechasFlexibles", e.target.checked)} />Mis fechas son flexibles.</label>
          </FormSection>

          <FormSection title="Viajeros" subtitle="Indica cuántas personas viajarán.">
            <Field label="Adultos" required error={errors.adultos}><input id="q-adultos" type="number" min="1" max="30" className={inputClass(errors.adultos)} value={form.adultos} onChange={(e) => update("adultos", e.target.value)} /></Field>
            <Field label="Niños"><input id="q-ninos" type="number" min="0" max="20" className="vc-input" value={form.ninos} onChange={(e) => update("ninos", e.target.value)} /></Field>
            {Number(form.ninos) > 0 && <Field label="¿Cuáles son las edades de los niños?" required error={errors.edadesNinos} className="sm:col-span-2"><input id="q-edadesNinos" className={inputClass(errors.edadesNinos)} value={form.edadesNinos} onChange={(e) => update("edadesNinos", e.target.value)} placeholder="Ej. 4, 7 y 12 años" /></Field>}
            <Field label="Bebés (0-1 años)"><input id="q-bebes" type="number" min="0" max="10" className="vc-input" value={form.bebes} onChange={(e) => update("bebes", e.target.value)} /></Field>
          </FormSection>

          <FormSection title="Presupuesto y prioridad" subtitle="Esto nos ayuda a recomendar opciones adecuadas y atenderte mejor.">
            <Field label="Presupuesto aproximado" required error={errors.presupuesto}><select id="q-presupuesto" className={inputClass(errors.presupuesto)} value={form.presupuesto} onChange={(e) => update("presupuesto", e.target.value)}><option value="">Seleccionar...</option>{presupuestos.map(option)}</select></Field>
            <Field label="¿En qué etapa te encuentras?" required error={errors.etapa}><select id="q-etapa" className={inputClass(errors.etapa)} value={form.etapa} onChange={(e) => update("etapa", e.target.value)}><option value="">Seleccionar...</option>{etapas.map(option)}</select></Field>
            <Field label="Tipo de viaje"><select id="q-tipoViaje" className="vc-input" value={form.tipoViaje} onChange={(e) => update("tipoViaje", e.target.value)}><option value="">Seleccionar...</option>{tiposViaje.map(option)}</select></Field>
            <Field label="¿Ya tienes algún hotel en mente?"><input id="q-hotel" className="vc-input" value={form.hotel} onChange={(e) => update("hotel", e.target.value)} placeholder="Nombre del hotel (opcional)" /></Field>
          </FormSection>

          <FormSection title="Preferencias adicionales">
            <div className="sm:col-span-2">
              <span className="vc-label">Servicios adicionales</span>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{serviciosDisponibles.map((service) => <label key={service} className="flex cursor-pointer items-center gap-2 rounded-xl border border-[#d0e4ef] bg-[#f8fbfe] p-3 text-xs font-medium text-[#1A2B3C]"><input type="checkbox" className="h-4 w-4 accent-[#009FE3]" checked={form.servicios.includes(service)} onChange={() => toggleService(service)} />{service}</label>)}</div>
            </div>
            <Field label="Comentarios adicionales" className="sm:col-span-2"><textarea id="q-comentarios" className="vc-input resize-none" rows={4} value={form.comentarios} onChange={(e) => update("comentarios", e.target.value)} placeholder="Cuéntanos cualquier detalle importante para ayudarte a encontrar la mejor opción." /></Field>
            <Field label="¿Cómo prefieres recibir tu cotización?" className="sm:col-span-2"><div className="grid grid-cols-1 gap-2 sm:grid-cols-3">{["WhatsApp", "Correo electrónico", "Llamada telefónica"].map((method) => <label key={method} className={`cursor-pointer rounded-xl border p-3 text-center text-sm font-semibold transition-colors ${form.metodo === method ? "border-[#009FE3] bg-blue-50 text-[#006B9A]" : "border-[#d0e4ef] bg-white text-[#5a7080]"}`}><input type="radio" name="metodo" className="sr-only" checked={form.metodo === method} onChange={() => update("metodo", method)} />{method}</label>)}</div></Field>
          </FormSection>

          <button type="submit" className="btn-whatsapp sticky bottom-0 w-full justify-center py-4 text-base shadow-lg"><WhatsAppIcon />Solicitar cotización por WhatsApp</button>
          <p className="text-center text-xs text-[#5a7080]">🔒 Tu información es confidencial y solo se utilizará para preparar tu cotización.</p>
        </form>
      </div>
    </div>
  );
}

function FormSection({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return <section className="rounded-2xl border border-[#dcebf3] bg-white p-4 sm:p-5"><div className="mb-4"><h3 className="text-base font-bold text-[#1A2B3C]">{title}</h3>{subtitle && <p className="mt-1 text-xs text-[#5a7080]">{subtitle}</p>}</div><div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div></section>;
}

function Field({ label, required, error, className = "", children }: { label: string; required?: boolean; error?: string; className?: string; children: React.ReactNode }) {
  return <div className={className}><label className="vc-label">{label}{required && <span className="text-red-500"> *</span>}</label>{children}{error && <p className="mt-1 text-xs text-red-500">{error}</p>}</div>;
}

function option(value: string) { return <option key={value} value={value}>{value}</option>; }
function inputClass(error?: string) { return `vc-input ${error ? "border-red-400" : ""}`; }

function WhatsAppIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;
}

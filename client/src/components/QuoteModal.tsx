/**
 * QuoteModal — Viajes Casal
 * Design: Modal with form, sends data via WhatsApp
 * Fields: Nombre, WhatsApp, Destino, Fecha, Viajeros, Presupuesto, Comentarios
 */
import { useState, useEffect, useRef } from "react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDestino?: string;
}

const destinos = [
  "Cancún",
  "Puerto Vallarta",
  "Los Cabos",
  "Riviera Maya",
  "Huatulco",
  "Ixtapa-Zihuatanejo",
  "Otro destino",
];

const presupuestos = [
  "Menos de $5,000 MXN",
  "$5,000 - $10,000 MXN",
  "$10,000 - $20,000 MXN",
  "$20,000 - $40,000 MXN",
  "Más de $40,000 MXN",
];

export default function QuoteModal({ isOpen, onClose, defaultDestino = "" }: QuoteModalProps) {
  const [form, setForm] = useState({
    nombre: "",
    whatsapp: "",
    destino: defaultDestino,
    fecha: "",
    viajeros: "2",
    presupuesto: "",
    comentarios: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setForm((f) => ({ ...f, destino: defaultDestino }));
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen, defaultDestino]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.nombre.trim()) newErrors.nombre = "Por favor ingresa tu nombre";
    if (!form.whatsapp.trim() || form.whatsapp.replace(/\D/g, "").length < 10)
      newErrors.whatsapp = "Ingresa un número de WhatsApp válido (10 dígitos)";
    if (!form.destino) newErrors.destino = "Selecciona un destino";
    if (!form.fecha) newErrors.fecha = "Selecciona una fecha aproximada";
    if (!form.presupuesto) newErrors.presupuesto = "Selecciona tu presupuesto";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    const msg = `¡Hola! Me interesa cotizar un viaje con Viajes Casal 🌴

*Nombre:* ${form.nombre}
*WhatsApp:* ${form.whatsapp}
*Destino:* ${form.destino}
*Fecha aproximada:* ${form.fecha}
*Número de viajeros:* ${form.viajeros}
*Presupuesto:* ${form.presupuesto}
${form.comentarios ? `*Comentarios:* ${form.comentarios}` : ""}

¡Espero su respuesta! 😊`;

    const url = `https://wa.me/521XXXXXXXXXX?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
    setForm({ nombre: "", whatsapp: "", destino: "", fecha: "", viajeros: "2", presupuesto: "", comentarios: "" });
  };

  const handleChange = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 id="modal-title" className="text-xl font-bold text-[#1A2B3C] mb-1">
              Solicitar Cotización
            </h2>
            <p className="text-sm text-[#5a7080]">
              Completa el formulario y te contactamos por WhatsApp
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600 flex-shrink-0"
            aria-label="Cerrar modal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Nombre */}
            <div className="sm:col-span-2">
              <label htmlFor="q-nombre" className="vc-label">
                Nombre completo <span className="text-red-500">*</span>
              </label>
              <input
                ref={firstInputRef}
                id="q-nombre"
                type="text"
                className={`vc-input ${errors.nombre ? "border-red-400" : ""}`}
                placeholder="Ej: María González"
                value={form.nombre}
                onChange={(e) => handleChange("nombre", e.target.value)}
                autoComplete="name"
              />
              {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
            </div>

            {/* WhatsApp */}
            <div className="sm:col-span-2">
              <label htmlFor="q-whatsapp" className="vc-label">
                Número de WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                id="q-whatsapp"
                type="tel"
                className={`vc-input ${errors.whatsapp ? "border-red-400" : ""}`}
                placeholder="Ej: 5512345678"
                value={form.whatsapp}
                onChange={(e) => handleChange("whatsapp", e.target.value)}
                autoComplete="tel"
              />
              {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
            </div>

            {/* Destino */}
            <div>
              <label htmlFor="q-destino" className="vc-label">
                Destino <span className="text-red-500">*</span>
              </label>
              <select
                id="q-destino"
                className={`vc-input ${errors.destino ? "border-red-400" : ""}`}
                value={form.destino}
                onChange={(e) => handleChange("destino", e.target.value)}
              >
                <option value="">Seleccionar...</option>
                {destinos.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              {errors.destino && <p className="text-red-500 text-xs mt-1">{errors.destino}</p>}
            </div>

            {/* Fecha */}
            <div>
              <label htmlFor="q-fecha" className="vc-label">
                Fecha aproximada <span className="text-red-500">*</span>
              </label>
              <input
                id="q-fecha"
                type="month"
                className={`vc-input ${errors.fecha ? "border-red-400" : ""}`}
                value={form.fecha}
                onChange={(e) => handleChange("fecha", e.target.value)}
                min={new Date().toISOString().slice(0, 7)}
              />
              {errors.fecha && <p className="text-red-500 text-xs mt-1">{errors.fecha}</p>}
            </div>

            {/* Viajeros */}
            <div>
              <label htmlFor="q-viajeros" className="vc-label">
                Número de viajeros
              </label>
              <select
                id="q-viajeros"
                className="vc-input"
                value={form.viajeros}
                onChange={(e) => handleChange("viajeros", e.target.value)}
              >
                {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"].map((n) => (
                  <option key={n} value={n}>{n} {n === "1" ? "persona" : "personas"}</option>
                ))}
              </select>
            </div>

            {/* Presupuesto */}
            <div>
              <label htmlFor="q-presupuesto" className="vc-label">
                Presupuesto <span className="text-red-500">*</span>
              </label>
              <select
                id="q-presupuesto"
                className={`vc-input ${errors.presupuesto ? "border-red-400" : ""}`}
                value={form.presupuesto}
                onChange={(e) => handleChange("presupuesto", e.target.value)}
              >
                <option value="">Seleccionar...</option>
                {presupuestos.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              {errors.presupuesto && <p className="text-red-500 text-xs mt-1">{errors.presupuesto}</p>}
            </div>

            {/* Comentarios */}
            <div className="sm:col-span-2">
              <label htmlFor="q-comentarios" className="vc-label">
                Comentarios adicionales
              </label>
              <textarea
                id="q-comentarios"
                className="vc-input resize-none"
                rows={3}
                placeholder="Cuéntanos más sobre tu viaje soñado..."
                value={form.comentarios}
                onChange={(e) => handleChange("comentarios", e.target.value)}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-whatsapp w-full justify-center mt-6 text-base py-4"
          >
            <WhatsAppIcon />
            Enviar por WhatsApp
          </button>

          <p className="text-center text-xs text-[#5a7080] mt-3">
            🔒 Tu información es confidencial y solo se usará para cotizar tu viaje
          </p>
        </form>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

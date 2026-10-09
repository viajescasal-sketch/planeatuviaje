/**
 * QuoteButton — botón "Cotización personalizada"
 * Abre la ventana de cotización con el formulario del CRM.
 * La ventana se monta en <body> para que se vea bien aunque el botón
 * esté dentro de una sección con animación.
 */
import { useState } from "react";
import { createPortal } from "react-dom";
import QuoteModal from "./QuoteModal";

type Variant = "primary" | "light" | "outline";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-[#009FE3] text-white hover:bg-[#0088C4] shadow-md",
  light: "bg-white text-[#006F9A] hover:bg-white/90 shadow-lg",
  outline: "text-white border-2 border-white/60 hover:bg-white/15",
};

const SIZES: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function QuoteButton({
  variant = "primary",
  size = "md",
  className = "",
  label = "Cotización personalizada",
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
        {label}
      </button>
      {open &&
        typeof document !== "undefined" &&
        createPortal(<QuoteModal isOpen={open} onClose={() => setOpen(false)} />, document.body)}
    </>
  );
}

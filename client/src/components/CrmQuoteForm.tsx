import { useEffect, useRef } from "react";

/**
 * Formulario de cotización conectado al CRM (travelpartner.viajescasal.com).
 * Inserta el script oficial; el script crea el iframe del formulario en este lugar.
 */
const EMBED_SRC = "https://travelpartner.viajescasal.com/formulario-embed.js";

export default function CrmQuoteForm({ origen = "paginas-viajescasal" }: { origen?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    container.innerHTML = "";
    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.async = true;
    script.setAttribute("data-origen", origen);
    container.appendChild(script);
    return () => {
      container.innerHTML = "";
    };
  }, [origen]);

  return <div ref={ref} className="w-full" />;
}

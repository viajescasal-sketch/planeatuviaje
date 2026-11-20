import { useEffect } from "react";
import { useNearViewport } from "../hooks/useNearViewport";

/**
 * Formulario de cotización conectado al CRM (travelpartner.viajescasal.com).
 * Inserta el script oficial; el script crea el iframe del formulario en este lugar.
 */
const EMBED_SRC = "https://travelpartner.viajescasal.com/formulario-embed.js";

export default function CrmQuoteForm({ origen = "paginas-viajescasal" }: { origen?: string }) {
  // El formulario se carga solo cuando el visitante se acerca (no al abrir la página).
  const { ref, near } = useNearViewport<HTMLDivElement>("600px");

  useEffect(() => {
    const container = ref.current;
    if (!container || !near) return;
    container.innerHTML = "";
    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.async = true;
    script.setAttribute("data-origen", origen);
    container.appendChild(script);
    return () => {
      container.innerHTML = "";
    };
  }, [origen, near, ref]);

  return <div ref={ref} className="w-full" style={{ minHeight: "480px" }} />;
}

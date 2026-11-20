/**
 * useNearViewport — Viajes Casal
 * Devuelve `near = true` (y se queda en true) cuando el elemento está a menos de `rootMargin`
 * de la pantalla. Sirve para cargar scripts externos pesados solo cuando el visitante se acerca.
 */
import { useEffect, useRef, useState } from "react";

export function useNearViewport<T extends Element = HTMLDivElement>(rootMargin = "600px") {
  const ref = useRef<T>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, near };
}

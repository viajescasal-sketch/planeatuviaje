import { useEffect } from "react";

export interface TourDetail {
  horario: string;
  incluye: string[];
  queVeras: string[];
}

export interface TourSummary {
  title: string;
  destino: string;
  img: string;
  duracion: string;
  precio: string;
  desc: string;
  categoria: string;
  detalle?: TourDetail;
}

interface TourDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: TourSummary | null;
  onCotizar: (tour: string) => void;
}

export default function TourDetailModal({ isOpen, onClose, tour, onCotizar }: TourDetailModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    if (isOpen) window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [isOpen, onClose]);

  if (!isOpen || !tour) return null;

  const { detalle } = tour;

  return (
    <div
      className="modal-overlay"
      onClick={(event) => event.target === event.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-detail-title"
    >
      <div className="modal-content tour-detail-modal-content">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-gray-400 shadow-sm hover:bg-gray-100 hover:text-gray-700"
          aria-label="Cerrar detalle del tour"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>

        {/* Hero image */}
        <div className="tour-detail-img -mx-5 -mt-5 sm:-mx-8 sm:-mt-8 mb-5">
          <img src={tour.img} alt={`${tour.title} en ${tour.destino}`} className="h-48 w-full object-cover sm:h-64" />
        </div>

        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#009FE3]">{tour.destino} · {tour.categoria}</p>
        <h2 id="tour-detail-title" className="text-2xl font-bold text-[#1A2B3C] mb-2">{tour.title}</h2>
        <p className="text-sm text-[#5a7080] leading-relaxed mb-4">{tour.desc}</p>

        <div className="flex flex-wrap items-center gap-4 mb-5 pb-5 border-b border-gray-100">
          <span className="inline-flex items-center gap-1.5 text-sm text-[#5a7080]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {tour.duracion}
          </span>
          <span className="inline-flex items-baseline gap-1">
            <span className="text-xs font-semibold text-[#5a7080]">Desde</span>
            <span className="text-lg font-extrabold text-[#1A2B3C]">{tour.precio}</span>
            <span className="text-xs text-gray-400">MXN / persona</span>
          </span>
        </div>

        {detalle ? (
          <div className="space-y-5">
            <section>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-[#006B9A]">Horarios y duración</h3>
              <p className="text-sm text-[#5a7080] leading-relaxed">{detalle.horario}</p>
            </section>

            <section>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-[#006B9A]">Qué incluye</h3>
              <ul className="space-y-1.5">
                {detalle.incluye.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#5a7080] leading-relaxed">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#009FE3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-[#006B9A]">Qué verás</h3>
              <ul className="space-y-1.5">
                {detalle.queVeras.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#5a7080] leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "#F5A623" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        ) : (
          <p className="text-sm text-[#5a7080]">Escríbenos y con gusto te compartimos todos los detalles de este tour.</p>
        )}

        <p className="mt-5 text-xs text-[#5a7080]">
          Información de referencia. Horarios, actividades e inclusiones pueden variar según temporada, clima y el proveedor asignado; confirmamos todos los detalles al cotizar.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => onCotizar(tour.title)}
            className="btn-primary flex-1 justify-center"
          >
            Cotizar este tour
          </button>
          <button onClick={onClose} className="btn-secondary flex-1 justify-center">
            Seguir viendo tours
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import type { Print } from "@/data/projects";
import { PrintLightbox } from "@/components/ui/PrintLightbox/PrintLightbox";
import "./css/PrintGallery.css";

interface PrintGalleryProps {
  prints: Print[];
}

export function PrintGallery({ prints }: PrintGalleryProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<Print | null>(null);

  const hasMultiple = prints.length > 1;
  const print = prints[index];

  const prev = () =>
    setIndex((current) => (current - 1 + prints.length) % prints.length);
  const next = () => setIndex((current) => (current + 1) % prints.length);

  return (
    <div className="grid gap-4">
      <div className="print-carousel">
        {hasMultiple && (
          <button
            type="button"
            onClick={prev}
            aria-label="Print anterior"
            className="print-carousel-arrow print-carousel-arrow-prev"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 6l-6 6 6 6"
              />
            </svg>
          </button>
        )}
        <figure className="print-card">
          <button
            type="button"
            className="print-card-button"
            onClick={() => setSelected(print)}
            aria-haspopup="dialog"
            aria-label={`Ampliar imagem: ${print.legenda}`}
          >
            <img
              src={print.src}
              alt={print.legenda}
              className="print-card-image"
              loading="lazy"
            />
          </button>
          <figcaption className="print-card-caption">
            <span>{print.legenda}</span>
            {hasMultiple && (
              <span className="print-card-counter">
                {index + 1} / {prints.length}
              </span>
            )}
          </figcaption>
        </figure>
        {hasMultiple && (
          <button
            type="button"
            onClick={next}
            aria-label="Próximo print"
            className="print-carousel-arrow print-carousel-arrow-next"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6l6 6-6 6"
              />
            </svg>
          </button>
        )}
      </div>

      {hasMultiple && (
        <div className="print-dots" role="group" aria-label="Navegação dos prints">
          {prints.map((item, dotIndex) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Ver print ${dotIndex + 1} de ${prints.length}`}
              aria-current={dotIndex === index ? "true" : undefined}
              className={
                dotIndex === index ? "print-dot print-dot-active" : "print-dot"
              }
            />
          ))}
        </div>
      )}

      {selected && (
        <PrintLightbox print={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
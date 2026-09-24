import { useEffect, useRef } from "react";
import type { Print } from "@/data/projects";
import "./css/PrintLightbox.css";

interface PrintLightboxProps {
  print: Print;
  onClose: () => void;
}

export function PrintLightbox({ print, onClose }: PrintLightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const previousFocus = document.activeElement as HTMLElement;

    if (overlay) {
      const closeButton = overlay.querySelector<HTMLButtonElement>("button");
      closeButton?.focus();
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
      }
    };

    document.addEventListener("keydown", onKey, true);

    return () => {
      document.removeEventListener("keydown", onKey, true);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className="print-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Imagem: ${print.legenda}`}
    >
      <div className="print-lightbox-backdrop" onClick={onClose} />
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar imagem ampliada"
        className="print-lightbox-close"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d="M6 6l12 12M18 6L6 18"
          />
        </svg>
      </button>
      <figure className="print-lightbox-content">
        <img src={print.src} alt={print.legenda} />
        <figcaption>{print.legenda}</figcaption>
      </figure>
    </div>
  );
}
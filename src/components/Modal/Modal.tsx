import { useEffect, useRef } from "react";
import type { Project } from "@/data/projects";
import { ProjectDetail } from "@/components/ProjectDetail/ProjectDetail";
import "./css/Modal.css";

interface ModalProps {
  project: Project;
  onClose: () => void;
}

export function Modal({ project, onClose }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement;

    const overlay = overlayRef.current;
    if (overlay) {
      const firstFocusable = overlay.querySelector<HTMLElement>(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      );
      firstFocusable?.focus();
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab" && overlay) {
        const focusables = overlay.querySelectorAll<HTMLElement>(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );
        const list = Array.from(focusables);
        if (list.length === 0) return;

        const first = list[0];
        const last = list[list.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus.current?.focus();
    };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes do projeto ${project.titulo}`}
    >
      <div
        className="modal-backdrop"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClose();
        }}
        role="button"
        tabIndex={-1}
        aria-hidden="true"
      />
      <div className="modal-card panel-gold">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar detalhes do projeto"
          className="modal-close"
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
        <ProjectDetail project={project} />
      </div>
    </div>
  );
}
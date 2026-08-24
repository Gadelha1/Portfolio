import { useEffect } from "react";
import type { Project } from "@/data/projects";
import { ProjectDetail } from "@/components/ProjectDetail/ProjectDetail";
import "./css/Modal.css";

interface ModalProps {
  project: Project;
  onClose: () => void;
}

export function Modal({ project, onClose }: ModalProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes do projeto ${project.titulo}`}
    >
      <div className="modal-backdrop" onClick={onClose} />
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

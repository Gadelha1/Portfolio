import type { Project } from "@/data/projects";
import { useReveal } from "@/hooks/useReveal";
import { Cover } from "../Cover/Cover";
import { StarRating } from "../StarRating/StarRating";
import "./css/QuestCard.css";

interface QuestCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export function QuestCard({ project, index, onOpen }: QuestCardProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 70}ms` }}
      className={`reveal h-full${visible ? " is-visible" : ""}`}
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className={`quest-card ${project.destaque ? "panel-gold" : "panel"}`}
        aria-label={`Ver detalhes de ${project.titulo}`}
      >
        <Cover accent={project.accent} titulo={project.titulo} imagem={project.imagem} />
        <div className="flex flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="quest-card-title">{project.titulo}</h3>
            {project.destaque && (
              <span className="badge-destaque">Destaque</span>
            )}
          </div>
          <p className="line-clamp-2 text-sm leading-6 text-mist-400">{project.subtitulo}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className="chip chip-sm">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between border-t border-night-700/70 pt-3">
            <span className="text-xs text-mist-500">{project.capitulo}</span>
            <StarRating value={project.dificuldade} />
          </div>
        </div>
      </button>
    </div>
  );
}

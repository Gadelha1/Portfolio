import type { Project } from "@/data/projects";
import { AttributeBar } from "@/components/ui/AttributeBar/AttributeBar";
import { Cover } from "@/components/ui/Cover/Cover";
import { StarRating } from "@/components/ui/StarRating/StarRating";
import "./css/ProjectDetail.css";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article>
      <Cover accent={project.accent} titulo={project.titulo} imagem={project.imagem} />
      <div className="flex flex-col gap-8 p-6 md:p-8">
        <header className="flex flex-col gap-3">
          {project.destaque && (
            <span className="badge-destaque w-fit">Quest em destaque</span>
          )}
          <h2 className="font-display text-2xl font-bold text-mist-100 md:text-3xl">
            {project.titulo}
          </h2>
          <p className="text-mist-400">{project.subtitulo}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-mist-500">
            <span>{project.capitulo}</span>
            <span className="flex items-center gap-2">
              Dificuldade
              <StarRating value={project.dificuldade} />
            </span>
          </div>
        </header>

        <section>
          <h2 className="section-subtitle">Atributos da quest</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {project.stats.map((stat) => (
              <AttributeBar
                key={stat.label}
                label={stat.label}
                value={stat.value}
                max={5}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-subtitle">Stack utilizada</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-subtitle">Recompensa — aprendizados</h2>
          <ul className="space-y-2.5">
            {project.aprendizados.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-mist-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-3 border-t border-night-800 pt-6">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
            >
              <img src="/icons/github.svg" alt="" />
              Código-fonte
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          )}
          {project.links.snack && (
            <a
              href={project.links.snack}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-snack"
            >
              <img src="/icons/expo.svg" alt="" />
              Snack Expo
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          )}
          {project.links.deploy && (
            <a
              href={project.links.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-arcane"
            >
              Ver online
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

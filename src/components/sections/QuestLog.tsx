import { useState } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuestCard } from "@/components/ui/QuestCard";
import { Modal } from "@/components/Modal";

export function QuestLog() {
  const [selecionado, setSelecionado] = useState<Project | null>(null);

  return (
    <section id="quests" className="section">
      <SectionHeading
        eyebrow="Livro de missões"
        title="Projetos"
        description="Clique em uma quest para inspecionar o item e ver detalhes, atributos e aprendizados."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <QuestCard
            key={project.slug}
            project={project}
            index={index}
            onOpen={setSelecionado}
          />
        ))}
      </div>
      {selecionado && (
        <Modal project={selecionado} onClose={() => setSelecionado(null)} />
      )}
    </section>
  );
}

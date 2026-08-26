import { masteryTrees } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { MasteryTreeColumn } from "@/components/ui/MasteryTreeColumn/MasteryTreeColumn";
import { Reveal } from "@/components/ui/Reveal/Reveal";

export function SkillTree() {
  return (
    <section id="habilidades" className="section">
      <SectionHeading
        eyebrow="Árvores de talento"
        title="Habilidades"
        description="Pontos investidos em cada árvore ao longo da jornada. Build atual, sujeita a stack de cada semestre."
      />

      <div className="grid gap-12 px-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
        {masteryTrees.map((tree, index) => (
          <Reveal key={tree.id} delay={index * 120}>
            <MasteryTreeColumn tree={tree} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

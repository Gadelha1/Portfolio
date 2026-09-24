import { masteryTrees } from "@/data/mastery-trees";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { MasteryTreeColumn } from "@/components/ui/MasteryTreeColumn/MasteryTreeColumn";
import { Reveal } from "@/components/ui/Reveal/Reveal";

export function SkillTree() {
  return (
    <section id="habilidades" className="section">
      <SectionHeading
        eyebrow="Árvore de talentos"
        title="Habilidades"
        description="Pontos obtidos em cada tecnologia ao longo da jornada. Build sujeita a stack do semestre."
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

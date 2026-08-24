import { skillBranches } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillNode } from "@/components/ui/SkillNode";
import { useReveal } from "@/hooks/useReveal";

export function SkillTree() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);

  return (
    <section id="habilidades" className="section">
      <SectionHeading
        eyebrow="Árvore de talentos"
        title="Habilidades"
        description="Nós de conhecimento desbloqueados ao longo da jornada — e a trilha Kotlin já começou a ser pavimentada."
      />

      <div ref={ref} className={`skill-tree relative${visible ? " is-visible" : ""}`}>
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="skillLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#b8860b" />
              <stop offset="50%" stopColor="#d4a017" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <path
            pathLength={1}
            className="skill-path"
            d="M0,16 C18,4 32,28 50,16 C68,4 82,28 100,16"
            fill="none"
            stroke="url(#skillLine)"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillBranches.map((branch, branchIndex) => (
            <div key={branch.id} className="flex flex-col items-center gap-6">
              <h3 className="branch-label">{branch.label}</h3>
              <div className="flex flex-col items-center gap-7">
                {branch.skills.map((skill, skillIndex) => (
                  <SkillNode
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    status={skill.status}
                    index={branchIndex * branch.skills.length + skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

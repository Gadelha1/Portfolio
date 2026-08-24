import type { CSSProperties } from "react";
import { useReveal } from "@/hooks/useReveal";

type Nivel = "iniciante" | "intermediario" | "avancado";

interface SkillNodeProps {
  name: string;
  level: Nivel;
  status?: "aprendendo";
  index: number;
}

const nivelCor: Record<Nivel, string> = {
  iniciante: "var(--color-arcane-500)",
  intermediario: "var(--color-gold-500)",
  avancado: "var(--color-ember-400)",
};

export function SkillNode({ name, level, status, index }: SkillNodeProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={
        {
          transitionDelay: `${index * 50}ms`,
          "--node-color": nivelCor[level],
        } as CSSProperties
      }
      className={`skill-node reveal reveal-pop${visible ? " is-visible" : ""}`}
    >
      <span className="skill-dot" />
      <span className="skill-name">{name}</span>
      {status && <span className="skill-status">{status}</span>}
    </div>
  );
}

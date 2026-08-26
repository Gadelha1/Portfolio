import type { MasteryTree } from "@/data/types";
import { MasteryNode } from "../MasteryNode/MasteryNode";
import "./css/MasteryTreeColumn.css";

interface MasteryTreeColumnProps {
  tree: MasteryTree;
}

export function MasteryTreeColumn({ tree }: MasteryTreeColumnProps) {
  const investido = tree.tiers.reduce(
    (total, tier) => total + tier.nodes.reduce((soma, node) => soma + node.rank, 0),
    0
  );

  return (
    <div className="mastery-tree">
      <header className="mastery-header">
        <h3 className="mastery-title">{tree.label}</h3>
        <span className="mastery-points">
          {investido} {investido === 1 ? "ponto" : "pontos"}
        </span>
      </header>

      {tree.tiers.map((tier) => (
        <div key={tier.requirement}>
          <div className="connector" aria-hidden />
          <p className="tier-band">Requer {tier.requirement} pontos</p>
          <div className="tier-nodes">
            {tier.nodes.map((node) => (
              <MasteryNode key={node.name} node={node} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

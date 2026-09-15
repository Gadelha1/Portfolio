import { useState } from "react";
import type { MasteryNode as NodeData } from "@/data/types";
import "./css/MasteryNode.css";

interface MasteryNodeProps {
  node: NodeData;
}

function iniciaisDe(nome: string) {
  const palavras = nome
    .split(" ")
    .filter((palavra) => palavra.length > 1 && palavra !== "&");

  if (palavras.length === 1) return palavras[0].slice(0, 3);

  return palavras
    .slice(0, 2)
    .map((palavra) => palavra[0])
    .join("");
}

export function MasteryNode({ node }: MasteryNodeProps) {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const aberto = hovered || pinned;

  const estado =
    node.status === "aprendendo"
      ? "is-learning"
      : node.capstone
        ? "is-capstone"
        : node.rank >= node.maxRank
          ? "is-max"
          : "is-partial";

  return (
    <div className="mastery-wrap">
      <button
        type="button"
        className={`mastery-node ${estado}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        onClick={() => setPinned((v) => !v)}
        aria-expanded={aberto}
        aria-describedby={`tooltip-${node.name}`}
        aria-label={`${node.name} — ${node.rank} de ${node.maxRank}${
          node.status ? ", aprendendo" : ""
        }`}
      >
        <span className="mastery-frame">
          <span className="mastery-icon">
            {node.icon
              ? node.icon.map((src) => (
                  <img key={src} src={src} alt="" loading="lazy" className="mastery-logo" />
                ))
              : iniciaisDe(node.name)}
          </span>
        </span>
        <span className="mastery-rank">
          {node.rank}/{node.maxRank}
        </span>
      </button>

      {aberto && (
        <div className="tooltip" role="tooltip" id={`tooltip-${node.name}`}>
          <p className="tooltip-name">{node.name}</p>
          <p className="tooltip-rank">
            Rank {node.rank}/{node.maxRank}
          </p>
          <p className="tooltip-desc">{node.description}</p>
          {node.status && <p className="tooltip-status">Em treinamento</p>}
        </div>
      )}
    </div>
  );
}

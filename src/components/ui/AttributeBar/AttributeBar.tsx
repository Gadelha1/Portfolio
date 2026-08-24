import type { CSSProperties } from "react";
import { useReveal } from "@/hooks/useReveal";
import "./css/AttributeBar.css";

interface AttributeBarProps {
  label: string;
  value: number;
  max?: number;
  description?: string;
}

export function AttributeBar({ label, value, max = 10, description }: AttributeBarProps) {
  const pct = value / max;
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div>
      <span className="attribute-label">{label}</span>
      <div
        ref={ref}
        className="attribute-track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
      >
        <div
          className={`attribute-fill${visible ? " is-visible" : ""}`}
          style={{ "--pct": pct } as CSSProperties}
        />
      </div>
      {description && <p className="attribute-description">{description}</p>}
    </div>
  );
}

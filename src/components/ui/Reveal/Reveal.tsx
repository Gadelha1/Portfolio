import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}

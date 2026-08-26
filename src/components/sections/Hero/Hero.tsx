import type { CSSProperties } from "react";
import { profile } from "@/data/profile";
import "./css/Hero.css";

const d = (ms: number) => ({ animationDelay: `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-card panel-gold" style={d(0)}>
        <div className="hero-portrait">
          <div className="portrait-frame">
            <span className="portrait-initials">GG</span>
          </div>
        </div>

        <div className="hero-info">
          <span className="chip chip-level">Nv. {profile.nivel}</span>
          <span className="chip chip-class">{profile.classe}</span>

          <h1 className="hero-name">{profile.nome}</h1>
          <p className="hero-title">{profile.titulo}</p>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden>
        <div className="scroll-arrow flex flex-col items-center gap-2 text-mist-500">
          <span className="text-[10px] uppercase tracking-[0.3em]">Role para continuar</span>
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
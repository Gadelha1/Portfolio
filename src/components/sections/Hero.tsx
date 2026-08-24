import type { CSSProperties } from "react";
import { profile } from "@/data/profile";

const stacks = ["React Native", "Expo", "TypeScript", "React", "Tailwind CSS"];

const d = (ms: number) => ({ animationDelay: `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section className="hero">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="hero-item flex items-center gap-3" style={d(100)}>
          <span className="chip chip-level">Nv. {profile.nivel}</span>
          <span className="chip chip-class">{profile.classe}</span>
        </div>

        <h1 className="hero-item hero-title mt-8" style={d(240)}>
          {profile.nome}
        </h1>

        <p
          className="hero-item mt-6 max-w-xl leading-7 text-mist-400 md:text-lg"
          style={d(380)}
        >
          {profile.titulo}. Cada projeto é uma{" "}
          <span className="text-gold-400">quest</span>, cada habilidade, um atributo.
          Bem-vindo à minha ficha de personagem.
        </p>

        <div className="hero-item mt-8 flex flex-wrap justify-center gap-2" style={d(520)}>
          {stacks.map((stack) => (
            <span key={stack} className="chip">
              {stack}
            </span>
          ))}
        </div>

        <div className="hero-item mt-12 flex gap-4" style={d(660)}>
          <a href="#quests" className="btn-primary">
            Ver missões
          </a>
          <a href="#atributos" className="btn-secondary">
            A ficha
          </a>
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

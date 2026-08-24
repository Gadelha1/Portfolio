import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-night-800/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-mist-500">
          Fim do capítulo
        </p>
        <p className="text-sm text-mist-400">
          {profile.nome} — construído com React, Vite e Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

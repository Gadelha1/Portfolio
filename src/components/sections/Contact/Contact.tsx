import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Reveal } from "@/components/ui/Reveal/Reveal";

const redes = [
  {
    nome: "GitHub",
    url: profile.links.github,
    icone: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    nome: "LinkedIn",
    url: profile.links.linkedin,
    icone: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.49 2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9z" />
      </svg>
    ),
  },
  {
    nome: "E-mail",
    url: `mailto:${profile.links.email}`,
    icone: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <section id="contato" className="section">
      <SectionHeading
        eyebrow="Guilda"
        title="Contatos"
        description="Estou aberto a oportunidades, pode ser de estágio, de projetos ou simplesmente boas conversas sobre RPG."
      />
      <Reveal>
        <div className="panel-gold mx-auto max-w-2xl rounded-xl p-6 text-center md:p-10">
          <p className="font-display text-sm italic leading-7 text-mist-300">{profile.cita}</p>
          <p className="mt-6 leading-7 text-mist-400">{profile.sobre}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {redes.map((rede) => (
              <a
                key={rede.nome}
                href={rede.url}
                target={rede.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="btn-guilda"
              >
                {rede.icone}
                {rede.nome}
                {!rede.url.startsWith("mailto:") && (
                  <span className="sr-only">(abre em nova aba)</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

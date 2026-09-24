import type { Project } from "./type";

export const paginaSemanticaHtml: Project = {
  slug: "pagina-semantica-html",
  titulo: "Página HTML Semântica",
  subtitulo: "Prova 1 · Desenvolvimento Web I",
  descricao:
    "P1 desenvolvida no 1º semestre para a disciplina de Desenvolvimento Web I. A proposta era descrever o conceito de HTML semântico e construir uma página estática que aplicasse essa marcação na prática, com elementos como header, nav, main, section e footer. Foi meu primeiro contato com a estruturação semântica do conteúdo de páginas web.",
  stack: ["HTML", "CSS"],
  links: {
    github: "https://github.com/Gadelha1/Index---Desenvolvimento-Web-1",
    deploy: "https://gadelha1.github.io/Index---Desenvolvimento-Web-1/",
  },
  capitulo: "1º Semestre · Desenvolvimento Web",
  dificuldade: 1,
  destaque: false,
  accent: "#e8590c",
  stats: [{ label: "HTML", value: 5 }, { label: "CSS", value: 3 }],
  aprendizados: [
    "Conceito e boas práticas de HTML semântico;",
    "Estruturação de uma página estática apenas com HTML;",
  ],
  prints: [
    {
      src: "/prints/pagina-semantica-html/index_web1.png",
      legenda: "Página estática final",
    },
  ],
};

import type { Project } from "./type";

export const mobileLeadsV2: Project = {
  slug: "mobile-leads-v2",
  titulo: "Mobile Leads V2",
  subtitulo: "Projeto Interdisciplinar · 6º Semestre",
  descricao:
    "Continuidade do gerenciador de leads imobiliários, agora desenvolvido em Kotlin tanto no front-end quanto no back-end (Kotlin com Spring), novamente integrando aplicações separadas. Assim como a versão do 5º semestre, a aplicação foi planejada para ser multiusuário, e não apenas para uma única empresa, já que o negócio com a primeira versão para a imobiliária que era o cliente não foi pra frente.",
  stack: ["Kotlin", "Spring Boot", "PostgreSQL", "AWS"],
  links: {
    github: "https://github.com/100esperanca/mobile-leads-v2",
    backend: "https://github.com/100esperanca/backend-leads-v2",
  },
  capitulo: "6º Semestre · Projeto Interdisciplinar",
  dificuldade: 5,
  destaque: false,
  accent: "#f59e0b",
  stats: [
    { label: "Kotlin", value: 3 },
    { label: "Back-end (Kotlin & Spring)", value: 3 },
    { label: "Banco de Dados (PostgreSQL)", value: 3 },
    { label: "Multiusuário", value: 3 },
  ],
  aprendizados: [
    "Desenvolvimento mobile e back-end em Kotlin;",
    "Aplicação multiusuário;",
  ],
  prints: [
    {
      src: "/prints/mobile-leads-v2/home.png",
      legenda: "Home do aplicativo",
    },
    {
      src: "/prints/mobile-leads-v2/lead.png",
      legenda: "Detalhe do lead",
    },
  ],
};
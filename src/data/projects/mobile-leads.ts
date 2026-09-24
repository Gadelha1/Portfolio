import type { Project } from "./type";

export const mobileLeads: Project = {
  slug: "mobile-leads",
  titulo: "Mobile Leads",
  subtitulo: "Projeto Interdisciplinar · 5º Semestre",
  descricao:
    "Versão mobile do gerenciador de leads imobiliários, desenvolvida de forma nativa em React Native com a lib gluestack UI. A aplicação integra aplicações separadas (front-end e back-end), mantendo o back-end da versão web (Java com Spring Boot, PostgreSQL e infraestrutura na AWS). Diferente da primeira versão, que era direcionada a uma imobiliária específica, esta versão foi planejada como uma aplicação multiusuário, pois o negócio com a primeira versão para a imobiliária que era o cliente não foi pra frente.",
  stack: ["React Native", "gluestack UI", "Java", "Spring Boot", "PostgreSQL", "AWS"],
  links: {
    github: "https://github.com/100esperanca/mobile-leads",
    backend: "https://github.com/100esperanca/backend-leads",
  },
  capitulo: "5º Semestre · Projeto Interdisciplinar",
  dificuldade: 5,
  destaque: false,
  accent: "#8b5cf6",
  stats: [
    { label: "React Native", value: 4 },
    { label: "UI (gluestack UI)", value: 4 },
    { label: "Back-end (Java & Spring)", value: 4 },
    { label: "Banco de Dados (PostgreSQL)", value: 3 },
  ],
  aprendizados: [
    "Versão mobile nativa de uma aplicação já existente;",
    "Pensar a aplicação como multiusuário;",
  ],
  prints: [
    {
      src: "/prints/mobile-leads/home.png",
      legenda: "Home do aplicativo",
    },
    {
      src: "/prints/mobile-leads/lead.png",
      legenda: "Detalhe do lead",
    },
  ],
};
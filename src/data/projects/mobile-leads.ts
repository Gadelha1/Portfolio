import type { Project } from "./type";

export const mobileLeads: Project = {
  slug: "mobile-leads",
  titulo: "Mobile Leads",
  subtitulo: "Projeto Interdisciplinar · 5º Semestre",
  descricao:
    "Versão mobile do gerenciador de leads imobiliários, desenvolvida de forma nativa em React Native com a lib gluestack UI. A aplicação integra aplicações separadas (front-end e back-end), mantendo o back-end da versão web (Java com Spring Boot, PostgreSQL), contando com a adição de um algoritmo em Python, para análise de temperatura de leads e, futuramente, geração de insights sobre o cliente. Diferente da primeira versão, que era direcionada a uma imobiliária específica, esta versão foi planejada como uma aplicação multiusuário, pois o negócio com a primeira versão para a imobiliária que era o cliente não foi pra frente.",
  stack: ["React Native", "gluestack UI", "Java", "Spring Boot", "PostgreSQL", "AWS"],
  links: {
    github: "https://github.com/100esperanca/mobile-leads",
    backend: "https://github.com/100esperanca/backend-leads",
  },
  capitulo: "5º Semestre · Projeto Interdisciplinar",
  dificuldade: 5,
  destaque: true,
  accent: "#059669",
  stats: [
    { label: "React Native", value: 4 },
    { label: "UI (gluestack UI)", value: 4 },
    { label: "Back-end (Java & Spring)", value: 4 },
    { label: "Banco de Dados (PostgreSQL)", value: 3 },
  ],
  aprendizados: [
    "Versão mobile nativa de uma aplicação já existente;",
    "Pensar a aplicação como multiusuário;",
    "Conversão de uma aplicação web para mobile, com adaptação de telas e navegação;",
    "Uso de nova biblioteca nativa de UI para React Native (gluestack UI) e customização de componentes;",
    "Controle de estado global com Zustand e persistência de dados com AsyncStorage;",
  ],
  prints: [
    {
      src: `${import.meta.env.BASE_URL}prints/mobile-leads/login_mobile.png`,
      legenda: "Tela de login do aplicativo",
    },
    {
      src: `${import.meta.env.BASE_URL}prints/mobile-leads/lead_list_mobile.png`,
      legenda: "Home do aplicativo com listagem de leads",
    },
    {
      src: `${import.meta.env.BASE_URL}prints/mobile-leads/lead_menu_mobile.png`,
      legenda: "Menu ActionSheet do lead, com opções para favoritar,agendar atividade, transferir para outro corretor ou arquivar o lead"
    },
    {
      src: `${import.meta.env.BASE_URL}prints/mobile-leads/lead_details_mobile.png`,
      legenda: "Tela de detalhes do lead com as atividades relacionadas e botão para adicionar nova atividade",
    },
    {
      src: `${import.meta.env.BASE_URL}prints/mobile-leads/insights_mobile.png`,
      legenda: "Tela de insights do aplicativo, algoritmo futuramente fará a análise dos leads e apresentará insights para o usuário",
    },
    {
      src: `${import.meta.env.BASE_URL}prints/mobile-leads/tags_mobile.png`,
      legenda: "Tela de etiquetas do imóvel. O usuário pode criar etiquetas para organizar os leads, e cada lead pode ter várias etiquetas.",
    },
    {
      src: `${import.meta.env.BASE_URL}prints/mobile-leads/lead_actions_mobile.png`,
      legenda: "Ações de encerramento de atendimento para cada lead, permitindo cadastrar proposta, transferir ou arquivar"
    },
    {
      src: `${import.meta.env.BASE_URL}prints/mobile-leads/users_management_mobile.png`,
      legenda: "Tela de gerenciamento de usuários do aplicativo, contando com criação, edição e exclusão, além de atribuição de permissões para cada usuário",
    }
  ],
};
import type { Project } from "./type";

export const ap1Games: Project = {
  slug: "ap1-games",
  titulo: "Catálogo de Jogos",
  subtitulo: "Atividade Prática · React Native",
  descricao:
    "Aplicativo mobile com quatro abas e tema livre, construído como Atividade Prática 1, da matéria de Desenviolvimento Mobile. A proposta era uma aplicação com 4 abas em React Native, com navegação entre elas de alguma forma, Escolihu um catálogo de jogos, e selecionei alguns dos meus favoritos dentro dos gêneros de RPG, JRPG e RPG tático, aí ficou dividido em quatro abas com lista em grade, tela de detalhes e perfil com links. Foi a ideia que inspirou este portfólio: usar a estrutura de lista e exibição de cards e modais com detalhes sobre para apresentar projetos pessoais, e mantendo a temática de jogos, RPG e fantasia, que faz parte do que eu gosto. Não houve deploy.",
  stack: ["React Native", "Expo", "TypeScript", "React Navigation"],
  links: {
    github: "https://github.com/Gadelha1/AP1_RN",
    snack: "https://snack.expo.dev/@gabrielgadelha/ap1",
  },
  capitulo: "5º Semestre - Desenvolvimento Mobile",
  dificuldade: 4,
  destaque: true,
  accent: "#7c3aed",
  stats: [
    { label: "React Native", value: 4 },
    { label: "Navegação", value: 3 },
    { label: "UI & Tema", value: 5 },
    { label: "Organização", value: 4 },
  ],
  aprendizados: [
    "Navegação em abas e stack com React Navigation",
    "Componentização de telas e dados em arquivos separados",
    "Tema escuro por padrão de sistema",
    "Estrutura de projeto escalável para pequenos apps",
  ],
  prints: [
    {
      src: "/prints/ap1-games/home_games.png",
      legenda: "Catálogo em grade"
    },
    {
      src: "/prints/ap1-games/details_games.png",
      legenda: "Tela de detalhes do jogo",
    },
    {
      src: "/prints/ap1-games/favs_games.png",
      legenda: "Lista de favoritos",
    },
    {
      src: "/prints/ap1-games/profile_games.png",
      legenda: "Perfil com descrição e links"
    },
  ],
};

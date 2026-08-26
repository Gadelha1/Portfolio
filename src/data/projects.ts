export interface ProjectStat {
  label: string;
  value: number;
}

export interface Project {
  slug: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  stack: string[];
  links: {
    github?: string;
    snack?: string;
    deploy?: string;
  };
  capitulo: string;
  dificuldade: 1 | 2 | 3 | 4 | 5;
  destaque: boolean;
  accent: string;
  imagem?: string;
  stats: ProjectStat[];
  aprendizados: string[];
}

export const projects: Project[] = [
  {
    slug: "ap1-games",
    titulo: "Catálogo de Jogos",
    subtitulo: "Atividade Prática · React Native",
    descricao:
      "Aplicativo mobile com quatro abas e tema livre, construído como Atividade Prática 1, da matéria de Desenviolvimento Mobile. A proposta era uma aplicação com 4 abas em React Native, com navegação entre elas de alguma forma, Escolihu um catálogo de jogos, e selecionei alguns dos meus favoritos dentro dos gêneros de RPG, JRPG e RPG tático, aí ficou dividido em quatro abas com lista em grade, tela de detalhes e perfil com links. Foi a ideia que inspirou este portfólio: usar a estrutura de lista e exibição de cards e modais com detalhes sobre para apresentar projetos pessoais, e mantendo a temática de jogos, RPG e fantasia, que faz parte do que eu gosto. Não houve deploy.",
    stack: ["React Native", "Expo", "TypeScript", "React Navigation"],
    links: {
      github: "https://github.com/Gadelha1/AP1_RN",
      snack: "https://snack.expo.dev/@gabrielgadelha/ap1"
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
  },
  {
    slug: "loja-visgo-de-jaca",
    titulo: "Visgo de Jaca",
    subtitulo: "Projeto Interdisciplinar",
    descricao:
      "Projeto realizado como trabalho final da disciplina de Desenvolvimento Web, do 3º semestre do curso de Desenvolvimento de Software Multiplataforma. A ideia foi desenvolver um site que funcionasse como uma vitrine para as artes da marca, exibir as estampas do cliente e chamar os compradores para as redes sociais da marca. O projeto não teve deploy.",
    stack: ["JavaScript", "HTML", "Bootstrap CSS"],
    links: {
      github: "https://github.com/DSM2SEM2024/100esperanca",
    },
    capitulo: "3º Semestre · Desenvolvimento Web",
    dificuldade: 2,
    destaque: false,
    accent: "#b8860b",
    imagem: "/covers/visgo.jpg",
    stats: [
      { label: "Front-end", value: 5 },
      { label: "Back-end", value: 2 },
      { label: "Banco de Dados", value: 1 },
    ],
    aprendizados: [
      "Componentização de elementos Javascript;",
      "Primeira utilização de media queries para responsividade;",
    ],
  },
  {
    slug: "Calculadora-React",
    titulo: "Calculadora React",
    subtitulo: "Atividade Prática · React Native",
    descricao:
      "Atividade prática desenvolvida no 5º semestre da disciplina de Desenvolvimento Mobile, com o objetivo de desenvolver uma calculadora para as operações básicas utilizando React. A calculadora foi construída com uma interface simples e intuitiva, permitindo aos usuários realizar cálculos de forma eficiente. O projeto também serviu como uma oportunidade para aplicar conceitos de React, como componentes, estado e eventos. O código é hospedado no Snack Expo, permitindo a execução do projeto diretamente no navegador para testes.",
    stack: ["React", "Expo"],
    links: {
      snack: "https://snack.expo.dev/@gabrielgadelha/ap7",
    },
    capitulo: "5º Semestre · Desenvolvimento Mobile",
    dificuldade: 2,
    destaque: false,
    accent: "#ea580c",
    stats: [
      { label: "React", value: 4 },
      { label: "Expo", value: 3 },
      { label: "UI & Tema", value: 3 },
    ],
    aprendizados: [
      "Desenvolvimento de componentes reutilizáveis em React;",
      "Gerenciamento de estado e eventos em aplicações React;",
      "Utilização do Snack Expo para hospedagem e testes de aplicações React Native;",
    ],
  },
]
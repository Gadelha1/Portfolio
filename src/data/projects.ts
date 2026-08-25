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
      "Aplicativo mobile com quatro abas e tema livre, construído como Atividade Prática 1, da matéria de Desenviolvimento Mobile. A proposta era uma aplicação com 4 abas em React Native, com navegação entre elas de alguma forma, Escolihu um catálogo de jogos, e selecionei alguns dos meus favoritos dentro dos gêneros de RPG, JRPG e RPG tático, aí ficou dividido em quatro abas com lista em grade, tela de detalhes e perfil com links. Foi a ideia que inspirou este portfólio: usar a estrutura de lista e exibição de cards e modais com detalhes sobre para apresentar projetos pessoais, e mantendo a temática de jogos, RPG e fantasia, que faz parte do que eu gosto",
    stack: ["React Native", "Expo", "TypeScript", "React Navigation"],
    links: {
      github: "https://github.com/Gadelha1/AP1_RN",
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
    subtitulo: "Este projeto tem como objetivo desenvolver uma loja online que funcione tanto como uma vitrine para as artes da marca, quanto como uma plataforma de vendas direta ao consumidor. A Visgo de Jaca é uma marca nascida das raízes culturais da capoeira e da música, com ênfase na percussão. Fundada por Jaca, um ex-enfermeiro e artista autodidata, a marca destaca-se pela produção de estampas autorais que incorporam símbolos significativos da cultura sul-americana e da luta anticolonial.",
    descricao:
      "Projeto realizado como trabalho final da disciplina de Desenvolvimento Web, do 3º semestre do curso de Desenvolvimento de Software Multiplataforma. O objetivo era desenvolver uma loja online que funcione como uma vitrine para as artes da marca, exibir as estampas do cliente e chamar os compradores para as redes sociais da marca.",
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
    slug: "exemplo-kotlin",
    titulo: "App Kotlin (planejado)",
    subtitulo: "Substitua por um projeto seu · placeholder",
    descricao:
      "Outro projeto de exemplo. A dica: construa uma versão mobile nativa deste mesmo portfólio em Kotlin + Jetpack Compose durante o semestre. Você pratica a linguagem das aulas e ganha um case forte para entrevistas.",
    stack: ["Kotlin", "Jetpack Compose"],
    links: {
      github: "https://github.com/Gadelha1",
    },
    capitulo: "Semestre · Disciplina",
    dificuldade: 4,
    destaque: false,
    accent: "#ea580c",
    stats: [
      { label: "Kotlin", value: 2 },
      { label: "Jetpack Compose", value: 2 },
      { label: "UI & Tema", value: 3 },
    ],
    aprendizados: [
      "Troque por aprendizados reais ao concluir o projeto",
    ],
  },
];

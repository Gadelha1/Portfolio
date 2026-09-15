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
    dificuldade: 3,
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
  {
    slug: "P2-React-Native",
    titulo: "Prova 2 React Native",
    subtitulo: "Prova 2 · React Native",
    descricao:
      "P2 desenvolvida no 4º semestre para disciplina de Desenvolvimento Mobile, a ideia por trás da prova era reunir múltiplas aplicações React Native desenvolvidas ao longo do semestre em um único projeto. Ela conta com uma home que reúne: uma aplicação geradora de frases 'aleatórias', uma calculadora de IMC, e uma lista de tarefas. Além de uma tela de login + cadastro de usuário",
    stack: ["React", "Expo"],
    links: {
      github: "https://github.com/Gadelha1/Mobile-P2/tree/main/P2%20-%20Mobile",
    },
    capitulo: "4º Semestre · Desenvolvimento Mobile",
    dificuldade: 3,
    destaque: false,
    accent: "#2052a3",
    stats: [
      { label: "React", value: 4 },
      { label: "UI & Tema", value: 3 },
      { label: "Organização de Código", value: 3 },
    ],
    aprendizados: [
      "Junção de diversas aplicações desenvolvidas em React em uma só;",
      "Multiaplicações com diferentes requisitos;",
    ],
  },
  {
    slug: "Site Serviçoes AWS",
    titulo: "Página sobre Serviços AWS",
    subtitulo: "Atividade Prática · Cloud Computing",
    descricao:
      "O repositório é um fork de um projeto desenvolvido para hospedar páginas de diversos alunos, que exploram e explicam alguns dos serviços da Amazon Web Services (AWS). Foram escolhidas páginas templates desenvolvidas com tailwindcss e cada aluno criou e hospedou uma página HTML, com alguns serviços AWS selecionados entre os que o professor estabeleceu. A minha página está em trabalhos/gabrielG.html, e contém 9 serviços, entre eles: Lambda, S3, CloudFront, EC2, VPC, RDS, IAM, Route 53, Cloud Watch.",
    stack: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    links: {
      github: "https://github.com/Gadelha1/site_cloud_computing/tree/main",
    },
    capitulo: "4º Semestre · Computação em Nuvem I",
    dificuldade: 2,
    destaque: false,
    accent: "#b8860b",

    stats: [
      { label: "Front-end", value: 5 },
      { label: "HTML", value: 5 },
      { label: "CSS", value: 5 },
      { label: "JavaScript", value: 2 },
      { label: "TailwindCSS", value: 2 },
    ],
    aprendizados: [
      "Utilização de Templates TailwindCSS;",
      "Definições e Usos de Serviços AWS;",
      "Javascript simples para efeito de scroll e gradiente",
      "Introdução à hospedagem de páginas estáticas simples em S3",
    ],
  },
  {
    slug: "pilates-studio-system",
    titulo: "Sistema Gerenciamento Estúdio de Pilates",
    subtitulo: "Projeto Interdisciplinar · Banco de Dados Não Relacional",
    descricao:
      "Projeto Interdisciplinar do 3º semestre, realizado para a disciplina de Banco de Dados Não Relacional. É uma aplicação de gerenciamento de estúdio de pilates com login, gerenciamento de usuários (perfis de admin, instrutor e recepcionista), controle de aulas e planos. O backend foi construído em Java com Spring Boot, integrado com o MongoDB — banco de dados não relacional — que sobe facilmente via Docker com docker-compose. Trabalhei no front-end em JavaScript/HTML/CSS, consumindo a API do Java. O projeto não teve deploy.",
    stack: ["Java", "Spring Boot", "MongoDB", "Docker", "JavaScript"],
    links: {
      github: "https://github.com/Gadelha1/Pilates",
    },
    capitulo: "3º Semestre · Banco de Dados Não Relacionais",
    dificuldade: 4,
    destaque: false,
    accent: "#2f9e44",
    stats: [
      { label: "Java & Spring Boot", value: 2 },
      { label: "Front-end (JS)", value: 5 },
      { label: "Banco de Dados (MongoDB)", value: 2 },
      { label: "Docker", value: 3 },
    ],
    aprendizados: [
      "Conceitos de banco de dados não relacional com MongoDB",
      "Integração com o backend em Java/Spring Boot",
      "Camada de autenticação com perfis de usuário",
    ],
  }
]
import type { Project } from "./type";

export const pilatesStudioSystem: Project = {
  slug: "pilates-studio-system",
  titulo: "Sistema Gerenciamento Estúdio de Pilates",
  subtitulo: "Projeto Interdisciplinar · 3º Semestre",
  descricao:
    "Projeto Interdisciplinar do 3º semestre, realizado para a disciplina de Banco de Dados Não Relacional. É uma aplicação de gerenciamento de estúdio de pilates com login, gerenciamento de usuários (perfis de admin, instrutor e recepcionista), controle de aulas e planos. O backend foi construído em Java com Spring Boot, integrado com o MongoDB — banco de dados não relacional — que sobe facilmente via Docker com docker-compose. Trabalhei no front-end em JavaScript/HTML/CSS, consumindo a API do Java. O projeto não teve deploy.",
  stack: ["Java", "Spring Boot", "MongoDB", "Docker", "JavaScript"],
  links: {
    github: "https://github.com/lucasfnCode/App-for-Studio-the-pilates-PI---FATEC",
  },
  capitulo: "3º Semestre · Banco de Dados Não Relacionais",
  dificuldade: 4,
  destaque: false,
  accent: "#FFCFAD",
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
  prints: [
    {
      src: "/prints/pilates-studio-system/login_pilates.png",
      legenda: "Tela de login do sistema",
    },
    {
      src: "/prints/pilates-studio-system/home_pilates.png",
      legenda: "Home do sistema",
    },
    {
      src: "/prints/pilates-studio-system/planos_pilates.png",
      legenda: "Modal de planos",
    },
  ],
};

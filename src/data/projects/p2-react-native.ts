import type { Project } from "./type";

export const p2ReactNative: Project = {
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
  prints: [
    {
      src: "/prints/P2-React-Native/home.jpg",
      legenda: "Home com as aplicações",
    },
    {
      src: "/prints/P2-React-Native/gerador-frases.jpg",
      legenda: "Gerador de frases",
    },
    { src: "/prints/P2-React-Native/imc.jpg", legenda: "Calculadora de IMC" },
    {
      src: "/prints/P2-React-Native/todolist.jpg",
      legenda: "Lista de tarefas",
    },
    {
      src: "/prints/P2-React-Native/login.jpg",
      legenda: "Login e cadastro de usuário",
    },
  ],
};

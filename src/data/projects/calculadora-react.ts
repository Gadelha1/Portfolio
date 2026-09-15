import type { Project } from "./type";

export const calculadoraReact: Project = {
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
  prints: [
    {
      src: "/prints/Calculadora-React/calculadora.jpg",
      legenda: "Calculadora em funcionamento",
    },
  ],
};

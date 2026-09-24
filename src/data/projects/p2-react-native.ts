import type { Project } from "./type";

export const p2ReactNative: Project = {
  slug: "P2-React-Native",
  titulo: "Aplicações React Native",
  subtitulo: "Prova 2 · React Native",
  descricao:
    "P2 desenvolvida no 4º semestre para disciplina de Desenvolvimento Mobile, a ideia por trás da prova era reunir múltiplas aplicações React Native desenvolvidas ao longo do semestre em um único projeto. Ela conta com uma home que reúne: uma aplicação geradora de frases 'aleatórias' (homenagem ao artista Ednaldo Pereira), uma calculadora de IMC, uma calculadora e uma lista de tarefas. Além de uma tela de login + cadastro de usuário. Deve-se criar um usuário válido para acessar. Não há validações de campos para login.",
  stack: ["React", "Expo"],
  links: {
    github: "https://github.com/Gadelha1/Mobile-P2",
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
    "Multiaplicações com diferentes requisitos e funções;",
  ],
  prints: [
    {
      src: "/prints/P2-React-Native/home_mobileP2.png",
      legenda: "Home com as aplicações",
    },
    {
      src: "/prints/P2-React-Native/frases_mobileP2.png",
      legenda: "Gerador de frases",
    },
    { src: "/prints/P2-React-Native/imc_mobileP2.png", legenda: "Calculadora de IMC" },
    {
      src: "/prints/P2-React-Native/tarefas_mobileP2.png",
      legenda: "Lista de tarefas",
    },
    {
      src: "/prints/P2-React-Native/calc_mobileP2.png",
      legenda: "Calculadora",
    },
    {
      src: "/prints/P2-React-Native/calc_dark_mobileP2.png",
      legenda: "Calculadora com tema escuro",
    }
  ],
};

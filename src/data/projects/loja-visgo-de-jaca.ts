import type { Project } from "./type";

export const lojaVisgoDeJaca: Project = {
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
  prints: [
    {
      src: "/prints/loja-visgo-de-jaca/home.jpg",
      legenda: "Vitrine de artes e estampas",
    },
    {
      src: "/prints/loja-visgo-de-jaca/galeria.jpg",
      legenda: "Galeria de estampas do cliente",
    },
  ],
};

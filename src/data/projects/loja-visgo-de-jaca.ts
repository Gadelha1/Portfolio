import type { Project } from "./type";

export const lojaVisgoDeJaca: Project = {
  slug: "loja-visgo-de-jaca",
  titulo: "Visgo de Jaca",
  subtitulo: "Projeto Interdisciplinar - 2º Semestre",
  descricao:
    "Projeto realizado como trabalho final da disciplina de Desenvolvimento Web, do 2º semestre do curso de Desenvolvimento de Software Multiplataforma. A ideia foi desenvolver um site que funcionasse como uma vitrine para as artes da marca, exibir as estampas do cliente e chamar os compradores para as redes sociais da marca. Como o cliente trabalhava sozinho, ele faria a gestão do cadastro de produtos, e, caso futuramente precisasse de ajuda, para usuários também.",
  stack: ["HTML", "Bootstrap CSS", "JavaScript"],
  links: {
    github: "https://github.com/DSM2SEM2024/100esperanca",
    deploy: "https://dsm2sem2024.github.io/100esperanca/",
  },
  capitulo: "2º Semestre · Desenvolvimento Web",
  dificuldade: 3,
  destaque: false,
  accent: "#5ABC49",
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
      src: "/prints/loja-visgo-de-jaca/home_visgo.png",
      legenda: "Home do site da loja Visgo de Jaca",
    },
    {
      src: "/prints/loja-visgo-de-jaca/gerenciamento_visgo.png",
      legenda: "Página de gerenciamento do admin para produtos e usuários",
    },
    {
      src: "/prints/loja-visgo-de-jaca/login_visgo.png",
      legenda: "Tela de login de usuário",
    }
  ],
};

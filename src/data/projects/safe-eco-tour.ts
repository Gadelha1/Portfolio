import type { Project } from "./type";

export const safeEcoTour: Project = {
  slug: "safe-eco-tour",
  titulo: "SafeEcoTour",
  subtitulo: "Projeto Interdisciplinar · 1º Semestre",
  descricao:
    "Projeto Interdisciplinar do 1º semestre, desenvolvido em equipe, com a proposta de construir um site de turismo ecológico apresentando pontos turísticos de Bertioga. A página é 100% estática, composta por HTML, CSS e JavaScript, com páginas individuais para cada destino que incluem textos, imagens e mapas, além de menus responsivos e carrossel de fotos. Trabalhei no desenvolvimento das páginas com HTML semântico. O projeto foi publicado no GitHub Pages.",
  stack: ["HTML", "CSS", "JavaScript"],
  links: {
    github: "https://github.com/LunaLeao/PI1SemestreSafeEcoTour/tree/Gabriel",
    deploy: "https://lunaleao.github.io/PI1SemestreSafeEcoTour/index.html",
  },
  capitulo: "1º Semestre · Projeto Interdisciplinar",
  dificuldade: 2,
  destaque: false,
  accent: "#659237",
  imagem: "/covers/safe_branco.png",
  stats: [
    { label: "HTML", value: 5 },
    { label: "CSS (Flexbox)", value: 4 },
    { label: "JavaScript (DOM)", value: 1 },
  ],
  aprendizados: [
    "HTML semântico na estruturação de páginas multi-destino;",
    "Layouts responsivos com Flexbox;",
    "Leve contato com manipulação do DOM em JavaScript;",
    "Trabalho em equipe em um repositório compartilhado, com branch própria;",
  ],
  prints: [
    {
      src: "/prints/safe-eco-tour/home_safeecotour.png",
      legenda: "Home do site de turismo",
    },
    {
      src: "/prints/safe-eco-tour/sider_safeecotour.png",
      legenda: "Menu lateral aberto",
    },
  ],
};

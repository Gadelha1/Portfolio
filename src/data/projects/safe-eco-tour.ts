import type { Project } from "./type";

export const safeEcoTour: Project = {
  slug: "safe-eco-tour",
  titulo: "SafeEcoTour",
  subtitulo: "Projeto Interdisciplinar · 1º Semestre",
  descricao:
    "Projeto Interdisciplinar do 1º semestre, desenvolvido em equipe, com a proposta de construir um site de turismo ecológico apresentando pontos turísticos de Bertioga. A página é 100% estática, composta por HTML, CSS e JavaScript, com páginas individuais para cada destino que incluem textos, imagens e mapas, além de menus responsivos e carrossel de fotos. Trabalhei no desenvolvimento das páginas com HTML semântico. O site possui páginas como Cachoeira do Elefante, Cachoeira do Guaratuba, Mirante Itaguaçu, Rio Jaguareguava, Torre 47, Trilha d'Água e Vale Verde. O projeto foi publicado no GitHub Pages e ficou no ar durante o período da disciplina.",
  stack: ["HTML", "CSS", "JavaScript"],
  links: {
    github: "https://github.com/LunaLeao/PI1SemestreSafeEcoTour/tree/Gabriel",
    deploy: "https://lunaleao.github.io/PI1SemestreSafeEcoTour/index.html",
  },
  capitulo: "1º Semestre · Projeto Interdisciplinar",
  dificuldade: 2,
  destaque: false,
  accent: "#0d9488",
  stats: [
    { label: "HTML", value: 5 },
    { label: "CSS (Flexbox)", value: 4 },
    { label: "JavaScript (DOM)", value: 1 },
  ],
  aprendizados: [
    "HTML semântico na estruturação de páginas multi-destino;",
    "Layouts responsivos com Flexbox;",
    "Interação com o usuário manipulando o DOM em JavaScript;",
    "Trabalho em equipe em um repositório compartilhado, com branch própria;",
  ],
  prints: [
    {
      src: "/prints/safe-eco-tour/home.jpg",
      legenda: "Home do site de turismo",
    },
    {
      src: "/prints/safe-eco-tour/destino.jpg",
      legenda: "Página de ponto turístico",
    },
    {
      src: "/prints/safe-eco-tour/menu-mobile.jpg",
      legenda: "Menu lateral responsivo",
    },
  ],
};

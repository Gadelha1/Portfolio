import type { Project } from "./type";

export const siteServicosAws: Project = {
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
  prints: [
    {
      src: "/prints/Site Serviçoes AWS/pagina.jpg",
      legenda: "Página com os serviços AWS",
    },
    {
      src: "/prints/Site Serviçoes AWS/detalhe-servico.jpg",
      legenda: "Detalhe de um serviço AWS",
    },
  ],
};

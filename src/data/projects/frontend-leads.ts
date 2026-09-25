import type { Project } from "./type";

export const frontendLeads: Project = {
  slug: "frontend-leads",
  titulo: "Frontend Leads",
  subtitulo: "Projeto Interdisciplinar · 4º Semestre",
  descricao:
    "Aplicação para o gerenciamento de leads imobiliários, dividido em múltiplas aplicações separadas (front-end, back-end e infraestrutura). O back-end foi construído em Java com Spring Boot e PostgreSQL, com o front-end em React, TypeScript e Ant Design, houve hospedagem de infraestrutura na AWS (Lambda e EC2). A ideia era centralizar a demanda dos corretores em um só lugar, permitindo atendimento do cliente, avaliação do imóvel de interesse, agendamento de visitas e outras atividades relacionadas ao cliente, modernizando a interface, já que o nosso app seria a como uma versão melhorada do software que o cliente já utilizava. O projeto tomou forma, desenvolvemos um MVP e houve uma negociação de contrato com o cliente, mas o negócio não progrediu. Assim como nos outros projetos, trabalhei majoritariamente no frontend. Não houve deploy, apenas do webhook na conta da AWS do cliente, que recebia os leads do site e os enviava para o back-end, mas perdemos o acesso a ela ao fim do projeto, impossibilitando o carregamento dos leads.",
  stack: ["Java", "Spring Boot", "React", "TypeScript", "Ant Design", "PostgreSQL", "AWS"],
  links: {
    github: "https://github.com/100esperanca/frontend-leads",
  },
  capitulo: "4º Semestre · Projeto Interdisciplinar",
  dificuldade: 5,
  destaque: false,
  accent: "#73151A",
  stats: [
    { label: "Back-end (Java & Spring)", value: 5 },
    { label: "Front-end (React & TS)", value: 4 },
    { label: "Banco de Dados (PostgreSQL)", value: 4 },
    { label: "Infraestrutura (AWS)", value: 5 },
  ],
  aprendizados: [
    "Arquitetura dividida entre multiplas aplicações (front-end, back-end e infraestrutura separados);",
    "Integração com serviços de infraestrutura na AWS;",
    "React com TypeScript e Ant Design para construção de interfaces;",
    "Integração com back-end em Java/Spring Boot;",
    "Aplicação de conceitos de Engenharia de Software para desenvolvimento de MVP, organização de tarefas e negociação com clientes.",
  ],
  prints: [
    {
      src: "/prints/frontend-leads/login_rofe.png",
      legenda: "Tela de login",
    },
    {
      src: "/prints/frontend-leads/home_rofe.png",
      legenda: "Home do gerenciador de leads",
    },
    {
      src: "/prints/frontend-leads/sider_rofe.png",
      legenda: "Sider do sistema",
    }
  ],
};
export interface ProjectStat {
  label: string;
  value: number;
}

export interface Project {
  slug: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  stack: string[];
  links: {
    github?: string;
    deploy?: string;
  };
  capitulo: string;
  dificuldade: 1 | 2 | 3 | 4 | 5;
  destaque: boolean;
  accent: string;
  imagem?: string;
  stats: ProjectStat[];
  aprendizados: string[];
}

export const projects: Project[] = [
  {
    slug: "ap1-games",
    titulo: "Catálogo de Jogos",
    subtitulo: "Atividade Prática · React Native",
    descricao:
      "Aplicativo mobile com quatro abas e tema livre, construído como Atividade Prática 1, da matéria de Desenviolvimento Mobile. A proposta era uma aplicação com 4 abas em React Native, com navegação entre elas de alguma forma, Escolihu um catálogo de jogos, e selecionei alguns dos meus favoritos dentro dos gêneros de RPG, JRPG e RPG tático, aí ficou dividido em quatro abas com lista em grade, tela de detalhes e perfil com links. Foi a ideia que inspirou este portfólio: usar a estrutura de lista e exibição de cards e modais com detalhes sobre para apresentar projetos pessoais, e mantendo a temática de jogos, RPG e fantasia, que faz parte do que eu gosto",
    stack: ["React Native", "Expo", "TypeScript", "React Navigation"],
    links: {
      github: "https://github.com/Gadelha1/AP1_RN",
    },
    capitulo: " 5 Semestre - Desenvolvimento Mobile",
    dificuldade: 3,
    destaque: true,
    accent: "#7c3aed",
    stats: [
      { label: "React Native", value: 4 },
      { label: "Navegação", value: 3 },
      { label: "UI & Tema", value: 5 },
      { label: "Organização", value: 4 },
    ],
    aprendizados: [
      "Navegação em abas e stack com React Navigation",
      "Componentização de telas e dados em arquivos separados",
      "Tema escuro por padrão de sistema",
      "Estrutura de projeto escalável para pequenos apps",
    ],
  },
  {
    slug: "exemplo-web",
    titulo: "Projeto Web (exemplo)",
    subtitulo: "Substitua por um projeto seu · placeholder",
    descricao:
      "Este é um projeto de exemplo para você preencher com um projeto real do seu curso (um CRUD, uma landing page, uma API, o que quiser). Edite este arquivo em src/data/projects.ts e troque título, descrição, stack, links e aprendizados.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/Gadelha1",
    },
    capitulo: "Semestre · Disciplina",
    dificuldade: 2,
    destaque: false,
    accent: "#b8860b",
    stats: [
      { label: "Front-end", value: 3 },
      { label: "Back-end", value: 2 },
      { label: "Banco de Dados", value: 2 },
    ],
    aprendizados: [
      "Liste aqui o que você aprendeu com este projeto",
      "Cada aprendizados vira uma linha nesta seção",
    ],
  },
  {
    slug: "exemplo-kotlin",
    titulo: "App Kotlin (planejado)",
    subtitulo: "Substitua por um projeto seu · placeholder",
    descricao:
      "Outro projeto de exemplo. A dica: construa uma versão mobile nativa deste mesmo portfólio em Kotlin + Jetpack Compose durante o semestre. Você pratica a linguagem das aulas e ganha um case forte para entrevistas.",
    stack: ["Kotlin", "Jetpack Compose"],
    links: {
      github: "https://github.com/Gadelha1",
    },
    capitulo: "Semestre · Disciplina",
    dificuldade: 4,
    destaque: false,
    accent: "#ea580c",
    stats: [
      { label: "Kotlin", value: 2 },
      { label: "Jetpack Compose", value: 2 },
      { label: "UI & Tema", value: 3 },
    ],
    aprendizados: [
      "Troque por aprendizados reais ao concluir o projeto",
    ],
  },
];

import type { MasteryTree } from "./types";

export const masteryTrees: MasteryTree[] = [
  {
    id: "linguagens",
    label: "Linguagens",
    tiers: [
      {
        requirement: 0,
        nodes: [
          {
            name: "JavaScript",
            description: "A linguagem da web: DOM, eventos e lógica no lado do cliente.",
            icon: [`${import.meta.env.BASE_URL}icons/javascript.svg`],
            rank: 3,
            maxRank: 4,
          },
          {
            name: "Kotlin",
            description: "Linguagem para desenvolvimento multiplataforma.",
            rank: 1,
            maxRank: 4,
            status: "aprendendo",
          },
          {
            name: "SQL",
            description: "Consultas, e modelagem relacional de dados.",
            rank: 3,
            maxRank: 4,
          },
        ],
      },
      {
        requirement: 4,
        nodes: [
          {
            name: "TypeScript",
            description: "Tipagem para código JavaScript",
            icon: [`${import.meta.env.BASE_URL}icons/typescript.svg`],
            rank: 2,
            maxRank: 4,
            status: "aprendendo",
          },
        ],
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    tiers: [
      {
        requirement: 0,
        nodes: [
          {
            name: "React Native",
            description: "Apps nativos para iOS e Android com componentes React.",
            icon: [`${import.meta.env.BASE_URL}icons/react-native.svg`],
            rank: 4,
            maxRank: 4,
          },
        ],
      },
      {
        requirement: 4,
        nodes: [
          {
            name: "Expo",
            description: "Toolchain para criar, testar e distribuir apps React Native.",
            icon: [`${import.meta.env.BASE_URL}icons/expo.svg`],
            rank: 3,
            maxRank: 4,
          },
          {
            name: "React Navigation",
            description: "Navegação em stacks, abas e passagem de parâmetros.",
            rank: 4,
            maxRank: 4,
          },
        ],
      },
    ],
  },
  {
    id: "frontend",
    label: "Front-end",
    tiers: [
      {
        requirement: 0,
        nodes: [
          {
            name: "HTML & CSS",
            description: "Estrutura semântica e estilização: a fundação das interfaces.",
            icon: [`${import.meta.env.BASE_URL}icons/html5.svg`, `${import.meta.env.BASE_URL}icons/css3.svg`],
            rank: 4,
            maxRank: 4,
          },
        ],
      },
      {
        requirement: 4,
        nodes: [
          {
            name: "React",
            description: "Componentes, hooks e composição de interfaces reativas.",
            icon: [`${import.meta.env.BASE_URL}icons/react.svg`],
            rank: 4,
            maxRank: 4,
          },
          {
            name: "Bootstrap",
            description: "Grid e utilitários prontos para prototipagem rápida.",
            icon: [`${import.meta.env.BASE_URL}icons/bootstrap.svg`],
            rank: 3,
            maxRank: 4,
          },
        ],
      },
      {
        requirement: 8,
        nodes: [
          {
            name: "Tailwind CSS",
            description: "Estilização utilitária direto no markup — usada neste portfólio.",
            icon: [`${import.meta.env.BASE_URL}icons/tailwindcss.svg`],
            rank: 2,
            maxRank: 4,
            status: "aprendendo",
          },
        ],
      },
    ],
  },
  {
    id: "ferramentas",
    label: "Ferramentas",
    tiers: [
      {
        requirement: 0,
        nodes: [
          {
            name: "Git & GitHub",
            description: "Versionamento, branches e colaboração em projetos.",
            icon: [`${import.meta.env.BASE_URL}icons/git.svg`],
            rank: 4,
            maxRank: 4,
          },
          {
            name: "Figma",
            description: "Leitura de layouts e prototipação antes do código.",
            icon: [`${import.meta.env.BASE_URL}icons/figma.svg`],
            rank: 2,
            maxRank: 4,
          },
        ],
      },
      {
        requirement: 4,
        nodes: [
          {
            name: "VS Code",
            description: "Editor do dia a dia: atalhos, extensões e depuração.",
            icon: [`${import.meta.env.BASE_URL}icons/vscode.svg`],
            rank: 4,
            maxRank: 4,
            capstone: true,
          },
          {
            name: "WordPress",
            description: "CMS para criação e gerenciamento de sites e blogs.",
            icon: [`${import.meta.env.BASE_URL}icons/wordpress.svg`],
            rank: 3,
            maxRank: 4,
          },
        ],
      },
    ],
  },
];
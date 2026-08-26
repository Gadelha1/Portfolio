import type { Attribute, MasteryTree } from "./types";

export const attributes: Attribute[] = [
  {
    id: "frontend",
    label: "Front-end",
    value: 8,
    description: "React, HTML, CSS, Tailwind",
  },
  {
    id: "mobile",
    label: "Mobile",
    value: 7,
    description: "React Native, Expo, React Navigation",
  },
  {
    id: "backend",
    label: "Back-end",
    value: 5,
    description: "APIs simples e integrações",
  },
  {
    id: "database",
    label: "Banco de Dados",
    value: 5,
    description: "SQL, modelagem relacional",
  },
  {
    id: "uiux",
    label: "UI & UX",
    value: 7,
    description: "Composição, tema, consistência visual",
  },
  {
    id: "logica",
    label: "Lógica & Algoritmos",
    value: 5,
    description: "Raciocínio e estruturação de soluções",
  },
];

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
            icon: ["/icons/javascript.svg"],
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
            description: "Tipagem estática sobre JavaScript para código mais previsível.",
            icon: ["/icons/typescript.svg"],
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
            icon: ["/icons/react-native.svg"],
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
            icon: ["/icons/expo.svg"],
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
            icon: ["/icons/html5.svg", "/icons/css3.svg"],
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
            icon: ["/icons/react.svg"],
            rank: 4,
            maxRank: 4,
          },
          {
            name: "Bootstrap",
            description: "Grid e utilitários prontos para prototipagem rápida.",
            icon: ["/icons/bootstrap.svg"],
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
            icon: ["/icons/tailwindcss.svg"],
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
            icon: ["/icons/git.svg"],
            rank: 4,
            maxRank: 4,
          },
          {
            name: "Figma",
            description: "Leitura de layouts e prototipação antes do código.",
            icon: ["/icons/figma.svg"],
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
            icon: ["/icons/vscode.svg"],
            rank: 4,
            maxRank: 4,
            capstone: true,
          },
          {
            name: "WordPress",
            description: "CMS para criação e gerenciamento de sites e blogs.",
            icon: ["/icons/wordpress.svg"],
            rank: 3,
            maxRank: 4,
          },
        ],
      },
    ],
  },
];
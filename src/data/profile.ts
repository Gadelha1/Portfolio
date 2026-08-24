export interface Attribute {
  id: string;
  label: string;
  value: number;
  description: string;
}

export interface SkillNode {
  name: string;
  level: "iniciante" | "intermediario" | "avancado";
  status?: "aprendendo";
}

export interface SkillBranch {
  id: string;
  label: string;
  skills: SkillNode[];
}

export const profile = {
  nome: "Gabriel Alves Gadelha",
  classe: "Desenvolvedor em formação",
  titulo: "Tecnólogo em Desenvolvimento de Software Multiplataforma",
  nivel: 2,
  cita: "“So much shadow around us. To think I almost missed the light.” — Wyll Ravengard (BG3)",
  sobre:
    "Estudante de Desenvolvimento de Software Multiplataforma apaixonado por RPGs táticos e JRPGs. Transformo essa paixão em código: interfaces, navegação e experiências que contam histórias. Este portfólio é minha ficha de personagem — cada seção é um atributo, cada projeto, uma quest concluída.",
  links: {
    github: "https://github.com/Gadelha1",
    linkedin: "https://www.linkedin.com/in/gabrielgadelha1",
    email: "gabrielgadelha@email.com",
  },
};

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

export const skillBranches: SkillBranch[] = [
  {
    id: "linguagens",
    label: "Linguagens",
    skills: [
      { name: "JavaScript", level: "intermediario" },
      { name: "TypeScript", level: "iniciante" },
      { name: "SQL", level: "intermediario" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    skills: [
      { name: "React Native", level: "intermediario" },
      { name: "Expo", level: "intermediario" },
      { name: "React Navigation", level: "intermediario" },
    ],
  },
  {
    id: "frontend",
    label: "Front-end",
    skills: [
      { name: "React", level: "intermediario" },
      { name: "Tailwind CSS", level: "iniciante" },
      { name: "HTML & CSS", level: "intermediario" },
      { name: "Bootstrap", level: "iniciante" },
    ],
  },
  {
    id: "ferramentas",
    label: "Ferramentas",
    skills: [
      { name: "Git & GitHub", level: "intermediario" },
      { name: "VS Code", level: "avancado" },
      { name: "Figma", level: "iniciante" },
    ],
  },
];

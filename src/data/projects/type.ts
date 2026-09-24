export interface ProjectStat {
  label: string;
  value: number;
}

export interface Print {
  src: string;
  legenda: string;
}

export interface Project {
  slug: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  stack: string[];
  links: {
    github?: string;
    backend?: string;
    snack?: string;
    deploy?: string;
  };
  capitulo: string;
  dificuldade: 1 | 2 | 3 | 4 | 5;
  destaque: boolean;
  accent: string;
  imagem?: string;
  stats: ProjectStat[];
  aprendizados: string[];
  prints?: Print[];
}

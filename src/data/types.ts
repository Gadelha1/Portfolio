export interface Attribute {
  id: string;
  label: string;
  value: number;
  description: string;
}

export interface MasteryNode {
  name: string;
  description: string;
  rank: number;
  maxRank: number;
  icon?: string[];
  status?: "aprendendo";
  capstone?: boolean;
}

export interface MasteryTier {
  requirement: number;
  nodes: MasteryNode[];
}

export interface MasteryTree {
  id: string;
  label: string;
  tiers: MasteryTier[];
}
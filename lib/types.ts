export interface Company {
  id: string;
  name: string;
  /** emoji or short glyph used as the logo fallback */
  logo: string;
  url: string;
  description: string;
  country: string;
  field: string;
  founded: number;
  tags: string[];
  featured?: boolean;
}

export interface AIModel {
  id: string;
  name: string;
  developer: string;
  logo: string;
  url: string;
  type: string;
  openSource: boolean;
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface Tool {
  id: string;
  name: string;
  logo: string;
  url: string;
  category: string;
  pricing: "免费" | "免费增值" | "付费";
  description: string;
  company: string;
  tags: string[];
  featured?: boolean;
}

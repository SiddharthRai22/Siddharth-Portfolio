export type StaticImageData = string | { src: string; width?: number; height?: number };

export type ProjectCategory = 'Web' | 'AI';

export interface Project {
  id: string;
  title: string;
  // Allow a single category or multiple categories for sorting and filtering
  category: ProjectCategory | ProjectCategory[];
  description: string;
  tech: string[];
  metrics: string;
  color: string;
  accent: string;
  featured?: boolean;
  challenge?: string;
  solution?: string;
  outcome?: string;
  fullDescription?: string;
  previewUrl?: string;
  gitUrl?: string;
  images?: (string | StaticImageData)[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  items: string[];
  price?: string;
  color: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string | StaticImageData;
}

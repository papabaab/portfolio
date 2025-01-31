export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  id: number;
  name: string;
  category: 'hard' | 'soft';
  proficiency: number;
  logo?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Education {
  id: number;
  school: string;
  degree: string;
  period: string;
  description: string;
  logo: string;
}
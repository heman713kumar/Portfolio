export interface NavLink {
  name: string;
  path: string;
}

export interface Experience {
  slug: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills?: string[];
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  problem: string;
  solution: string;
  challenges: string;
  results: string;
  category: string;
  date: string;
  featured?: boolean;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
  issuer: string;
}

export interface Skill {
  name: string;
  level: 'Fluent' | 'Native' | 'Beginner' | 'Proficient';
}

export interface ExtracurricularActivity {
  icon: 'heart' | 'lightbulb' | 'briefcase' | 'book' | 'users' | 'sparkles' | 'globe' | 'puzzle';
  category: string;
  categoryColor: string;
  title: string;
  organization?: string;
  period: string;
  description: string;
  skillsDeveloped: string[];
  gridSpan?: 'md:col-span-2';
}
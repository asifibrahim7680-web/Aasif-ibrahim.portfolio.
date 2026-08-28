export interface Project {
  id: string;
  title: string;
  category: string;
  tagType: 'ai' | 'web';
  badgeLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  metrics?: string;
  role: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  borderColor: string;
  skills: {
    name: string;
    level: string;
    icon: string;
    tagColor: string;
    description: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: 'cloud' | 'ai' | 'ml';
  tags: string[];
  date: string;
  skillsCovered: string[];
  credentialId?: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  university: string;
  cgpa: string;
  status: string;
  period: string;
  expectedGraduation: string;
  location: string;
  highlights: string[];
}

export interface Language {
  name: string;
  level: string;
  proficiency: number;
}


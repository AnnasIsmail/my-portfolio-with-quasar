export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  url?: string;
  urlGithub: string;
  image: string[];
  demoVideo?: string;
  DetailExplain?: DetailExplain[];
  technology: string[];
}

export interface DetailExplain {
  name: string;
  path: string;
  url: string;
  right?: boolean;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  link: string;
  icon: string;
  type: string;
  description: string;
}

export interface Experience {
  id: number;
  company: string;
  companyKey: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  degree: string;
  university: string;
  companyKey: string;
  duration: string;
  gpa: string;
  location: string;
  description: string;
  achievements?: string[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  icon: string;
  description: string;
}

export interface Publication {
  title: string;
  status: string;
  methods: string;
  description: string;
}

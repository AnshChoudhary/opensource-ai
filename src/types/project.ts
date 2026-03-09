export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  githubUrl: string;
  websiteUrl?: string;
  demoUrl?: string;
  tags: string[];
  techStack: string[];
  ycBatch: string;
  startupName: string;
  proprietaryService: string;
  proprietaryPrice: string;
  stars?: number;
  featured: boolean;
  logo?: string;
  byok?: boolean; // Bring Your Own Key
}

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageHint: string;
  overview: string;
  objective: string;
  problem: string;
  solution: string;
  videoUrl?: string;
  techStack: string[];
};

export type Accomplishment = {
  slug: string;
  title: string;
  company: string;
  period: string;
  description: string[]; // Array of strings for bullet points
  caseStudy: {
    title: string;
    content: string;
  }[];
};

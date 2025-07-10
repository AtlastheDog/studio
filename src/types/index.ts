export type Solution = {
  description: string;
  items?: {
    title: string;
    description: string;
  }[];
  conclusion?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageHint: string;
  imageFit?: "cover" | "contain";
  overview: string;
  objective: string;
  problem: string;
  solution: Solution;
  videoUrl?: string;
  liveUrl?: string;
  techStack: string[];
};

export type CaseStudySection = {
  title: string;
  content: string;
};

export type Feature = {
  slug: string;
  title: string;
  summary: string;
  caseStudy: CaseStudySection[];
};

export type Accomplishment = {
  slug: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  features?: Feature[];
};

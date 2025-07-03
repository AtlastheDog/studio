import type { Project, Accomplishment } from '@/types';

export const projects: Project[] = [
  {
    slug: 'refinance-crm',
    title: 'Refinance CRM',
    description: 'A comprehensive CRM platform designed to streamline the mortgage refinancing process for loan officers and clients.',
    image: 'https://placehold.co/1200x800.png',
    imageHint: 'finance dashboard',
    overview: 'The Refinance CRM is a full-stack web application built to optimize the workflow for mortgage refinancing. It provides tools for client management, document tracking, and communication, all within a secure and intuitive interface.',
    objective: 'To reduce the time and complexity involved in the mortgage refinance process by providing a centralized platform for all stakeholders.',
    problem: 'Loan officers often rely on a patchwork of tools like email, spreadsheets, and separate document management systems, leading to inefficiencies, errors, and a poor client experience.',
    solution: 'We developed a unified dashboard that allows loan officers to manage their client pipeline, track application progress with a visual timeline, securely handle document uploads, and communicate with clients through an integrated messaging system.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Firebase Auth', 'Stripe'],
  },
  {
    slug: 'cystic-fibrosis-research-assistant',
    title: 'Cystic Fibrosis Research Assistant',
    description: 'An AI-powered tool to help researchers quickly parse and analyze scientific papers related to Cystic Fibrosis.',
    image: 'https://placehold.co/1200x800.png',
    imageHint: 'medical research',
    overview: 'This project leverages natural language processing (NLP) to create a smart research assistant. It can ingest a large corpus of medical literature, extract key information, identify trends, and answer specific queries related to Cystic Fibrosis research.',
    objective: 'Accelerate the pace of Cystic Fibrosis research by providing scientists with a tool that can quickly synthesize vast amounts of information.',
    problem: 'The volume of published research grows exponentially, making it impossible for scientists to stay fully up-to-date. Finding specific data points or connections across thousands of papers is a manual and time-consuming task.',
    solution: 'Our application provides a semantic search interface where researchers can ask questions in natural language. The backend uses a fine-tuned language model to scan and analyze thousands of documents, returning concise summaries, relevant excerpts, and links to the source papers.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techStack: ['Python', 'Flask', 'React', 'Next.js', 'PyTorch', 'Hugging Face Transformers', 'Pinecone', 'Docker'],
  },
  {
    slug: 'pina-picante-salsa',
    title: 'Pina Picante Salsa',
    description: 'A vibrant e-commerce website for a gourmet salsa brand, focusing on brand storytelling and a smooth checkout experience.',
    image: 'https://placehold.co/1200x800.png',
    imageHint: 'food product',
    overview: 'Pina Picante Salsa needed a digital storefront to sell their unique pineapple-based salsas. We built a visually appealing and mobile-first e-commerce site that tells the story of the brand and makes it easy for customers to purchase products.',
    objective: 'Create an online presence that captures the fun, fresh identity of the brand and drives online sales through a seamless user experience.',
    problem: 'The brand had no online sales channel and needed to compete in a crowded market. They required a website that was not just a store, but a marketing tool to build a customer base.',
    solution: 'The website features bold, professional product photography, an engaging "Our Story" section, and a simple, three-step checkout process. We integrated a popular e-commerce backend for easy order management and inventory tracking.',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS/Sass', 'Figma', 'Klaviyo'],
  },
];

export const accomplishments: Accomplishment[] = [
  {
    slug: 'lead-product-manager-techcorp',
    title: 'Lead Product Manager',
    company: 'TechCorp Inc.',
    period: '2020 - Present',
    description: [
      'Led the development of a new B2B SaaS product, growing it from 0 to $1M ARR in 18 months.',
      'Managed a cross-functional team of 15 engineers, designers, and marketers.',
      'Improved user retention by 25% through data-driven feature enhancements and A/B testing.',
    ],
    caseStudy: [
      {
        title: 'Challenge',
        content: 'The market for our existing product line was becoming saturated, and the company needed to diversify its revenue streams. We identified an opportunity in the adjacent market of enterprise data analytics but had no existing product.',
      },
      {
        title: 'Action',
        content: 'I conducted over 50 customer interviews to validate the problem and define the MVP scope. I developed the product roadmap, wrote user stories, and worked daily with the engineering team to ensure we were building the right solution. I also collaborated with marketing to create a go-to-market strategy.',
      },
      {
        title: 'Result',
        content: 'The product launched on time and on budget. We secured our first 10 enterprise customers within 3 months and achieved a $1M ARR milestone in 18 months, establishing a new major revenue source for the company.',
      },
    ],
  },
  {
    slug: 'senior-software-engineer-innovatech',
    title: 'Senior Software Engineer',
    company: 'InnovaTech Solutions',
    period: '2017 - 2020',
    description: [
      'Architected and implemented a microservices-based backend for a high-traffic e-commerce platform.',
      'Reduced API response times by 60% by optimizing database queries and introducing a caching layer.',
      'Mentored junior engineers, improving team-wide code quality and best practices.',
    ],
    caseStudy: [
      {
        title: 'Challenge',
        content: 'The company\'s monolithic e-commerce backend was struggling to handle peak traffic during holiday seasons, leading to frequent outages and lost revenue. It was also slow and difficult to update.',
      },
      {
        title: 'Action',
        content: 'I led the initiative to re-architect the backend into a distributed system of microservices. I designed the overall architecture, chose the tech stack (Node.js, Docker, Kubernetes), and led a team of 5 engineers in the migration. We broke down the monolith into services for products, orders, users, and payments.',
      },
      {
        title: 'Result',
        content: 'The new architecture eliminated downtime during peak periods and allowed for independent scaling of services. Average API response times dropped from 500ms to under 200ms. The development cycle for new features was also cut in half, as teams could now work on services in parallel.',
      },
    ],
  },
];

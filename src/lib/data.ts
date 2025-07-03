import type { Project, Accomplishment } from '@/types';

export const projects: Project[] = [
  {
    slug: 'refinance-crm',
    title: 'Refinance CRM',
    description: 'A comprehensive CRM platform designed to streamline the mortgage refinancing process for loan officers and clients.',
    image: '/refinance-crm-cover.jpg',
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
    slug: 'procare-solutions-pm',
    company: 'Procare Solutions',
    title: 'Product Manager',
    location: 'Denver, CO (Remote)',
    period: 'January 2022 - Present',
    description: [
      'Played a critical role in shaping GTM and product strategy for flagship SaaS platform, increasing adoption from 300K monthly to 1M+ daily active users by aligning roadmap to customer feedback and market signals.',
      'Repaired trust with key Enterprise accounts resulting in an increase in NPS from a -14 to a +40 within an 18 month development period by reflecting a deep understanding of their business in solutions and strengthening cross-functional alignment.',
      'Reduced failed card transactions by 25% through payment workflow optimization, achieving desired outcomes of scalability and UX goals while encouraging use of our internal payments solution.',
      'Led external API development and strategic partner integrations, unlocking scalable enterprise workflows and supporting platform growth strategy.',
      'Drove increased feature adoption by championing experimentation culture—combining Pendo data with Intercom feedback to inform positioning, customer education, and iterative campaign strategy.',
      'Operated as a Support Engineer on the Platform Engineering team and leveraged New Relic to make informed engineering decisions and fostered a culture of Product Ownership by connecting user insights to performance indicators.',
      'Defined performance and uptime SLAs for core platform in collaboration with engineering to ensure reliability standards for Enterprise contracts and platform scaling.'
    ],
    features: [
      {
        slug: 'payment-workflow-optimization',
        title: 'Payment Workflow Optimization',
        summary: 'Reduced failed card transactions by 25% through payment workflow optimization, achieving desired outcomes of scalability and UX goals while encouraging use of our internal payments solution.',
        caseStudy: [
          { title: 'Challenge', content: 'A high rate of failed credit card transactions was causing significant revenue loss and customer frustration. The existing payment workflow was convoluted and lacked intelligent error handling.' },
          { title: 'Action', content: 'I led a deep dive into payment failure points, analyzing transaction data and user session recordings. I designed a streamlined workflow with clearer error messaging, proactive card-updater prompts, and integrated with a new payment gateway API for better decline-code handling. I worked with engineering to implement this as an A/B test.' },
          { title: 'Result', content: 'The new workflow resulted in a 25% reduction in failed transactions within three months, directly recovering thousands in monthly revenue. Customer support tickets related to payment issues dropped by 40%, and the A/B test showed a clear winner, which was rolled out to all users.' },
        ]
      },
      {
        slug: 'enterprise-nps-turnaround',
        title: 'Enterprise NPS Turnaround',
        summary: 'Repaired trust with key Enterprise accounts resulting in an increase in NPS from a -14 to a +40 within an 18 month development period.',
        caseStudy: [
          { title: 'Challenge', content: 'Key enterprise accounts were at risk of churn due to product instability and a perception that their needs were not being met. The Net Promoter Score (NPS) from this segment was a concerning -14.' },
          { title: 'Action', content: 'I established a dedicated feedback loop with these enterprise clients, including quarterly business reviews and a beta program for new features. I translated their specific pain points into actionable user stories and prioritized them on the roadmap, ensuring visibility and cross-functional alignment on delivering these solutions.' },
          { title: 'Result', content: 'Over an 18-month period, consistent delivery on our promises and a clear commitment to their success rebuilt trust. The NPS score from this segment climbed from -14 to +40, churn risk was eliminated, and two of the accounts expanded their contracts.' },
        ]
      },
      {
        slug: 'api-partner-integration',
        title: 'External API & Partner Integration',
        summary: 'Led external API development and strategic partner integrations, unlocking scalable enterprise workflows and supporting platform growth strategy.',
        caseStudy: [
            { title: 'Challenge', content: 'Enterprise customers required seamless integration with their existing systems (like HRIS and accounting software) to reduce manual data entry and streamline their operations. The lack of an external API was a major sales blocker.' },
            { title: 'Action', content: 'I defined the strategy for our public API, identifying the key endpoints needed for MVP based on customer interviews and sales feedback. I managed the development process, created comprehensive API documentation, and worked with two strategic partners to build the first integrations on the new platform.' },
            { title: 'Result', content: 'The launch of the external API and initial partner integrations unlocked a new tier of enterprise clients, contributing to a 15% increase in deal size. The API is now a core part of our enterprise offering and supports dozens of custom integrations.' },
        ]
      }
    ]
  },
  {
    slug: 'procare-solutions-tl',
    company: 'Procare Solutions',
    title: 'Technical Support Team Lead',
    location: 'Denver, CO (Remote)',
    period: 'January 2021 - January 2022',
    description: [
      'Developed scalable troubleshooting processes and training resources that enhanced cross-team onboarding and reduced support friction during post-acquisition integration.',
      'Partnered with Product and Engineering to redesign escalation workflows, accelerating defect identification and improving visibility into user pain points.',
      'Led a high-performing support team of 6, mentoring 3 into new roles and fostering a collaborative culture that strengthened cross-functional communication and operational agility.'
    ],
  },
  {
    slug: 'kinderlime-csm',
    company: 'Kinderlime',
    title: 'Customer Success Manager',
    location: 'Santa Clara, CA',
    period: 'August 2019 - January 2021',
    description: [
      'Built and scaled a Customer Success playbook during a period of 3x growth, overhauling workflows, training collateral, and toolsets to support rapid onboarding and user retention in a startup environment.'
    ]
  }
];

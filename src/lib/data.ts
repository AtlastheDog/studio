
import type { Project, Accomplishment } from '@/types';

export const projects: Project[] = [
  {
    slug: 'refinance-crm',
    title: 'Refinance CRM',
    description: 'A comprehensive CRM platform designed to streamline the mortgage refinancing process for loan officers and clients.',
    image: '/Screenshot%202025-07-03%20at%201.29.30%E2%80%AFPM.png',
    imageHint: 'finance dashboard',
    overview: 'The Refinance CRM is a full-stack web application built to optimize the workflow for mortgage refinancing. It provides tools for client management, document tracking, and communication, all within a secure and intuitive interface.',
    objective: 'To reduce the time and complexity involved in the mortgage refinance process by providing a centralized platform for all stakeholders.',
    problem: 'Loan officers often rely on a patchwork of tools like email, spreadsheets, and separate document management systems, leading to inefficiencies, errors, and a poor client experience.',
    solution: {
      description: 'We developed a unified dashboard that allows loan officers to manage their client pipeline, track application progress with a visual timeline, securely handle document uploads, and communicate with clients through an integrated messaging system.'
    },
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Firebase Auth', 'Stripe'],
  },
  {
    slug: 'cystic-fibrosis-research-assistant',
    title: 'Cystic Fibrosis Research Assistant',
    description: 'An AI-powered tool to help researchers quickly parse and analyze scientific papers related to Cystic Fibrosis.',
    image: '/CF-research-assistant.png?v=2',
    imageHint: 'AI workflow',
    imageFit: 'contain',
    overview: "This project leverages natural language processing (NLP) to create a smart research team. This workflow identifies recent medical advancements, performs deep research on the topics, and compiles the information in an easy to digest email focused on highlighting the impacts to current treatments.",
    objective: 'My primary objective was to familiarize myself with n8n and workflow automation tools. My secondary objective was to limit the mental strain required to remain current with advancements to treatments for CF.',
    problem: 'The action of tracking updates to medical journals or scientific publications is a mentally taxing and time consuming task. It becomes even more difficult when trying to decipher if the information or advancements being discussed are relevant. We aim to reduce the time and mental capacity needed to remain current with medical advancements.',
    solution: {
      description: "To help limit the time and mental capacity required to remain current on medical advancements, as well as what these advancements mean for the current treatments, we enlisted the help of a team of AI researchers.\n\nMeet the team:",
      items: [
        { title: 'Research Leader', description: 'Responsible for identifying the medical advancements and creates a research backed table of contents.' },
        { title: 'Project Planner', description: 'Responsible for breaking out each of the advancements into chapters and creating a detailed prompt for each.' },
        { title: 'Research Team', description: 'Responsible for performing the deep-dive into one of the advancements that have been identified.' },
        { title: 'Editor', description: 'The editor synthesizes the information from the research team and project planner and creates a final compiled version.' }
      ],
      conclusion: "Once the team has completed their research project, the final version is then emailed to me to consume."
    },
    videoUrl: 'https://www.youtube.com/embed/TirLWJztPEE',
    techStack: ['n8n', 'Perplexity Sonar', 'JavaScript', 'GPT-API', 'LangGraph', 'Python Scripting'],
  },
  {
    slug: 'pina-picante-salsa',
    title: 'Pina Picante Salsa',
    description: 'A vibrant e-commerce website for a gourmet salsa brand, focusing on brand storytelling.',
    image: '/pinapicantesalsa.png',
    imageHint: 'food product',
    overview: "Pina Picante is a salsa brand that my girlfriend and I are launching. We have established our recipe and the stable shelf-life requirements. To assist with our efforts, I have created the following website with V0 and used vercel to deploy to our custom domain.",
    objective: 'Create an ecommerce platform to help grow brand recognition and better share out story with the community.',
    problem: 'The primary problem that we aim to solve is that there are not great salsa options along the central coast even though there is such a rich agriculture scene. We aimed to help solve this problem by creating a platform that highlighted the importance of agriculture while spreading awareness about our salsa products.',
    solution: {
      description: 'The website features bold, professional product photography, an engaging "Our Story" section, and a simple, three-step checkout process. We integrated a popular e-commerce backend for easy order management and inventory tracking.'
    },
    liveUrl: 'https://www.pinapicantesalsa.com/',
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

import type { Experience } from '../components/models';

const experiences: Experience[] = [
  {
    id: 1,
    company: 'FxMedia',
    companyKey: 'placeholder',
    position: 'Full Stack Developer',
    duration: 'Dec 2025 - Apr 2026',
    location: 'Singapore',
    description:
      'Worked on an internal warehouse application across frontend, backend, database operations, deployment, and production support in an English-speaking team.',
    achievements: [
      'Developed and maintained Angular and ASP.NET modules for warehouse operations',
      'Improved system stability through bug fixing, troubleshooting, and reliability-focused maintenance',
      'Managed SQL Server data workflows and supported AWS EC2 deployment for application delivery',
    ],
    technologies: [
      'Angular',
      'ASP.NET',
      'C#',
      'SQL Server',
      'SSMS',
      'AWS EC2',
      'English Collaboration',
    ],
  },
  {
    id: 2,
    company: 'IT Division Bina Nusantara',
    companyKey: 'binus',
    position: 'Programmer',
    duration: 'Mar 2025 - Aug 2025',
    location: 'West Jakarta, DKI Jakarta, Indonesia',
    description:
      'Worked on several internal applications, including Online Exam platforms, scheduling systems, Student Career Monitoring, and event-related tools.',
    achievements: [
      'Successfully developed the Student Career Monitoring application from initial planning to full production deployment',
      'Updated the Online Exam Proctoring system within two weeks so it was ready for live exam use',
      "Handled code reviews for vendor deliverables and pushed improvements to match the team's development standards",
    ],
    technologies: [
      'ASP.NET Web Forms',
      'ASP.NET MVC',
      'LINQ',
      'Cosmos DB',
      'Azure Functions',
      'Azure DevOps',
      'CI/CD',
      'React.js',
      'C#',
      'Pub/Sub (Kafka, Event Hub, Event Grid)',
    ],
  },
  {
    id: 3,
    company: 'IT Division Bina Nusantara',
    companyKey: 'binus',
    position: 'Junior Programmer',
    duration: 'Oct 2023 - Feb 2025',
    location: 'West Jakarta, DKI Jakarta, Indonesia',
    description:
      'Built and maintained internal applications such as Online Exam systems, scheduler modules, LMS features, and student dashboards, while also improving database performance and system reliability.',
    achievements: [
      'Improved query performance from more than 1 minute to around 3 seconds using LINQ optimization',
      'Built the Lecturer KPI Scheduler module and the Exam Question Revision Setup module for academic operations',
    ],
    technologies: ['ASP.NET', 'React.js', 'Azure', 'CI/CD', 'LINQ', 'MySQL'],
  },
  {
    id: 4,
    company: 'Telkom Indonesia',
    companyKey: 'telkom',
    position: 'Website Developer Intern',
    duration: 'Mar 2023 - Aug 2023',
    location: 'South Jakarta, DKI Jakarta, Indonesia',
    description:
      'Worked as a Web Developer Intern at Telkom Indonesia and contributed to a legal document management system used for internal regulatory workflows.',
    achievements: [
      'Built responsive interfaces with Vue.js, backend services with CodeIgniter, and integrated Elasticsearch for document search',
      "Helped speed up document search and make the legal team's workflow smoother",
    ],
    technologies: [
      'Vue.js',
      'React.js',
      'CodeIgniter',
      'MySQL',
      'Git',
      'Minio',
      'Redis',
      'Quasar Framework',
      'Elasticsearch',
    ],
  },
  {
    id: 5,
    company: "Perguruan Tinggi Muhammadiyah dan 'Aisyiyah (PTMA)",
    companyKey: 'ptma',
    position: 'IT Developer - Quick Count System',
    duration: 'Feb 2024 - Mar 2024',
    location: 'Indonesia',
    description:
      'Built a quick count system for the 2024 Presidential Election, combining a KoboCollect-based field form with a real-time dashboard in React.js and Node.js Express.',
    achievements: [
      'Built automated processing flows to improve speed and reduce manual work',
      'Handled the project from early design through implementation',
    ],
    technologies: ['React.js', 'Node.js Express', 'KoboCollect', 'JavaScript'],
  },
  {
    id: 6,
    company:
      'Ministry of Agrarian Affairs and Spatial Planning/National Land Agency',
    companyKey: 'atr-bpn',
    position: 'Full-Stack Developer',
    duration: 'Oct 2024 - Mar 2025',
    location: 'Tangerang, Banten, Indonesia',
    description:
      'Worked as a Full-Stack Developer on Tangkapp, a government document workflow application. I was involved in requirement gathering and system design.',
    achievements: [
      'Worked closely with government stakeholders to turn a complex manual process into a digital workflow',
      'Coordinated a small development team through the project lifecycle',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'MySQL',
      'JavaScript',
      'Full-Stack Development',
    ],
  },
];

export default experiences;

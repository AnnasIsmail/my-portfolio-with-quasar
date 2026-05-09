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
      'Contributed to the development and maintenance of an internal warehouse application, covering frontend, backend, database operations, deployment, and production support in an English-speaking team environment.',
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
      'Led the development, maintenance, and optimization of critical internal applications, including Online Exam platforms, Scheduling systems, Student Career Monitoring, and Event Management solutions.',
    achievements: [
      'Successfully developed the Student Career Monitoring application from initial planning to full production deployment',
      'Rapidly modified the Online Exam Proctoring system within two weeks, ensuring seamless exam execution capabilities',
      "Led code review processes for vendor deliverables and implemented improvements to align with company's development standards",
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
      'Developed and maintained critical internal applications including Online Exam systems, Scheduler modules, LMS platforms, and Student Dashboard interfaces. Enhanced database performance through advanced query optimization and ensured robust system reliability.',
    achievements: [
      'Dramatically optimized query performance from over 1 minute to just 3 seconds using advanced LINQ techniques',
      'Architected and developed the Lecturer KPI Scheduler module and Exam Question Revision Setup module, significantly improving academic process efficiency',
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
      'Served as a Web Developer Intern at Telkom Indonesia, contributing to the development of a comprehensive web-based legal document management system. Designed and implemented innovative features to enhance efficiency and accuracy in regulatory processes.',
    achievements: [
      'Built responsive user interfaces using Vue.js, developed robust backend services with CodeIgniter, and integrated Elasticsearch for advanced document search and SQL database management',
      "Achieved significant improvements in document search speed and streamlined the legal team's workflow processes",
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
      'Architected and developed a comprehensive quick count system for the 2024 Presidential Election, featuring a KoboCollect-based field data collection form and a real-time dashboard built with React.js and Node.js Express for media publication.',
    achievements: [
      'Implemented automated data processing workflows to enhance accuracy and processing speed',
      'Led the entire development lifecycle from initial system design to final production implementation',
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
      'Served as a Full-Stack Developer for the Tangkapp application, a comprehensive government document workflow solution. Led comprehensive requirement analysis and system architecture design.',
    achievements: [
      'Collaborated closely with government stakeholders to translate complex bureaucratic processes into an intuitive digital platform',
      'Successfully coordinated and led a small development team throughout the entire project lifecycle',
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

import { Project } from '../components/models';
const projects: Project[] = [
  {
    id: '64d45a925a97fc4efd8a8085',
    name: 'Internal Warehouse Application',
    type: 'Enterprise Application',
    description:
      'Contributed as a Full Stack Developer at FxMedia to an internal warehouse application for operational workflows. Built and maintained frontend modules with Angular, backend services with ASP.NET, managed data through SQL Server Management Studio, handled troubleshooting and bug fixing, and supported deployment on AWS EC2 in an English-speaking team environment.',
    url: '',
    urlGithub: '',
    image: [require('../assets/my-portfolio.png')],
    technology: [
      '64cd01363807d13277294759',
      '64cd01363807d13277294752',
      '64cd01363807d1327729475a',
      '64cd01363807d13277294757',
      '64cd01363807d13277294751',
      '64cd01363807d13277294750',
    ],
  },
  {
    id: '64d45a925a97fc4efd8a8080',
    name: 'Student Career Monitoring',
    type: 'Enterprise Application',
    description:
      'Built the Student Career Monitoring application at Bina Nusantara from early planning through production rollout. The system helps track student career progress and related university records, and was developed with ASP.NET MVC, React.js, Cosmos DB, Azure Functions, and Azure DevOps.',
    url: '',
    urlGithub: '',
    image: [require('../assets/my-portfolio.png')],
    technology: [
      '64cd01363807d13277294752',
      '64cd01363807d1327729473f',
      '64cd01363807d13277294754',
      '64cd01363807d13277294753',
      '64cd01363807d13277294751',
      '64cd01363807d13277294750',
    ],
  },
  {
    id: '64d45a925a97fc4efd8a8081',
    name: 'Online Exam Proctoring System',
    type: 'Enterprise Application',
    description:
      'Updated and stabilized the Online Exam Proctoring system at Bina Nusantara on a tight timeline so it was ready for live exam use. The work involved ASP.NET Web Forms, React.js, and Azure services to support secure online exams and real-time monitoring.',
    url: '',
    urlGithub: '',
    image: [require('../assets/my-portfolio.png')],
    technology: [
      '64cd01363807d13277294752',
      '64cd01363807d1327729473f',
      '64cd01363807d13277294753',
      '64cd01363807d13277294751',
    ],
  },
  {
    id: '64d45a925a97fc4efd8a8082',
    name: 'Legal Document Management System',
    type: 'Web Development',
    description:
      'Built a web-based legal document management system during my internship at Telkom Indonesia. I worked on the Vue.js frontend, CodeIgniter backend, and Elasticsearch-powered search, helping the legal team find documents faster and manage their workflow more smoothly.',
    url: '',
    urlGithub: '',
    image: [require('../assets/my-portfolio.png')],
    technology: [
      '64cd01363807d13277294740',
      '64cd01363807d1327729474a',
      '64cd01363807d1327729474b',
      '64cd01363807d13277294755',
      '64cd01363807d13277294756',
      '64cd01363807d13277294758',
      '64cd01363807d13277294748',
    ],
  },
  {
    id: '64d45a925a97fc4efd8a8083',
    name: 'Quick Count System - 2024 Election',
    type: 'Full-Stack Development',
    description:
      'Built a quick count system for the 2024 Presidential Election for PTMA. It combined a KoboCollect-based field data collection flow with a real-time dashboard in React.js and Node.js Express, so incoming data could be processed and published quickly during the reporting window.',
    url: '',
    urlGithub: '',
    image: [require('../assets/my-portfolio.png')],
    technology: [
      '64cd01363807d1327729473f',
      '64cd01363807d13277294741',
      '64cd01363807d13277294744',
      '64cd01363807d1327729474c',
    ],
  },
  {
    id: '64d45a925a97fc4efd8a8084',
    name: 'Tangkapp - Government Workflow',
    type: 'Full-Stack Development',
    description:
      'Worked as a Full-Stack Developer on Tangkapp, a document workflow application for the Ministry of Agrarian Affairs and Spatial Planning. I helped shape the requirements, worked through the system design, and collaborated with stakeholders to turn a bureaucratic process into a digital workflow people could actually use.',
    url: '',
    urlGithub: '',
    image: [require('../assets/my-portfolio.png')],
    technology: [
      '64cd01363807d1327729473f',
      '64cd01363807d13277294741',
      '64cd01363807d1327729474b',
      '64cd01363807d13277294744',
    ],
  },
  {
    id: '6705a1b85c3e4d2f1a9b8c01',
    name: 'Tes-Cpns.com',
    type: 'SaaS Product',
    description:
      'Built Tes-Cpns.com as a full-stack SaaS product for people preparing for the CPNS SKD exam. The platform includes TWK, TIU, and TKP tryouts, guided practice flows, score breakdowns, a leaderboard, and a personal dashboard that helps users understand what to improve next. I also handled the operational side of the product, including payments, user access, email flows, media delivery, and internal admin tools.',
    url: 'https://tes-cpns.com',
    urlGithub: 'https://github.com/AnnasIsmail/cpns-tryouts',
    image: [
      require('../assets/cpns-tryouts.png'),
      require('../assets/cpns-landing.webp'),
      require('../assets/cpns-passing-grade.webp'),
      require('../assets/cpns-pricing.webp'),
      require('../assets/cpns-share-poster.png'),
    ],
    DetailExplain: [
      {
        name: 'Discovery and learning entry points',
        path: 'Landing page, articles, materials hub, and practice paths',
        url: require('../assets/cpns-landing.webp'),
        description:
          'I wanted the product to feel bigger than a quiz app. The public side includes article pages, CPNS study materials, and free practice entry points so people can discover the site through search, learn the basics first, and move into tryouts when they are ready.',
      },
      {
        name: 'Tryout flow and score interpretation',
        path: 'Passing-grade guidance for TWK, TIU, and TKP',
        url: require('../assets/cpns-passing-grade.webp'),
        right: true,
        description:
          'The tryout flow is built around actual CPNS expectations, including section-based scoring and passing-grade guidance. That makes the results easier to read for users who care not just about a total score, but whether they are getting closer to a safe target.',
      },
      {
        name: 'Payments, plans, and access control',
        path: 'Midtrans checkout, subscriptions, per-tryout access, and gated features',
        url: require('../assets/cpns-pricing.webp'),
        description:
          'I built the product layer around payments and access too: Midtrans checkout, free and paid tryouts, annual subscriptions, single-tryout purchases, and limited-access rules from the admin side. The goal was to support conversion without making the product feel clunky.',
      },
      {
        name: 'Share flow and operational support',
        path: 'Result sharing, email flows, analytics, and admin operations',
        url: require('../assets/cpns-share-poster.png'),
        right: true,
        description:
          'Behind the learner-facing UI, I also built the support systems that keep the product running: result-sharing assets, Resend-based email flows, media delivery through AWS S3 and CloudFront, and internal tools for managing questions, content, and performance tracking.',
      },
    ],
    technology: [
      '64cd01363807d1327729475c',
      '64cd01363807d1327729473f',
      '64cd01363807d13277294750',
      '64cd01363807d1327729475d',
      '64cd01363807d13277294741',
      '64cd01363807d1327729474c',
      '64cd01363807d1327729475e',
      '64cd01363807d1327729475f',
      '64cd01363807d13277294757',
    ],
  },
  {
    id: '64d45a925a97fc4efd8a8075',
    name: 'GCONN',
    type: 'Web Development',
    description:
      'GCONN is a marketplace project for Valorant players, focused on buying and selling game accounts. I built it with React.js, Node.js, and Socket.io, with filtering features that help users search for accounts based on specific skins.',
    url: 'https://gconn.netlify.app/',
    urlGithub: 'https://github.com/AnnasIsmail/GCONN',
    image: [require('../assets/gconn.png')],
    technology: [
      '64cd01363807d1327729473e',
      '64cd01363807d1327729473f',
      '64cd01363807d13277294741',
      '64cd01363807d13277294744',
      '64cd01363807d1327729474c',
      '64cd01363807d1327729474f',
    ],
  },
  {
    id: '64d45aa55a97fc4efd8a8076',
    name: 'Account Nguk',
    type: 'Web Development',
    description:
      'Account Nguk is a web project focused on Valorant account sharing and related information for players. It uses React.js on the frontend and Node.js on the backend to create a simple interactive experience around that niche.',
    url: 'https://account-nguk.netlify.app/',
    urlGithub: 'https://github.com/AnnasIsmail/account-nguk-react',
    image: [require('../assets/account-nguk_dashboard.png')],
    technology: [
      '64cd01363807d1327729474c',
      '64cd01363807d13277294747',
      '64cd01363807d13277294744',
      '64cd01363807d13277294741',
      '64cd01363807d1327729473f',
    ],
  },
  {
    id: '64551d8ff0ff386cc51044c5',
    name: 'My Portfolio',
    type: 'Web Development',
    description:
      'This portfolio is where I present my background, projects, and experience in one place. I built it with Vue.js and Quasar, and use it as a space to show both the work I have done and the way I like to build interfaces.',
    url: 'https://annas-ismail-muhammad-portofolio.netlify.app/#/',
    urlGithub: 'https://github.com/AnnasIsmail/my-portofolio-with-quasar',
    image: [require('../assets/my-portfolio.png')],
    technology: [
      '64cd01363807d13277294740',
      '64cd01363807d13277294744',
      '64cd01363807d13277294748',
    ],
  },
];

export default projects;

import { Skill } from '../components/models';
const Skills: Skill[] = [
  {
    id: '64cd01363807d1327729473e',
    name: 'Bootstrap',
    link: 'https://getbootstrap.com/',
    icon: 'logos:bootstrap',
    type: 'framework',
    description:
      'Bootstrap is a popular front-end framework that provides a set of pre-designed components and styles to help developers create responsive and visually appealing web applications.',
  },
  {
    id: '64cd01363807d1327729473f',
    name: 'React JS',
    link: 'https://reactjs.org/',
    icon: 'logos:react',
    type: 'library',
    description:
      'React JS is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of an application efficiently.',
  },
  {
    id: '64cd01363807d13277294740',
    name: 'Vue JS',
    link: 'https://vuejs.org/',
    icon: 'logos:vue',
    type: 'framework',
    description:
      'Vue JS is a progressive JavaScript framework that is known for its simplicity and flexibility. It allows developers to build interactive and dynamic user interfaces for web applications.',
  },
  {
    id: '64cd01363807d13277294741',
    name: 'Node JS',
    link: 'https://nodejs.org/',
    icon: 'logos:nodejs-icon-alt',
    type: 'framework',
    description:
      'Node.js is a runtime environment that allows developers to execute JavaScript on the server side. It is built on the V8 JavaScript engine and enables non-blocking, event-driven I/O operations.',
  },
  {
    id: '64cd01363807d13277294742',
    name: 'HTML',
    link: 'https://www.w3schools.com/html/',
    icon: 'logos:html-5',
    type: 'language',
    description:
      'HTML (Hypertext Markup Language) is the standard markup language used to structure content on the web. It defines the structure and presentation of web pages.',
  },
  {
    id: '64cd01363807d13277294743',
    name: 'CSS',
    link: 'https://www.w3schools.com/css/',
    icon: 'logos:css-3',
    type: 'language',
    description:
      'CSS (Cascading Style Sheets) is used to define the visual presentation of web pages written in HTML. It allows developers to control the layout, colors, fonts, and other design aspects of a website.',
  },
  {
    id: '64cd01363807d13277294744',
    name: 'Javascript',
    link: 'https://www.javascript.com/',
    icon: 'logos:javascript',
    type: 'language',
    description:
      'JavaScript is a versatile scripting language that enables interactivity and dynamic behavior in web applications. It runs in browsers and can be used for both client-side and server-side programming.',
  },
  {
    id: '64cd01363807d13277294745',
    name: 'JAVA',
    link: 'https://www.java.com/',
    icon: 'logos:java',
    type: 'language',
    description:
      'Java is a widely-used, class-based, object-oriented programming language. It is known for its portability and is commonly used in various types of applications, from desktop software to web applications.',
  },
  {
    id: '64cd01363807d13277294746',
    name: 'PHP',
    link: 'https://www.php.net/',
    icon: 'devicon:php',
    type: 'language',
    description:
      'PHP is a server-side scripting language designed for web development. It is commonly used to create dynamic web pages and web applications, interacting with databases and other services.',
  },
  {
    id: '64cd01363807d13277294747',
    name: 'Material UI',
    link: 'https://mui.com/',
    icon: 'logos:material-ui',
    type: 'library',
    description:
      "Material UI is a popular React component library that implements Google's Material Design guidelines. It provides a set of pre-designed UI components for creating modern and visually appealing web interfaces.",
  },
  {
    id: '64cd01363807d13277294748',
    name: 'Quasar',
    link: 'https://quasar.dev/',
    icon: 'devicon:quasar',
    type: 'framework',
    description:
      'Quasar is a high-performance Vue.js framework that allows developers to build responsive single-page applications, server-side-rendered apps, and mobile applications using a unified codebase.',
  },
  {
    id: '64cd01363807d13277294749',
    name: 'Laravel',
    link: 'https://laravel.com/',
    icon: 'logos:laravel',
    type: 'framework',
    description:
      'Laravel is a PHP web application framework known for its elegant syntax and developer-friendly features. It provides tools and libraries for tasks like routing, database management, and authentication.',
  },
  {
    id: '64cd01363807d1327729474a',
    name: 'Codeigniter',
    link: 'https://codeigniter.com/',
    icon: 'logos:codeigniter-icon',
    type: 'framework',
    description:
      'CodeIgniter is a lightweight PHP framework that aims to simplify and speed up the development of web applications. It emphasizes a small footprint and high performance.',
  },
  {
    id: '64cd01363807d1327729474b',
    name: 'MySQL',
    link: 'https://www.mysql.com/',
    icon: 'logos:mysql',
    type: 'database',
    description:
      'MySQL is an open-source relational database management system. It is commonly used for storing and managing structured data in various types of applications.',
  },
  {
    id: '64cd01363807d1327729474c',
    name: 'MongoDB',
    link: 'https://www.mongodb.com/',
    icon: 'devicon:mongodb',
    type: 'database',
    description:
      'MongoDB is a popular NoSQL database that uses a flexible, document-based data model. It is designed for scalability and ease of development, especially for applications dealing with large amounts of unstructured or semi-structured data.',
  },
  {
    id: '64cd01363807d1327729474d',
    name: 'Git',
    link: 'https://git-scm.com/',
    icon: 'devicon:git',
    type: 'tool',
    description:
      'Git is a distributed version control system used to track changes in source code during software development. It enables collaboration, code review, and version management among developers.',
  },
  {
    id: '64cd01363807d1327729474e',
    name: 'Python',
    link: 'https://www.python.org/',
    icon: 'logos:python',
    type: 'language',
    description:
      'Python is a versatile and easy-to-read programming language known for its simplicity and readability. It is widely used for web development, data analysis, scientific computing, and more.',
  },
  {
    id: '64cd01363807d1327729474f',
    name: 'Socket.io',
    link: 'https://socket.io/',
    icon: 'devicon:socketio',
    type: 'library',
    description:
      'Socket.io is a JavaScript library that enables real-time, bidirectional communication between clients and servers. It is commonly used for building interactive features like chat applications and live updates.',
  },
  {
    id: '64cd01363807d13277294750',
    name: 'Typescript',
    link: 'https://www.typescriptlang.org/docs/',
    icon: 'logos:typescript-icon',
    type: 'language',
    description:
      'TypeScript is a superset of JavaScript that adds static typing and other features to enhance developer productivity and code quality. It can be compiled to plain JavaScript for browser compatibility.',
  },
  {
    id: '64cd01363807d13277294751',
    name: 'C#',
    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
    icon: 'devicon:csharp',
    type: 'language',
    description:
      'C# is a modern, object-oriented programming language developed by Microsoft. It is widely used for building enterprise applications, web services, and cloud-based solutions on the .NET platform.',
  },
  {
    id: '64cd01363807d13277294752',
    name: 'ASP.NET',
    link: 'https://dotnet.microsoft.com/apps/aspnet',
    icon: 'devicon:dotnetcore',
    type: 'framework',
    description:
      'ASP.NET is a powerful web development framework by Microsoft for building modern web applications and services. It includes ASP.NET Web Forms and ASP.NET MVC for creating dynamic, scalable web solutions.',
  },
  {
    id: '64cd01363807d13277294753',
    name: 'Azure',
    link: 'https://azure.microsoft.com/',
    icon: 'devicon:azure',
    type: 'tool',
    description:
      'Microsoft Azure is a comprehensive cloud computing platform offering services including Azure Functions, Azure DevOps, Cosmos DB, Event Hub, and more for building, deploying, and managing applications.',
  },
  {
    id: '64cd01363807d13277294754',
    name: 'Cosmos DB',
    link: 'https://azure.microsoft.com/en-us/products/cosmos-db',
    icon: 'devicon:azure',
    type: 'database',
    description:
      'Azure Cosmos DB is a globally distributed, multi-model database service designed for scalable and high-performance applications. It supports multiple data models and offers low-latency access.',
  },
  {
    id: '64cd01363807d13277294755',
    name: 'Elasticsearch',
    link: 'https://www.elastic.co/',
    icon: 'logos:elasticsearch',
    type: 'tool',
    description:
      'Elasticsearch is a distributed search and analytics engine built on Apache Lucene. It is used for full-text search, log analytics, and real-time data analysis in modern applications.',
  },
  {
    id: '64cd01363807d13277294756',
    name: 'Redis',
    link: 'https://redis.io/',
    icon: 'devicon:redis',
    type: 'database',
    description:
      'Redis is an open-source, in-memory data structure store used as a database, cache, and message broker. It provides high performance and supports various data structures for fast data access.',
  },
  {
    id: '64cd01363807d13277294757',
    name: 'AWS',
    link: 'https://aws.amazon.com/',
    icon: 'logos:aws',
    type: 'tool',
    description:
      'Amazon Web Services (AWS) is a comprehensive cloud computing platform offering services like S3, Lambda, Elastic Beanstalk, and more for scalable application development and deployment.',
  },
  {
    id: '64cd01363807d13277294758',
    name: 'MinIO',
    link: 'https://min.io/',
    icon: 'simple-icons:minio',
    type: 'tool',
    description:
      'MinIO is a high-performance, S3-compatible object storage system designed for large-scale data infrastructure. It is ideal for cloud-native applications and AI/ML workloads.',
  },
  {
    id: '64cd01363807d13277294759',
    name: 'Angular',
    link: 'https://angular.dev/',
    icon: 'logos:angular-icon',
    type: 'framework',
    description:
      'Angular is a TypeScript-based web framework for building maintainable enterprise applications with structured components, services, and routing.',
  },
  {
    id: '64cd01363807d1327729475a',
    name: 'SQL Server',
    link: 'https://www.microsoft.com/en-us/sql-server',
    icon: 'devicon:microsoftsqlserver',
    type: 'database',
    description:
      'Microsoft SQL Server is a relational database platform used for transactional systems, reporting, and enterprise data management.',
  },
  {
    id: '64cd01363807d1327729475b',
    name: 'LINQ',
    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/linq/',
    icon: 'devicon:dotnetcore',
    type: 'library',
    description:
      'LINQ provides expressive query capabilities in C# for working with collections, relational data, and optimized application data flows.',
  },
  {
    id: '64cd01363807d1327729475c',
    name: 'Next.js',
    link: 'https://nextjs.org/',
    icon: 'logos:nextjs-icon',
    type: 'framework',
    description:
      'Next.js is a production-grade React framework with App Router, server components, server actions, and built-in optimizations for performance and SEO.',
  },
  {
    id: '64cd01363807d1327729475d',
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    icon: 'logos:tailwindcss-icon',
    type: 'framework',
    description:
      'Tailwind CSS is a utility-first CSS framework that enables rapid UI development with consistent design tokens and minimal CSS overhead.',
  },
  {
    id: '64cd01363807d1327729475e',
    name: 'Mongoose',
    link: 'https://mongoosejs.com/',
    icon: 'devicon:mongoose',
    type: 'library',
    description:
      'Mongoose is an elegant MongoDB object modeling library for Node.js with schema validation, middleware, and rich query helpers.',
  },
  {
    id: '64cd01363807d1327729475f',
    name: 'NextAuth.js',
    link: 'https://next-auth.js.org/',
    icon: 'simple-icons:auth0',
    type: 'library',
    description:
      'NextAuth.js is a complete authentication solution for Next.js apps with support for OAuth providers, credentials, JWT, and database sessions.',
  },
];

export default Skills;

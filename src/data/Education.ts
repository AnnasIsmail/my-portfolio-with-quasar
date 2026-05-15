import type {
  Certification,
  Education,
  Publication,
} from '../components/models';

export const educations: Education[] = [
  {
    id: 1,
    degree: 'Master of Computer Science',
    university: 'Universitas Bina Nusantara',
    companyKey: 'master-graduate',
    duration: 'Sep 2023 - Oct 2025',
    gpa: '3.79/4.00',
    location: 'West Jakarta, DKI Jakarta, Indonesia',
    description:
      'Focused on computer science topics such as artificial intelligence, cloud computing, and decision modeling.',
    achievements: [
      'Published a Scopus Q3-indexed scientific article on Indonesia capital relocation readiness',
      'Achieved Alibaba Cloud Certified Associate (ACA) certification in Cloud Computing',
      'Applied Decision Model, Expert Judgement, Fuzzy Logic, and BERT in research work',
    ],
  },
  {
    id: 2,
    degree: 'Bachelor of Information System',
    university: 'Universitas Bina Nusantara',
    companyKey: 'binus-university',
    duration: 'Aug 2020 - Aug 2023',
    gpa: '3.45/4.00',
    location: 'Tangerang, Banten, Indonesia',
    description:
      'Studied information systems while building practical experience in web development and system analysis.',
    achievements: [
      'Completed MAGENTA BUMN internship at Telkom Indonesia with an A grade',
      'Contributed to a legal regulation management system using Vue.js, React.js, CodeIgniter, MySQL, Minio, Redis, Quasar, and Elasticsearch',
      'Conducted sentiment analysis research on Google Play Store reviews using Naive Bayes',
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: 'Alibaba Cloud Certified Associate (ACA)',
    issuer: 'Alibaba Cloud',
    date: '2024',
    icon: 'simple-icons:alibabacloud',
    description:
      'Cloud certification covering core Alibaba Cloud services and solution fundamentals.',
  },
];

export const publication: Publication = {
  title:
    'Decision Model for Evaluating the Readiness of the Indonesian Capital Relocation to Nusantara Based on a Multidimensional Approach',
  status: 'Scopus Q3-indexed Scientific Article',
  methods: 'Decision Model, Expert Judgement, Fuzzy Logic, and BERT',
  description:
    "Published research on evaluating Indonesia's capital relocation readiness using decision modeling and AI-based methods.",
};

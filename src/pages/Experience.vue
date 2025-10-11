<template>
  <q-page style="height: auto; overflow: hidden">
    <input type="hidden" id="move-page" @click="movePageDocument" />
    <q-intersection
      style="min-height: 500px"
      class="experience-intersection"
      :threshold="0.1"
      :root-margin="'50px'"
    >
      <div class="experience-container">
        <transition
          appear
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOut"
          :style="{ animationDuration: '0.6s', animationDelay: '0.1s' }"
        >
          <div class="page-header" v-if="showElement">
            <div class="text-h3 text-weight-bold section-title">
              Professional Experience
            </div>
            <div class="text-body1 text-weight-regular page-description">
              My professional journey in software development and enterprise
              application development
            </div>
          </div>
        </transition>

        <transition
          appear
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOut"
          :style="{ animationDuration: '0.6s', animationDelay: '0.2s' }"
        >
          <div class="experience-timeline" v-if="showElement">
            <div
              v-for="(experience, index) in experiences"
              :key="experience.id"
              class="experience-item"
              :class="{ reverse: index % 2 === 1 }"
            >
              <div class="experience-card">
                <div class="experience-header">
                  <div class="company-info">
                    <div class="company-name">{{ experience.company }}</div>
                    <div class="position">{{ experience.position }}</div>
                    <div class="duration">{{ experience.duration }}</div>
                    <div class="location">{{ experience.location }}</div>
                  </div>
                  <div class="company-logo">
                    <CompanyLogo
                      :company="experience.companyKey"
                      size="medium"
                      variant="card"
                    />
                  </div>
                </div>
                <div class="experience-content">
                  <div class="description">{{ experience.description }}</div>
                  <div class="achievements">
                    <div class="achievements-title">Key Achievements:</div>
                    <ul class="achievements-list">
                      <li
                        v-for="achievement in experience.achievements"
                        :key="achievement"
                      >
                        {{ achievement }}
                      </li>
                    </ul>
                  </div>
                  <div class="technologies">
                    <div class="technologies-title">Technologies Used:</div>
                    <div class="tech-tags">
                      <span
                        v-for="tech in experience.technologies"
                        :key="tech"
                        class="tech-tag"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </q-intersection>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { movePage } from '../functions/movePage';
import CompanyLogo from '../components/CompanyLogo.vue';

export default defineComponent({
  name: 'ExperiencePage',
  components: {
    CompanyLogo,
  },
  data() {
    return {
      showElement: false,
    };
  },
  mounted() {
    this.showElement = true;
  },
  unmounted() {
    this.showElement = false;
  },
  methods: {
    movePage,
    movePageDocument() {
      this.showElement = false;
    },
  },
  setup() {
    const experiences = [
      {
        id: 1,
        company: 'IT Division Bina Nusantara',
        companyKey: 'binus',
        position: 'Programmer',
        duration: 'Mar 2025 - Aug 2025',
        location: 'West Jakarta, DKI Jakarta, Indonesia',
        icon: 'simple-icons:university',
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
        id: 2,
        company: 'IT Division Bina Nusantara',
        companyKey: 'binus',
        position: 'Junior Programmer',
        duration: 'Oct 2023 - Feb 2025',
        location: 'West Jakarta, DKI Jakarta, Indonesia',
        icon: 'simple-icons:university',
        description:
          'Developed and maintained critical internal applications including Online Exam systems, Scheduler modules, LMS platforms, and Student Dashboard interfaces. Enhanced database performance through advanced query optimization and ensured robust system reliability.',
        achievements: [
          'Dramatically optimized query performance from over 1 minute to just 3 seconds using advanced LINQ techniques',
          'Architected and developed the Lecturer KPI Scheduler module and Exam Question Revision Setup module, significantly improving academic process efficiency',
        ],
        technologies: [
          'ASP.NET',
          'React.js',
          'Azure',
          'CI/CD',
          'LINQ',
          'MySQL',
        ],
      },
      {
        id: 3,
        company: 'Telkom Indonesia',
        companyKey: 'telkom',
        position: 'Website Developer Intern',
        duration: 'Mar 2023 - Aug 2023',
        location: 'South Jakarta, DKI Jakarta, Indonesia',
        icon: 'simple-icons:telekom',
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
        id: 4,
        company: "Perguruan Tinggi Muhammadiyah dan 'Aisyiyah (PTMA)",
        companyKey: 'ptma',
        position: 'IT Developer – Quick Count System Development',
        duration: 'Feb 2024 - Mar 2024',
        location: 'Indonesia',
        icon: 'simple-icons:vote',
        description:
          'Architected and developed a comprehensive quick count system for the 2024 Presidential Election, featuring a KoboCollect-based field data collection form and a real-time dashboard built with React.js and Node.js Express for media publication.',
        achievements: [
          'Implemented automated data processing workflows to enhance accuracy and processing speed',
          'Led the entire development lifecycle from initial system design to final production implementation',
        ],
        technologies: [
          'React.js',
          'Node.js Express',
          'KoboCollect',
          'JavaScript',
        ],
      },
      {
        id: 5,
        company:
          'Ministry of Agrarian Affairs and Spatial Planning/National Land Agency',
        companyKey: 'atr-bpn',
        position: 'Full-Stack Developer',
        duration: 'Oct 2024 - Mar 2025',
        location: 'Tangerang, Banten, Indonesia',
        icon: 'simple-icons:government',
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

    return {
      experiences,
    };
  },
});
</script>

<style scoped>
.experience-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(
    90deg,
    rgba(59, 246, 134, 1),
    rgba(76, 169, 255, 1)
  );
  border-radius: 2px;
}

.page-description {
  color: #d6d6d6;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.experience-timeline {
  position: relative;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(
    180deg,
    rgba(59, 246, 134, 0.3),
    rgba(76, 169, 255, 0.3)
  );
  transform: translateX(-50%);
  border-radius: 2px;
}

.experience-item {
  position: relative;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
}

.experience-item::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: linear-gradient(
    135deg,
    rgba(59, 246, 134, 1),
    rgba(76, 169, 255, 1)
  );
  border-radius: 50%;
  border: 4px solid #1a1a2e;
  z-index: 2;
}

.experience-card {
  width: 45%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.experience-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(59, 246, 134, 0.3);
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(59, 246, 134, 0.1);
}

.experience-item:nth-child(odd) .experience-card {
  margin-left: auto;
}

.experience-item:nth-child(even) .experience-card {
  margin-right: auto;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.company-info {
  flex: 1;
}

.company-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 5px;
}

.position {
  font-size: 1rem;
  font-weight: 600;
  color: rgba(59, 246, 134, 1);
  margin-bottom: 5px;
}

.duration {
  font-size: 0.9rem;
  color: #b0b1b7;
  margin-bottom: 5px;
}

.location {
  font-size: 0.85rem;
  color: #8a8b8f;
}

.company-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(59, 246, 134, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(59, 246, 134, 0.2);
}

.experience-content {
  color: #d6d6d6;
}

.description {
  margin-bottom: 20px;
  line-height: 1.6;
}

.achievements-title,
.technologies-title {
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.achievements-list {
  margin: 0 0 20px 0;
  padding-left: 20px;
}

.achievements-list li {
  margin-bottom: 8px;
  line-height: 1.5;
  color: #d6d6d6;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background: rgba(59, 246, 134, 0.1);
  color: rgba(59, 246, 134, 1);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(59, 246, 134, 0.2);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgba(59, 246, 134, 0.2);
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .experience-timeline::before {
    left: 20px;
  }

  .experience-item::before {
    left: 20px;
  }

  .experience-card {
    width: calc(100% - 60px);
    margin-left: 60px !important;
    margin-right: 0 !important;
  }

  .experience-header {
    flex-direction: column;
    gap: 15px;
  }

  .company-logo {
    align-self: flex-start;
  }
}

@media (max-width: 480px) {
  .experience-container {
    padding: 20px 10px;
  }

  .experience-card {
    padding: 20px;
  }

  .tech-tags {
    gap: 6px;
  }

  .tech-tag {
    font-size: 0.75rem;
    padding: 3px 8px;
  }
}
</style>

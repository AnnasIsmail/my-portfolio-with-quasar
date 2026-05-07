<template>
  <q-page style="height: auto; overflow: hidden">
    <input type="hidden" id="move-page" @click="movePageDocument" />
    <q-intersection
      style="min-height: 500px"
      class="education-intersection"
      :threshold="0.1"
      :root-margin="'50px'"
    >
      <div class="education-container">
        <transition
          appear
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOut"
          :style="{ animationDuration: '0.6s', animationDelay: '0.1s' }"
        >
          <div class="page-header" v-if="showElement">
            <div class="text-h3 text-weight-bold section-title">
              Education & Certifications
            </div>
            <div class="text-body1 text-weight-regular page-description">
              My academic journey, professional certifications, and research
              contributions
            </div>
          </div>
        </transition>

        <transition
          appear
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOut"
          :style="{ animationDuration: '0.6s', animationDelay: '0.2s' }"
        >
          <div class="education-content" v-if="showElement">
            <!-- Education Section -->
            <div class="education-section">
              <div class="section-subtitle">
                <Icon icon="mdi:school" width="24px" />
                <span>Academic Education</span>
              </div>
              <div class="education-timeline">
                <div
                  v-for="education in educations"
                  :key="education.id"
                  class="education-item"
                >
                  <div class="education-card">
                    <div class="education-header">
                      <div class="degree-info">
                        <div class="degree-name">{{ education.degree }}</div>
                        <div class="university">{{ education.university }}</div>
                        <div class="duration">{{ education.duration }}</div>
                        <div class="gpa">GPA: {{ education.gpa }}</div>
                        <div class="location">{{ education.location }}</div>
                      </div>
                      <div class="degree-icon">
                        <CompanyLogo
                          :company="education.companyKey"
                          size="large"
                          variant="card"
                        />
                      </div>
                    </div>
                    <div class="education-content-details">
                      <div class="description">{{ education.description }}</div>
                      <div v-if="education.achievements" class="achievements">
                        <div class="achievements-title">Key Achievements:</div>
                        <ul class="achievements-list">
                          <li
                            v-for="achievement in education.achievements"
                            :key="achievement"
                          >
                            {{ achievement }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Certifications Section -->
            <div class="certifications-section">
              <div class="section-subtitle">
                <Icon icon="mdi:certificate" width="24px" />
                <span>Professional Certifications</span>
              </div>
              <div class="certifications-grid">
                <div
                  v-for="cert in certifications"
                  :key="cert.id"
                  class="certification-card"
                >
                  <div class="cert-header">
                    <div class="cert-icon">
                      <Icon :icon="cert.icon" width="40px" />
                    </div>
                    <div class="cert-info">
                      <div class="cert-name">{{ cert.name }}</div>
                      <div class="cert-issuer">{{ cert.issuer }}</div>
                      <div class="cert-date">{{ cert.date }}</div>
                    </div>
                  </div>
                  <div class="cert-description">{{ cert.description }}</div>
                </div>
              </div>
            </div>

            <!-- Research & Publications Section -->
            <div class="research-section">
              <div class="section-subtitle">
                <Icon icon="mdi:research" width="24px" />
                <span>Research & Publications</span>
              </div>
              <div class="research-content">
                <div class="publication-card">
                  <div class="publication-header">
                    <div class="publication-title">
                      "Decision Model for Evaluating the Readiness of the
                      Indonesian Capital Relocation to Nusantara Based on a
                      Multidimensional Approach"
                    </div>
                    <div class="publication-status">
                      Scopus Q3-indexed Scientific Article
                    </div>
                  </div>
                  <div class="publication-details">
                    <div class="publication-methods">
                      <strong>Methods Used:</strong> Decision Model, Expert
                      Judgement, Fuzzy Logic, and BERT
                    </div>
                    <div class="publication-description">
                      Published research article utilizing cutting-edge decision
                      modeling techniques and artificial intelligence methods to
                      evaluate the readiness of Indonesia's capital relocation
                      to Nusantara.
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
import { Icon } from '@iconify/vue';
import { movePage } from '../functions/movePage';
import CompanyLogo from '../components/CompanyLogo.vue';

export default defineComponent({
  name: 'EducationPage',
  components: {
    Icon,
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
    const educations = [
      {
        id: 1,
        degree: 'Master of Computer Science',
        university: 'Universitas Bina Nusantara',
        companyKey: 'master-graduate',
        duration: 'Sep 2023 - Oct 2025',
        gpa: '3.79/4.00',
        location: 'West Jakarta, DKI Jakarta, Indonesia',
        icon: 'mdi:school',
        description:
          'Pursued advanced studies in computer science with specialized focus on artificial intelligence, cloud computing, and decision modeling systems.',
        achievements: [
          'Published a Scopus Q3-indexed scientific article titled "Decision Model for Evaluating the Readiness of the Indonesian Capital Relocation to Nusantara Based on a Multidimensional Approach"',
          'Achieved Alibaba Cloud Certified Associate (ACA) certification in Cloud Computing',
          'Applied advanced research methodologies including Decision Model, Expert Judgement, Fuzzy Logic, and BERT techniques',
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
        icon: 'mdi:school',
        description:
          'Completed comprehensive studies in information systems with extensive practical experience in web development and system analysis.',
        achievements: [
          'Successfully completed the State-Owned Enterprise Talent Generation Internship Program (MAGENTA BUMN) at PT Telekomunikasi Indonesia (Persero) Tbk as a Web Developer (March 1, 2023 - August 31, 2023) with an A grade',
          'Contributed to developing a comprehensive web-based system for managing the creation and revision of legal regulations using Vue.js, React.js, CodeIgniter, MySQL, Git, Minio, Redis, Quasar Framework, and Elasticsearch',
          'Conducted an advanced Sentiment Analysis study on Google Play Store application reviews using the Naive Bayes algorithm as part of the final thesis project',
        ],
      },
    ];

    const certifications = [
      {
        id: 1,
        name: 'Alibaba Cloud Certified Associate (ACA)',
        issuer: 'Alibaba Cloud',
        date: '2024',
        icon: 'simple-icons:alibabacloud',
        description:
          'Professional cloud computing certification demonstrating comprehensive expertise in Alibaba Cloud services and solutions.',
      },
    ];

    return {
      educations,
      certifications,
    };
  },
});
</script>

<style scoped>
.education-container {
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
  background: linear-gradient(90deg, #2dd4bf, #f4b860);
  border-radius: 2px;
}

.page-description {
  color: #d6d6d6;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.education-content {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.education-section,
.certifications-section,
.research-section {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.section-subtitle {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(45, 212, 191, 0.3);
}

.education-timeline {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.education-item {
  position: relative;
}

.education-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 25px;
  top: 80px;
  bottom: -30px;
  width: 2px;
  background: linear-gradient(
    180deg,
    rgba(45, 212, 191, 0.3),
    rgba(244, 184, 96, 0.3)
  );
}

.education-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 30px;
  margin-left: 60px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.education-card::before {
  content: '';
  position: absolute;
  left: -60px;
  top: 30px;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #2dd4bf, #f4b860);
  border-radius: 8px;
  border: 4px solid #1a1a2e;
}

.education-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(45, 212, 191, 0.3);
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(45, 212, 191, 0.1);
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.degree-info {
  flex: 1;
}

.degree-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
}

.university {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2dd4bf;
  margin-bottom: 8px;
}

.duration,
.gpa,
.location {
  font-size: 0.9rem;
  color: #b0b1b7;
  margin-bottom: 5px;
}

.gpa {
  color: #f4b860;
  font-weight: 600;
}

.degree-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(45, 212, 191, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(45, 212, 191, 0.2);
}

.education-content-details {
  color: #d6d6d6;
}

.description {
  margin-bottom: 20px;
  line-height: 1.6;
}

.achievements-title {
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.achievements-list {
  margin: 0;
  padding-left: 20px;
}

.achievements-list li {
  margin-bottom: 8px;
  line-height: 1.5;
  color: #d6d6d6;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.certification-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 25px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.certification-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(45, 212, 191, 0.3);
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(45, 212, 191, 0.1);
}

.cert-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.cert-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(45, 212, 191, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(45, 212, 191, 0.2);
}

.cert-info {
  flex: 1;
}

.cert-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 5px;
}

.cert-issuer {
  font-size: 0.9rem;
  color: #2dd4bf;
  margin-bottom: 5px;
}

.cert-date {
  font-size: 0.85rem;
  color: #b0b1b7;
}

.cert-description {
  color: #d6d6d6;
  line-height: 1.5;
}

.research-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.publication-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 30px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.publication-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(45, 212, 191, 0.3);
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(45, 212, 191, 0.1);
}

.publication-header {
  margin-bottom: 20px;
}

.publication-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
  line-height: 1.4;
}

.publication-status {
  font-size: 0.9rem;
  color: #2dd4bf;
  font-weight: 600;
}

.publication-details {
  color: #d6d6d6;
}

.publication-methods {
  margin-bottom: 15px;
  color: #ffffff;
}

.publication-description {
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .education-container {
    padding: 20px 10px;
  }

  .education-section,
  .certifications-section,
  .research-section {
    padding: 25px;
  }

  .education-card {
    margin-left: 40px;
  }

  .education-card::before {
    left: -40px;
  }

  .education-item:not(:last-child)::after {
    left: 20px;
  }

  .education-header {
    flex-direction: column;
    gap: 15px;
  }

  .degree-icon {
    align-self: flex-start;
  }

  .certifications-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .education-card {
    margin-left: 30px;
    padding: 20px;
  }

  .education-card::before {
    left: -30px;
    width: 15px;
    height: 15px;
  }

  .education-item:not(:last-child)::after {
    left: 15px;
    width: 1px;
  }
}
</style>

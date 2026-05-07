<template>
  <q-page class="home-page">
    <input type="hidden" id="move-page" @click="movePageDocument" />

    <q-intersection class="hero-section" :threshold="0.1">
      <transition
        appear
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOut"
        :style="{ animationDuration: '0.7s' }"
      >
        <section v-if="showElement" class="hero-grid">
          <div class="hero-copy">
            <div class="eyebrow">Full Stack Developer</div>
            <h1>
              Annas Ismail Muhammad
              <span>builds reliable enterprise web applications.</span>
            </h1>
            <p>
              Programmer with Information Systems and Computer Science
              education, experienced in .NET, Angular, React.js, Azure, AWS, SQL
              Server, and performance-focused data retrieval.
            </p>

            <div class="hero-actions">
              <q-btn
                class="primary-action"
                unelevated
                @click="movePage('/projects', this)"
              >
                <Icon icon="mdi:briefcase-outline" height="20px" />
                <span>View Projects</span>
              </q-btn>
              <q-btn
                class="secondary-action"
                outline
                href="mailto:annasismailmuhammad@gmail.com"
              >
                <Icon icon="mdi:email-outline" height="20px" />
                <span>Contact Me</span>
              </q-btn>
            </div>
          </div>

          <div class="profile-panel">
            <div class="profile-frame">
              <q-img src="~assets/photo.png" class="profile-image" />
            </div>
            <div class="signal-list">
              <div
                v-for="item in careerSignals"
                :key="item.label"
                class="signal"
              >
                <span>{{ item.value }}</span>
                <p>{{ item.label }}</p>
              </div>
            </div>
          </div>
        </section>
      </transition>
    </q-intersection>

    <q-intersection class="summary-section" :threshold="0.15">
      <transition
        appear
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOut"
        :style="{ animationDuration: '0.7s', animationDelay: '0.1s' }"
      >
        <section v-if="showElement" class="summary-grid">
          <article class="summary-card">
            <Icon icon="mdi:speedometer" height="28px" />
            <h2>Performance Mindset</h2>
            <p>
              Optimized LINQ-based query performance from more than one minute
              to around three seconds for academic systems.
            </p>
          </article>
          <article class="summary-card">
            <Icon icon="mdi:cloud-sync-outline" height="28px" />
            <h2>Cloud Delivery</h2>
            <p>
              Delivered applications with Azure Functions, Azure DevOps, CI/CD,
              Cosmos DB, and AWS EC2 deployment experience.
            </p>
          </article>
          <article class="summary-card">
            <Icon icon="mdi:account-group-outline" height="28px" />
            <h2>Cross-Team Execution</h2>
            <p>
              Worked with vendors, government stakeholders, and English-speaking
              product teams to keep systems stable and production-ready.
            </p>
          </article>
        </section>
      </transition>
    </q-intersection>

    <q-intersection class="technology-section" :threshold="0.15">
      <transition
        appear
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOut"
        :style="{ animationDuration: '0.7s', animationDelay: '0.15s' }"
      >
        <section v-if="showElement" class="technology-grid">
          <div class="section-copy">
            <div class="eyebrow">Technical Focus</div>
            <h2>Strong around enterprise stacks, data, and cloud workflows.</h2>
            <p>
              My recent work spans internal warehouse systems, online exam
              platforms, student career monitoring, legal document management,
              quick count dashboards, and government workflow applications.
            </p>
          </div>

          <div class="tech-panel">
            <div class="search-section">
              <q-input
                dense
                filled
                v-model="search"
                label="Search"
                placeholder="Angular"
                @update:model-value="searchTechnologies"
              />
              <q-select
                dense
                clearable
                filled
                v-model="filter"
                :options="filterType"
                label="Filter"
                @update:model-value="filterTechnologies"
              />
            </div>
            <div class="tech-stack">
              <chip-technology
                v-for="tech in TechWID"
                :key="tech.name"
                :Skill="tech"
              />
            </div>
            <div class="result-count">{{ TechWID.length }} result</div>
          </div>
        </section>
      </transition>
    </q-intersection>

    <q-intersection class="projects-section" :threshold="0.1">
      <transition
        appear
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOut"
        :style="{ animationDuration: '0.7s', animationDelay: '0.2s' }"
      >
        <section v-if="showElement">
          <div class="section-heading">
            <div>
              <div class="eyebrow">Selected Work</div>
              <h2>Projects aligned with the resume</h2>
            </div>
            <q-btn
              class="secondary-action"
              outline
              @click="movePage('/projects', this)"
            >
              <Icon icon="mdi:arrow-right" height="20px" />
              <span>See More</span>
            </q-btn>
          </div>

          <div class="project-list">
            <projects-card
              v-for="data in dataProjects.slice(0, 3)"
              :key="data.name"
              :Project="data"
            />
          </div>
        </section>
      </transition>
    </q-intersection>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Icon } from '@iconify/vue';
import ProjectsCard from '../components/ProjectsCard.vue';
import { movePage } from '../functions/movePage';
import Skills from '../data/Skills';
import { Project, Skill } from '../components/models';
import ChipTechnology from 'src/components/ChipTechnology.vue';
import Projects from 'src/data/Projects';

export default defineComponent({
  name: 'IndexPage',
  components: {
    Icon,
    ProjectsCard,
    ChipTechnology,
  },
  data() {
    return {
      search: '',
      filter: '',
      showElement: false,
    };
  },
  mounted() {
    this.showElement = true;
  },
  unmounted() {
    this.showElement = false;
  },
  computed: {
    searchedTechnologies(): Skill[] {
      return this.TechWIDOrigin.filter((tech) =>
        tech.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    filteredTechnologies(): Skill[] {
      return this.TechWIDOrigin.filter(
        (tech) => tech.type.toLowerCase() === this.filter.toLowerCase()
      );
    },
  },
  methods: {
    movePage,
    movePageDocument() {
      this.showElement = false;
    },
    searchTechnologies() {
      this.TechWID = this.TechWIDOrigin;
      if (this.filter) this.TechWID = this.filteredTechnologies;
      if (!this.search) return;
      this.TechWID = this.TechWID.filter((tech: Skill) =>
        tech.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    filterTechnologies() {
      this.TechWID = this.TechWIDOrigin;
      if (this.search) this.TechWID = this.searchedTechnologies;
      if (!this.filter) return;
      this.TechWID = this.TechWID.filter(
        (tech: Skill) => tech.type.toLowerCase() === this.filter.toLowerCase()
      );
    },
  },
  setup() {
    const careerSignals = [
      { value: '3+', label: 'years building web systems' },
      { value: '.NET', label: 'enterprise backend focus' },
      { value: 'Cloud', label: 'Azure and AWS delivery' },
    ];
    const TechWIDOrigin = Skills as Skill[];
    const filterType = ['Language', 'Framework', 'Library', 'Database', 'Tool'];
    const dataProjects = Projects as Project[];

    return {
      careerSignals,
      TechWIDOrigin,
      TechWID: ref(TechWIDOrigin),
      filterType,
      dataProjects,
    };
  },
});
</script>

<style scoped>
.home-page {
  height: auto;
  overflow: hidden;
}

.hero-section,
.summary-section,
.technology-section,
.projects-section {
  margin: 72px 0;
}

.hero-grid,
.technology-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(320px, 0.88fr);
  gap: 36px;
  align-items: center;
}

.hero-copy h1,
.section-copy h2,
.section-heading h2 {
  margin: 0;
  color: #f8faf8;
  line-height: 1.05;
  letter-spacing: 0;
}

.hero-copy h1 {
  max-width: 780px;
  font-size: clamp(42px, 7vw, 76px);
}

.hero-copy h1 span {
  display: block;
  color: #a9b8b5;
}

.hero-copy p,
.section-copy p,
.summary-card p {
  color: #c9d3d0;
  line-height: 1.7;
}

.hero-copy p {
  max-width: 680px;
  margin: 24px 0 0;
  font-size: 17px;
}

.eyebrow {
  width: fit-content;
  margin-bottom: 18px;
  color: #f4b860;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}

.primary-action,
.secondary-action {
  min-height: 46px;
  border-radius: 8px;
  gap: 8px;
  padding: 0 18px;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0;
}

.primary-action {
  color: #0b1719;
  background: linear-gradient(135deg, #2dd4bf, #f4b860);
  box-shadow: 0 18px 34px rgba(45, 212, 191, 0.18);
}

.secondary-action {
  color: #e9f4f1;
  border-color: rgba(233, 244, 241, 0.28);
}

.profile-panel {
  position: relative;
  display: grid;
  gap: 18px;
  animation: panel-float 8s ease-in-out infinite;
}

.profile-frame {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
  border-radius: 8px;
  border: 1px solid rgba(233, 244, 241, 0.12);
  background: linear-gradient(145deg, #173840, #1c4b4d);
  box-shadow: 0 24px 70px rgba(5, 14, 16, 0.36);
}

.profile-frame::after {
  content: '';
  position: absolute;
  inset: auto 18px 18px;
  height: 3px;
  background: linear-gradient(90deg, #2dd4bf, #f4b860, #ff7a59);
  border-radius: 8px;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.signal-list,
.summary-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.signal,
.summary-card,
.tech-panel {
  border: 1px solid rgba(233, 244, 241, 0.1);
  border-radius: 8px;
  background: rgba(9, 24, 28, 0.7);
  box-shadow: 0 18px 42px rgba(4, 12, 14, 0.22);
}

.signal {
  padding: 18px;
}

.signal span {
  display: block;
  color: #f8faf8;
  font-size: 22px;
  font-weight: 800;
}

.signal p {
  margin: 6px 0 0;
  color: #a9b8b5;
  font-size: 13px;
  line-height: 1.4;
}

.summary-card {
  padding: 24px;
  transition: transform 0.28s ease, border-color 0.28s ease,
    background 0.28s ease;
}

.summary-card:hover,
.tech-panel:hover {
  border-color: rgba(45, 212, 191, 0.32);
  background: rgba(13, 34, 40, 0.82);
  transform: translateY(-4px);
}

.summary-card svg {
  color: #2dd4bf;
}

.summary-card h2 {
  margin: 18px 0 10px;
  color: #f8faf8;
  font-size: 21px;
  line-height: 1.25;
}

.summary-card p {
  margin: 0;
}

.section-copy h2,
.section-heading h2 {
  font-size: clamp(30px, 4vw, 48px);
}

.section-copy p {
  margin: 20px 0 0;
  max-width: 620px;
}

.tech-panel {
  padding: 20px;
  transition: transform 0.28s ease, border-color 0.28s ease,
    background 0.28s ease;
}

.search-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 18px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.result-count {
  margin-top: 16px;
  color: #a9b8b5;
  font-size: 13px;
}

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;
}

.project-list {
  display: grid;
  gap: 22px;
}

@keyframes panel-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@media (max-width: 900px) {
  .hero-grid,
  .technology-grid {
    grid-template-columns: 1fr;
  }

  .profile-panel {
    max-width: 520px;
  }

  .summary-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .hero-section,
  .summary-section,
  .technology-section,
  .projects-section {
    margin: 48px 0;
  }

  .hero-copy h1 {
    font-size: 40px;
  }

  .hero-actions,
  .section-heading {
    align-items: stretch;
    flex-direction: column;
  }

  .primary-action,
  .secondary-action {
    width: 100%;
  }

  .signal-list,
  .search-section {
    grid-template-columns: 1fr;
  }
}
</style>

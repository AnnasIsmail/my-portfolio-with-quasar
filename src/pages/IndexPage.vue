<template>
  <q-page class="home-page">
    <section class="hero-section" data-reveal="hero">
      <div class="hero-orb hero-orb--teal" aria-hidden="true"></div>
      <div class="hero-orb hero-orb--amber" aria-hidden="true"></div>
      <div class="hero-grid">
        <div class="hero-copy" data-reveal="left" data-reveal-delay="1">
          <div class="eyebrow hero-chip">Full Stack Developer</div>
          <h1>
            Annas Ismail Muhammad
            <span class="hero-tagline">
              builds dependable web applications for real-world use.
            </span>
          </h1>
          <p data-reveal="left" data-reveal-delay="2">
            I work across frontend, backend, and data-heavy systems, with
            hands-on experience in .NET, Angular, React.js, Azure, AWS, and SQL
            Server.
          </p>

          <div class="hero-actions" data-reveal="left" data-reveal-delay="3">
            <button
              type="button"
              class="btn btn--primary btn--lg"
              @click="navigateTo('/projects')"
            >
              <Icon icon="mdi:briefcase-outline" />
              <span>View Projects</span>
              <Icon icon="mdi:arrow-right" class="trailing-icon" />
            </button>
            <a
              class="btn btn--ghost btn--lg"
              href="mailto:annasismailmuhammad@gmail.com"
            >
              <Icon icon="mdi:email-outline" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        <div class="profile-panel" data-reveal="right" data-reveal-delay="2">
          <div class="profile-frame" data-parallax="0.08">
            <q-img src="~assets/photo.png" class="profile-image" />
            <div class="profile-shimmer" aria-hidden="true"></div>
            <div class="profile-ring" aria-hidden="true"></div>
          </div>
          <div class="signal-list">
            <div
              v-for="(item, idx) in careerSignals"
              :key="item.label"
              class="signal"
              data-reveal="zoom"
              :data-reveal-delay="idx + 1"
            >
              <span>{{ item.value }}</span>
              <p>{{ item.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="summary-section" data-reveal="hero">
      <div class="summary-grid">
        <article
          v-for="(card, idx) in summaryCards"
          :key="card.title"
          class="summary-card"
          data-reveal="zoom"
          :data-reveal-delay="idx + 1"
        >
          <div class="summary-icon">
            <Icon :icon="card.icon" height="26px" />
          </div>
          <h2>{{ card.title }}</h2>
          <p>{{ card.body }}</p>
        </article>
      </div>
    </section>

    <section class="technology-section" data-reveal="hero">
      <div class="technology-grid">
        <div class="section-copy" data-reveal="left" data-reveal-delay="1">
          <div class="eyebrow">Technical Focus</div>
          <h2>Comfortable with enterprise systems, data work, and cloud delivery.</h2>
          <p>
            My recent work spans internal warehouse systems, online exam
            platforms, student career monitoring, legal document management,
            quick count dashboards, and government workflow applications.
          </p>
        </div>

        <div class="tech-panel" data-reveal="right" data-reveal-delay="2">
          <div class="search-section">
            <q-input
              dense
              filled
              v-model="search"
              label="Search"
              placeholder="Angular"
              dark
              @update:model-value="applyFilters"
            />
            <q-select
              dense
              clearable
              filled
              v-model="filter"
              :options="filterType"
              label="Filter"
              dark
              @update:model-value="applyFilters"
            />
          </div>
          <div class="tech-stack">
            <chip-technology
              v-for="tech in filteredTechs"
              :key="tech.id"
              :Skill="tech"
            />
          </div>
          <div class="result-count">
            {{ filteredTechs.length }} result{{ filteredTechs.length === 1 ? '' : 's' }}
          </div>
        </div>
      </div>
    </section>

    <section class="experience-preview-section" data-reveal="hero">
      <div class="section-heading">
        <div>
          <div class="eyebrow">Experience Snapshot</div>
          <h2>Recent work across enterprise, campus, and public-sector teams.</h2>
        </div>
        <button
          type="button"
          class="btn btn--ghost"
          @click="navigateTo('/experience')"
        >
          <Icon icon="mdi:briefcase-clock-outline" />
          <span>View Experience</span>
        </button>
      </div>

      <div class="experience-preview-grid">
        <article
          v-for="(item, idx) in featuredExperiences"
          :key="item.id"
          class="experience-preview-card"
          data-reveal="zoom"
          :data-reveal-delay="(idx % 3) + 1"
        >
          <div class="experience-preview-head">
            <company-logo
              :company="item.companyKey"
              size="small"
              variant="card"
            />
            <div class="experience-preview-identity">
              <h3>{{ item.position }}</h3>
              <p>{{ item.company }}</p>
            </div>
          </div>

          <div class="experience-preview-meta">
            <span>
              <Icon icon="mdi:calendar-blank-outline" height="14px" />
              {{ item.duration }}
            </span>
            <span>
              <Icon icon="mdi:map-marker-outline" height="14px" />
              {{ item.location }}
            </span>
          </div>

          <p class="experience-preview-description">
            {{ item.description }}
          </p>

          <div class="experience-preview-tags">
            <span
              v-for="tech in item.technologies.slice(0, 4)"
              :key="tech"
              class="experience-preview-tag"
            >
              {{ tech }}
            </span>
          </div>
        </article>
      </div>
    </section>

    <section class="projects-section" data-reveal="hero">
      <div class="section-heading">
        <div>
          <div class="eyebrow">Selected Work</div>
          <h2>A few projects I have built or worked on closely.</h2>
        </div>
        <button
          type="button"
          class="btn btn--ghost"
          @click="navigateTo('/projects')"
        >
          <span>See More</span>
          <Icon icon="mdi:arrow-right" />
        </button>
      </div>

      <div class="project-list">
        <projects-card
          v-for="(data, idx) in featuredProjects"
          :key="data.id"
          :Project="data"
          data-reveal="zoom"
          :data-reveal-delay="(idx % 4) + 1"
        />
      </div>
    </section>

    <section class="education-preview-section" data-reveal="hero">
      <div class="section-heading">
        <div>
          <div class="eyebrow">Education Snapshot</div>
          <h2>Education, certification, and research that shaped how I work.</h2>
        </div>
        <button
          type="button"
          class="btn btn--ghost"
          @click="navigateTo('/education')"
        >
          <Icon icon="mdi:school-outline" />
          <span>View Education</span>
        </button>
      </div>

      <div class="education-preview-grid">
        <article
          v-for="(item, idx) in featuredEducations"
          :key="item.id"
          class="education-preview-card"
          data-reveal="zoom"
          :data-reveal-delay="idx + 1"
        >
          <div class="education-preview-head">
            <div class="education-preview-copy">
              <div class="education-preview-degree">{{ item.degree }}</div>
              <h3>{{ item.university }}</h3>
            </div>
            <company-logo
              :company="item.companyKey"
              size="small"
              variant="card"
            />
          </div>

          <div class="education-preview-meta">
            <span>
              <Icon icon="mdi:calendar-blank-outline" height="14px" />
              {{ item.duration }}
            </span>
            <span>
              <Icon icon="mdi:star-outline" height="14px" />
              GPA {{ item.gpa }}
            </span>
          </div>

          <p class="education-preview-description">
            {{ item.description }}
          </p>

          <ul
            v-if="item.achievements && item.achievements.length"
            class="education-preview-achievements"
          >
            <li
              v-for="achievement in item.achievements.slice(0, 2)"
              :key="achievement"
            >
              {{ achievement }}
            </li>
          </ul>
        </article>

        <aside class="education-highlight-card" data-reveal="zoom" data-reveal-delay="3">
          <div class="education-highlight-badge">Recognition</div>

          <div class="education-highlight-block">
            <div class="education-highlight-icon">
              <Icon :icon="featuredCertification.icon" height="26px" />
            </div>
            <div>
              <div class="education-highlight-title">
                {{ featuredCertification.name }}
              </div>
              <p>
                {{ featuredCertification.issuer }} • {{ featuredCertification.date }}
              </p>
            </div>
          </div>

          <div class="education-highlight-divider"></div>

          <div class="education-highlight-block">
            <div class="education-highlight-icon secondary">
              <Icon icon="mdi:trophy-outline" height="26px" />
            </div>
            <div>
              <div class="education-highlight-title">
                {{ featuredPublication.status }}
              </div>
              <p>{{ featuredPublication.methods }}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute, useRouter } from 'vue-router';
import ProjectsCard from '../components/ProjectsCard.vue';
import ChipTechnology from '../components/ChipTechnology.vue';
import CompanyLogo from '../components/CompanyLogo.vue';
import { movePage } from '../functions/movePage';
import Skills from '../data/Skills';
import Projects from '../data/Projects';
import experiences from '../data/Experience';
import {
  certifications,
  educations,
  publication,
} from '../data/Education';
import type {
  Certification,
  Education,
  Experience,
  Project,
  Publication,
  Skill,
} from '../components/models';

export default defineComponent({
  name: 'IndexPage',
  components: {
    Icon,
    ProjectsCard,
    ChipTechnology,
    CompanyLogo,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const search = ref('');
    const filter = ref<string | null>(null);

    const careerSignals = [
      { value: '3+', label: 'years building web systems' },
      { value: '.NET', label: 'enterprise backend focus' },
      { value: 'Cloud', label: 'Azure and AWS delivery' },
    ];

    const summaryCards = [
      {
        icon: 'mdi:speedometer',
        title: 'Performance Mindset',
        body: 'Optimized LINQ-based query performance from more than one minute to around three seconds for academic systems.',
      },
      {
        icon: 'mdi:cloud-sync-outline',
        title: 'Cloud Delivery',
        body: 'Delivered applications with Azure Functions, Azure DevOps, CI/CD, Cosmos DB, and AWS EC2 deployment experience.',
      },
      {
        icon: 'mdi:account-group-outline',
        title: 'Cross-Team Execution',
        body: 'Worked with vendors, government stakeholders, and English-speaking product teams to keep systems stable and production-ready.',
      },
    ];

    const allTechs = Skills as Skill[];
    const filterType = ['Language', 'Framework', 'Library', 'Database', 'Tool'];
    const dataProjects = Projects as Project[];

    const filteredTechs = computed<Skill[]>(() => {
      let list = allTechs;
      if (filter.value) {
        list = list.filter(
          (t) => t.type.toLowerCase() === (filter.value || '').toLowerCase()
        );
      }
      if (search.value) {
        const q = search.value.toLowerCase();
        list = list.filter((t) => t.name.toLowerCase().includes(q));
      }
      return list;
    });

    const featuredProjects = computed(() => dataProjects.slice(0, 3));
    const featuredExperiences = computed<Experience[]>(() =>
      (experiences as Experience[]).slice(0, 3)
    );
    const featuredEducations = computed<Education[]>(() =>
      educations.slice(0, 2)
    );
    const featuredCertification = computed<Certification>(
      () => certifications[0]
    );
    const featuredPublication = computed<Publication>(() => publication);
    const navigateTo = (path: string) => movePage(router, route.path, path);

    return {
      search,
      filter,
      careerSignals,
      summaryCards,
      filterType,
      filteredTechs,
      featuredProjects,
      featuredExperiences,
      featuredEducations,
      featuredCertification,
      featuredPublication,
      navigateTo,
      applyFilters: () => {
        /* computed handles it; method retained for template clarity */
      },
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../css/tokens';

.home-page {
  height: auto;
  overflow: visible;
}

.hero-section {
  position: relative;
  isolation: isolate;
}

.hero-section,
.summary-section,
.technology-section,
.projects-section,
.experience-preview-section,
.education-preview-section {
  margin: 88px 0;
}

.hero-grid,
.technology-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(320px, 0.88fr);
  gap: 44px;
  align-items: center;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(24px);
  pointer-events: none;
  z-index: -1;
  opacity: 0.7;
  animation: float 16s ease-in-out infinite;
}

.hero-orb--teal {
  width: 280px;
  height: 280px;
  top: 24px;
  right: 28%;
  background: radial-gradient(circle, rgba(79, 216, 247, 0.22), transparent 68%);
}

.hero-orb--amber {
  width: 220px;
  height: 220px;
  bottom: -14px;
  right: -40px;
  background: radial-gradient(circle, rgba(255, 199, 107, 0.2), transparent 68%);
  animation-duration: 20s;
  animation-direction: reverse;
}

.hero-copy h1,
.section-copy h2,
.section-heading h2 {
  margin: 0;
  color: $text-strong;
  line-height: 1.05;
  letter-spacing: -0.01em;
}

.hero-copy h1 {
  max-width: 780px;
  font-size: clamp(42px, 7vw, 76px);
}

.hero-tagline {
  display: block;
  background: $grad-brand;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}

.hero-copy p,
.section-copy p,
.summary-card p {
  color: $text-base;
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
  color: $brand-amber;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.eyebrow::before {
  content: '';
  display: inline-block;
  width: 28px;
  height: 1px;
  background: $brand-amber;
  vertical-align: middle;
  margin-right: 12px;
  transform: translateY(-3px);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}

.hero-chip {
  padding: 5px 14px 5px 0;
  position: relative;
}

.hero-chip::after {
  content: '';
  position: absolute;
  left: 38px;
  right: -10px;
  top: 50%;
  height: 30px;
  transform: translateY(-50%);
  border-radius: $r-pill;
  background: linear-gradient(90deg, rgba(79, 216, 247, 0.14), rgba(255, 199, 107, 0.1), transparent);
  z-index: -1;
}

.profile-panel {
  position: relative;
  display: grid;
  gap: 18px;
  animation: float 9s ease-in-out infinite;
}

.profile-frame {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
  border-radius: $r-lg;
  border: 1px solid $border-subtle;
  background:
    radial-gradient(circle at top, rgba(79, 216, 247, 0.14), transparent 34%),
    linear-gradient(145deg, #17353b, #1f5053);
  box-shadow: $shadow-lg;
  animation: hero-glow-rise 1.1s $ease-emph both;
}

.profile-frame::after {
  content: '';
  position: absolute;
  inset: auto 18px 18px;
  height: 3px;
  background: $grad-brand;
  border-radius: $r-pill;
}

.profile-ring {
  position: absolute;
  inset: 12px;
  border-radius: calc(#{$r-lg} - 6px);
  border: 1px solid rgba(233, 244, 241, 0.14);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03);
  pointer-events: none;
}

.profile-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    transparent 35%,
    rgba(255, 255, 255, 0.08) 50%,
    transparent 65%
  );
  pointer-events: none;
  animation: shimmer-line 4.5s ease-in-out infinite;
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
  border: 1px solid $border-subtle;
  border-radius: $r-lg;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.015), rgba(255, 255, 255, 0)),
    $surface-1;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: $shadow-sm;
}

.signal {
  padding: 18px;
  transition: transform 0.3s $ease-emph, border-color 0.3s $ease-soft;
}

.signal:hover {
  transform: translateY(-3px);
  border-color: $border-accent;
}

.signal span {
  display: block;
  color: $text-strong;
  font-size: 22px;
  font-weight: 800;
  font-family: 'Space Grotesk', sans-serif;
}

.signal p {
  margin: 6px 0 0;
  color: $text-muted;
  font-size: 13px;
  line-height: 1.4;
}

.summary-card {
  padding: 28px;
  transition: transform 0.35s $ease-emph, border-color 0.35s $ease-soft,
    background 0.35s $ease-soft, box-shadow 0.35s $ease-soft;
}

.summary-card:hover,
.tech-panel:hover {
  border-color: $border-accent;
  background: $surface-2;
  transform: translateY(-6px);
  box-shadow: $shadow-md;
}

.summary-card:hover .summary-icon,
.experience-preview-card:hover .experience-preview-tag,
.education-highlight-card:hover .education-highlight-icon {
  transform: translateY(-2px) scale(1.03);
}

.summary-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: $r-md;
  background: linear-gradient(135deg, rgba(52, 226, 194, 0.2), rgba(79, 216, 247, 0.12), rgba(255, 199, 107, 0.1));
  border: 1px solid $border-subtle;
  color: $brand-teal;
  margin-bottom: 18px;
  transition: transform 0.35s $ease-emph, background 0.35s $ease-soft;
}

.summary-card h2 {
  margin: 0 0 10px;
  color: $text-strong;
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
  padding: 24px;
  transition: transform 0.35s $ease-emph, border-color 0.35s $ease-soft,
    background 0.35s $ease-soft, box-shadow 0.35s $ease-soft;
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
  color: $text-muted;
  font-size: 13px;
  text-align: center;
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

// ---------- Experience preview ----------
.experience-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}

.experience-preview-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  border-radius: $r-lg;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.015), rgba(255, 255, 255, 0)),
    $surface-1;
  border: 1px solid $border-subtle;
  transition: transform 0.35s $ease-emph, border-color 0.35s $ease-soft,
    background 0.35s $ease-soft, box-shadow 0.35s $ease-soft;
}

.experience-preview-card:hover {
  background: $surface-2;
  border-color: $border-accent;
  transform: translateY(-4px);
  box-shadow: $shadow-md;
}

.experience-preview-head {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.experience-preview-identity h3 {
  margin: 0 0 2px;
  font-size: 16px;
  color: $text-strong;
  line-height: 1.25;
}

.experience-preview-identity p {
  margin: 0;
  color: $brand-teal;
  font-size: 13px;
  font-weight: 600;
}

.experience-preview-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 12px;
  color: $text-muted;
}

.experience-preview-meta span {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.experience-preview-description {
  margin: 0;
  color: $text-base;
  line-height: 1.55;
  font-size: 13.5px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.experience-preview-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}

.experience-preview-tag {
  background: rgba(52, 226, 194, 0.11);
  color: $brand-teal;
  padding: 3px 9px;
  border-radius: $r-pill;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid rgba(52, 226, 194, 0.24);
  transition: transform 0.35s $ease-emph, background 0.35s $ease-soft;
}

// ---------- Education preview ----------
.education-preview-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 18px;
  align-items: stretch;
}

.education-preview-card,
.education-highlight-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 28px;
  border-radius: $r-lg;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.015), rgba(255, 255, 255, 0)),
    $surface-1;
  border: 1px solid $border-subtle;
  transition: transform 0.35s $ease-emph, border-color 0.35s $ease-soft,
    background 0.35s $ease-soft, box-shadow 0.35s $ease-soft;
}

.education-preview-card:hover,
.education-highlight-card:hover {
  background: $surface-2;
  border-color: $border-accent;
  transform: translateY(-4px);
  box-shadow: $shadow-md;
}

.education-preview-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.education-preview-degree {
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: $brand-amber;
  font-weight: 700;
  margin-bottom: 4px;
}

.education-preview-copy h3 {
  margin: 0;
  font-size: 18px;
  color: $text-strong;
  line-height: 1.25;
}

.education-preview-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 12px;
  color: $text-muted;
}

.education-preview-meta span {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.education-preview-description {
  margin: 0;
  color: $text-base;
  line-height: 1.6;
  font-size: 13.5px;
}

.education-preview-achievements {
  margin: 0;
  padding-left: 18px;
  color: $text-base;
  font-size: 13px;
  line-height: 1.55;
}

.education-preview-achievements li {
  margin-bottom: 4px;
}

.education-highlight-badge {
  display: inline-block;
  width: fit-content;
  padding: 3px 12px;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: $brand-amber;
  background: rgba(255, 199, 107, 0.12);
  border: 1px solid rgba(255, 199, 107, 0.26);
  border-radius: $r-pill;
}

.education-highlight-block {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.education-highlight-block p {
  margin: 4px 0 0;
  color: $text-muted;
  font-size: 12.5px;
  line-height: 1.5;
}

.education-highlight-icon {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: $r-md;
  background: linear-gradient(135deg, rgba(52, 226, 194, 0.2), rgba(79, 216, 247, 0.12), rgba(255, 199, 107, 0.1));
  border: 1px solid $border-subtle;
  color: $brand-teal;
  transition: transform 0.35s $ease-emph, background 0.35s $ease-soft;
}

.education-highlight-icon.secondary {
  color: $brand-amber;
}

.education-highlight-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: $text-strong;
  line-height: 1.3;
}

.education-highlight-divider {
  height: 1px;
  background: $border-subtle;
}

@media (max-width: $bp-md) {
  .hero-grid,
  .technology-grid,
  .education-preview-grid {
    grid-template-columns: 1fr;
  }

  .profile-panel {
    max-width: 520px;
  }

  .summary-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: $bp-sm) {
  .hero-section,
  .summary-section,
  .technology-section,
  .projects-section,
  .experience-preview-section,
  .education-preview-section {
    margin: 56px 0;
  }

  .hero-copy h1 {
    font-size: 40px;
  }

  .hero-orb--teal {
    width: 180px;
    height: 180px;
    right: 8%;
  }

  .hero-orb--amber {
    width: 140px;
    height: 140px;
    right: -22px;
  }

  .hero-actions,
  .section-heading {
    align-items: stretch;
    flex-direction: column;
  }

  .signal-list,
  .search-section {
    grid-template-columns: 1fr;
  }
}
</style>

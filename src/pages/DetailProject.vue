<template>
  <q-page class="detail-page">
    <div class="detail-container">
      <button type="button" class="btn btn--soft btn--sm" @click="goBack">
        <Icon icon="mdi:arrow-left" class="leading-icon" />
        <span>Back</span>
      </button>

      <header class="project-hero" data-reveal="hero">
        <div class="project-hero__glow project-hero__glow--teal" aria-hidden="true"></div>
        <div class="project-hero__glow project-hero__glow--amber" aria-hidden="true"></div>

        <div class="project-header">
          <div class="eyebrow">{{ Project.type }}</div>
          <h1 class="project-title">{{ Project.name }}</h1>
          <p class="project-intro">{{ Project.description }}</p>

          <div class="project-links" v-if="Project.url || Project.urlGithub">
            <a
              v-if="Project.url"
              :href="Project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--primary"
            >
              <Icon icon="mdi:open-in-new" />
              <span>Live Demo</span>
            </a>
            <a
              v-if="Project.urlGithub"
              :href="Project.urlGithub"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--ghost"
            >
              <Icon icon="mdi:github" />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        <div class="project-summary-grid">
          <article class="project-summary-card">
            <div class="project-summary-label">Screens</div>
            <div class="project-summary-value">{{ Project.image.length }}</div>
            <p>Gallery highlights from the product flow.</p>
          </article>
          <article class="project-summary-card">
            <div class="project-summary-label">Stack</div>
            <div class="project-summary-value">{{ techStack.length }}</div>
            <p>Core technologies used in the implementation.</p>
          </article>
          <article class="project-summary-card">
            <div class="project-summary-label">Highlights</div>
            <div class="project-summary-value">{{ featureCount }}</div>
            <p>Feature blocks that explain the work in more detail.</p>
          </article>
        </div>
      </header>

      <section class="project-media" data-reveal>
        <div class="section-head">
          <h2 class="section-title">Gallery</h2>
          <p class="section-copy">A cleaner look at the product screens and supporting visuals.</p>
        </div>
        <carousel-component :Photo="Project.image" />
      </section>

      <section class="project-overview" data-reveal>
        <div class="section-head">
          <h2 class="section-title">Overview</h2>
          <p class="section-copy">
            What the product does, who it serves, and where the work became interesting.
          </p>
        </div>
        <p class="project-description">{{ Project.description }}</p>
      </section>

      <section
        v-if="Project.technology && techStack.length"
        class="project-tech"
        data-reveal
      >
        <div class="section-head">
          <h2 class="section-title">Technology Stack</h2>
          <p class="section-copy">The stack behind the product, delivery flow, and supporting systems.</p>
        </div>
        <div class="tech-grid">
          <div
            v-for="tech in techStack"
            :key="tech.id"
            class="tech-item"
          >
            <Icon :icon="tech.icon" height="22px" />
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </section>

      <section
        v-if="Project.DetailExplain && Project.DetailExplain.length"
        class="project-features"
        data-reveal
      >
        <div class="section-head">
          <h2 class="section-title">Highlights</h2>
          <p class="section-copy">A closer look at the parts of the project that matter most.</p>
        </div>
        <detail-explain
          v-for="(item, idx) in Project.DetailExplain"
          :key="idx"
          :DetailExplain="item"
        />
      </section>

      <section v-if="Project.demoVideo" class="project-demo" data-reveal>
        <h2 class="section-title">Demo Video</h2>
        <q-video :ratio="16 / 9" :src="Project.demoVideo" class="video-frame" />
      </section>
    </div>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watch } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute, useRouter } from 'vue-router';
import CarouselComponent from '../components/CarouselComponent.vue';
import DetailExplain from '../components/DetailExplain.vue';
import Projects from '../data/Projects';
import Skills from '../data/Skills';
import { slugifyProjectName } from '../functions/projectSlug';
import type { Project, Skill } from '../components/models';

export default defineComponent({
  name: 'DetailProject',
  components: { Icon, CarouselComponent, DetailExplain },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const emptyProject: Project = {
      id: '',
      name: '',
      type: '',
      description: '',
      urlGithub: '',
      image: [],
      technology: [],
    };

    const resolveProject = (value: string): Project | undefined =>
      Projects.find(
        (project) =>
          project.id === value || slugifyProjectName(project.name) === value
      );

    const Project = computed<Project>(() => {
      const slug = route.params.slug as string;
      return resolveProject(slug) ?? emptyProject;
    });

    const syncCanonicalSlug = () => {
      const slug = route.params.slug as string;
      const currentProject = resolveProject(slug);

      if (!currentProject) {
        router.push('/404');
        return;
      }

      const canonicalSlug = slugifyProjectName(currentProject.name);
      if (slug !== canonicalSlug) {
        void router.replace(`/detail-project/${canonicalSlug}`);
      }
    };

    onMounted(syncCanonicalSlug);
    watch(() => route.params.slug, syncCanonicalSlug);

    const techStack = computed<Skill[]>(() =>
      Project.value.technology
        .map((id) => Skills.find((s) => s.id === id))
        .filter((s): s is Skill => Boolean(s))
    );

    const featureCount = computed(
      () => Project.value.DetailExplain?.length ?? 0
    );

    const goBack = () => {
      if (window.history.length > 1) {
        router.back();
      } else {
        router.push('/projects');
      }
    };

    return { Project, techStack, featureCount, goBack };
  },
});
</script>

<style lang="scss" scoped>
@import '../css/tokens';

.detail-page {
  height: auto;
  overflow: visible;
}

.detail-container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 8px;
}

.btn--soft {
  margin-bottom: 24px;
}

.project-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: 22px;
  margin-bottom: 32px;
  padding: 30px;
  border-radius: $r-lg;
  border: 1px solid $border-subtle;
  background:
    radial-gradient(circle at top left, rgba(79, 216, 247, 0.12), transparent 24%),
    radial-gradient(circle at 82% 18%, rgba(255, 199, 107, 0.1), transparent 18%),
    linear-gradient(145deg, rgba(18, 43, 49, 0.94), rgba(10, 24, 28, 0.98));
  box-shadow: $shadow-md;
  overflow: hidden;
}

.project-hero__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(30px);
  pointer-events: none;
  opacity: 0.6;
}

.project-hero__glow--teal {
  width: 240px;
  height: 240px;
  top: -60px;
  right: 24%;
  background: radial-gradient(circle, rgba(79, 216, 247, 0.2), transparent 68%);
}

.project-hero__glow--amber {
  width: 180px;
  height: 180px;
  right: -40px;
  bottom: -30px;
  background: radial-gradient(circle, rgba(255, 199, 107, 0.18), transparent 68%);
}

.project-header {
  position: relative;
  z-index: 1;
  max-width: 760px;
}

.eyebrow {
  display: inline-block;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: $brand-amber;
  background: rgba(255, 199, 107, 0.12);
  border: 1px solid rgba(255, 199, 107, 0.26);
  border-radius: $r-pill;
  margin-bottom: 18px;
}

.project-title {
  margin: 0 0 18px;
  font-size: clamp(32px, 5vw, 52px);
  line-height: 1.1;
  background: linear-gradient(135deg, $text-strong 0%, $text-base 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.project-intro {
  margin: 0;
  color: $text-base;
  line-height: 1.78;
  font-size: 15.5px;
  max-width: 720px;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.project-summary-grid {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 12px;
  align-self: end;
}

.project-summary-card {
  padding: 18px 18px 16px;
  border-radius: $r-md;
  background: rgba(236, 247, 244, 0.06);
  border: 1px solid rgba(236, 247, 244, 0.12);
  backdrop-filter: blur(12px);
}

.project-summary-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: $brand-teal;
}

.project-summary-value {
  margin-top: 8px;
  color: $text-strong;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 1;
}

.project-summary-card p {
  margin: 10px 0 0;
  color: $text-muted;
  font-size: 13px;
  line-height: 1.55;
}

.project-media {
  padding: 14px;
  border-radius: $r-lg;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.015), rgba(255, 255, 255, 0)),
    $surface-1;
  border: 1px solid $border-subtle;
  box-shadow: $shadow-sm;
}

.project-overview,
.project-tech,
.project-features,
.project-demo {
  margin-top: 28px;
  padding: 28px;
  border-radius: $r-lg;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.015), rgba(255, 255, 255, 0)),
    $surface-1;
  border: 1px solid $border-subtle;
  box-shadow: $shadow-sm;
}

.section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 18px;
}

.section-copy {
  max-width: 440px;
  margin: 0;
  color: $text-muted;
  font-size: 13.5px;
  line-height: 1.6;
  text-align: right;
}

.section-title {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: $text-strong;
  position: relative;
  padding-bottom: 10px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 44px;
  height: 3px;
  border-radius: $r-pill;
  background: $grad-brand;
}

.project-description {
  color: $text-base;
  line-height: 1.75;
  font-size: 15.5px;
  margin: 0;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 10px;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: $r-md;
  background: $surface-1;
  border: 1px solid $border-subtle;
  color: $text-base;
  font-size: 13.5px;
  font-weight: 500;
  transition: all 0.3s $ease-emph;
}

.tech-item:hover {
  border-color: $border-accent;
  background: $surface-2;
  color: $text-strong;
  transform: translateY(-2px);
}

.video-frame {
  border-radius: $r-lg;
  overflow: hidden;
  border: 1px solid $border-subtle;
}

@media (max-width: $bp-md) {
  .project-hero {
    grid-template-columns: 1fr;
  }

  .section-head {
    align-items: flex-start;
    flex-direction: column;
  }

  .section-copy {
    max-width: none;
    text-align: left;
  }
}

@media (max-width: $bp-sm) {
  .detail-container {
    padding: 18px 6px;
  }

  .project-hero {
    padding: 22px;
  }

  .project-media,
  .project-overview,
  .project-tech,
  .project-features,
  .project-demo {
    padding: 18px;
  }
}
</style>

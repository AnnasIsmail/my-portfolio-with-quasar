<template>
  <q-page class="detail-page">
    <div class="detail-container">
      <button type="button" class="btn btn--soft btn--sm" @click="goBack">
        <Icon icon="mdi:arrow-left" class="leading-icon" />
        <span>Back</span>
      </button>

      <header class="project-header" data-reveal>
        <div class="eyebrow">{{ Project.type }}</div>
        <h1 class="project-title">{{ Project.name }}</h1>

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
      </header>

      <section class="project-media" data-reveal>
        <carousel-component :Photo="Project.image" />
      </section>

      <section class="project-overview" data-reveal>
        <h2 class="section-title">Overview</h2>
        <p class="project-description">{{ Project.description }}</p>
      </section>

      <section
        v-if="Project.technology && techStack.length"
        class="project-tech"
        data-reveal
      >
        <h2 class="section-title">Technology Stack</h2>
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
        <h2 class="section-title">Features</h2>
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
import { computed, defineComponent, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute, useRouter } from 'vue-router';
import CarouselComponent from '../components/CarouselComponent.vue';
import DetailExplain from '../components/DetailExplain.vue';
import Projects from '../data/Projects';
import Skills from '../data/Skills';
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

    const Project = computed<Project>(() => {
      const id = route.params.id as string;
      return Projects.find((p) => p.id === id) ?? emptyProject;
    });

    onMounted(() => {
      const id = route.params.id as string;
      if (!Projects.find((p) => p.id === id)) {
        router.push('/404');
      }
    });

    const techStack = computed<Skill[]>(() =>
      Project.value.technology
        .map((id) => Skills.find((s) => s.id === id))
        .filter((s): s is Skill => Boolean(s))
    );

    const goBack = () => {
      if (window.history.length > 1) {
        router.back();
      } else {
        router.push('/projects');
      }
    };

    return { Project, techStack, goBack };
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
  max-width: 1080px;
  margin: 0 auto;
  padding: 32px 8px;
}

.btn--soft {
  margin-bottom: 24px;
}

.project-header {
  margin-bottom: 32px;
}

.eyebrow {
  display: inline-block;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: $brand-amber;
  background: rgba(244, 184, 96, 0.10);
  border: 1px solid rgba(244, 184, 96, 0.24);
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

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.section-title {
  margin: 36px 0 16px;
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

@media (max-width: $bp-sm) {
  .detail-container {
    padding: 18px 6px;
  }
}
</style>

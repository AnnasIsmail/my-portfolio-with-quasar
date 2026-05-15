<template>
  <q-page class="projects-page">
    <header class="page-header" data-reveal>
      <div class="eyebrow">Portfolio</div>
      <h1 class="section-title">
        <span class="gradient-text">My Projects</span>
      </h1>
      <p class="page-description">
        A selection of products, internal tools, and web applications I have
        built or contributed to.
      </p>
    </header>

    <section class="projects-section" data-reveal>
      <div class="projects-grid">
        <projects-card
          v-for="(data, idx) in projects"
          :key="data.id"
          :Project="data"
          compact
          data-reveal
          :data-reveal-delay="(idx % 4) + 1"
        />
      </div>
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectsCard from '../components/ProjectsCard.vue';
import Projects from '../data/Projects';
import type { Project } from '../components/models';

export default defineComponent({
  name: 'ProjectsPage',
  components: { ProjectsCard },
  setup() {
    const projects = Projects as Project[];

    return { projects };
  },
});
</script>

<style lang="scss" scoped>
@import '../css/tokens';

.projects-page {
  height: auto;
  overflow: visible;
  padding-top: 36px;
}

.page-header {
  text-align: center;
  margin-bottom: 56px;
}

.eyebrow {
  display: inline-block;
  padding: 4px 14px;
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

.section-title {
  position: relative;
  display: inline-block;
  margin: 0 0 16px;
  font-size: clamp(34px, 5vw, 52px);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: $grad-brand;
  border-radius: $r-pill;
}

.page-description {
  color: $text-base;
  max-width: 620px;
  margin: 24px auto 0;
  line-height: 1.7;
  font-size: 15px;
}

.projects-section {
  background: $surface-glass;
  border: 1px solid $border-subtle;
  border-radius: $r-lg;
  padding: 36px;
  backdrop-filter: blur(10px);
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

@media (max-width: $bp-md) {
  .projects-section {
    padding: 26px;
  }
}

@media (max-width: $bp-sm) {
  .projects-page {
    padding-top: 20px;
  }

  .projects-section {
    padding: 22px;
  }
}
</style>

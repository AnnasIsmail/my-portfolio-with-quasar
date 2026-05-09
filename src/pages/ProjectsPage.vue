<template>
  <q-page class="projects-page">
    <header class="page-header" data-reveal>
      <div class="eyebrow">Portfolio</div>
      <h1 class="section-title">
        <span class="gradient-text">My Projects</span>
      </h1>
      <p class="page-description">
        A comprehensive showcase of my professional enterprise projects and
        personal development initiatives.
      </p>
    </header>

    <div class="project-categories">
      <section
        v-for="(group, gIdx) in groups"
        :key="group.title"
        class="category-section"
        data-reveal
        :data-reveal-delay="gIdx + 1"
      >
        <div class="category-header">
          <Icon :icon="group.icon" width="22px" />
          <span>{{ group.title }}</span>
          <span class="count-badge">{{ group.items.length }}</span>
        </div>
        <div class="projects-grid">
          <projects-card
            v-for="(data, idx) in group.items"
            :key="data.id"
            :Project="data"
            data-reveal
            :data-reveal-delay="(idx % 4) + 1"
          />
        </div>
      </section>
    </div>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import ProjectsCard from '../components/ProjectsCard.vue';
import Projects from '../data/Projects';
import type { Project } from '../components/models';

export default defineComponent({
  name: 'ProjectsPage',
  components: { ProjectsCard, Icon },
  setup() {
    const personalProjectNames = [
      'CPNS Tryouts',
      'GCONN',
      'Account Nguk',
      'My Portfolio',
    ];
    const data = Projects as Project[];

    const groups = computed(() => [
      {
        title: 'Professional Projects',
        icon: 'mdi:briefcase-variant-outline',
        items: data.filter((p) => !personalProjectNames.includes(p.name)),
      },
      {
        title: 'Personal Projects',
        icon: 'mdi:code-tags',
        items: data.filter((p) => personalProjectNames.includes(p.name)),
      },
    ]);

    return { groups };
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

.project-categories {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.category-section {
  background: $surface-glass;
  border: 1px solid $border-subtle;
  border-radius: $r-lg;
  padding: 36px;
  backdrop-filter: blur(10px);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  color: $text-strong;
  margin-bottom: 24px;
  padding-bottom: 14px;
  border-bottom: 1px solid $border-subtle;
}

.category-header :deep(svg),
.category-header > svg {
  color: $brand-teal;
}

.count-badge {
  margin-left: auto;
  padding: 3px 10px;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: $brand-teal;
  background: rgba(45, 212, 191, 0.12);
  border: 1px solid rgba(45, 212, 191, 0.28);
  border-radius: $r-pill;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

@media (max-width: $bp-md) {
  .category-section {
    padding: 26px;
  }
}

@media (max-width: $bp-sm) {
  .projects-page {
    padding-top: 20px;
  }

  .category-section {
    padding: 22px;
  }
}
</style>

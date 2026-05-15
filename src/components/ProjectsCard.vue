<template>
  <article
    class="project-card"
    :class="{ 'project-card--compact': compact }"
    role="link"
    tabindex="0"
    @click="goToDetail"
    @keydown.enter.prevent="goToDetail"
    @keydown.space.prevent="goToDetail"
  >
    <div class="project-image-section">
      <div
        v-if="Project.urlGithub || Project.url"
        class="project-actions"
      >
        <a
          v-if="Project.urlGithub"
          :href="Project.urlGithub"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--soft btn--icon btn--sm"
          aria-label="View source code"
          @click.stop
        >
          <Icon icon="mdi:github" />
          <q-tooltip class="glass-tooltip">View Code</q-tooltip>
        </a>
        <a
          v-if="Project.url"
          :href="Project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--soft btn--icon btn--sm"
          aria-label="Open live demo"
          @click.stop
        >
          <Icon icon="mdi:open-in-new" />
          <q-tooltip class="glass-tooltip">Live Demo</q-tooltip>
        </a>
      </div>

      <div class="project-image-wrapper">
        <q-img
          :src="Project.image[0]"
          alt="Project preview"
          class="project-image"
        />
        <div class="image-overlay">
          <Icon icon="mdi:arrow-top-right" height="34px" />
          <span>View Details</span>
        </div>
      </div>
    </div>

    <div class="project-content">
      <div class="project-type">{{ Project.type }}</div>
      <h3 class="project-title">
        {{ Project.name }}
      </h3>
      <p class="project-description">
        {{ Project.description }}
      </p>
      <div class="tech-stack">
        <div
          v-for="tech in visibleTechStack"
          :key="tech.id"
          class="tech-chip-wrap"
          @click.stop
        >
          <chip-technology :Skill="tech" />
        </div>
        <div
          v-if="compact && techStack.length > visibleTechStack.length"
          class="tech-more"
          @click.stop
        >
          +{{ techStack.length - visibleTechStack.length }}
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute, useRouter } from 'vue-router';
import { movePage } from '../functions/movePage';
import { slugifyProjectName } from '../functions/projectSlug';
import ChipTechnology from './ChipTechnology.vue';
import Skills from '../data/Skills';
import type { Project, Skill } from './models';

export default defineComponent({
  name: 'ProjectsCard',
  components: { Icon, ChipTechnology },
  props: {
    Project: {
      type: Object as () => Project,
      required: true,
    },
    compact: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const techStack = computed<Skill[]>(() =>
      props.Project.technology
        .map((id) => Skills.find((s) => s.id === id))
        .filter((s): s is Skill => Boolean(s))
    );
    const visibleTechStack = computed<Skill[]>(() =>
      props.compact ? techStack.value.slice(0, 5) : techStack.value
    );

    const goToDetail = () =>
      movePage(
        router,
        route.path,
        `/detail-project/${slugifyProjectName(props.Project.name)}`
      );

    return { techStack, visibleTechStack, goToDetail };
  },
});
</script>

<style lang="scss" scoped>
@import '../css/tokens';

.project-card {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  min-height: 220px;
  border-radius: $r-lg;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.015), rgba(255, 255, 255, 0)),
    $surface-1;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid $border-subtle;
  box-shadow: $shadow-sm;
  transition: transform 0.4s $ease-emph, border-color 0.4s $ease-soft,
    background 0.4s $ease-soft, box-shadow 0.4s $ease-soft;
  position: relative;
  cursor: pointer;
}

.project-card:focus-visible {
  outline: 2px solid $brand-teal;
  outline-offset: 4px;
}

.project-card--compact {
  grid-template-columns: minmax(220px, 0.72fr) minmax(0, 1.28fr);
  min-height: 168px;
}

.project-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: $grad-brand;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.45s $ease-emph;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: $border-accent;
  box-shadow: 0 22px 56px rgba(45, 212, 191, 0.18);
  background: $surface-2;
}

.project-card:hover::after {
  transform: scaleY(1);
}

.project-image-section {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  background: linear-gradient(
    135deg,
    rgba(20, 48, 56, 0.76) 0%,
    rgba(24, 59, 64, 0.92) 52%,
    rgba(18, 43, 49, 0.9) 100%
  );
}

.project-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  z-index: 2;
}

.project-image-wrapper {
  position: relative;
  flex: 1;
  overflow: hidden;
  border-radius: $r-md;
  border: 1px solid $border-subtle;
  min-height: 160px;
}

.project-card--compact .project-image-section {
  padding: 12px;
  gap: 10px;
}

.project-card--compact .project-image-wrapper {
  min-height: 132px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s $ease-emph;
}

.image-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: linear-gradient(
    135deg,
    rgba(10, 24, 28, 0.82) 0%,
    rgba(79, 216, 247, 0.18) 48%,
    rgba(255, 199, 107, 0.12) 100%
  );
  color: $text-strong;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  opacity: 0;
  transition: opacity 0.3s $ease-soft;
}

.project-image-wrapper:hover .image-overlay {
  opacity: 1;
}

.project-image-wrapper:hover .project-image {
  transform: scale(1.08);
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px 26px;
}

.project-card--compact .project-content {
  gap: 8px;
  padding: 18px 20px;
}

.project-type {
  display: inline-block;
  width: fit-content;
  padding: 3px 10px;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: $brand-amber;
  background: rgba(255, 199, 107, 0.12);
  border: 1px solid rgba(255, 199, 107, 0.26);
  border-radius: $r-pill;
}

.project-title {
  margin: 4px 0 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.2;
  color: $text-strong;
  transition: color 0.3s $ease-soft;
  background: linear-gradient(135deg, $text-strong 0%, $text-base 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.project-card--compact .project-title {
  font-size: 21px;
  line-height: 1.18;
}

.project-title:hover {
  background: $grad-brand;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.project-description {
  margin: 0;
  color: $text-base;
  font-size: 14px;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  transition: color 0.3s $ease-soft;
}

.project-card--compact .project-description {
  font-size: 13.5px;
  line-height: 1.55;
  -webkit-line-clamp: 2;
}

.project-description:hover {
  color: $text-strong;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 6px;
}

.project-card--compact .tech-stack {
  gap: 5px;
  padding-top: 2px;
}

.tech-chip-wrap {
  display: inline-flex;
}

.tech-more {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 38px;
  height: 32px;
  padding: 0 10px;
  border-radius: $r-md;
  background: rgba(236, 247, 244, 0.07);
  border: 1px solid $border-subtle;
  color: $text-muted;
  font-size: 12px;
  font-weight: 700;
}

.glass-tooltip {
  background: rgba(7, 17, 19, 0.95) !important;
  border: 1px solid $border-subtle;
  border-radius: $r-sm;
  font-size: 12px;
  font-weight: 600;
  color: $text-strong;
}

@media (max-width: $bp-sm) {
  .project-card {
    grid-template-columns: 1fr !important;
  }

  .project-image-section {
    min-height: 220px;
  }

  .project-content {
    padding: 22px;
  }

  .project-title {
    font-size: 22px;
  }
}
</style>

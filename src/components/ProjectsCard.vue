<template>
  <article class="project-card">
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

      <div class="project-image-wrapper" @click="goToDetail">
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
      <h3 class="project-title" @click="goToDetail">
        {{ Project.name }}
      </h3>
      <p class="project-description" @click="goToDetail">
        {{ Project.description }}
      </p>
      <div class="tech-stack">
        <chip-technology
          v-for="tech in techStack"
          :key="tech.id"
          :Skill="tech"
        />
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute, useRouter } from 'vue-router';
import { movePage } from '../functions/movePage';
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
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const techStack = computed<Skill[]>(() =>
      props.Project.technology
        .map((id) => Skills.find((s) => s.id === id))
        .filter((s): s is Skill => Boolean(s))
    );

    const goToDetail = () =>
      movePage(router, route.path, `/detail-project/${props.Project.id}`);

    return { techStack, goToDetail };
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
  background: $surface-1;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid $border-subtle;
  box-shadow: $shadow-sm;
  transition: transform 0.4s $ease-emph, border-color 0.4s $ease-soft,
    background 0.4s $ease-soft, box-shadow 0.4s $ease-soft;
  position: relative;
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
    rgba(13, 34, 43, 0.65) 0%,
    rgba(26, 52, 58, 0.85) 100%
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
  cursor: pointer;
  border-radius: $r-md;
  border: 1px solid $border-subtle;
  min-height: 160px;
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
    rgba(7, 17, 19, 0.78) 0%,
    rgba(45, 212, 191, 0.18) 100%
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

.project-type {
  display: inline-block;
  width: fit-content;
  padding: 3px 10px;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: $brand-amber;
  background: rgba(244, 184, 96, 0.10);
  border: 1px solid rgba(244, 184, 96, 0.24);
  border-radius: $r-pill;
}

.project-title {
  margin: 4px 0 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.2;
  color: $text-strong;
  cursor: pointer;
  transition: color 0.3s $ease-soft;
  background: linear-gradient(135deg, $text-strong 0%, $text-base 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  cursor: pointer;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  transition: color 0.3s $ease-soft;
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

<template>
  <div class="project-card glass-card">
    <div class="project-image-section">
      <div v-if="Project.urlGithub || Project.url" class="project-actions">
        <q-btn
          v-if="Project.urlGithub"
          class="action-btn"
          :href="Project.urlGithub"
          target="_blank"
          unelevated
          round
        >
          <Icon icon="mdi:code" height="20px" />
          <q-tooltip
            class="glass-tooltip"
            transition-show="scale"
            transition-hide="scale"
          >
            <span class="gradient-text">View Code</span>
          </q-tooltip>
        </q-btn>
        <q-btn
          v-if="Project.url"
          class="action-btn"
          :href="Project.url"
          target="_blank"
          unelevated
          round
        >
          <Icon icon="ic:outline-arrow-outward" height="20px" />
          <q-tooltip
            class="glass-tooltip"
            transition-show="scale"
            transition-hide="scale"
          >
            <span class="gradient-text">Live Demo</span>
          </q-tooltip>
        </q-btn>
      </div>
      <div class="project-image-wrapper" @click="movePageToDetail">
        <q-img
          :src="Project.image[0]"
          alt="Project preview"
          class="project-image"
        />
        <div class="image-overlay">
          <Icon icon="ic:outline-arrow-outward" height="40px" color="white" />
        </div>
      </div>
    </div>
    <div class="project-content">
      <div class="project-type">
        {{ Project.type }}
      </div>
      <div class="project-title" @click="movePageToDetail">
        {{ Project.name }}
      </div>
      <div class="project-description" @click="movePageToDetail">
        {{ Project.description }}
      </div>
      <div class="tech-stack">
        <chip-technology
          v-for="tech in Project.technology"
          :key="tech"
          :Skill="getTechnology(tech)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import { Project } from './models';
import { movePage } from '../functions/movePage';
import ChipTechnology from 'src/components/ChipTechnology.vue';
import Skills from 'src/data/Skills';

export default defineComponent({
  name: 'ProjectCard',
  props: {
    Project: {
      type: Object as () => Project,
      required: true,
    },
  },
  components: {
    Icon,
    ChipTechnology,
  },
  data() {
    return {
      styleFontTooltip:
        'background-image: linear-gradient(to bottom right,#2dd4bf 40%,#f4b860 60%);background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;',
      Skills,
    };
  },
  methods: {
    movePageToDetail() {
      movePage(`/detail-project/${this.Project.id}`, this);
    },
    getTechnology(id: string) {
      return Skills.find((data) => data.id === id);
    },
  },
});
</script>

<style scoped>
.project-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  min-height: 150px;
  max-height: 300px;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 48px rgba(1, 166, 147, 0.18);
}

.project-image-section {
  background: linear-gradient(
    135deg,
    rgba(13, 34, 43, 0.9) 0%,
    rgba(26, 52, 58, 0.95) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 20px;
  gap: 15px;
}

.project-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
  z-index: 2;
}

.action-btn {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 8px;
  min-width: 40px;
  min-height: 40px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.action-btn:hover {
  background: rgba(45, 212, 191, 0.18);
  border-color: rgba(45, 212, 191, 0.45);
  transform: scale(1.1);
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  flex: 1;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-image-wrapper:hover .image-overlay {
  opacity: 1;
}

.project-image-wrapper:hover .project-image {
  transform: scale(1.1);
}

.project-content {
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-type {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0;
  color: #f4b860;
}

.project-title {
  font-size: 28px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #fff 0%, #e0e0e0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.project-title:hover {
  background: linear-gradient(135deg, #2dd4bf 0%, #f4b860 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.project-description {
  margin-top: 8px;
  color: #d6d6d6;
  font-size: 14px;
  line-height: 1.6;
  overflow: hidden;
  cursor: pointer;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  transition: color 0.3s ease;
}

.project-description:hover {
  color: #ffffff;
}

.tech-stack {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.glass-tooltip {
  background: rgba(50, 52, 67, 0.95) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 600px) {
  .project-card {
    grid-template-columns: 1fr !important;
    grid-template-rows: 250px auto !important;
    max-height: none !important;
  }

  .project-image-section {
    max-height: 250px;
  }

  .project-content {
    padding: 20px;
  }

  .project-title {
    font-size: 24px;
  }
}
</style>

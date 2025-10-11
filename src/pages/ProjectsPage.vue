<template>
  <q-page style="height: auto; overflow: hidden">
    <input type="hidden" id="move-page" @click="movePage" />
    <q-intersection
      style="min-height: 500px; padding-top: 30px"
      class="main-bio-intersection"
      :threshold="0.1"
      :root-margin="'50px'"
    >
      <transition
        appear
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOut"
        :style="{ animationDuration: '0.6s', animationDelay: '0.1s' }"
      >
        <div v-if="showElement">
          <div class="page-header">
            <div class="text-h3 text-weight-bold section-title">
              <span class="gradient-text">My Projects</span>
            </div>
            <div class="text-body1 text-weight-regular page-description">
              A comprehensive showcase of my professional enterprise projects
              and personal development initiatives
            </div>
          </div>

          <!-- Project Categories -->
          <div class="project-categories">
            <div class="category-section">
              <div class="category-header">
                <Icon icon="mdi:briefcase" width="24px" />
                <span>Professional Projects</span>
              </div>
              <div class="projects-grid">
                <projects-card
                  v-for="(data, index) in professionalProjects"
                  :key="data.name"
                  :Project="data"
                  :style="{ animationDelay: `${0.05 * index}s` }"
                  class="project-item"
                />
              </div>
            </div>

            <div class="category-section">
              <div class="category-header">
                <Icon icon="mdi:code-tags" width="24px" />
                <span>Personal Projects</span>
              </div>
              <div class="projects-grid">
                <projects-card
                  v-for="(data, index) in personalProjects"
                  :key="data.name"
                  :Project="data"
                  :style="{ animationDelay: `${0.05 * index}s` }"
                  class="project-item"
                />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </q-intersection>
  </q-page>
</template>

<script lang="ts">
import Projects from 'src/data/Projects';
import { defineComponent } from 'vue';
import ProjectsCard from '../components/ProjectsCard.vue';
import { Project } from '../components/models';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'ProjectsPage',
  components: {
    ProjectsCard,
    Icon,
  },
  data() {
    return {
      styleFontTooltip:
        'background-image: linear-gradient(to bottom right,rgba(59, 246, 134, 1) 40%,rgba(76, 169, 255, 1) 60%);background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;',
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
  methods: {
    movePage() {
      this.showElement = false;
    },
  },
  setup() {
    const dataProjects = Projects as Project[];

    // Separate professional and personal projects
    const professionalProjects = dataProjects.filter(
      (project) =>
        project.type === 'Enterprise Application' ||
        project.type === 'Full-Stack Development' ||
        project.type === 'Web Development'
    );

    const personalProjects = dataProjects.filter(
      (project) =>
        project.name === 'GCONN' ||
        project.name === 'Account Nguk' ||
        project.name === 'My Portfolio'
    );

    return {
      dataProjects,
      professionalProjects,
      personalProjects,
    };
  },
});
</script>

<style scoped>
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
  background: linear-gradient(
    90deg,
    rgba(59, 246, 134, 1),
    rgba(76, 169, 255, 1)
  );
  border-radius: 2px;
}

.page-description {
  color: #d6d6d6;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.project-categories {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.category-section {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(59, 246, 134, 0.3);
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 40px;
}

.project-item {
  animation: fadeInUp 0.6s ease-out backwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .project-categories {
    gap: 40px;
  }

  .category-section {
    padding: 25px;
  }
}

@media (max-width: 600px) {
  .projects-grid {
    gap: 20px;
  }
}
</style>

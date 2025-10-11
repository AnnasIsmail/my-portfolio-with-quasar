<template>
  <q-page style="height: auto; overflow: hidden">
    <input type="hidden" id="move-page" @click="movePageDocument" />
    <q-intersection style="min-height: 500px" class="main-bio-intersection">
      <div
        class="main-bio"
        style="
          display: grid;
          grid-template-rows: auto auto;
          grid-template-columns: 200px 50% auto;
          align-items: start;
          gap: 10px;
          transition: all 1s ease-in-out;
        "
      >
        <transition
          appear
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOut"
          :style="{ animationDuration: '1s', animationDelay: '0.1s' }"
        >
          <div
            class="text-h4 text-weight-bold main-bio-item-1 hero-text floating-text"
            v-if="showElement"
          >
            Hello, I'm
            <span class="gradient-text typing-animation">Annas</span>, a
            passionate Full-Stack Developer with a Master's in Computer
            Engineering. I specialize in building enterprise-grade applications
            using modern technologies like .NET, React.js, and Azure cloud
            services.
          </div>
        </transition>
        <transition
          appear
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
          :style="{ animationDuration: '0.8s', animationDelay: '0.2s' }"
        >
          <div
            class="main-bio-item-2 profile-image-container pulse-image"
            v-if="showElement"
          >
            <q-img
              src="~assets/photo.png"
              class="profile-image rotating-image"
            />
            <div class="image-glow"></div>
          </div>
        </transition>
        <transition
          appear
          enter-active-class="animated slideInLeft"
          leave-active-class="animated slideOutLeft"
          :style="{ animationDuration: '0.8s', animationDelay: '0.3s' }"
        >
          <div
            class="main-bio-item-3 bio-card floating-card"
            v-if="showElement"
          >
            <div class="text-h6 text-weight-bold section-title slide-in-text">
              Biography
            </div>
            <div
              class="text-body text-weight-regular fade-in-text"
              style="margin-top: 20px; color: #d6d6d6"
            >
              I am a dedicated software developer with expertise in optimizing
              database performance and building scalable web applications. My
              passion lies in creating innovative solutions using AI and cloud
              technologies. I excel in
              <span v-for="(skill, index) in biographySkills" :key="skill.name">
                {{
                  index > 0
                    ? index === biographySkills.length - 1
                      ? ' and '
                      : ', '
                    : ''
                }}
                <a
                  :href="skill.link"
                  target="_blank"
                  :class="['q-link', 'text-weight-bold', 'skill-link']"
                  :style="{ color: skill.color }"
                >
                  {{ skill.name }}
                </a>
              </span>
            </div>
          </div>
        </transition>
        <transition
          appear
          enter-active-class="animated fadeInRight"
          leave-active-class="animated fadeOut"
          :style="{ animationDuration: '0.8s', animationDelay: '0.4s' }"
        >
          <div
            class="main-bio-item-4 social-card floating-card"
            v-if="showElement"
          >
            <div
              class="text-h6 text-weight-bold lets-connect section-title bounce-in-text"
            >
              Let's Connect
            </div>
            <div class="social-links">
              <a
                href="https://www.linkedin.com/in/annas-ismail-muhammad/"
                target="_blank"
                class="social-icon social-icon-animated"
              >
                <Icon icon="skill-icons:linkedin" height="35px" />
                <q-tooltip
                  transition-show="scale"
                  transition-hide="scale"
                  class="glass-tooltip"
                >
                  <span :style="styleFontTooltip"> My LinkedIn </span>
                </q-tooltip>
              </a>
              <a
                href="https://github.com/AnnasIsmail"
                target="_blank"
                class="social-icon social-icon-animated"
              >
                <Icon icon="uiw:github" height="35px" color="#cdd9e5" />
                <q-tooltip
                  transition-show="scale"
                  transition-hide="scale"
                  class="glass-tooltip"
                >
                  <span :style="styleFontTooltip"> My Github </span>
                </q-tooltip>
              </a>
              <a
                href="https://www.instagram.com/annas_i_m/"
                target="_blank"
                class="social-icon social-icon-animated"
              >
                <Icon icon="skill-icons:instagram" height="35px" />
                <q-tooltip
                  transition-show="scale"
                  transition-hide="scale"
                  class="glass-tooltip"
                >
                  <span :style="styleFontTooltip"> My Instagram </span>
                </q-tooltip>
              </a>
            </div>
          </div>
        </transition>
      </div>
    </q-intersection>
    <q-intersection style="min-height: 400px" class="second-bio-intersection">
      <transition
        appear
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOut"
        :style="{ animationDuration: '0.8s', animationDelay: '0.5s' }"
      >
        <div class="technology wave-animation" v-if="showElement">
          <div class="what-i-do-section slide-in-section">
            <div class="text-h6 text-weight-bold section-title typewriter-text">
              What I do
            </div>
            <div
              class="text-body text-weight-regular fade-in-paragraph"
              style="margin-top: 20px; color: #d6d6d6"
            >
              I am a full-stack developer specializing in enterprise web
              applications. Currently working as a Programmer at Bina Nusantara,
              I develop and maintain critical internal systems including Online
              Exam platforms, Scheduling systems, Student Career Monitoring, and
              Event Management solutions using ASP.NET, React.js, Azure, and
              cutting-edge cloud technologies.
            </div>
          </div>
          <div>
            <div class="glass-card tech-search-card">
              <q-card-section class="search-section">
                <q-input
                  filled
                  v-model="search"
                  label="Search"
                  placeholder="React"
                  @update:model-value="searchTechnologies"
                />
                <q-select
                  clearable
                  filled
                  v-model="filter"
                  :options="filterType"
                  label="Filter"
                  style="width: 100%"
                  @update:model-value="filterTechnologies"
                />
              </q-card-section>
              <q-card-section
                style="
                  display: flex;
                  flex-direction: row;
                  flex-wrap: wrap;
                  gap: 10px;
                  justify-content: center;
                "
              >
                <chip-technology
                  v-for="tech in TechWID"
                  :key="tech.name"
                  :Skill="tech"
                />
              </q-card-section>
              <q-card-section style="padding-top: 0">
                <div class="text-body" style="color: #b0b1b7">
                  {{ TechWID.length }} Result
                </div>
              </q-card-section>
            </div>
          </div>
        </div>
      </transition>
    </q-intersection>
    <q-intersection
      style="min-height: 500px"
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
          <div
            class="text-h5 text-weight-bold q-pb-lg section-title projects-title"
          >
            Projects
          </div>
          <div class="flex q-mb-md" style="gap: 20px">
            <projects-card
              v-for="data in dataProjects.slice(0, 3)"
              :key="data.name"
              :Project="data"
            />
          </div>
          <div style="width: 100%; display: flex; justify-content: center">
            <q-btn
              class="btn-primary see-more-btn"
              @click="movePage('/projects', this)"
              unelevated
            >
              <Icon icon="uiw:more" height="28px" />
              <div class="text-caption q-pl-sm btn-text">See More</div>
            </q-btn>
          </div>
        </div>
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
      styleFontTooltip:
        'background-image: linear-gradient(to bottom right,rgba(59, 246, 134, 1) 40%,rgba(76, 169, 255, 1) 60%);background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;',
      search: '',
      filter: '',
      showElement: false,
    };
  },
  mounted() {
    this.showElement = true;
    document.getElementById('notification')?.click();
  },
  unmounted() {
    this.showElement = false;
  },
  computed: {
    searchedTechnologies(): Skill[] {
      return this.TechWID.filter((tech) =>
        tech.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    filteredTechnologies(): Skill[] {
      return this.TechWID.filter(
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
      this.TechWID = this.searchedTechnologies;
    },
    filterTechnologies() {
      this.TechWID = this.TechWIDOrigin;
      if (this.search) this.TechWID = this.searchedTechnologies;
      if (!this.filter) return;
      this.TechWID = this.filteredTechnologies;
    },
  },
  setup() {
    const biographySkills = [
      {
        name: 'ASP.NET',
        color: '#512BD4',
        link: 'https://dotnet.microsoft.com/apps/aspnet',
      },
      {
        name: 'React.js',
        color: '#3b82f6',
        link: 'https://react.dev/',
      },
      {
        name: 'Vue.js',
        color: '#41b883',
        link: 'https://vuejs.org/',
      },
      {
        name: 'Azure',
        color: '#0089D6',
        link: 'https://azure.microsoft.com/',
      },
    ];
    const TechWIDOrigin = Skills as Skill[];
    const filterType = ['Language', 'Framework', 'Library', 'Database', 'Tool'];
    const dataProjects = Projects as Project[];
    return {
      biographySkills,
      TechWIDOrigin,
      TechWID: ref(TechWIDOrigin),
      filterType,
      dataProjects,
    };
  },
});
</script>

<style scoped>
/* Hero text styling */
.hero-text {
  margin: 70px 0;
  padding-bottom: 6px;
  grid-column: 1 / span 3;
  line-height: 1.3;
  animation: fadeInUp 1.2s ease-out;
}

/* Profile image styling */
.profile-image-container {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background: linear-gradient(
    135deg,
    rgba(59, 246, 134, 1) 0%,
    rgba(76, 169, 255, 1) 100%
  );
  padding: 4px;
  grid-row: 2;
  grid-column: 1;
  position: relative;
  animation: pulse-glow 3s ease-in-out infinite;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image-container:hover {
  transform: scale(1.05) rotate(5deg);
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  background-color: #1a1a2e;
  border: 3px solid #1a1a2e;
  display: block;
}

/* Bio and social cards */
.bio-card,
.social-card {
  grid-row: 2;
  margin-top: 20px;
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bio-card:hover,
.social-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(59, 246, 134, 0.3);
  transform: translateY(-5px);
}

.bio-card {
  grid-column: 2;
}

.social-card {
  grid-column: 3;
}

/* Section titles */
.section-title {
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(
    90deg,
    rgba(59, 246, 134, 1),
    rgba(76, 169, 255, 1)
  );
  border-radius: 2px;
}

/* Social links */
.social-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.social-icon::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(59, 246, 134, 0.2);
  transition: all 0.5s ease;
  transform: translate(-50%, -50%);
}

.social-icon:hover::before {
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.social-icon:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 10px 25px rgba(59, 246, 134, 0.3);
}

/* Technology section */
.technology {
  margin: 70px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.what-i-do-section {
  padding: 20px;
}

.tech-search-card {
  border-radius: 20px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.08) !important;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.search-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

/* Projects section */
.projects-title {
  text-align: left;
  position: relative;
  padding-left: 20px;
}

.projects-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 70%;
  background: linear-gradient(
    180deg,
    rgba(59, 246, 134, 1),
    rgba(76, 169, 255, 1)
  );
  border-radius: 3px;
}

/* Button styling */
.see-more-btn {
  background: linear-gradient(
    135deg,
    rgba(59, 246, 134, 0.2) 0%,
    rgba(76, 169, 255, 0.2) 100%
  );
  border: 1px solid rgba(59, 246, 134, 0.3);
  padding: 12px 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.see-more-btn:hover {
  background: linear-gradient(
    135deg,
    rgba(59, 246, 134, 0.3) 0%,
    rgba(76, 169, 255, 0.3) 100%
  );
  border-color: rgba(59, 246, 134, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 246, 134, 0.3);
}

.btn-text {
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 500;
}

/* Glass tooltip */
.glass-tooltip {
  background: rgba(50, 52, 67, 0.95) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Responsive styles */
@media (max-width: 850px) {
  .main-bio {
    grid-template-columns: 180px 50% auto !important;
  }
  .main-bio-intersection {
    min-height: 560px !important;
  }
  .second-bio-intersection {
    min-height: 450px !important;
  }
  .profile-image-container {
    width: 180px;
    height: 180px;
  }
}

@media (max-width: 750px) {
  .main-bio {
    grid-template-columns: 180px 40% auto !important;
  }
  .main-bio-intersection {
    min-height: 670px !important;
  }
  .profile-image-container {
    width: 160px;
    height: 160px;
  }
}

@media (max-width: 650px) {
  .main-bio {
    grid-template-columns: 1fr 1fr !important;
  }
  .bio-card {
    grid-row: 3 !important;
    grid-column: 1 / span 2 !important;
  }
  .social-card {
    grid-column: 2 !important;
  }
  .main-bio-item-1 {
    font-size: 36px;
  }
  .technology {
    grid-template-columns: 1fr !important;
    gap: 20px;
  }
  .main-bio-intersection {
    min-height: 750px !important;
  }
  .second-bio-intersection {
    min-height: 530px !important;
  }
}

@media (max-width: 500px) {
  .main-bio {
    grid-template-columns: 1fr !important;
  }
  .profile-image-container {
    grid-row: 1 !important;
    grid-column: 1 / span 3 !important;
    margin: auto !important;
    margin-top: 20px !important;
  }
  .profile-image-container {
    width: 150px;
    height: 150px;
  }
  .lets-connect {
    display: none;
  }
  .social-card {
    grid-row: 2 !important;
    grid-column: 1 / span 3 !important;
    margin: auto !important;
    width: 100%;
  }
  .bio-card {
    grid-row: 4 !important;
    grid-column: 1 / span 2 !important;
    text-align: center;
  }
  .hero-text {
    grid-row: 3 !important;
    grid-column: 1 / span 2 !important;
    text-align: center;
    font-size: 32px;
    margin: 20px 0 !important;
  }
  .main-bio-intersection {
    min-height: 890px !important;
  }
  .second-bio-intersection {
    min-height: 630px !important;
  }
  .social-links {
    justify-content: center;
  }
}

/* Enhanced Animations */
.floating-text {
  animation: gentle-float 8s ease-in-out infinite;
}

.typing-animation {
  animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
  border-right: 2px solid #3bf686;
  white-space: nowrap;
  overflow: hidden;
}

.pulse-image {
  animation: gentle-pulse 6s ease-in-out infinite;
  position: relative;
}

.rotating-image {
  transition: transform 0.3s ease;
}

.rotating-image:hover {
  transform: scale(1.05);
}

.image-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(45deg, #3bf686, #4ca9ff);
  border-radius: 50%;
  opacity: 0;
  animation: gentle-glow 4s ease-in-out infinite;
  z-index: -1;
}

.floating-card {
  animation: gentle-float-card 10s ease-in-out infinite;
}

.slide-in-text {
  animation: slideInFromLeft 1s ease-out;
}

.fade-in-text {
  animation: fadeInUp 1.5s ease-out 0.5s both;
}

.skill-link {
  transition: all 0.3s ease;
  position: relative;
}

.skill-link:hover {
  transform: translateY(-2px);
  text-shadow: 0 0 10px currentColor;
}

.bounce-in-text {
  animation: gentle-bounce 1.2s ease-out;
}

.social-icon-animated {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.social-icon-animated:hover {
  transform: translateY(-3px) scale(1.05);
  filter: drop-shadow(0 8px 16px rgba(59, 246, 134, 0.2));
}

.social-icon-animated::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(
    circle,
    rgba(59, 246, 134, 0.3) 0%,
    transparent 70%
  );
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  z-index: -1;
}

.social-icon-animated:hover::before {
  width: 50px;
  height: 50px;
}

.wave-animation {
  animation: gentle-wave 12s ease-in-out infinite;
}

.slide-in-section {
  animation: slideInFromBottom 1.5s ease-out;
}

.typewriter-text {
  animation: typewriter 2s steps(20, end) 0.5s both;
  border-right: 2px solid #3bf686;
  white-space: nowrap;
  overflow: hidden;
}

.fade-in-paragraph {
  animation: fadeInUp 2s ease-out 1s both;
}

/* Keyframe Animations */
@keyframes gentle-float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-3px);
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #3bf686;
  }
}

@keyframes gentle-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes gentle-glow {
  0%,
  100% {
    opacity: 0;
    transform: scale(0.9);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.05);
  }
}

@keyframes gentle-float-card {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-2px) rotate(0deg);
  }
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes gentle-bounce {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes gentle-wave {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-2px);
  }
}

@keyframes slideInFromBottom {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
